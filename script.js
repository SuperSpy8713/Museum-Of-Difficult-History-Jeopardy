const categories = [
    "Khmer Rouge Leaders",
    "Key Events",
    "Victims & Survivors",
    "Global Response",
    "Legacy Today"
];

const questions = [
    [
        { q: "	Who was the leader of the Khmer Rouge?", a: "Pol Pot" },
        { q: "What year did the Khmer Rouge take over Cambodia?", a: "1975" },
        { q: "	What was the Khmer Rouge’s goal for society?", a: "To create a classless farming society" },
        { q: "About how many people died during the Cambodian Genocide?"?", a: "Around 2 million" },
        { q: "Which group was especially targeted by the Khmer Rouge?", a: "Intellectuals" }
    ],
    [
        { q: "What was abolished by the Khmer Rouge (money, schools, or religion)?", a: "All 3 were banned" },
        { q: "What type of work were people forced to do?", a: "Farming" },
        { q: "How were "enemies" often identified?", a: "Wearing glasses" },
        { q: "What happened to families under Khmer Rouge rule?", a: "Families were separated" },
        { q: "What happened when the Khmer Rouge forced unrealistic farm quotas?", a: "Mass starvation" }
    ],
    [
        { q: "What were the mass killing sites called?", a: "The Killing Fields" },
        { q: "What building was turned into a prison by the Khmer Rouge?", a: "Tuol Sleng Prison" },
        { q: "How many prisoners survived Tuol Sleng out of about 17,000?", a: "Around 12" },
        { q: "Which country overthrew the Khmer Rouge?", a: "Vietnam" },
        { q: "What happened after Vietnam invaded Cambodia?", a: "The Khmer Rouge collapsed" }
    ],
    [
        { q: "What happened when money, schools, and religion were abolished?", a: "Social systems collapsed" },
        { q: "What happened when intellectuals were distrusted?", a: "Many were executed" },
        { q: "What happened when families were broken apart?", a: "Children were recruited as spies" },
        { q: "Why did fear and violence rule Cambodia?", a: "Constant terror and killings" },
        { q: "Why was the world slow to respond?", a: "The Cold War distracted global attention" }
    ],
    [
        { q: "Why is it important to study the Khmer Rouge genocide?", a: "To prevent future genocides" },
        { q: "What is one famous memorial from the genocide?", a: "Tuol Sleng Museum" },
        { q: "What symbol is often used at memorial sites?", a: "Skulls and bones" },
        { q: "What economic effects did the genocide leave on Cambodia?", a: "Poverty and illiteracy" },
        { q: "	What role do survivors have today?", a: "Teaching human rights" }
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
