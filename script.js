```javascript
/* =====================================================
   RAJNISH STUDY WORKSHEET
   WORKSHEET DATA + FILTER SYSTEM
===================================================== */


/* ================= WORKSHEET DATA ================= */

const worksheets = [

    {
        id: 1,
        title: "સ્વર ઓળખો",
        grade: "1",
        subject: "gujarati",
        icon: "🔤",
        bg: "bg-purple",
        questions: 10,
        time: "10 મિનિટ",
        description: "ગુજરાતી સ્વરો ઓળખવાની મજેદાર Worksheet"
    },

    {
        id: 2,
        title: "1 થી 20 સંખ્યાઓ",
        grade: "1",
        subject: "math",
        icon: "🔢",
        bg: "bg-yellow",
        questions: 10,
        time: "10 મિનિટ",
        description: "સંખ્યાઓ ઓળખો અને લખો"
    },

    {
        id: 3,
        title: "A to Z",
        grade: "1",
        subject: "english",
        icon: "🔤",
        bg: "bg-blue",
        questions: 10,
        time: "10 મિનિટ",
        description: "English Alphabet Practice"
    },

    {
        id: 4,
        title: "સરવાળા – Basic",
        grade: "2",
        subject: "math",
        icon: "➕",
        bg: "bg-green",
        questions: 15,
        time: "15 મિનિટ",
        description: "સરળ સરવાળા શીખો"
    },

    {
        id: 5,
        title: "ગુજરાતી શબ્દ ઓળખ",
        grade: "2",
        subject: "gujarati",
        icon: "📖",
        bg: "bg-pink",
        questions: 10,
        time: "10 મિનિટ",
        description: "સરળ ગુજરાતી શબ્દો ઓળખો"
    },

    {
        id: 6,
        title: "English Nouns",
        grade: "2",
        subject: "english",
        icon: "📝",
        bg: "bg-purple",
        questions: 15,
        time: "15 મિનિટ",
        description: "Noun ઓળખવાની Practice"
    },

    {
        id: 7,
        title: "ગુણાકાર",
        grade: "3",
        subject: "math",
        icon: "✖️",
        bg: "bg-yellow",
        questions: 20,
        time: "20 મિનિટ",
        description: "Multiplication Practice"
    },

    {
        id: 8,
        title: "ગુજરાતી વ્યાકરણ",
        grade: "3",
        subject: "gujarati",
        icon: "📚",
        bg: "bg-blue",
        questions: 15,
        time: "15 મિનિટ",
        description: "મૂળભૂત ગુજરાતી વ્યાકરણ"
    },

    {
        id: 9,
        title: "Our Environment",
        grade: "3",
        subject: "environment",
        icon: "🌱",
        bg: "bg-green",
        questions: 15,
        time: "15 મિનિટ",
        description: "પર્યાવરણ વિશે જાણો"
    },

    {
        id: 10,
        title: "ભાગાકાર",
        grade: "4",
        subject: "math",
        icon: "➗",
        bg: "bg-pink",
        questions: 20,
        time: "20 મિનિટ",
        description: "Division Practice"
    },

    {
        id: 11,
        title: "English Grammar",
        grade: "4",
        subject: "english",
        icon: "📘",
        bg: "bg-purple",
        questions: 20,
        time: "20 મિનિટ",
        description: "Basic English Grammar"
    },

    {
        id: 12,
        title: "ગુજરાતી વાક્ય રચના",
        grade: "4",
        subject: "gujarati",
        icon: "✍️",
        bg: "bg-yellow",
        questions: 15,
        time: "15 મિનિટ",
        description: "સુંદર વાક્યો બનાવો"
    },

    {
        id: 13,
        title: "Fractions",
        grade: "5",
        subject: "math",
        icon: "🍕",
        bg: "bg-blue",
        questions: 20,
        time: "20 મિનિટ",
        description: "Fractions સમજવાની Practice"
    },

    {
        id: 14,
        title: "English Vocabulary",
        grade: "5",
        subject: "english",
        icon: "📗",
        bg: "bg-green",
        questions: 20,
        time: "20 મિનિટ",
        description: "New English Words"
    },

    {
        id: 15,
        title: "પર્યાવરણ – કુદરત",
        grade: "5",
        subject: "environment",
        icon: "🌍",
        bg: "bg-pink",
        questions: 20,
        time: "20 મિનિટ",
        description: "Nature and Environment"
    }

];


/* ================= CURRENT FILTER ================= */

let selectedGrade = "all";

let selectedSubject = "all";


/* ================= DISPLAY WORKSHEETS ================= */

function displayWorksheets(list) {

    const container =
        document.getElementById("worksheetContainer");

    const noResult =
        document.getElementById("noResult");


    container.innerHTML = "";


    if (list.length === 0) {

        noResult.style.display = "block";

        return;

    }


    noResult.style.display = "none";


    list.forEach((worksheet) => {

        const card =
            document.createElement("div");

        card.className = "worksheet-card";


        card.innerHTML = `

            <div class="card-top ${worksheet.bg}">

                <span class="card-number">
                    Worksheet ${worksheet.id}
                </span>

                <span>
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
                    onclick="startWorksheet(${worksheet.id})">

                    🚀 Start Worksheet

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* ================= FILTER FUNCTION ================= */

function filterWorksheets() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const filtered =
        worksheets.filter((worksheet) => {

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


/* ================= GRADE FILTER ================= */

function setGrade(grade, button) {

    selectedGrade = grade;


    document
        .querySelectorAll(".grade-btn")
        .forEach((btn) => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    filterWorksheets();

}


/* ================= SUBJECT FILTER ================= */

function setSubject(subject, button) {

    selectedSubject = subject;


    document
        .querySelectorAll(".subject-btn")
        .forEach((btn) => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    filterWorksheets();

}


/* ================= START WORKSHEET ================= */

function startWorksheet(id) {

    const worksheet =
        worksheets.find(
            (item) => item.id === id
        );


    if (!worksheet) {

        alert("Worksheet મળી નથી.");

        return;

    }


    /*
       અત્યારે Demo માટે alert.

       આગળ અહીં:

       worksheet.html?id=1

       અથવા

       Supabase Worksheet System

       સાથે જોડશું.
    */


    alert(
        "🚀 " +
        worksheet.title +
        "\n\n" +

        "ધોરણ: " +
        worksheet.grade +

        "\nવિષય: " +
        worksheet.subject +

        "\n\nWorksheet હવે શરૂ થશે!"
    );

}


/* ================= SCROLL ================= */

function scrollToWorksheets() {

    document
        .getElementById("worksheets")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= INITIAL LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayWorksheets(worksheets);

    }
);
```

