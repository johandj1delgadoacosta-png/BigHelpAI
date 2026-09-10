const ideaInput = document.getElementById("ideaInput");
const characterCount = document.getElementById("characterCount");

const exampleButton = document.getElementById("exampleButton");
const clearButton = document.getElementById("clearButton");
const createButton = document.getElementById("createButton");

const creationMode = document.getElementById("creationMode");
const visualStyle = document.getElementById("visualStyle");
const detailLevel = document.getElementById("detailLevel");

const descriptionResult = document.getElementById("descriptionResult");

const exampleText = `Standing 45 feet tall and 25 feet wide, this colossal toy canister is covered in an almost completely black surface. Razor-sharp glowing green and purple crystalline veins cross the shell. A huge jeweled collar surrounds the upper neck, while transparent pipes carry glowing fluids around the structure. Through transparent sections, a gigantic mountain of colorful modeling compound can be seen inside. At the exact center is a brilliant fusion reactor surrounded by glowing light pipes.`;

function updateCharacterCount() {
    const count = ideaInput.value.length;

    characterCount.textContent =
        `${count.toLocaleString()} character${count === 1 ? "" : "s"}`;
}

function escapeHTML(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function createProjectSummary() {
    const description = ideaInput.value.trim();

    const mode =
        creationMode.options[creationMode.selectedIndex].text;

    const style =
        visualStyle.options[visualStyle.selectedIndex].text;

    const detail =
        detailLevel.options[detailLevel.selectedIndex].text;

    if (!description) {
        descriptionResult.innerHTML = `
            <div class="result-placeholder">

                <div class="placeholder-icon">
                    !
                </div>

                <p>
                    Paste a description before creating a project.
                </p>

            </div>
        `;

        return;
    }

    descriptionResult.innerHTML = `
        <div class="project-summary">

            <div class="summary-badge">
                PROJECT CREATED
            </div>

            <h3>
                BigHelpAI Project
            </h3>

            <div class="summary-info">

                <div class="summary-row">
                    <span>Characters</span>
                    <strong>
                        ${description.length.toLocaleString()}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Creation mode</span>
                    <strong>
                        ${escapeHTML(mode)}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Visual style</span>
                    <strong>
                        ${escapeHTML(style)}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Detail level</span>
                    <strong>
                        ${escapeHTML(detail)}
                    </strong>
                </div>

            </div>

            <div class="summary-description">

                <div class="summary-title">
                    DESCRIPTION
                </div>

                <p>
                    ${escapeHTML(description)}
                </p>

            </div>

            <div class="summary-message">

                <span>✦</span>

                <p>
                    Project created successfully.
                    Advanced image and 3D generation will be connected later.
                </p>

            </div>

        </div>
    `;
}

exampleButton.addEventListener("click", function () {
    ideaInput.value = exampleText;

    updateCharacterCount();

    ideaInput.focus();
});

clearButton.addEventListener("click", function () {
    ideaInput.value = "";

    updateCharacterCount();

    descriptionResult.innerHTML = `
        <div class="result-placeholder">

            <div class="placeholder-icon">
                ◈
            </div>

            <p>
                Your project information will appear here.
            </p>

        </div>
    `;

    ideaInput.focus();
});

createButton.addEventListener("click", function () {
    createProjectSummary();

    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
});

ideaInput.addEventListener(
    "input",
    updateCharacterCount
);

updateCharacterCount();
