// ==========================================
// RAJNISH STUDY WORKSHEET
// GRADE + SUBJECT + WORKSHEET SYSTEM
// ==========================================


// ------------------------------------------
// WORKSHEET DATA
// ------------------------------------------

const worksheets = [

    // ---------- STANDARD 1 ----------

    {
        id: 1,
        grade: "1",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        icon: "📖",
        description: "ધોરણ 1 ગુજરાતી પ્રેક્ટિસ",
        questions: 10,
        time: "10 મિનિટ"
    },

    {
        id: 2,
        grade: "1",
        subject: "math",
        title: "ગણિત Worksheet 01",
        icon: "🔢",
        description: "ધોરણ 1 ગણિત પ્રેક્ટિસ",
        questions: 10,
        time: "10 મિનિટ"
    },

    {
        id: 3,
        grade: "1",
        subject: "english",
        title: "English Worksheet 01",
        icon: "🔤",
        description: "ધોરણ 1 English Practice",
        questions: 10,
        time: "10 મિનિટ"
    },


    // ---------- STANDARD 2 ----------

    {
        id: 4,
        grade: "2",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        icon: "📖",
        description: "ધોરણ 2 ગુજરાતી પ્રેક્ટિસ",
        questions: 10,
        time: "10 મિનિટ"
    },

    {
        id: 5,
        grade: "2",
        subject: "math",
        title: "ગણિત Worksheet 01",
        icon: "➕",
        description: "ધોરણ 2 ગણિત પ્રેક્ટિસ",
        questions: 10,
        time: "10 મિનિટ"
    },


    // ---------- STANDARD 3 ----------

    {
        id: 6,
        grade: "3",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        icon: "📚",
        description: "ધોરણ 3 ગુજરાતી પ્રેક્ટિસ",
        questions: 10,
        time: "15 મિનિટ"
    },

    {
        id: 7,
        grade: "3",
        subject: "math",
        title: "ગણિત Worksheet 01",
        icon: "✖️",
        description: "ધોરણ 3 ગણિત પ્રેક્ટિસ",
        questions: 10,
        time: "15 મિનિટ"
    },


    // ---------- STANDARD 4 ----------

    {
        id: 8,
        grade: "4",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        icon: "✍️",
        description: "ધોરણ 4 ગુજરાતી પ્રેક્ટિસ",
        questions: 10,
        time: "15 મિનિટ"
    },

    {
        id: 9,
        grade: "4",
        subject: "math",
        title: "ગણિત Worksheet 01",
        icon: "➗",
        description: "ધોરણ 4 ગણિત પ્રેક્ટિસ",
        questions: 10,
        time: "15 મિનિટ"
    },


    // ---------- STANDARD 5 ----------

    {
        id: 10,
        grade: "5",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        icon: "📝",
        description: "ધોરણ 5 ગુજરાતી પ્રેક્ટિસ",
        questions: 10,
        time: "20 મિનિટ"
    },

    {
        id: 11,
        grade: "5",
        subject: "math",
        title: "ગણિત Worksheet 01",
        icon: "📐",
        description: "ધોરણ 5 ગણિત પ્રેક્ટિસ",
        questions: 10,
        time: "20 મિનિટ"
    }

];


// ------------------------------------------
// SELECTED FILTER
// ------------------------------------------

let selectedGrade = "all";
let selectedSubject = "all";


// ------------------------------------------
// DISPLAY WORKSHEETS
// ------------------------------------------

function displayWorksheets(list) {

    const container =
        document.getElementById("worksheetContainer");

    const noResult =
        document.getElementById("noResult");

    if (!container) {
        console.error("worksheetContainer not found");
        return;
    }

    container.innerHTML = "";


    if (list.length === 0) {

        if (noResult) {
            noResult.style.display = "block";
        }

        return;
    }


    if (noResult) {
        noResult.style.display = "none";
    }


    list.forEach(function (worksheet) {

        const card =
            document.createElement("div");

        card.className = "worksheet-card";


        card.innerHTML = `

            <div class="card-top">

                <span class="card-number">
                    Worksheet ${worksheet.id}
                </span>

                <span class="worksheet-icon">
                    ${worksheet.icon}
                </span>

            </div>


            <div class="card-body">

                <h3>
                    ${worksheet.title}
                </h3>

                <p>
                    ${worksheet.description}
                </p>


                <div class="badges">

                    <span class="badge">
                        🎓 ધોરણ ${worksheet.grade}
                    </span>

                    <span class="badge">
                        ❓ ${worksheet.questions} પ્રશ્નો
                    </span>

                    <span class="badge">
                        ⏱️ ${worksheet.time}
                    </span>

                </div>


                <button
                    class="start-btn"
                    onclick="openWorksheet(${worksheet.id})">

                    🚀 Worksheet શરૂ કરો

                </button>

            </div>
        `;


        container.appendChild(card);

    });

}


// ------------------------------------------
// FILTER WORKSHEETS
// ------------------------------------------

