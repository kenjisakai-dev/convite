const inputFile = document.querySelector(".file-wrapper input[type='file']");
const labelFile = document.querySelector(".file-wrapper > span");

inputFile.addEventListener("change", function () {
  if (inputFile.files.length === 1) {
    labelFile.style.color = "var(--text-body)";

    labelFile.textContent =
      inputFile?.files[0]?.name ?? "Nenhum arquivo selecionado";
  }
});
