/* =========================================================
   RAJNISH STUDY CENTRE
   MASTER WORKSHEET SYSTEM
   ========================================================= */


/* =========================================================
   1. SUBJECT DATA
   ========================================================= */

const subjects = [

    {
        id: "gujarati",
        name: "ગુજરાતી",
        english: "Gujarati",
        icon: "📖"
    },

    {
        id: "math",
        name: "ગણિત",
        english: "Mathematics",
        icon: "🔢"
    },

    {
        id: "environment",
        name: "પર્યાવરણ",
        english: "Environment",
        icon: "🌱"
    },

    {
        id: "english",
        name: "અંગ્રેજી",
        english: "English",
        icon: "🔤"
    },

    {
        id: "gk",
        name: "સામાન્ય જ્ઞાન",
        english: "General Knowledge",
        icon: "🌎"
    },

    {
        id: "hindi",
        name: "હિન્દી",
        english: "Hindi",
        icon: "🅰️"
    },

    {
        id: "computer",
        name: "કમ્પ્યૂટર",
        english: "Computer",
        icon: "💻"
    }

];


/* =========================================================
   2. MASTER WORKSHEET DATA
   =========================================================
   
   ⭐ આગળથી નવી Worksheet મુખ્યત્વે અહીં ઉમેરવાની છે.

   દરેક Worksheetમાં:
   id
   grade
   subject
   title
   description
   marks
   time
   icon
   questions

   questionsમાં 20 પ્રશ્નો મૂકી શકાય.
   answer = સાચા optionનો નંબર
   0 = પ્રથમ option
   1 = બીજો option
   2 = ત્રીજો option
   3 = ચોથો option

   ========================================================= */