function filterWorksheets() {

    const searchInput =
        document.getElementById("searchInput");

    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const filtered =
        worksheets.filter(function (worksheet) {

            const gradeMatch =
                selectedGrade === "all" ||
                worksheet.grade === selectedGrade;


            const subjectMatch =
                selectedSubject === "all" ||
                worksheet.subject === selectedSubject;


            const searchMatch =
                worksheet.title
                    .toLowerCase()
                    .includes(search) ||

                worksheet.description
                    .toLowerCase()
                    .includes(search);


            return (
                gradeMatch &&
                subjectMatch &&
                searchMatch
            );

        });


    displayWorksheets(filtered);

}


// ------------------------------------------
// GRADE BUTTON
// ------------------------------------------

function setGrade(grade, button) {

    selectedGrade = grade;


    document
        .querySelectorAll(".grade-btn")
        .forEach(function (btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    filterWorksheets();

}


// ------------------------------------------
// SUBJECT BUTTON
// ------------------------------------------

function setSubject(subject, button) {

    selectedSubject = subject;


    document
        .querySelectorAll(".subject-btn")
        .forEach(function (btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    filterWorksheets();

}


// ==========================================
// OPEN WORKSHEET
// ==========================================

function openWorksheet(id) {

    const worksheet =
        worksheets.find(function (item) {

            return item.id === id;

        });


    if (!worksheet) {

        alert("Worksheet મળી નથી.");

        return;

    }


    // Hide worksheet list

    const listSection =
        document.getElementById("worksheets");

    if (listSection) {
        listSection.style.display = "none";
    }


    const container =
        document.getElementById("worksheetContainer");

    if (container) {
        container.style.display = "none";
    }


    const noResult =
        document.getElementById("noResult");

    if (noResult) {
        noResult.style.display = "none";
    }


    // Create worksheet screen

    let worksheetPage =
        document.getElementById("worksheetPage");


    if (!worksheetPage) {

        worksheetPage =
            document.createElement("section");

        worksheetPage.id =
            "worksheetPage";

        document.body.appendChild(worksheetPage);

    }


    worksheetPage.style.display = "block";


    worksheetPage.innerHTML = `

        <div class="worksheet-page">

            <button
                class="back-btn"
                onclick="backToWorksheets()">

                ← પાછા Worksheets પર

            </button>


            <div class="worksheet-header">

                <div class="worksheet-big-icon">
                    ${worksheet.icon}
                </div>

                <h1>
                    ${worksheet.title}
                </h1>

                <p>
                    🎓 ધોરણ ${worksheet.grade}
                    &nbsp; | &nbsp;
                    📚 ${getSubjectName(worksheet.subject)}
                </p>

            </div>


            <div class="student-box">

                <label>
                    👦 વિદ્યાર્થીનું નામ
                </label>

                <input
                    type="text"
                    id="studentName"
                    placeholder="વિદ્યાર્થીનું નામ લખો"
                >

            </div>


            <div class="question-area">

                <h2>
                    📝 Worksheet
                </h2>

                <div class="question-placeholder">

                    <div class="big-emoji">
                        ✏️
                    </div>

                    <h3>
                        અહીં તમારા પ્રશ્નો આવશે
                    </h3>

                    <p>
                        તમે પ્રશ્નો આપશો તે પ્રમાણે
                        આ Worksheet તૈયાર કરવામાં આવશે.
                    </p>

                </div>

            </div>


            <button
                class="submit-btn"
                onclick="submitWorksheet()">

                ✅ Submit Worksheet

            </button>

        </div>

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ------------------------------------------
// SUBJECT NAME
// ------------------------------------------

function getSubjectName(subject) {

    const subjects = {

        gujarati: "ગુજરાતી",

        english: "English",

        math: "ગણિત",

        environment: "પર્યાવરણ"

    };


    return subjects[subject] || subject;

}


// ------------------------------------------
// BACK BUTTON
// ------------------------------------------

function backToWorksheets() {

    const worksheetPage =
        document.getElementById("worksheetPage");

    if (worksheetPage) {
        worksheetPage.style.display = "none";
    }


    const listSection =
        document.getElementById("worksheets");

    if (listSection) {
        listSection.style.display = "block";
    }


    const container =
        document.getElementById("worksheetContainer");

    if (container) {
        container.style.display = "grid";
    }


    filterWorksheets();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ------------------------------------------
// SUBMIT
// ------------------------------------------

function submitWorksheet() {

    const name =
        document.getElementById("studentName");


    if (!name || name.value.trim() === "") {

        alert(
            "કૃપા કરીને પહેલા વિદ્યાર્થીનું નામ લખો."
        );

        return;

    }


    alert(
        "✅ Worksheet Submit થઈ ગઈ!\n\n" +
        "વિદ્યાર્થી: " +
        name.value.trim()
    );

}


// ------------------------------------------
// SCROLL
// ------------------------------------------

function scrollToWorksheets() {

    const section =
        document.getElementById("worksheets");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ------------------------------------------
// START
// ------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayWorksheets(worksheets);

    }
);
