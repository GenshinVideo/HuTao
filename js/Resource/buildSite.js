function $(id) {
    return document.getElementById(id);
}

const voiceLanguages = {
    'zh-cn': 'Chinese',
    'en-us': 'English',
    'ja-jp': 'Japanese',
    'ko-kr': 'Korean'
};

function translateVoiceLanguage(language) {
    return language in voiceLanguages ? voiceLanguages[language] : language;
}

function buildDownloadButton(updatePath, highlighted = false, label = 'Download') {
    const downloadIcon = document.createElement('i');
    downloadIcon.classList.add('fas', 'fa-download');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.appendChild(downloadIcon);

    const buttonTextStrong = document.createElement('strong');
    buttonTextStrong.appendChild(document.createTextNode(label));

    const downloadButton = document.createElement('a');
    downloadButton.href = updatePath;
    downloadButton.classList.add('button', 'is-success');
    if (!highlighted) downloadButton.classList.add('is-outlined');
    downloadButton.appendChild(iconSpan);
    downloadButton.appendChild(buttonTextStrong);

    return downloadButton;
}

function buildHashText(hash, prefix = 'MD5: ', margin = 0) {
    const hashParagraph = document.createElement('p');
    hashParagraph.classList.add(`mt-${margin}`, 'is-family-monospace');
    hashParagraph.appendChild(document.createTextNode(`${prefix}${hash}`));

    return hashParagraph;
}

function buildSegmentedDownload(segmentData) {
    const segmentList = document.createElement('ul');
    segmentList.classList.add('segment-list');

    segmentData.forEach((segment, index) => {
        const url = typeof segment === 'string' ? segment : segment.url;
        const md5 = typeof segment === 'object' && segment.md5 ? segment.md5 : 'Unknown MD5';
        if (!url) {
            console.error(`Segment ${index + 1} is missing a valid URL.`);
            return;
        }

        const fileName = url.split('/').pop();
        const listItem = document.createElement('li');
        listItem.classList.add('segment-item');
        const segmentButton = buildDownloadButton(url, false, fileName);
        const md5Span = document.createElement('span');
        md5Span.classList.add('md5-text');
        md5Span.textContent = `MD5: ${md5}`;
        listItem.appendChild(segmentButton);
        listItem.appendChild(md5Span);
        segmentList.appendChild(listItem);
    });

    return segmentList;
}




function buildBox(update, title, prefix) {
    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('title', 'is-4');
    titleParagraph.appendChild(document.createTextNode(title));

    const thisBox = document.createElement('div');
    thisBox.classList.add('box');
    thisBox.appendChild(titleParagraph);

    if (prefix == "Get full ") {
        thisBox.appendChild(buildSegmentedDownload(update.game_pkgs));
    } else if (update.game_pkgs) {
        thisBox.appendChild(buildDownloadButton(update.game_pkgs[0].url, true));
        thisBox.appendChild(buildHashText(update.game_pkgs[0].md5, undefined, 3));
    } else {
        const noPathMessage = document.createElement('p');
        noPathMessage.classList.add('has-text-danger');
        noPathMessage.appendChild(document.createTextNode('No valid download url found.'));
        thisBox.appendChild(noPathMessage);
    }


    if (update.audio_pkgs?.length) {
        const dividerHorizontalRule = document.createElement('hr');
        dividerHorizontalRule.classList.add('divider');
        thisBox.appendChild(dividerHorizontalRule);

        const voiceFilesParagraph = document.createElement('p');
        voiceFilesParagraph.classList.add('subtitle', 'mb-3');
        voiceFilesParagraph.appendChild(document.createTextNode('Voice-over files'));
        thisBox.appendChild(voiceFilesParagraph);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons', 'has-addons');
        thisBox.appendChild(buttonsDiv);

        for (const voice_pack of update.audio_pkgs) {
            buttonsDiv.appendChild(buildDownloadButton(voice_pack.url, false, translateVoiceLanguage(voice_pack.language)));
            thisBox.appendChild(buildHashText(voice_pack.md5, `${translateVoiceLanguage(voice_pack.language)}: `, 0));
        }
    }

    const thisColumn = document.createElement('div');
    thisColumn.classList.add('column', 'is-full', 'is-half-widescreen');
    thisColumn.appendChild(thisBox);

    return thisColumn;
}

function buildBoxes(updates, container, prefix = '', startFrom = 0, showVersion = true) {
    if (updates) {
        if (Array.isArray(updates)) {
            for (let i = startFrom; i < updates.length; i++) {
                container.appendChild(
                    buildBox(
                        updates[i], 
                        `${prefix}${showVersion && updates[i].version ? updates[i].version : ''}`,
                        prefix
                    )
                );
            }
            return true;
        } else {
            container.appendChild(
                buildBox(
                    updates, 
                    `${prefix}${showVersion && updates.version ? updates.version : ''}`,
                    prefix
                )
            );
            return true;
        }
    }
    return false;
}

export default function buildSite(updateData) {
    let gotLatestVersion = false;

    if (updateData.major?.version) {
        const versionTextNode = document.createTextNode(updateData.major.version);
        $('versiontext').appendChild(versionTextNode);
        gotLatestVersion = true;
    }

    if (updateData.patches?.[0]) {
        $('lastversiontext').appendChild(document.createTextNode(updateData.patches[0].version));
    } else {
        $('lastversiontext').appendChild(document.createTextNode('the last version'));
    }

    const gotLatestDiff = buildBoxes(
        updateData.patches?.[0],
        $('recboxes'),
        `Update to ${updateData.major?.version ? updateData.major.version : 'the major version'}`,
        undefined,
        false
    );

    const gotFull = buildBoxes(updateData.major, $('recboxes'), 'Get full ');
    const gotOlderDiffs = buildBoxes(updateData.patches, $('oldboxes'), 'From ', 1);

    if (gotLatestVersion) $('versionbox').classList.remove('is-hidden');
    if (gotLatestDiff || gotFull) $('reccolumn').classList.remove('is-hidden');
    if (gotOlderDiffs) $('oldcolumn').classList.remove('is-hidden');
    $('progressbar').classList.add('is-hidden');
    if (gotLatestDiff || gotFull || gotOlderDiffs) $('maincolumn').classList.remove('is-hidden');
}
