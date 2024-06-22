document.addEventListener("DOMContentLoaded", function() {

const fila = document.querySelector('.contenedor-carrusel5');
const ejercicios = document.querySelectorAll('.ejercicios-foto');
const FlechaIzquierda = document.getElementById('flecha-izquierda');
const FlechaDerecha = document.getElementById('flecha-derecha');

FlechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});


FlechaIzquierda.addEventListener ('click', () => { 
    fila.scrollLeft -= fila.offsetWidth; 

   const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
}   );

const numeroPagina = Math.ceil(ejercicios.length / 4);
for (let i = 0; i < numeroPagina; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

ejercicios.forEach((ejercicio) => {
    ejercicio.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            ejercicios.forEach(ej => ej.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 100);
    });
});

fila.addEventListener('mouseleave', () => {
    ejercicios.forEach(ejercicio => ejercicio.classList.remove('hover'));
});


// Segundo carrusel

const fila2 = document.querySelector('.contenedor-carrusel6');
const ejercicios2 = document.querySelectorAll('.ejercicios-foto-2');
const FlechaIzquierda2 = document.getElementById('flecha-izquierda-2');
const FlechaDerecha2 = document.getElementById('flecha-derecha-2');

FlechaDerecha2.addEventListener ('click', () => { 
    fila2.scrollLeft += fila2.offsetWidth; 
    const indicadorActivo2 = document.querySelector('.indicadores-2 .activo');
	if(indicadorActivo2.nextSibling){
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
}   );


FlechaIzquierda2.addEventListener ('click', () => { 
    fila2.scrollLeft -= fila2.offsetWidth; 

   const indicadorActivo2 = document.querySelector('.indicadores-2 .activo');
	if(indicadorActivo2.previousSibling){
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
}   );

const numeroPagina2 = Math.ceil(ejercicios2.length / 4);
for (let i = 0; i < numeroPagina2; i++) {
    const indicador2 = document.createElement('button');

    if (i === 0) {
        indicador2.classList.add('activo');
    }

    document.querySelector('.indicadores-2').appendChild(indicador2);
    indicador2.addEventListener('click', (e) => {
        fila2.scrollLeft = i * fila2.offsetWidth;

        document.querySelector('.indicadores-2 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

ejercicios2.forEach((ejercicio2) => {
    ejercicio2.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            ejercicios2.forEach(ej => ej.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 100);
    });
});

fila.addEventListener('mouseleave', () => {
    ejercicios2.forEach(ejercicio2 => ejercicio2.classList.remove('hover'));
});


// Tercer carusel


const fila3 = document.querySelector('.contenedor-carrusel7');
const ejercicios3 = document.querySelectorAll('.ejercicios-foto-3');
const FlechaIzquierda3 = document.getElementById('flecha-izquierda-3');
const FlechaDerecha3 = document.getElementById('flecha-derecha-3');

FlechaDerecha3.addEventListener ('click', () => { 
    fila3.scrollLeft += fila3.offsetWidth; 
    const indicadorActivo3 = document.querySelector('.indicadores-3 .activo');
	if(indicadorActivo3.nextSibling){
		indicadorActivo3.nextSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}
}   );


FlechaIzquierda3.addEventListener ('click', () => { 
    fila3.scrollLeft -= fila3.offsetWidth; 

   const indicadorActivo3 = document.querySelector('.indicadores-3 .activo');
	if(indicadorActivo3.previousSibling){
		indicadorActivo3.previousSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}
}   );

const numeroPagina3 = Math.ceil(ejercicios3.length / 4);
for (let i = 0; i < numeroPagina3; i++) {
    const indicador3 = document.createElement('button');

    if (i === 0) {
        indicador3.classList.add('activo');
    }

    document.querySelector('.indicadores-3').appendChild(indicador3);
    indicador3.addEventListener('click', (e) => {
        fila3.scrollLeft = i * fila3.offsetWidth;

        document.querySelector('.indicadores-3 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

ejercicios3.forEach((ejercicio3) => {
    ejercicio3.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            ejercicios3.forEach(ej => ej.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 100);
    });
});

fila.addEventListener('mouseleave', () => {
    ejercicios3.forEach(ejercicio3 => ejercicio3.classList.remove('hover'));
});


// Seleccionar el botón
const botonRedireccion = document.querySelector('.btn[href="#redireccion"]');

// Agregar un evento de clic al botón
botonRedireccion.addEventListener('click', () => {
    // Esperar un breve momento antes de aplicar el margen
    setTimeout(() => {
        // Seleccionar el título "Gramática" dentro del elemento #redireccion
        const tituloGramatica = document.querySelector('#redireccion h3');
        // Aplicar el margen superior al título "Gramática"
        tituloGramatica.style.marginTop = '20px'; // Puedes ajustar el valor según tus necesidades
    }, 500); // Tiempo de espera en milisegundos antes de aplicar el margen
});

 });

 

const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result');
const correctCountDisplay = document.getElementById('correct-count');
const incorrectCountDisplay = document.getElementById('incorrect-count');
const resetButton = document.getElementById('reset-button');

let questions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

async function fetchQuestions() {
    try {
        const response = await fetch('preguntas.json');
        questions = await response.json();
        loadQuestion();
    } catch (error) {
        console.error('Error al cargar las preguntas:', error);
    }
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.id = `option-${index}`;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultMessage = (selectedIndex === currentQuestion.correctIndex) ? '¡Correcto!' : `Incorrecto. La respuesta correcta es: ${currentQuestion.options[currentQuestion.correctIndex]}`;
    resultContainer.textContent = resultMessage;

    if (selectedIndex === currentQuestion.correctIndex) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    updateScoreDisplay();
    saveToLocalStorage();

    setTimeout(() => {
        resultContainer.textContent = '';
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        saveToLocalStorage();
        loadQuestion();
    }, 2000);
}

function updateScoreDisplay() {
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
}

function saveToLocalStorage() {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('correctCount', correctCount);
    localStorage.setItem('incorrectCount', incorrectCount);
}

function resetGame() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('correctCount');
    localStorage.removeItem('incorrectCount');
    updateScoreDisplay();
    fetchQuestions();
}

resetButton.addEventListener('click', resetGame);

window.onload = function () {
    fetchQuestions();
};
