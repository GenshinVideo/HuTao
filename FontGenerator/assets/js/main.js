function render() {
  const text = document.getElementById("textInput").value;
  const fontName = document.getElementById("fontSelect").value;
  const output = document.getElementById("output");

  output.innerHTML = "";

  const lines = text.split("\n");
  for (let line of lines) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "line";

    for (let char of line) {

      // スペース
      if (char === " ") {
        const space = document.createElement("span");
        space.className = "space";
        lineDiv.appendChild(space);
        continue;
      }

      // 英字 or 数字のみ
      if (!/[a-zA-Z0-9]/.test(char)) continue;

      let prefix;

      if (/[A-Z]/.test(char)) {
        prefix = "U";
      } else if (/[a-z]/.test(char)) {
        prefix = "L";
      } else if (/[0-9]/.test(char)) {
        prefix = "N";
      }

      const fileName = `assets/img/${fontName}/${fontName}_${prefix}_${char}.png`;

      const img = document.createElement("img");
      img.src = fileName;
      img.className = "char";

      if (/[a-z]/.test(char)) {
        img.style.height = "60px";
      }

      lineDiv.appendChild(img);
    }
    output.appendChild(lineDiv);
  }
}

const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
  textInput.value = textInput.value.replace(/[^a-zA-Z0-9\n ]/g, "");
  render();
});
document.getElementById("fontSelect").addEventListener("change", render);
window.addEventListener("DOMContentLoaded", render);

document.getElementById("saveBtn").addEventListener("click", async () => {
  const output = document.getElementById("output");
  const canvas = await html2canvas(output, {
    backgroundColor: null, 
    scale: 2
  });
  const padding = 40;
  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = canvas.width + padding * 2;
  finalCanvas.height = canvas.height + padding * 2;
  const ctx = finalCanvas.getContext("2d");
  ctx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
  ctx.drawImage(canvas, padding, padding);
  const link = document.createElement("a");
  link.download = "output.png";
  link.href = finalCanvas.toDataURL("image/png");
  link.click();
});