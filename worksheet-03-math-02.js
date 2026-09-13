// ==========================================================
// Rajnish Study Centre
// ધોરણ 3 ગણિત - પાઠ 2 : સંખ્યાની ગમ્મત
// ==========================================================

// ----------------------------------------------------------
// પ્રશ્ન 1 : ખૂટતી સંખ્યાઓ
// ----------------------------------------------------------

const q1Data = {
    q1a: ["17", null, null, null, null, "22", null, null, null, "26"],
    q1b: ["44", null, null, null, "48", null, null, null, "52", null],
    q1c: [null, "70", null, null, null, null, "75", null, null, null],
    q1d: [null, null, "80", null, null, null, "84", null, null, null]
};

const answers = {
    q1a: ["18", "19", "20", "21", "23", "24", "25"],
    q1b: ["45", "46", "47", "49", "50", "51", "53"],
    q1c: ["69", "71", "72", "73", "74", "76", "77", "78"],
    q1d: ["78", "79", "81", "82", "83", "85", "86", "87"]
};


// ----------------------------------------------------------
// પ્રશ્ન 2, 3 અને 4 ના સાચા જવાબ
// ----------------------------------------------------------

const answerKey = {

    // પ્રશ્ન 2
    q2a_min: "29",
    q2a_max: "92",

    q2b_min: "7",
    q2b_max: "97",

    q2c_min: "18",
    q2c_max: "94",


    // પ્રશ્ન 3
    q3a_asc: "20,25,37,52,92",
    q3a_desc: "92,52,37,25,20",

    q3b_asc: "22,24,26,42,62",
    q3b_desc: "62,42,26,24,22",

    q3c_asc: "19,79,91,97,99",
    q3c_desc: "99,97,91,79,19",

    q3d_asc: "5,15,50,55,95",
    q3d_desc: "95,55,50,15,5",

    q3e_asc: "10,20,30,40,50",
    q3e_desc: "50,40,30,20,10",


    // પ્રશ્ન 4
    q4a: "વિકાસ",
    q4b: "સમીર અને મીતા",
    q4c: "જોય અને વિકાસ",
    q4d: "18",
    q4e: "32",
    q4f: "5"
};


// ----------------------------------------------------------
// પ્રશ્ન 1 ના Sequence Box બનાવવાનું
// ----------------------------------------------------------

function renderSequence(elementId, sequence, prefix) {

    const el = document.getElementById(elementId);

    if (!el) return;

    let blankIndex = 0;

    sequence.forEach((value, index) => {

        if (value === null) {

            const input = document.createElement("input");

            input.type = "text";
            input.className = "answer-box";
            input.dataset.answer = `${prefix}-${blankIndex}`;
            input.inputMode = "numeric";

            el.appendChild(input);

            blankIndex++;

        } else {

            const span = document.createElement("span");

            span.className = "number";
            span.textContent = toGujaratiDigits(value);

            el.appendChild(span);
        }

        // comma
        if (index < sequence.length - 1) {

            const comma = document.createElement("span");

            comma.textContent = ",";
            comma.className = "number";

            el.appendChild(comma);
        }

    });
}


// ----------------------------------------------------------
// પ્રશ્ન 1 Render
// ----------------------------------------------------------

renderSequence("q1a", q1Data.q1a, "q1a");
renderSequence("q1b", q1Data.q1b, "q1b");
renderSequence("q1c", q1Data.q1c, "q1c");
renderSequence("q1d", q1Data.q1d, "q1d");


// ----------------------------------------------------------
// ગુજરાતી અંક → English અંક
// ----------------------------------------------------------

function normalizeDigits(value) {

    const gujaratiDigits = "૦૧૨૩૪૫૬૭૮૯";

    return String(value || "")
        .replace(/[૦-૯]/g, function(digit) {

            return gujaratiDigits.indexOf(digit);

        })
        .replace(/[–—−]/g, "-")
        .trim();
}


// ----------------------------------------------------------
// ક્રમના જવાબને Normalize કરવો
// ----------------------------------------------------------

