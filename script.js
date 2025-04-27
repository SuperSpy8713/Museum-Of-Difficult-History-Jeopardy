const categories = [
    "Khmer Rouge Leaders",
    "Key Events",
    "Victims & Survivors",
    "Global Response",
    "Legacy Today"
];

const questions = [
    [
        { q: "Who was the leader?", a: "Pol Pot" },
        { q: "Pol Pot’s real name?", a: "Saloth Sar" },
        { q: "Which party?", a: "Communist Party of Kampuchea" },
        { q: "Who was Brother Number Two?", a: "Nuon Chea" },
        { q: "What happened to leaders after genocide?", a: "Trials for crimes" }
    ],
    [
        { q: "Year Khmer Rouge seized Phnom Penh?", a: "1975" },
        { q: "Why move people to farms?", a: "Evacuation orders" },
        { q: "Forced labor camps name?", a: "Cooperatives" },
        { q: "How long in power?", a: "4 years" },
        { q: "Event ending Khmer Rouge?", a: "Vietnamese invasion" }
    ],
    [
        { q: "Targeted group?", a: "Intellectuals" },
        { q: "What were Killing Fields?", a: "Mass graves" },
        { q: "How did survivors escape?", a: "Refugee camps" },
        { q: "Mental health issues?", a: "PTSD" },
        { q: "What kind of marriages?", a: "Forced marriages" }
    ],
    [
        { q: "World’s reaction during genocide?", a: "Silent" },
        { q: "Court for Khmer Rouge crimes?", a: "ECCC" },
        { q: "Event distracting world attention?", a: "Cold War" },
        { q: "Countries supporting Khmer Rouge?", a: "U.S. and China" },
        { q: "Year trials started?", a: "Around 2006" }
    ],
    [
        { q: "Why study it?", a: "Prevent future genocides" },
        { q: "Memorials example?", a: "Tuol Sleng Museum" },
        { q: "Symbol of memorials?", a: "Skulls and bones" },
        { q: "Economic effects?", a: "Poverty and illiteracy" },
        { q: "Role of survivors today?", a: "Teaching human rights" }
    ]
];

const board = document.getElementById('board');

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
        div.onclick = function() {
            const question = questions[this.dataset.cat][this.dataset.qIndex];
            const response = confirm(question.q + "\n\nClick OK to reveal the answer.");
            if (response) {
                alert("Answer: " + question.a);
                this.style.background = '#333';
                this.style.pointerEvents = 'none';
            }
        };
        board.appendChild(div);
    }
}
