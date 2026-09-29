import Modal from './Modal.js';
import getUpdateData from '../getUpdateData.js';

export default class SettingsModal extends Modal {
    #urlControl;
    #urlInput;
    #urlErrorIcon;
    #predlcheckbox;
    #saveButton;
    #urlFailBox;
    #urlFailText;
    #saveHandler;
    #enterHandler;

    constructor(modalElement) {
        super(modalElement);

        if (!this.modal) {
            console.error('SettingsModal: Modal element is undefined');
            return;
        }

        this.#urlControl = this.modal.querySelector('.urlcontrol');
        this.#urlInput = this.modal.querySelector('.urlinput');
        this.#urlErrorIcon = this.modal.querySelector('.urlerroricon');
        this.#predlcheckbox = this.modal.querySelector('.predlcheckbox');
        this.#saveButton = this.modal.querySelector('.savebutton');
        this.#urlFailBox = this.modal.querySelector('.urlfailbox');
        this.#urlFailText = this.modal.querySelector('.urlfailtext');

        if (!this.#urlControl) console.error('urlcontrol not found');
        if (!this.#urlInput) console.error('urlinput not found');
        if (!this.#urlErrorIcon) console.error('urlerroricon not found');
        if (!this.#predlcheckbox) console.error('predlcheckbox not found');
        if (!this.#saveButton) console.error('savebutton not found');
        if (!this.#urlFailBox) console.error('urlfailbox not found');
        if (!this.#urlFailText) console.error('urlfailtext not found');

        this.#saveHandler = async () => await this.#saveButtonClicked();
        this.#enterHandler = () => this.#saveOnEnter();

        if (this.#saveButton) {
            this.#saveButton.addEventListener('click', this.#saveHandler);
        }
    }

    show(closeable, errorInfo = undefined) {
        if (this.#predlcheckbox) {
            this.#predlcheckbox.checked = JSON.parse(localStorage.getItem('predl')) ?? true;
        }
        if (this.#urlInput) {
            this.#urlInput.value = localStorage.getItem('url') || '';
        }

        if (errorInfo) this.#setErrorState(true, errorInfo);

        super.show(closeable);

        if (this.#urlInput) {
            if (this.#urlInput.value) this.#urlInput.select();
            this.#urlInput.focus();
        }

        document.addEventListener('keydown', this.#enterHandler);
    }

    hide() {
        super.hide();
        document.removeEventListener('keydown', this.#enterHandler);
        this.#setErrorState(false);
    }

    #setLoadingState(isLoading) {
        if (this.#urlInput && this.#saveButton) {
            isLoading ? document.removeEventListener('keydown', this.#enterHandler) : document.addEventListener('keydown', this.#enterHandler);
            this.#urlInput.disabled = isLoading;
            isLoading ? this.#saveButton.classList.add('is-loading') : this.#saveButton.classList.remove('is-loading');
        }
    }

    #setErrorState(isError, errorInfo) {
        if (this.#urlInput && this.#urlControl && this.#urlErrorIcon && this.#urlFailBox && this.#urlFailText) {
            if (isError) {
                this.#urlInput.classList.add('is-danger');
                this.#urlControl.classList.add('has-icons-right');
                this.#urlErrorIcon.classList.remove('is-hidden');
                errorInfo ? this.#urlFailText.replaceChildren(document.createTextNode(errorInfo)) : this.#urlFailText.replaceChildren();
                this.#urlFailBox.classList.remove('is-hidden');
            } else {
                this.#urlFailBox.classList.add('is-hidden');
                this.#urlErrorIcon.classList.add('is-hidden');
                this.#urlControl.classList.remove('has-icons-right');
                this.#urlInput.classList.remove('is-danger');
            }
        }
    }

    async #saveButtonClicked() {
        if (!this.#urlInput || !this.#saveButton) return;

        this.#setLoadingState(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const updateData = await getUpdateData(this.#urlInput.value);

        if (updateData.success) {
            localStorage.setItem('predl', this.#predlcheckbox.checked);
            localStorage.setItem('url', this.#urlInput.value);
            location.reload();
        } else {
            this.#setLoadingState(false);
            this.#setErrorState(true, updateData.data);

            if (this.#urlInput.value) this.#urlInput.select();
            this.#urlInput.focus();
        }
    }

    #saveOnEnter(event) {
        const e = event || window.event;
        if (e.keyCode === 13) this.#saveButtonClicked();
    }
}