function normalizeOrder(value) {

    return normalizeDigits(value)

        .replace(/[;|/]/g, ",")

        .replace(/，/g, ",")

        .split(/[\s,]+/)

        .filter(Boolean)

        .join(",");
}


// ----------------------------------------------------------
// Text Normalize
// ----------------------------------------------------------

function normalizeText(value) {

    return String(value || "")
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[।.]+$/g, "")
        .toLowerCase();
}


// ----------------------------------------------------------
// English Digit → Gujarati Digit
// ----------------------------------------------------------

function toGujaratiDigits(value) {

    const gujaratiDigits = "૦૧૨૩૪૫૬૭૮૯";

    return String(value).replace(/\d/g, function(digit) {

        return gujaratiDigits[digit];

    });
}


// ----------------------------------------------------------
// સાચો / ખોટો જવાબ દર્શાવવો
// ----------------------------------------------------------

function markInput(input, correct) {

    input.classList.remove("correct", "wrong");

    if (correct) {

        input.classList.add("correct");

    } else {

        input.classList.add("wrong");
    }
}


// ----------------------------------------------------------
// પ્રશ્ન 1 ચેક
// ----------------------------------------------------------

function markQ1(prefix, answerList) {

    let correctCount = 0;

    answerList.forEach(function(answer, index) {

        const input =
            document.querySelector(
                `[data-answer="${prefix}-${index}"]`
            );

        if (!input) return;

        const userAnswer =
            normalizeDigits(input.value);

        const correct =
            userAnswer === answer;

        markInput(input, correct);

        if (correct) {

            correctCount++;
        }

    });

    return correctCount;
}


// ----------------------------------------------------------
// આખી Worksheet ના ગુણ ગણવા
// ----------------------------------------------------------

function calculateScore() {

    let score = 0;


    // ======================================================
    // પ્રશ્ન 1 = 4 ગુણ
    // દરેક આખી લાઇન સાચી હોય તો 1 ગુણ
    // ======================================================

    const q1Rows = [

        ["q1a", answers.q1a],
        ["q1b", answers.q1b],
        ["q1c", answers.q1c],
        ["q1d", answers.q1d]

    ];


    q1Rows.forEach(function(row) {

        const prefix = row[0];
        const answerList = row[1];

        const rowCorrect =
            markQ1(prefix, answerList);

        if (rowCorrect === answerList.length) {

            score++;
        }

    });


    // ======================================================
    // પ્રશ્ન 2 = 3 ગુણ
    // ======================================================

    const q2Groups = [

        ["q2a_min", "29", "q2a_max", "92"],

        ["q2b_min", "7", "q2b_max", "97"],

        ["q2c_min", "18", "q2c_max", "94"]

    ];


    q2Groups.forEach(function(group) {

        const input1 =
            document.querySelector(
                `[data-answer="${group[0]}"]`
            );

        const input2 =
            document.querySelector(
                `[data-answer="${group[2]}"]`
            );

        if (!input1 || !input2) return;


        const correct1 =
            normalizeDigits(input1.value) === group[1];

        const correct2 =
            normalizeDigits(input2.value) === group[3];


        markInput(input1, correct1);
        markInput(input2, correct2);


        if (correct1 && correct2) {

            score++;
        }

    });


    // ======================================================
    // પ્રશ્ન 3 = 5 ગુણ
    // ======================================================

    const q3Groups = [

        [
            "q3a-asc",
            "20,25,37,52,92",
            "q3a-desc",
            "92,52,37,25,20"
        ],

        [
            "q3b-asc",
            "22,24,26,42,62",
            "q3b-desc",
            "62,42,26,24,22"
        ],

        [
            "q3c-asc",
            "19,79,91,97,99",
            "q3c-desc",
            "99,97,91,79,19"
        ],

        [
            "q3d-asc",
            "5,15,50,55,95",
            "q3d-desc",
            "95,55,50,15,5"
        ],

        [
            "q3e-asc",
            "10,20,30,40,50",
            "q3e-desc",
            "50,40,30,20,10"
        ]

    ];


    q3Groups.forEach(function(group) {

        const input1 =
            document.querySelector(
                `[data-answer="${group[0]}"]`
            );

        const input2 =
            document.querySelector(
                `[data-answer="${group[2]}"]`
            );

        if (!input1 || !input2) return;


        const correct1 =
            normalizeOrder(input1.value) === group[1];

        const correct2 =
            normalizeOrder(input2.value) === group[3];


        markInput(input1, correct1);
        markInput(input2, correct2);


        if (correct1 && correct2) {

            score++;
        }

    });


    // ======================================================
    // પ્રશ્ન 4 = 8 ગુણ
    // ======================================================

    const q4Questions = [

        // પ્રશ્ન, સાચા જવાબો, ગુણ
        [
            "q4a",
            ["વિકાસ", "vikas"],
            1
        ],

        [
            "q4b",
            [
                "સમીર અને મીતા",
                "સમીર અને મિતા",
                "સમીર, મીતા",
                "સમિર અને મીતા"
            ],
            1
        ],

        [
            "q4c",
            [
                "જોય અને વિકાસ"
            ],
            1
        ],

        [
            "q4d",
            [
                "18",
                "૧૮"
            ],
            1
        ],

        [
            "q4e",
            [
                "32",
                "૩૨"
            ],
            2
        ],

        [
            "q4f",
            [
                "5",
                "૫"
            ],
            2
        ]

    ];


    q4Questions.forEach(function(question) {

        const id = question[0];
        const validAnswers = question[1];
        const marks = question[2];


        const input =
            document.querySelector(
                `[data-answer="${id}"]`
            );


        if (!input) return;


        const userAnswer =
            normalizeText(input.value);


        const correct =
            validAnswers.some(function(answer) {

                return normalizeText(answer) === userAnswer;

            });


        markInput(input, correct);


        if (correct) {

            score += marks;
        }

    });


    return score;
}


