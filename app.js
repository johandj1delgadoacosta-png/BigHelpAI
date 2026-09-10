const ideaInput = document.getElementById("ideaInput");
const characterCount = document.getElementById("characterCount");
const exampleButton = document.getElementById("exampleButton");
const clearButton = document.getElementById("clearButton");
const createButton = document.getElementById("createButton");

const exampleText = `Standing 45 feet tall and 25 feet wide, this colossal toy canister is covered in an almost completely black surface. Razor-sharp glowing green and purple crystalline veins cross the shell. A huge jeweled collar surrounds the upper neck, while transparent pipes carry glowing fluids around the structure. Through transparent sections, a gigantic mountain of colorful modeling compound can be seen inside. At the exact center is a brilliant fusion reactor surrounded by glowing light pipes.`;

function updateCharacterCount() {
    const count = ideaInput.value.length;

    characterCount.textContent =
        `${count.toLocaleString()} character${count === 1 ? "" : "s"}`;
}

exampleButton.addEventListener("click", function () {
    ideaInput.value = exampleText;
    updateCharacterCount();
    ideaInput.focus();
});

clearButton.addEventListener("click", function () {
    ideaInput.value = "";
    updateCharacterCount();
    ideaInput.focus();
});

createButton.addEventListener("click", function () {
    if (ideaInput.value.trim() === "") {
        ideaInput.focus();

        alert(
            "Paste a description first. BigHelpAI will use it for the creation system."
        );

        return;
    }

    alert(
        "Your description has been received!\n\n" +
        "The image and 3D generation systems will be added in a later step."
    );
});

ideaInput.addEventListener("input", updateCharacterCount);

updateCharacterCount();
