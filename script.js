class MacOSQuizGame {
    constructor() {
        this.currentQuestion = 0;
        this.correctAnswers = 0;
        this.gameStarted = false;
        this.questionAnswered = false;
        
        // Premios inspirados en el ecosistema Apple
        this.prizeValues = [
            "$100", "$200", "$300", "$500", "$1,000",
            "$2,000", "$4,000", "$8,000", "$16,000", "$32,000",
            "$64,000", "$125,000", "$250,000", "$500,000", "$1,000,000"
        ];
        
        // Datos curiosos sobre Apple
        this.appleFacts = [
            "💡 macOS fue lanzado originalmente como Mac OS X en 2001",
            "🔐 macOS utiliza el sistema de archivos APFS desde 2017",
            "🧠 El núcleo XNU significa 'X is Not Unix'",
            "📱 iOS se derivó originalmente de Mac OS X",
            "🛡️ Gatekeeper protege contra software malicioso",
            "💾 APFS permite snapshots y clones instantáneos",
            "🔒 FileVault 2 cifra completamente el disco",
            "⚡ Los chips Apple Silicon mejoran la eficiencia energética",
            "🌐 Darwin es la base de código abierto de macOS",
            "🖥️ macOS Big Sur fue la versión 11, rompiendo la numeración 10.x",
            "📋 Universal Clipboard funciona entre dispositivos Apple",
            "🎯 System Integrity Protection (SIP) protege archivos críticos",
            "🔄 Copy on Write optimiza el uso de memoria",
            "📊 Monitor de Actividad es como el Task Manager de Windows",
            "☁️ iCloud sincroniza datos entre todos los dispositivos Apple"
        ];
        
        // Preguntas basadas en el contenido del PDF
        this.questions = [
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            },
            {
                question: "ingrese preg",
                options: ["opc1", "opc2", "opc3", "opc4"],
                correct: 1
            }
        ];
        
        this.shuffleQuestions();
        this.initializeGame();
    }
    
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }
    
    initializeGame() {
        this.updatePrizeLadder();
        this.updateStats();
        this.showRandomAppleFact();
        this.createFloatingElements();
    }
    
    createFloatingElements() {
        // Crear elementos flotantes sutiles para el efecto tecnológico
        const container = document.querySelector('.background-blur');
        
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(0, 122, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(element);
        }
        
        // Añadir animación CSS para elementos flotantes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
                50% { transform: translateY(-10px) translateX(-5px); opacity: 0.5; }
                75% { transform: translateY(-30px) translateX(-10px); opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }
    
    showRandomAppleFact() {
        const factElement = document.getElementById('appleFact');
        const randomFact = this.appleFacts[Math.floor(Math.random() * this.appleFacts.length)];
        factElement.textContent = randomFact;
    }
    
    startGame() {
        this.gameStarted = true;
        this.currentQuestion = 0;
        this.correctAnswers = 0;
        
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('optionsGrid').style.display = 'grid';
        
        this.showQuestion();
    }
    
    showQuestion() {
        this.questionAnswered = false;
        const question = this.questions[this.currentQuestion];
        
        // Actualizar número de pregunta
        document.getElementById('questionNumber').textContent = `Pregunta ${this.currentQuestion + 1}`;
        
        // Actualizar barra de progreso
        const progressPercentage = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        
        // Mostrar pregunta
        document.getElementById('questionText').textContent = question.question;
        
        // Crear opciones
        const optionsGrid = document.getElementById('optionsGrid');
        optionsGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <strong>${String.fromCharCode(65 + index)}:</strong> ${option}
            `;
            optionElement.addEventListener('click', () => this.selectAnswer(index));
            optionsGrid.appendChild(optionElement);
        });
        
        document.getElementById('nextBtn').style.display = 'none';
        this.updatePrizeLadder();
        this.updateStats();
        this.showRandomAppleFact();
    }
    
    selectAnswer(selectedIndex) {
        if (this.questionAnswered) return;
        
        this.questionAnswered = true;
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        // Mostrar respuesta seleccionada
        options[selectedIndex].classList.add('selected');
        
        // Efecto de sonido simulado con vibración visual
        this.addVisualFeedback();
        
        setTimeout(() => {
            // Mostrar respuesta correcta e incorrecta
            options.forEach((option, index) => {
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === selectedIndex && selectedIndex !== question.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            // Actualizar estadísticas
            if (selectedIndex === question.correct) {
                this.correctAnswers++;
            }
            
            this.updateStats();
            
            setTimeout(() => {
                if (this.currentQuestion < this.questions.length - 1) {
                    document.getElementById('nextBtn').style.display = 'inline-flex';
                } else {
                    this.endGame();
                }
            }, 2000);
            
        }, 1000);
    }
    
    addVisualFeedback() {
        const container = document.querySelector('.question-card');
        container.style.transform = 'scale(1.01)';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
        }, 200);
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.showQuestion();
    }
    
    endGame() {
        const questionArea = document.getElementById('questionArea');
        const finalPrize = this.correctAnswers > 0 ? this.prizeValues[this.correctAnswers - 1] : "$0";
        const accuracy = Math.round((this.correctAnswers / this.questions.length) * 100);
        
        let message, emoji;
        if (accuracy === 100) {
            message = "¡PERFECTO! Eres un experto en Sistemas Operativos Apple";
            emoji = "🎉";
        } else if (accuracy >= 80) {
            message = "¡Excelente! Dominas muy bien macOS e iOS";
            emoji = "🌟";
        } else if (accuracy >= 60) {
            message = "¡Bien hecho! Tienes buenos conocimientos de Apple";
            emoji = "👍";
        } else if (accuracy >= 40) {
            message = "Buen intento. Te recomendamos estudiar más sobre macOS";
            emoji = "📚";
        } else {
            message = "Necesitas repasar los conceptos fundamentales";
            emoji = "💡";
        }
        
        questionArea.innerHTML = `
            <div class="game-over">
                <h2>${emoji} ${message}</h2>
                <div class="final-score">Premio Final: ${finalPrize}</div>
                <div class="game-summary">
                    <p><strong>Respuestas correctas:</strong> ${this.correctAnswers} de ${this.questions.length}</p>
                    <p><strong>Precisión:</strong> ${accuracy}%</p>
                </div>
                <div class="controls" style="margin-top: 30px;">
                    <button class="btn btn-primary" onclick="location.reload()">
                        <span class="btn-icon">↻</span>
                        Jugar de Nuevo
                    </button>
                </div>
            </div>
        `;
        
        // Mostrar estadísticas finales en la sidebar
        this.showFinalStats();
    }
    
    showFinalStats() {
        const accuracy = Math.round((this.correctAnswers / this.questions.length) * 100);
        document.getElementById('currentQuestion').textContent = `${this.questions.length}/${this.questions.length}`;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('accuracy').textContent = accuracy + '%';
        
        // Mostrar dato final
        const factElement = document.getElementById('appleFact');
        if (accuracy === 100) {
            factElement.textContent = "🏆 ¡Perfecto! Conoces muy bien el ecosistema Apple";
        } else {
            factElement.textContent = "💪 ¡Sigue aprendiendo sobre macOS e iOS!";
        }
    }
    
    updatePrizeLadder() {
        const ladder = document.getElementById('moneyLadder');
        ladder.innerHTML = '';
        
        for (let i = this.prizeValues.length - 1; i >= 0; i--) {
            const item = document.createElement('div');
            item.className = 'ladder-item';
            
            if (i === this.currentQuestion) {
                item.classList.add('current');
            } else if (i < this.correctAnswers) {
                item.classList.add('completed');
            }
            
            item.innerHTML = `
                <span>${i + 1}</span>
                <span>${this.prizeValues[i]}</span>
            `;
            ladder.appendChild(item);
        }
    }
    
    updateStats() {
        const totalQuestions = this.questions.length;
        document.getElementById('currentQuestion').textContent = `${this.currentQuestion + 1}/${totalQuestions}`;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        
        const questionsAnswered = this.currentQuestion + (this.questionAnswered ? 1 : 0);
        const accuracy = questionsAnswered > 0 ? 
            Math.round((this.correctAnswers / questionsAnswered) * 100) : 0;
        document.getElementById('accuracy').textContent = accuracy + '%';
    }
    
    restartGame() {
        this.currentQuestion = 0;
        this.correctAnswers = 0;
        this.gameStarted = false;
        this.questionAnswered = false;
        
        // Mezclar preguntas de nuevo
        this.shuffleQuestions();
        
        // Resetear UI
        document.getElementById('questionText').innerHTML = `
            ¡Bienvenido al Quiz de Sistemas Operativos Apple! 
            <br><br>Pon a prueba tus conocimientos sobre macOS e iOS.
            <br>Presiona "Iniciar Quiz" para comenzar.
        `;
        document.getElementById('optionsGrid').style.display = 'none';
        document.getElementById('startBtn').style.display = 'inline-flex';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('restartBtn').style.display = 'none';
        
        // Resetear barra de progreso
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('questionNumber').textContent = 'Pregunta 1';
        
        this.updatePrizeLadder();
        this.updateStats();
        this.showRandomAppleFact();
    }
}

// Inicializar el juego cuando se carga la página
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new MacOSQuizGame();
});

// Funciones globales para los botones
function startGame() {
    if (game) {
        game.startGame();
    }
}

function nextQuestion() {
    if (game) {
        game.nextQuestion();
    }
}

function restartGame() {
    if (game) {
        game.restartGame();
    }
}

// Efectos adicionales para mejorar la experiencia
document.addEventListener('DOMContentLoaded', () => {
    // Efecto de parallax sutil en el fondo
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const blur = document.getElementById('backgroundBlur');
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;
        
        blur.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    
    // Efecto de escritura para el título
    const title = document.querySelector('.header h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// Atajos de teclado para mejorar la accesibilidad
document.addEventListener('keydown', (e) => {
    if (!game || !game.gameStarted || game.questionAnswered) return;
    
    // Permitir selección con teclas A, B, C, D
    const key = e.key.toLowerCase();
    if (['a', 'b', 'c', 'd'].includes(key)) {
        const index = key.charCodeAt(0) - 97; // Convertir a-d a 0-3
        const options = document.querySelectorAll('.option');
        if (options[index]) {
            options[index].click();
        }
    }
    
    // Enter para siguiente pregunta
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && nextBtn.style.display !== 'none') {
            nextBtn.click();
        }
    }
});

// Prevenir zoom accidental en dispositivos móviles
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
});

// Optimización para dispositivos móviles
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Añadir estilos específicos para dispositivos táctiles
    const style = document.createElement('style');
    style.textContent = `
        .touch-device .option:hover {
            transform: none;
        }
        
        .touch-device .option:active {
            transform: scale(0.98);
        }
        
        .touch-device .btn:hover {
            transform: none;
        }
        
        .touch-device .btn:active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
}