// ==========================================================
// Submit Button
// ==========================================================

document
    .getElementById("submitBtn")
    .addEventListener("click", function() {


        const name =
            document
                .getElementById("studentName")
                .value
                .trim();


        if (!name) {

            alert("કૃપા કરીને વિદ્યાર્થીનું નામ લખો.");

            document
                .getElementById("studentName")
                .focus();

            return;
        }


        const score =
            calculateScore();


        document
            .getElementById("score")
            .textContent =
            `${score} / 20`;


        const result =
            document.getElementById("result");


        result.classList.remove("hidden");


        let message =
            "સારી મહેનત! 👏";


        if (score === 20) {

            message =
                "અભિનંદન! 🎉 સંપૂર્ણ ગુણ!";

        } else if (score >= 16) {

            message =
                "ખૂબ સરસ! ⭐";

        } else if (score >= 10) {

            message =
                "સારી શરૂઆત! 👍";

        } else {

            message =
                "વધુ પ્રેક્ટિસ કરો. 💪";
        }


        result.innerHTML = `

            <h2>${message}</h2>

            <p>
                <strong>${name}</strong>,
                તમારા ગુણ:
                <strong>${score} / 20</strong>
            </p>

            <p>
                લીલો બોક્સ = સાચો જવાબ |
                લાલ બોક્સ = ફરી તપાસો
            </p>

        `;


        result.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });


// ==========================================================
// Reset Button
// ==========================================================

document
    .getElementById("resetBtn")
    .addEventListener("click", function() {


        const confirmReset =
            confirm(
                "શું Worksheet ફરીથી શરૂ કરવી છે?"
            );


        if (!confirmReset) return;


        document
            .querySelectorAll("input")
            .forEach(function(input) {

                input.value = "";

                input.classList.remove(
                    "correct",
                    "wrong"
                );

            });


        document
            .getElementById("score")
            .textContent = "-";


        document
            .getElementById("result")
            .classList.add("hidden");

    });


// ==========================================================
// Print Button
// ==========================================================

document
    .getElementById("printBtn")
    .addEventListener("click", function() {

        window.print();

    });


// ==========================================================
// આજની તારીખ આપમેળે
// ==========================================================

const dateInput =
    document.getElementById("testDate");


if (dateInput) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    dateInput.value =
        `${year}-${month}-${day}`;
}
