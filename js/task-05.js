const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim();
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});
