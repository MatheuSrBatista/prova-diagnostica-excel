const correctAnswers = [
  "C", // Pergunta 1
  "C", // Pergunta 2
  "D", // Pergunta 3
  "C", // Pergunta 4
  "B", // Pergunta 5
  "B", // Pergunta 6
  "C", // Pergunta 7
  "B", // Pergunta 8
  "C", // Pergunta 9
  "B", // Pergunta 10
  "D", // Pergunta 11
  "B", // Pergunta 12
  "C", // Pergunta 13
  "B", // Pergunta 14
  "B"  // Pergunta 15
]


const form = document.querySelector('form');
const popup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');

form.addEventListener('submit', event => {
    event.preventDefault();

    // Contador de pontos do usuário
    let userPoints = 0;

    // Array para armazenar as respostas selecionadas pelo usuário
    const userAnswers = [];

    // Seleciona todos os inputs do tipo radio dentro do formulário
    let inputs = document.querySelectorAll('input[type="radio"]');

    // Itera sobre cada input do tipo radio
    inputs.forEach(input => {
        if (input.checked) {
            userAnswers.push(input.value);
        }
    });

    // Compara as respostas do usuário com as respostas corretas e conta os pontos
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            userPoints++;
        }
    });
    
    // Determina o nível de conhecimento com base nos pontos obtidos
    let knowledgeLevel;
    if (userPoints >= 0 && userPoints <= 5) {
        knowledgeLevel = 'Conhecimento básico';
        document.querySelector('.recomendation').textContent = `Recomendação: Excel 2021, Excel Avançado 1 e Excel avançado 2`;
    } else if (userPoints >= 6 && userPoints <= 10) {
        knowledgeLevel = 'Conhecimento intermediário';
        document.querySelector('.recomendation').textContent = `Recomendação: Excel 2021, Excel Avançado 1 e Excel avançado 2`;
    } else if (userPoints >= 11 && userPoints < 15) {
        knowledgeLevel = 'Conhecimento avançado';
        document.querySelector('.recomendation').textContent = `Recomendação: Excel 2021, Excel Avançado 1 e Excel avançado 2`;
    } else if (userPoints === 15) {
        knowledgeLevel = 'Pacote office';
        document.querySelector('.recomendation').textContent = `Recomendação:  Excel 2021, Excel Avançado 1 e Excel avançado 2`;
    }
    console.log(userPoints)
    let recomendationClass;
    switch (knowledgeLevel) {
        case 'Conhecimento básico':
            recomendationClass = 'level-basico';
            break;
        case 'Conhecimento intermediário':
            recomendationClass = 'level-intermediario';
            break;
        case 'Conhecimento avançado':
            recomendationClass = 'level-avancado';
            break;
        case 'Domínio completo':
            recomendationClass = 'level-perfeito';
            break;
        default:
            recomendationClass = ''; // Caso padrão, não adiciona classe
    }

    // Seleciona o elemento .recomendation e adiciona a classe correspondente
    const recomendationElement = document.querySelector('.recomendation');
    recomendationElement.classList.add(recomendationClass);

    // Monta o texto do resultado
    resultText.textContent = `Você fez ${userPoints} pontos. Nível de conhecimento: ${knowledgeLevel}`;

    // Exibe o popup
    popup.style.display = 'block';
});

// Botão para fechar o popup
const closePopupButton = document.getElementById('closePopup');
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
