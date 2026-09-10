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


/* =========================
   CHARACTER COUNTER
========================= */

function updateCharacterCount() {
    const count = ideaInput.value.length;

    characterCount.textContent =
        `${count.toLocaleString()} character${count === 1 ? "" : "s"}`;
}


/* =========================
   HTML SAFETY
========================= */

function escapeHTML(text) {
    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================
   CREATE PROJECT
========================= */

function createProject() {

    const description = ideaInput.value.trim();

    if (description.length === 0) {

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


    const mode =
        creationMode.options[
            creationMode.selectedIndex
        ].text;


    const style =
        visualStyle.options[
            visualStyle.selectedIndex
        ].text;


    const detail =
        detailLevel.options[
            detailLevel.selectedIndex
        ].text;


    const safeDescription =
        escapeHTML(description);


    descriptionResult.innerHTML = `

        <div class="project-summary">

            <div class="summary-top">

                <div class="summary-badge">
                    PROJECT CREATED
                </div>

                <div class="summary-icon">
                    ✓
                </div>

            </div>


            <h3 class="summary-heading">
                BigHelpAI Project
            </h3>


            <div class="summary-grid">

                <div class="summary-item">

                    <span class="summary-label">
                        CHARACTERS
                    </span>

                    <strong>
                        ${description.length.toLocaleString()}
                    </strong>

                </div>


                <div class="summary-item">

                    <span class="summary-label">
                        CREATION MODE
                    </span>

                    <strong>
                        ${escapeHTML(mode)}
                    </strong>

                </div>


                <div class="summary-item">

                    <span class="summary-label">
                        VISUAL STYLE
                    </span>

                    <strong>
                        ${escapeHTML(style)}
                    </strong>

                </div>


                <div class="summary-item">

                    <span class="summary-label">
                        DETAIL LEVEL
                    </span>

                    <strong>
                        ${escapeHTML(detail)}
                    </strong>

                </div>

            </div>


            <div class="summary-description">

                <div class="summary-label">
                    DESCRIPTION
                </div>

                <div class="description-box">
                    ${safeDescription}
                </div>

            </div>


            <div class="summary-footer">

                <span class="summary-footer-icon">
                    ✦
                </span>

                <span>
                    Project created successfully.
                </span>

            </div>

        </div>
    `;


    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =========================
   EXAMPLE
========================= */

exampleButton.addEventListener(
    "click",
    function () {

        ideaInput.value = exampleText;

        updateCharacterCount();

        ideaInput.focus();
    }
);


/* =========================
   CLEAR
========================= */

clearButton.addEventListener(
    "click",
    function () {

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
    }
);


/* =========================
   CREATE BUTTON
========================= */

createButton.addEventListener(
    "click",
    createProject
);


/* =========================
   TEXT INPUT
========================= */

ideaInput.addEventListener(
    "input",
    updateCharacterCount
);


/* =========================
   INITIALIZATION
========================= */

updateCharacterCount();
