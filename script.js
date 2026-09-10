```javascript
// ==========================================
// RAJNISH STUDY WORKSHEET
// GRADE + SUBJECT + MCQ SYSTEM
// ==========================================


// ==========================================
// WORKSHEET DATA
// ==========================================

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

    // ⭐ STANDARD 1 ENVIRONMENT

    {
        id: 12,
        grade: "1",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        icon: "🌱",
        description: "ધોરણ 1 પર્યાવરણ — 10 MCQ",
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


// ==========================================
// MCQ QUESTIONS
// ==========================================

const worksheetQuestions = {

    // ======================================
    // STANDARD 1 ENVIRONMENT - WORKSHEET 01
    // ======================================

    12: [

        {
            question: "આપણે કઈ વસ્તુથી જોઈ શકીએ છીએ?",
            options: ["કાન", "આંખ", "નાક", "હાથ"],
            answer: 1
        },

        {
            question: "આપણે કઈ વસ્તુથી સાંભળી શકીએ છીએ?",
            options: ["આંખ", "કાન", "પગ", "નાક"],
            answer: 1
        },

        {
            question: "સૂર્ય આપણને શું આપે છે?",
            options: ["પ્રકાશ અને ગરમી", "પાણી", "દૂધ", "છાંયો"],
            answer: 0
        },

        {
            question: "નીચેનામાંથી કયું પ્રાણી છે?",
            options: ["વૃક્ષ", "ગાય", "પથ્થર", "પાણી"],
            answer: 1
        },

        {
            question: "છોડને વધવા માટે શું જરૂરી છે?",
            options: ["પાણી", "પથ્થર", "પેન્સિલ", "જૂતું"],
            answer: 0
        },

        {
            question: "આપણે પાણી શેના માટે પીએ છીએ?",
            options: ["તરસ છીપાવવા", "રમવા", "લખવા", "સૂવા"],
            answer: 0
        },

        {
            question: "નીચેનામાંથી કયું ફળ છે?",
            options: ["કેરી", "બટાકા", "ડુંગળી", "ગાજર"],
            answer: 0
        },

        {
            question: "આપણે દાંત સાફ કરવા માટે શું વાપરીએ છીએ?",
            options: ["ટૂથબ્રશ", "પેન્સિલ", "ચમચી", "પતંગ"],
            answer: 0
        },

        {
            question: "વરસાદ કયા ઋતુમાં વધુ પડે છે?",
            options: ["ઉનાળો", "ચોમાસું", "શિયાળો", "વસંત"],
            answer: 1
        },

        {
            question: "ઘર સાફ રાખવા માટે આપણે શું કરવું જોઈએ?",
            options: [
                "કચરો ફેંકવો",
                "કચરો કચરાપેટીમાં નાખવો",
                "પાણી ઢોળવું",
                "ગંદકી કરવી"
            ],
            answer: 1
        }

    ]

};


// ==========================================
// FILTER VARIABLES
// ==========================================

let selectedGrade = "all";
let selectedSubject = "all";


// ==========================================
// DISPLAY WORKSHEETS
// ==========================================

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


// ==========================================
// FILTER
// ==========================================

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


// ==========================================
// GRADE BUTTON
// ==========================================

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


// ==========================================
// SUBJECT BUTTON
// ==========================================

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


    // Create worksheet page

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


    // ======================================
    // CHECK WHETHER QUESTIONS EXIST
    // ======================================

    const questions =
        worksheetQuestions[id];


    // ======================================
    // IF MCQ QUESTIONS EXIST
    // ======================================

    if (questions) {

        let questionHTML = "";

        questions.forEach(function (item, index) {

            let optionsHTML = "";

            item.options.forEach(function (option, optionIndex) {

                optionsHTML += `

                    <label class="mcq-option">

                        <input
                            type="radio"
                            name="question${index}"
                            value="${optionIndex}">

                        <span>
                            ${option}
                        </span>

                    </label>

                `;

            });


            questionHTML += `

                <div class="mcq-question">

                    <h3>
                        ${index + 1}. ${item.question}
                    </h3>

                    <div class="mcq-options">
                        ${optionsHTML}
                    </div>

                </div>

            `;

        });


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
                        placeholder="વિદ્યાર્થીનું નામ લખો">

                </div>


                <div class="question-area">

                    <h2>
                        📝 10 MCQ પ્રશ્નો
                    </h2>

                    ${questionHTML}

                </div>


                <button
                    class="submit-btn"
                    onclick="submitWorksheet(${worksheet.id})">

                    ✅ Worksheet Submit કરો

                </button>

            </div>

        `;

    }

    // ======================================
    // OTHER WORKSHEETS
    // ======================================

    else {

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
                        placeholder="વિદ્યાર્થીનું નામ લખો">

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
                            પ્રશ્નો ટૂંક સમયમાં ઉમેરવામાં આવશે
                        </h3>

                        <p>
                            આ Worksheet માટેના પ્રશ્નો
                            હજુ ઉમેરવાના બાકી છે.
                        </p>

                    </div>

                </div>


                <button
                    class="submit-btn"
                    onclick="submitWorksheet(${worksheet.id})">

                    ✅ Worksheet Submit કરો

                </button>

            </div>

        `;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// SUBJECT NAME
// ==========================================

function getSubjectName(subject) {

    const subjects = {

        gujarati: "ગુજરાતી",

        english: "English",

        math: "ગણિત",

        environment: "પર્યાવરણ"

    };

    return subjects[subject] || subject;

}


// ==========================================
// BACK BUTTON
// ==========================================

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


// ==========================================
// SUBMIT WORKSHEET
// ==========================================

function submitWorksheet(id) {

    const nameInput =
        document.getElementById("studentName");


    if (!nameInput ||
        nameInput.value.trim() === "") {

        alert(
            "કૃપા કરીને પહેલા વિદ્યાર્થીનું નામ લખો."
        );

        return;

    }


    const questions =
        worksheetQuestions[id];


    // If this worksheet has no MCQ

    if (!questions) {

        alert(
            "✅ Worksheet Submit થઈ ગઈ!\n\n" +
            "વિદ્યાર્થી: " +
            nameInput.value.trim()
        );

        return;

    }


    // ======================================
    // CHECK ANSWERS
    // ======================================

    let score = 0;

    let unanswered = 0;


    questions.forEach(function (item, index) {

        const selected =
            document.querySelector(
                `input[name="question${index}"]:checked`
            );


        if (!selected) {

            unanswered++;

            return;

        }


        if (
            Number(selected.value) ===
            item.answer
        ) {

            score++;

        }

    });


    // ======================================
    // REQUIRE ALL QUESTIONS
    // ======================================

    if (unanswered > 0) {

        alert(
            "⚠️ કૃપા કરીને બધા 10 પ્રશ્નોના જવાબ આપો.\n\n" +
            "બાકી પ્રશ્નો: " +
            unanswered
        );

        return;

    }


    // ======================================
    // RESULT
    // ======================================

    let message = "";

    if (score === 10) {

        message =
            "🏆 ખૂબ જ સરસ!\n" +
            "બધા જવાબ સાચા છે!";

    }

    else if (score >= 7) {

        message =
            "👏 ખૂબ સારું પરિણામ!";

    }

    else if (score >= 5) {

        message =
            "👍 સારું પ્રયત્ન!";

    }

    else {

        message =
            "💪 વધુ પ્રેક્ટિસ કરો, તમે જરૂર સફળ થશો!";

    }


    // Show result page

    const worksheetPage =
        document.getElementById("worksheetPage");


    worksheetPage.innerHTML = `

        <div class="worksheet-page result-page">

            <div class="result-icon">
                🏆
            </div>

            <h1>
                Worksheet પૂર્ણ!
            </h1>

            <h2>
                👦 ${nameInput.value.trim()}
            </h2>

            <div class="score-box">

                <div class="score">
                    ${score} / ${questions.length}
                </div>

                <p>
                    તમારો સ્કોર
                </p>

            </div>

            <h3>
                ${message}
            </h3>

            <button
                class="back-btn"
                onclick="backToWorksheets()">

                ← ફરી Worksheets પર જાઓ

            </button>

        </div>

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// SCROLL
// ==========================================

function scrollToWorksheets() {

    const section =
        document.getElementById("worksheets");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayWorksheets(worksheets);

    }
);
```
