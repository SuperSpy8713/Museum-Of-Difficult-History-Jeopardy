document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        // Category 1: Khmer Rouge Basics
        [
            { q: "Who was the leader of the Khmer Rouge?", a: "Pol Pot" },
            { q: "What year did the Khmer Rouge take over Cambodia?", a: "1975" },
            { q: "What was the Khmer Rouge's goal for society?", a: "To create a classless farming society" },
            { q: "About how many people died during the Cambodian Genocide?", a: "Around 2 million" },
            { q: "Which group was especially targeted by the Khmer Rouge?", a: "Intellectuals" }
        ],
        // Category 2: Life Under the Khmer Rouge
        [
            { q: "What was abolished by the Khmer Rouge (money, schools, or religion)?", a: "All 3 were banned" },
            { q: "What type of work were people forced to do?", a: "Farming" },
            { q: 'How were "enemies" often identified?', a: "Wearing glasses" },
            { q: "What happened to families under Khmer Rouge rule?", a: "Families were separated" },
            { q: "What happened when the Khmer Rouge forced unrealistic farm quotas?", a: "Mass starvation" }
        ],
        // Category 3: Key Events and Places
        [
            { q: "What were the mass killing sites called?", a: "The Killing Fields" },
            { q: "What building was turned into a prison by the Khmer Rouge?", a: "Tuol Sleng Prison" },
            { q: "How many prisoners survived Tuol Sleng out of about 17,000?", a: "Around 12" },
            { q: "Which country overthrew the Khmer Rouge?", a: "Vietnam" },
            { q: "What happened after Vietnam invaded Cambodia?", a: "The Khmer Rouge collapsed" }
        ],
        // Category 4: Consequences of Policies
        [
            { q: "What happened when money, schools, and religion were abolished?", a: "Social systems collapsed" },
            { q: "What happened when intellectuals were distrusted?", a: "Many were executed" },
            { q: "What happened when families were broken apart?", a: "Children were recruited as spies" },
            { q: "Why did fear and violence rule Cambodia?", a: "Constant terror and killings" },
            { q: "Why was the world slow to respond?", a: "The Cold War distracted global attention" }
        ],
        // Category 5: Legacy and Remembrance
        [
            { q: "Why is it important to study the Khmer Rouge genocide?", a: "To prevent future genocides" },
            { q: "What is one famous memorial from the genocide?", a: "Tuol Sleng Museum" },
            { q: "What symbol is often used at memorial sites?", a: "Skulls and bones" },
            { q: "What economic effects did the genocide leave on Cambodia?", a: "Poverty and illiteracy" },
            { q: "What role do survivors have today?", a: "Teaching human rights" }
        ]
    ];

    const categories = [
        "Khmer Rouge Basics",
        "Life Under the Khmer Rouge",
        "Key Events and Places",
        "Consequences of Policies",
        "Legacy and Remembrance"
    ];

    const values = [200, 400, 600, 800, 1000];
    let usedQuestions = Array(questions.length).fill().map(() => Array(questions[0].length).fill(false));
    
    // Initialize the game board
    function initializeGameBoard() {
        const gameBoard = document.querySelector('.game-board');
        gameBoard.innerHTML = '';
        
        // Create category headers
        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.textContent = category;
            gameBoard.appendChild(categoryElement);
        });
        
        // Create question cells
        for (let i = 0; i < questions[0].length; i++) {
            for (let j = 0; j < questions.length; j++) {
                const questionElement = document.createElement('div');
                questionElement.className = 'question';
                questionElement.textContent = '$' + values[i];
                questionElement.dataset.category = j;
                questionElement.dataset.valueIndex = i;
                questionElement.addEventListener('click', handleQuestionClick);
                gameBoard.appendChild(questionElement);
            }
        }
    }
    
    // Handle question click
    function handleQuestionClick(event) {
        const categoryIndex = parseInt(event.target.dataset.category);
        const valueIndex = parseInt(event.target.dataset.valueIndex);
        
        if (usedQuestions[categoryIndex][valueIndex]) return;
        
        usedQuestions[categoryIndex][valueIndex] = true;
        event.target.classList.add('used');
        
        const modal = document.getElementById('question-modal');
        const modalCategory = document.getElementById('modal-category');
        const modalValue = document.getElementById('modal-value');
        const questionText = document.getElementById('question-text');
        const answerText = document.getElementById('answer-text');
        
        modalCategory.textContent = categories[categoryIndex];
        modalValue.textContent = '$' + values[valueIndex];
        questionText.textContent = questions[categoryIndex][valueIndex].q;
        answerText.textContent = questions[categoryIndex][valueIndex].a;
        
        answerText.style.display = 'none';
        modal.style.display = 'block';
    }
    
    // Close modal
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('question-modal').style.display = 'none';
    });
    
    // Reveal answer
    document.getElementById('reveal-answer').addEventListener('click', function() {
        document.getElementById('answer-text').style.display = 'block';
    });
    
    // Score controls
    document.querySelectorAll('.team').forEach(team => {
        const teamId = team.id;
        const scoreElement = team.querySelector('.score');
        
        team.querySelector('.add').addEventListener('click', function() {
            const valueIndex = parseInt(document.getElementById('modal-value').textContent.slice(1));
            const currentScore = parseInt(scoreElement.textContent);
            scoreElement.textContent = currentScore + valueIndex;
        });
        
        team.querySelector('.subtract').addEventListener('click', function() {
            const valueIndex = parseInt(document.getElementById('modal-value').textContent.slice(1));
            const currentScore = parseInt(scoreElement.textContent);
            scoreElement.textContent = currentScore - valueIndex;
        });
    });
    
    // Reset game
    document.getElementById('reset-game').addEventListener('click', function() {
        usedQuestions = Array(questions.length).fill().map(() => Array(questions[0].length).fill(false));
        document.querySelectorAll('.question').forEach(q => q.classList.remove('used'));
        document.querySelectorAll('.team .score').forEach(score => {
            score.textContent = '0';
        });
    });
    
    // Initialize the game
    initializeGameBoard();
});