const masterWorksheets = [

    /* =====================================================
       STANDARD 1
       ===================================================== */

    {
        id: "grade-1-gujarati-01",
        grade: "1",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        description: "ધોરણ 1 ગુજરાતી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "📖",

        questions: [

            {
                q: "ગુજરાતી ભાષામાં સ્વર કેટલા છે?",
                options: ["10", "13", "16", "20"],
                answer: 1
            },

            {
                q: "‘કમળ’ શબ્દમાં કેટલા અક્ષર છે?",
                options: ["2", "3", "4", "5"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-1-math-01",
        grade: "1",
        subject: "math",
        title: "ગણિત Worksheet 01",
        description: "ધોરણ 1 ગણિત માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔢",

        questions: [

            {
                q: "2 + 3 = ?",
                options: ["4", "5", "6", "7"],
                answer: 1
            },

            {
                q: "5 પછી કઈ સંખ્યા આવે?",
                options: ["4", "6", "7", "8"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-1-environment-01",
        grade: "1",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        description: "ધોરણ 1 પર્યાવરણ માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌱",

        questions: [

            {
                q: "આપણે શ્વાસ લેવા માટે શું વાપરીએ છીએ?",
                options: ["હવા", "પાણી", "માટી", "પથ્થર"],
                answer: 0
            },

            {
                q: "સૂર્ય ક્યારે દેખાય છે?",
                options: ["રાત્રે", "દિવસે", "બંને", "ક્યારેય નહીં"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-1-english-01",
        grade: "1",
        subject: "english",
        title: "English Worksheet 01",
        description: "ધોરણ 1 English માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔤",

        questions: [

            {
                q: "What is the first letter of English alphabet?",
                options: ["B", "C", "A", "D"],
                answer: 2
            },

            {
                q: "Which word means 'કૂતરો'?",
                options: ["Cat", "Dog", "Cow", "Boy"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-1-gk-01",
        grade: "1",
        subject: "gk",
        title: "સામાન્ય જ્ઞાન Worksheet 01",
        description: "ધોરણ 1 સામાન્ય જ્ઞાન માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌎",

        questions: [

            {
                q: "ભારતની રાજધાની કઈ છે?",
                options: ["મુંબઈ", "અમદાવાદ", "નવી દિલ્હી", "સુરત"],
                answer: 2
            },

            {
                q: "આપણા રાષ્ટ્રીય ધ્વજમાં કેટલા રંગ છે?",
                options: ["2", "3", "4", "5"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-1-hindi-01",
        grade: "1",
        subject: "hindi",
        title: "હિન્દી Worksheet 01",
        description: "ધોરણ 1 હિન્દી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🅰️",

        questions: [

            {
                q: "हिन्दी वर्णमाला का पहला स्वर कौन सा है?",
                options: ["अ", "आ", "इ", "ई"],
                answer: 0
            },

            {
                q: "‘कमल’ क्या है?",
                options: ["फूल", "फल", "पशु", "पक्षी"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-1-computer-01",
        grade: "1",
        subject: "computer",
        title: "કમ્પ્યૂટર Worksheet 01",
        description: "ધોરણ 1 કમ્પ્યૂટર માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "💻",

        questions: [

            {
                q: "કમ્પ્યૂટરનું મુખ્ય મગજ કોને કહેવાય છે?",
                options: ["Mouse", "CPU", "Keyboard", "Monitor"],
                answer: 1
            },

            {
                q: "કમ્પ્યૂટરમાં લખવા માટે શું વાપરીએ છીએ?",
                options: ["Keyboard", "Mouse", "Speaker", "Printer"],
                answer: 0
            }

        ]
    },


    /* =====================================================
       STANDARD 2
       ===================================================== */

    {
        id: "grade-2-gujarati-01",
        grade: "2",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        description: "ધોરણ 2 ગુજરાતી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "📖",

        questions: [

            {
                q: "‘આમ’ શબ્દમાં કેટલા અક્ષર છે?",
                options: ["1", "2", "3", "4"],
                answer: 1
            },

            {
                q: "‘રમવું’ શબ્દ શું દર્શાવે છે?",
                options: ["ક્રિયા", "વ્યક્તિ", "સ્થળ", "વસ્તુ"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-2-math-01",
        grade: "2",
        subject: "math",
        title: "ગણિત Worksheet 01",
        description: "ધોરણ 2 ગણિત માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔢",

        questions: [

            {
                q: "10 + 5 = ?",
                options: ["12", "13", "15", "20"],
                answer: 2
            },

            {
                q: "20 - 5 = ?",
                options: ["10", "15", "20", "25"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-2-environment-01",
        grade: "2",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        description: "ધોરણ 2 પર્યાવરણ માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌱",

        questions: [

            {
                q: "છોડને વધવા માટે શું જરૂરી છે?",
                options: ["પાણી", "પથ્થર", "પ્લાસ્ટિક", "લોખંડ"],
                answer: 0
            },

            {
                q: "પાણીનો મુખ્ય સ્ત્રોત કયો છે?",
                options: ["વરસાદ", "પ્લાસ્ટિક", "કાગળ", "લાકડું"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-2-english-01",
        grade: "2",
        subject: "english",
        title: "English Worksheet 01",
        description: "ધોરણ 2 English માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔤",

        questions: [

            {
                q: "Choose the correct word.",
                options: ["Cat", "Catt", "Kat", "Catt"],
                answer: 0
            },

            {
                q: "Opposite of Big is...",
                options: ["Tall", "Small", "Long", "High"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-2-gk-01",
        grade: "2",
        subject: "gk",
        title: "સામાન્ય જ્ઞાન Worksheet 01",
        description: "ધોરણ 2 સામાન્ય જ્ઞાન માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌎",

        questions: [

            {
                q: "ભારતનો રાષ્ટ્રીય પક્ષી કયો છે?",
                options: ["કબૂતર", "મોર", "કાગડો", "ચકલી"],
                answer: 1
            },

            {
                q: "ગુજરાતની રાજધાની કઈ છે?",
                options: ["સુરત", "રાજકોટ", "ગાંધીનગર", "વડોદરા"],
                answer: 2
            }

        ]
    },


    {
        id: "grade-2-hindi-01",
        grade: "2",
        subject: "hindi",
        title: "હિન્દી Worksheet 01",
        description: "ધોરણ 2 હિન્દી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🅰️",

        questions: [

            {
                q: "‘आम’ क्या है?",
                options: ["फल", "फूल", "पशु", "पक्षी"],
                answer: 0
            },

            {
                q: "‘दिन’ का विलोम क्या है?",
                options: ["सुबह", "रात", "दोपहर", "शाम"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-2-computer-01",
        grade: "2",
        subject: "computer",
        title: "કમ્પ્યૂટર Worksheet 01",
        description: "ધોરણ 2 કમ્પ્યૂટર માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "💻",

        questions: [

            {
                q: "Mouse નો ઉપયોગ શા માટે થાય છે?",
                options: ["Pointer ચલાવવા", "પ્રિન્ટ કરવા", "અવાજ માટે", "વિજળી માટે"],
                answer: 0
            },

            {
                q: "Monitor શું છે?",
                options: ["Output device", "Food", "Book", "Toy"],
                answer: 0
            }

        ]
    },


    /* =====================================================
       STANDARD 3
       ===================================================== */

    {
        id: "grade-3-gujarati-01",
        grade: "3",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        description: "ધોરણ 3 ગુજરાતી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "📖",

        questions: [

            {
                q: "‘સૂરજ’નો સમાનાર્થી શબ્દ કયો છે?",
                options: ["સૂર્ય", "ચંદ્ર", "તારો", "વાદળ"],
                answer: 0
            },

            {
                q: "‘દિવસ’નો વિરુદ્ધાર્થી શબ્દ કયો છે?",
                options: ["સવાર", "રાત", "બપોર", "સાંજ"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-3-math-01",
        grade: "3",
        subject: "math",
        title: "ગણિત Worksheet 01",
        description: "ધોરણ 3 ગણિત માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔢",

        questions: [

            {
                q: "25 + 15 = ?",
                options: ["30", "35", "40", "45"],
                answer: 2
            },

            {
                q: "50 - 20 = ?",
                options: ["20", "30", "40", "50"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-3-environment-01",
        grade: "3",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        description: "ધોરણ 3 પર્યાવરણ માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌱",

        questions: [

            {
                q: "છોડનો કયો ભાગ જમીનની અંદર હોય છે?",
                options: ["ફૂલ", "પાન", "મૂળ", "ફળ"],
                answer: 2
            },

            {
                q: "આપણા શરીરમાં લોહી કોણ પંપ કરે છે?",
                options: ["હૃદય", "મગજ", "ફેફસા", "પેટ"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-3-english-01",
        grade: "3",
        subject: "english",
        title: "English Worksheet 01",
        description: "ધોરણ 3 English માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔤",

        questions: [

            {
                q: "Choose the plural of 'Book'.",
                options: ["Bookes", "Books", "Bookies", "Book"],
                answer: 1
            },

            {
                q: "Opposite of Hot is...",
                options: ["Warm", "Cold", "Big", "Fast"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-3-gk-01",
        grade: "3",
        subject: "gk",
        title: "સામાન્ય જ્ઞાન Worksheet 01",
        description: "ધોરણ 3 સામાન્ય જ્ઞાન માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌎",

        questions: [

            {
                q: "ભારતનું રાષ્ટ્રીય પ્રાણી કયું છે?",
                options: ["સિંહ", "વાઘ", "હાથી", "ઘોડો"],
                answer: 1
            },

            {
                q: "પૃથ્વીનો ઉપગ્રહ કયો છે?",
                options: ["સૂર્ય", "મંગળ", "ચંદ્ર", "શુક્ર"],
                answer: 2
            }

        ]
    },


    {
        id: "grade-3-hindi-01",
        grade: "3",
        subject: "hindi",
        title: "હિન્દી Worksheet 01",
        description: "ધોરણ 3 હિન્દી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🅰️",

        questions: [

            {
                q: "‘जल’ का समानार्थी शब्द कौन सा है?",
                options: ["पानी", "आग", "हवा", "मिट्टी"],
                answer: 0
            },

            {
                q: "‘अच्छा’ का विलोम क्या है?",
                options: ["सुंदर", "बुरा", "बड़ा", "छोटा"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-3-computer-01",
        grade: "3",
        subject: "computer",
        title: "કમ્પ્યૂટર Worksheet 01",
        description: "ધોરણ 3 કમ્પ્યૂટર માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "💻",

        questions: [

            {
                q: "Keyboardમાં શું હોય છે?",
                options: ["Keys", "Wheels", "Water", "Paper"],
                answer: 0
            },

            {
                q: "Printer નો ઉપયોગ શા માટે થાય છે?",
                options: ["Print કરવા", "Music માટે", "Typing માટે", "Drawing માટે"],
                answer: 0
            }

        ]
    },


    /* =====================================================
       STANDARD 4
       ===================================================== */

    {
        id: "grade-4-gujarati-01",
        grade: "4",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        description: "ધોરણ 4 ગુજરાતી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "📖",

        questions: [

            {
                q: "‘સુંદર’નો સમાનાર્થી શબ્દ કયો છે?",
                options: ["ખૂબસૂરત", "ખરાબ", "નાનું", "ધીમું"],
                answer: 0
            },

            {
                q: "‘સુખ’નો વિરુદ્ધાર્થી શબ્દ કયો છે?",
                options: ["આનંદ", "દુઃખ", "હાસ્ય", "પ્રેમ"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-4-math-01",
        grade: "4",
        subject: "math",
        title: "ગણિત Worksheet 01",
        description: "ધોરણ 4 ગણિત માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔢",

        questions: [

            {
                q: "25 × 2 = ?",
                options: ["40", "50", "60", "70"],
                answer: 1
            },

            {
                q: "100 ÷ 10 = ?",
                options: ["5", "10", "20", "25"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-4-environment-01",
        grade: "4",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        description: "ધોરણ 4 પર્યાવરણ માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌱",

        questions: [

            {
                q: "પૃથ્વી પર પાણીનો સૌથી મોટો સ્ત્રોત કયો છે?",
                options: ["સમુદ્ર", "કૂવો", "તળાવ", "નદી"],
                answer: 0
            },

            {
                q: "માનવ શરીરમાં શ્વાસ લેવા માટે કયું અંગ છે?",
                options: ["હૃદય", "ફેફસા", "પેટ", "કાન"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-4-english-01",
        grade: "4",
        subject: "english",
        title: "English Worksheet 01",
        description: "ધોરણ 4 English માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔤",

        questions: [

            {
                q: "Choose the correct past tense of 'Go'.",
                options: ["Goed", "Went", "Goes", "Going"],
                answer: 1
            },

            {
                q: "Choose the correct article: ___ apple.",
                options: ["A", "An", "The", "No"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-4-gk-01",
        grade: "4",
        subject: "gk",
        title: "સામાન્ય જ્ઞાન Worksheet 01",
        description: "ધોરણ 4 સામાન્ય જ્ઞાન માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌎",

        questions: [

            {
                q: "ભારતનું રાષ્ટ્રીય ફૂલ કયું છે?",
                options: ["ગુલાબ", "કમળ", "ચમેલી", "સૂરજમુખી"],
                answer: 1
            },

            {
                q: "સૂર્યમાળામાં સૌથી મોટો ગ્રહ કયો છે?",
                options: ["પૃથ્વી", "મંગળ", "ગુરુ", "બુધ"],
                answer: 2
            }

        ]
    },


    {
        id: "grade-4-hindi-01",
        grade: "4",
        subject: "hindi",
        title: "હિન્દી Worksheet 01",
        description: "ધોરણ 4 હિન્દી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🅰️",

        questions: [

            {
                q: "‘सूर्य’ का समानार्थी शब्द कौन सा है?",
                options: ["चंद्र", "सूरज", "बादल", "तारा"],
                answer: 1
            },

            {
                q: "‘ऊँचा’ का विलोम क्या है?",
                options: ["नीचा", "लंबा", "बड़ा", "मोटा"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-4-computer-01",
        grade: "4",
        subject: "computer",
        title: "કમ્પ્યૂટર Worksheet 01",
        description: "ધોરણ 4 કમ્પ્યૂટર માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "💻",

        questions: [

            {
                q: "CPU નું સંપૂર્ણ નામ શું છે?",
                options: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Print Unit",
                    "Control Processing User"
                ],
                answer: 0
            },

            {
                q: "Internetનો ઉપયોગ શેના માટે થાય છે?",
                options: [
                    "માહિતી મેળવવા",
                    "માત્ર રમવા",
                    "માત્ર લખવા",
                    "માત્ર પ્રિન્ટ કરવા"
                ],
                answer: 0
            }

        ]
    },


    /* =====================================================
       STANDARD 5
       ===================================================== */

    {
        id: "grade-5-gujarati-01",
        grade: "5",
        subject: "gujarati",
        title: "ગુજરાતી Worksheet 01",
        description: "ધોરણ 5 ગુજરાતી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "📖",

        questions: [

            {
                q: "‘વિશાળ’નો સમાનાર્થી શબ્દ કયો છે?",
                options: ["મોટું", "નાનું", "ધીમું", "ટૂંકું"],
                answer: 0
            },

            {
                q: "‘પ્રકાશ’નો વિરુદ્ધાર્થી શબ્દ કયો છે?",
                options: ["અંધકાર", "સૂર્ય", "દિવસ", "ચમક"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-5-math-01",
        grade: "5",
        subject: "math",
        title: "ગણિત Worksheet 01",
        description: "ધોરણ 5 ગણિત માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔢",

        questions: [

            {
                q: "125 + 75 = ?",
                options: ["150", "175", "200", "225"],
                answer: 2
            },

            {
                q: "200 ÷ 20 = ?",
                options: ["5", "10", "20", "25"],
                answer: 1
            }

        ]
    },


    {
        id: "grade-5-environment-01",
        grade: "5",
        subject: "environment",
        title: "પર્યાવરણ Worksheet 01",
        description: "ધોરણ 5 પર્યાવરણ માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌱",

        questions: [

            {
                q: "વાતાવરણમાં સૌથી વધુ પ્રમાણમાં કયો વાયુ છે?",
                options: [
                    "ઓક્સિજન",
                    "નાઇટ્રોજન",
                    "કાર્બન ડાયોક્સાઇડ",
                    "હાઇડ્રોજન"
                ],
                answer: 1
            },

            {
                q: "વનસ્પતિ પોતાનો ખોરાક કઈ પ્રક્રિયા દ્વારા બનાવે છે?",
                options: [
                    "શ્વસન",
                    "પ્રકાશસંશ્લેષણ",
                    "પાચન",
                    "વિલય"
                ],
                answer: 1
            }

        ]
    },


    {
        id: "grade-5-english-01",
        grade: "5",
        subject: "english",
        title: "English Worksheet 01",
        description: "ધોરણ 5 English માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🔤",

        questions: [

            {
                q: "Choose the correct plural of 'Child'.",
                options: [
                    "Childs",
                    "Children",
                    "Childes",
                    "Childrens"
                ],
                answer: 1
            },

            {
                q: "Choose the correct sentence.",
                options: [
                    "He are a boy.",
                    "He is a boy.",
                    "He am a boy.",
                    "He be a boy."
                ],
                answer: 1
            }

        ]
    },


    {
        id: "grade-5-gk-01",
        grade: "5",
        subject: "gk",
        title: "સામાન્ય જ્ઞાન Worksheet 01",
        description: "ધોરણ 5 સામાન્ય જ્ઞાન માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🌎",

        questions: [

            {
                q: "ભારતના રાષ્ટ્રીય ગીતનું નામ શું છે?",
                options: [
                    "વંદે માતરમ્",
                    "જન ગણ મન",
                    "સારે જહાં સે અચ્છા",
                    "જય હિંદ"
                ],
                answer: 1
            },

            {
                q: "ગુજરાતનો સ્થાપના દિવસ ક્યારે ઉજવાય છે?",
                options: [
                    "26 જાન્યુઆરી",
                    "15 ઓગસ્ટ",
                    "1 મે",
                    "2 ઓક્ટોબર"
                ],
                answer: 2
            }

        ]
    },


    {
        id: "grade-5-hindi-01",
        grade: "5",
        subject: "hindi",
        title: "હિન્દી Worksheet 01",
        description: "ધોરણ 5 હિન્દી માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "🅰️",

        questions: [

            {
                q: "‘सत्य’ का विलोम शब्द क्या है?",
                options: ["सही", "असत्य", "अच्छा", "सुंदर"],
                answer: 1
            },

            {
                q: "‘कमल’ किसका नाम है?",
                options: ["फूल", "फल", "पशु", "पक्षी"],
                answer: 0
            }

        ]
    },


    {
        id: "grade-5-computer-01",
        grade: "5",
        subject: "computer",
        title: "કમ્પ્યૂટર Worksheet 01",
        description: "ધોરણ 5 કમ્પ્યૂટર માટે પ્રેક્ટિસ Worksheet",
        marks: 20,
        time: "20 મિનિટ",
        icon: "💻",

        questions: [

            {
                q: "RAM નું સંપૂર્ણ નામ શું છે?",
                options: [
                    "Random Access Memory",
                    "Read Access Machine",
                    "Random Application Memory",
                    "Read Application Machine"
                ],
                answer: 0
            },

            {
                q: "Web browserનું ઉદાહરણ કયું છે?",
                options: [
                    "Chrome",
                    "Keyboard",
                    "Printer",
                    "Mouse"
                ],
                answer: 0
            }

        ]
    }

];


/* =========================================================
   3. WORKSHEET LIST
   =========================================================
   UI માટે master dataમાંથી worksheet list બનાવાશે.
   ========================================================= */

const worksheets = masterWorksheets.map(worksheet => {

    return {
        id: worksheet.id,
        grade: worksheet.grade,
        subject: worksheet.subject,
        title: worksheet.title,
        description: worksheet.description,
        questions: worksheet.questions.length,
        marks: worksheet.marks,
        time: worksheet.time,
        icon: worksheet.icon
    };

});


/* =========================================================
   4. GLOBAL VARIABLES
   ========================================================= */

let selectedGrade = null;

let selectedSubject = null;

let selectedWorksheet = null;


/* =========================================================
   5. GET HTML ELEMENTS
   ========================================================= */

const standardList =
    document.getElementById("standardList");

const subjectSection =
    document.getElementById("subjectSection");

const subjectList =
    document.getElementById("subjectList");

const worksheetSection =
    document.getElementById("worksheetSection");

const worksheetList =
    document.getElementById("worksheetList");

const worksheetArea =
    document.getElementById("worksheetArea");

const worksheetTitle =
    document.getElementById("worksheetTitle");

const worksheetDescription =
    document.getElementById("worksheetDescription");

const worksheetMarks =
    document.getElementById("worksheetMarks");

const worksheetQuestions =
    document.getElementById("worksheetQuestions");

const questionsContainer =
    document.getElementById("questions");

const studentName =
    document.getElementById("studentName");

const studentStandard =
    document.getElementById("studentStandard");

const submitWorksheet =
    document.getElementById("submitWorksheet");

const resultArea =
    document.getElementById("resultArea");

const resultMarks =
    document.getElementById("resultMarks");

const resultMessage =
    document.getElementById("resultMessage");

const retryWorksheet =
    document.getElementById("retryWorksheet");

const oldWorksheets =
    document.getElementById("oldWorksheets");


/* =========================================================
   6. STANDARD SELECTION
   ========================================================= */

function setupStandardButtons() {

    const buttons =
        document.querySelectorAll(".standard-card");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            selectedGrade =
                button.dataset.standard;

            selectedSubject = null;

            selectedWorksheet = null;


            buttons.forEach(item => {

                item.classList.remove("active");

            });


            button.classList.add("active");


            studentStandard.value =
                selectedGrade;


            showSubjects();


            worksheetSection.classList.add("hidden");

            worksheetArea.classList.add("hidden");

            resultArea.classList.add("hidden");


            subjectSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}


/* =========================================================
   7. SHOW SUBJECTS
   ========================================================= */

function showSubjects() {

    subjectList.innerHTML = "";


    subjects.forEach(subject => {

        const card =
            document.createElement("button");


        card.type = "button";

        card.className = "subject-card";

        card.dataset.subject =
            subject.id;


        card.innerHTML = `

            <span class="subject-icon">
                ${subject.icon}
            </span>

            <strong>
                ${subject.name}
            </strong>

            <small>
                ${subject.english}
            </small>

        `;


        card.addEventListener("click", () => {

            selectedSubject =
                subject.id;


            document
                .querySelectorAll(".subject-card")
                .forEach(item => {

                    item.classList.remove("active");

                });


            card.classList.add("active");


            showWorksheets();

        });


        subjectList.appendChild(card);

    });


    subjectSection.classList.remove("hidden");

}


/* =========================================================
   8. SHOW WORKSHEETS
   ========================================================= */

function showWorksheets() {

    worksheetList.innerHTML = "";


    const filteredWorksheets =
        worksheets.filter(item =>

            item.grade === selectedGrade &&

            item.subject === selectedSubject

        );


    if (filteredWorksheets.length === 0) {

        worksheetList.innerHTML = `

            <div class="empty-message">
                હાલમાં કોઈ Worksheet ઉપલબ્ધ નથી.
            </div>

        `;


        worksheetSection.classList.remove(
            "hidden"
        );

        return;

    }


    filteredWorksheets.forEach(worksheet => {

        const card =
            document.createElement("div");


        card.className =
            "worksheet-card";


        card.innerHTML = `

            <div class="worksheet-icon">
                ${worksheet.icon}
            </div>

            <h3>
                ${worksheet.title}
            </h3>

            <p>
                ${worksheet.description}
            </p>

            <p>
                📝 ${worksheet.questions} પ્રશ્નો
                <br>
                🏆 ${worksheet.marks} ગુણ
                <br>
                ⏱️ ${worksheet.time}
            </p>

            <button type="button">
                Worksheet શરૂ કરો
            </button>

        `;


        card
    .querySelector("button")
    .addEventListener("click", () => {

        if (worksheet.id === "grade-3-math-02") {
            window.location.href = "worksheet-03-math-02.html";
            return;
        }

        openWorksheet(worksheet);

    });


        worksheetList.appendChild(card);

    });


    worksheetSection.classList.remove(
        "hidden"
    );


    worksheetSection.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================================
   9. OPEN WORKSHEET
   ========================================================= */

function openWorksheet(worksheet) {

    const masterWorksheet =
        masterWorksheets.find(
            item => item.id === worksheet.id
        );


    if (!masterWorksheet) {

        alert(
            "Worksheet data મળી શક્યો નથી."
        );

        return;

    }


    selectedWorksheet =
        masterWorksheet;


    worksheetTitle.textContent =
        masterWorksheet.title;


    worksheetDescription.textContent =
        masterWorksheet.description;


    worksheetMarks.textContent =
        `${masterWorksheet.marks} ગુણ`;


    worksheetQuestions.textContent =
        `${masterWorksheet.questions.length} પ્રશ્નો`;


    resultArea.classList.add(
        "hidden"
    );


    loadQuestions();


    worksheetArea.classList.remove(
        "hidden"
    );


    worksheetArea.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================================
   10. LOAD QUESTIONS
   ========================================================= */

function loadQuestions() {

    questionsContainer.innerHTML = "";


    if (!selectedWorksheet) {

        showQuestionMessage(
            "Worksheet પસંદ કરવામાં આવી નથી."
        );

        return;

    }


    const questions =
        selectedWorksheet.questions;


    if (
        !questions ||
        questions.length === 0
    ) {

        showQuestionMessage(
            "આ Worksheet માટે પ્રશ્નો ઉપલબ્ધ નથી."
        );

        return;

    }


    /*
       Testing માટે જો 20થી ઓછા પ્રશ્નો હોય
       તો પ્રશ્નો repeat થશે.

       ⭐ જ્યારે તમે 20 actual questions આપશો,
       ત્યારે 20 અલગ પ્રશ્નો જ દેખાશે.
    */

    const finalQuestions = [];


    const totalQuestions =
        selectedWorksheet.marks || 20;


    for (
        let i = 0;
        i < totalQuestions;
        i++
    ) {

        finalQuestions.push(
            questions[i % questions.length]
        );

    }


    finalQuestions.forEach(
        (question, index) => {

            const questionDiv =
                document.createElement("div");


            questionDiv.className =
                "question";


            let optionsHTML = "";


            question.options.forEach(
                (option, optionIndex) => {

                    optionsHTML += `

                        <label class="option">

                            <input
                                type="radio"
                                name="question-${index}"
                                value="${optionIndex}"
                            >

                            <span>
                                ${option}
                            </span>

                        </label>

                    `;

                }
            );


            questionDiv.innerHTML = `

                <div class="question-text">

                    <span class="question-number">
                        Q${index + 1}.
                    </span>

                    ${question.q}

                </div>

                <div class="options">

                    ${optionsHTML}

                </div>

            `;


            questionsContainer.appendChild(
                questionDiv
            );

        }
    );

}


/* =========================================================
   11. QUESTION MESSAGE
   ========================================================= */

function showQuestionMessage(message) {

    questionsContainer.innerHTML = `

        <div class="error-message">
            ${message}
        </div>

    `;

}


/* =========================================================
   12. SUBMIT WORKSHEET
   ========================================================= */

function submitWorksheetResult() {

    if (!selectedWorksheet) {

        alert(
            "કૃપા કરીને પહેલા Worksheet પસંદ કરો."
        );

        return;

    }


    const name =
        studentName.value.trim();


    if (!name) {

        alert(
            "કૃપા કરીને વિદ્યાર્થીનું નામ લખો."
        );

        studentName.focus();

        return;

    }


    if (!studentStandard.value) {

        alert(
            "કૃપા કરીને ધોરણ પસંદ કરો."
        );

        studentStandard.focus();

        return;

    }


    const allQuestions =
        document.querySelectorAll(".question");


    if (allQuestions.length === 0) {

        alert(
            "Worksheetમાં પ્રશ્નો ઉપલબ્ધ નથી."
        );

        return;

    }


    let score = 0;


    allQuestions.forEach(
        (questionDiv, index) => {

            const selected =
                questionDiv.querySelector(
                    `input[name="question-${index}"]:checked`
                );


            if (!selected) {

                return;

            }


            const questions =
                selectedWorksheet.questions;


            const question =
                questions[
                    index % questions.length
                ];


            const selectedAnswer =
                Number(selected.value);


            if (
                selectedAnswer ===
                Number(question.answer)
            ) {

                score++;

            }

        }
    );


    const total =
        allQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    showResult(
        score,
        total,
        percentage,
        name
    );

}


/* =========================================================
   13. SHOW RESULT
   ========================================================= */

function showResult(
    score,
    total,
    percentage,
    name
) {

    resultMarks.textContent =
        `${score} / ${total}`;


    let message = "";


    if (percentage >= 90) {

        message =
            `🎉 ${name}, અદ્ભુત! તમારો Result ખૂબ જ સારો છે.`;

    }

    else if (percentage >= 75) {

        message =
            `👏 ${name}, ખૂબ સરસ! થોડા વધુ પ્રયત્નો કરો.`;

    }

    else if (percentage >= 50) {

        message =
            `👍 ${name}, સારો પ્રયાસ! વધુ Practice કરો.`;

    }

    else {

        message =
            `💪 ${name}, ચિંતા નહીં. ફરી Practice કરો અને ફરી પ્રયાસ કરો.`;

    }


    resultMessage.textContent =
        `${message} (${percentage}%)`;


    resultArea.classList.remove(
        "hidden"
    );


    resultArea.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    saveLocalResult(

        name,

        selectedGrade,

        selectedSubject,

        selectedWorksheet.title,

        score,

        total

    );

}


/* =========================================================
   14. SAVE RESULT
   ========================================================= */

async function saveLocalResult(
    name,
    grade,
    subject,
    worksheet,
    score,
    total
) {

    const percentage =
        Math.round(
            (score / total) * 100
        );


    /* ==========================================
       1. LOCAL STORAGE
       ========================================== */

    const oldResults =
        JSON.parse(

            localStorage.getItem(
                "rajnishResults"
            ) || "[]"

        );


    oldResults.push({

        name: name,

        grade: grade,

        subject: subject,

        worksheet: worksheet,

        score: score,

        total: total,

        percentage: percentage,

        date:
            new Date().toLocaleString(
                "en-IN"
            )

    });


    localStorage.setItem(

        "rajnishResults",

        JSON.stringify(oldResults)

    );


    /* ==========================================
       2. SUPABASE
       ========================================== */

    try {

        /*
           જો Supabase client ઉપલબ્ધ હોય
           તો databaseમાં result save થશે.
        */

        if (
            typeof supabase !== "undefined"
        ) {

            const { data, error } =
                await supabase
                    .from("worksheet_results")
                    .insert([
                        {
                            student_name: name,
                            worksheet_name: worksheet,
                            score: score,
                            total_marks: total
                        }
                    ]);


            if (error) {

                console.error(
                    "Supabase Result Save Error:",
                    error
                );

                console.log(
                    "Result browserમાં Local Storageમાં save થયો છે."
                );

                return;

            }


            console.log(
                "Result successfully saved to Supabase:",
                data
            );

        }

    }

    catch (error) {

        console.error(
            "Supabase Connection Error:",
            error
        );

    }


    /* ==========================================
       3. OLD RESULTS REFRESH
       ========================================== */

    showOldWorksheets();

}


/* =========================================================
   15. SHOW OLD WORKSHEETS
   ========================================================= */

function showOldWorksheets() {

    if (!oldWorksheets) {
        return;
    }


    const results =
        JSON.parse(

            localStorage.getItem(
                "rajnishResults"
            ) || "[]"

        );


    if (
        !results ||
        results.length === 0
    ) {

        oldWorksheets.innerHTML = `

            <p class="empty-message">
                હજી કોઈ Result ઉપલબ્ધ નથી.
            </p>

        `;

        return;

    }


    oldWorksheets.innerHTML = "";


    const reversedResults =
        [...results].reverse();


    reversedResults.forEach(
        result => {

            const div =
                document.createElement("div");


            div.className =
                "old-worksheet-item";


            div.innerHTML = `

                <strong>
                    ${result.name}
                </strong>

                <br>

                ધોરણ ${result.grade}
                • ${result.worksheet}

                <br>

                🏆 ${result.score}/${result.total}

                <br>

                <small>
                    ${result.date}
                </small>

            `;


            oldWorksheets.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   16. RETRY WORKSHEET
   ========================================================= */

function retryCurrentWorksheet() {

    resultArea.classList.add(
        "hidden"
    );


    loadQuestions();


    questionsContainer.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================================
   17. EVENT LISTENERS
   ========================================================= */

if (submitWorksheet) {

    submitWorksheet.addEventListener(

        "click",

        submitWorksheetResult

    );

}


if (retryWorksheet) {

    retryWorksheet.addEventListener(

        "click",

        retryCurrentWorksheet

    );

}


/* =========================================================
   18. INITIALIZE
   ========================================================= */

function initializeApp() {

    setupStandardButtons();

    showOldWorksheets();

}


/* =========================================================
   19. START APPLICATION
   ========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    initializeApp

);
