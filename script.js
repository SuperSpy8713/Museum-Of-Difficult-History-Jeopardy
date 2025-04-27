const categories = [
    "Khmer Rouge Leaders",
    "Key Events",
    "Victims & Survivors",
    "Global Response",
    "Legacy Today"
];

const questions = [
    [
        { q: "Who led the Khmer Rouge?", a: "Pol Pot" },
        { q: "What was Pol Pot’s birth name?", a: "Saloth Sar" },
        { q: "What political party did the Khmer Rouge belong to?", a: "Communist Party of Kampuchea" },
        { q: "Who was known as \"Brother Number Two\"?", a: "Nuon Chea" },
        { q: "What happened to Khmer Rouge leaders after the genocide?", a: "They were put on trial for crimes" }
    ],
    [
        { q: "In what year did the Khmer Rouge capture Phnom Penh?", a: "1975" },
        { q: "Why did the Khmer Rouge force people out of the cities?", a: "To move them to farms under evacuation orders" },
        { q: "What were the forced labor camps called?", a: "Cooperatives" },
        { q: "How many years did the Khmer Rouge rule Cambodia?", a: "4 years" },
        { q: "What event led to the fall of the Khmer Rouge?", a: "Vietnamese invasion" }
    ],
    [
        { q: "What group was especially targeted by the Khmer Rouge?", a: "Intellectuals" },
        { q: "What were the \"Killing Fields\"?", a: "Mass grave sites" },
        { q: "How did many survivors escape Cambodia?", a: "Through refugee camps" },
        { q: "What mental health disorder affected many survivors?", a: "PTSD" },
        { q: "What kind of marriages did the Khmer Rouge force on people?", a: "Forced marriages" }
    ],
    [
        { q: "How did the world respond during the Cambodian genocide?", a: "Stayed silent" },
        { q: "What court was created to try Khmer Rouge leaders?", a: "ECCC (Extraordinary Chambers in the Courts of Cambodia)" },
        { q: "What major event distracted global attention from Cambodia?", a: "The Cold War" },
        { q: "Which two countries supported the Khmer Rouge?", a: "United States and China" },
        { q: "Around what year did trials for Khmer Rouge crimes begin?", a: "2006" }
    ],
    [
        { q: "Why is it important to study the Khmer Rouge genocide?", a: "To prevent future genocides" },
        { q: "Name a famous memorial to Khmer Rouge victims.", a: "Tuol Sleng Museum" },
        { q: "What symbol is often used at memorial sites?", a: "Skulls and bones" },
        { q: "What economic effects did the genocide leave on Cambodia?", a: "Poverty and illiteracy" },
        { q: "What role do survivors play today?", a: "Teaching human rights" }
    ]
];

let scores = [0, 0, 0, 0];

const board = document.getElementById('board');

// Update scoreboard
function updateScoreboard() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`team${i+1}`).innerText = `Team ${i+1}: ${scores[i]}`;
    }
}

// Add category headers
categories.forEach(category => {
    const div = document.createElement('div');
    div.className = 'cell category';
    div.innerText = category;
    board.appendChild(div);
});

// Add question cells
for (let points = 100; points <= 500; points += 100) {
    for (let catIndex = 0; catIndex < categories.length; catIndex++) {
        const div = document.createElement('div');
        div.className = 'cell';
        div.innerText = `${points} Points`;
        div.dataset.cat = catIndex;
        div.dataset.qIndex = (points/100)-1;
        div.dataset.points = points;
        div.onclick = function() {
            const question = questions[this.dataset.cat][this.dataset.qIndex];
            const showQuestion = confirm(question.q + "\n\nClick OK to see the answer.");
            if (showQuestion) {
                alert("Answer: " + question.a);
                const correctTeam = prompt("Which team got it right? (1-4)\nLeave blank if no one got it right.");
                if (correctTeam >= 1 && correctTeam <= 4) {
                    scores[correctTeam-1] += parseInt(this.dataset.points);
                    updateScoreboard();
                }
                this.style.background = '#333';
                this.style.pointerEvents = 'none';
            }
        };
        board.appendChild(div);
    }
}

// Initialize scoreboard
updateScoreboard();
