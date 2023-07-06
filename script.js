// Функція для генерації випадкового кольору
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Створила константу з якої далі випадково витягуватиму значення, які використаю для генерації випадкових кольорів у форматі RGB
    let color = '#'; // Присвоюю початкове значення для змінної кольору
    for (let i = 0; i < 6; i++) { // Виконую цикл шість разів для отримання кольору
        color += letters[Math.floor(Math.random() * 16)]; // Використовую випадкове число як індекс щоб отримати символ з рядка letters і додаю отримане значення до color
    }
    return color;
}

// Функція для створення квадратів
function generateBlocks() {
    const container = document.createElement('div'); // Створила контейнер
    container.style.display = 'flex'; // Задаю стилі 
    container.style.flexWrap = 'wrap';
    container.style.maxWidth = '250px';
    container.style.height = 'auto';

    for (let i = 0; i < 25; i++) { // Виконую цикл 25 разів, бо потрібно 25 квадратів
        const square = document.createElement('div'); // Створила квадрат
        square.style.width = '50px'; // Задаю розміри
        square.style.height = '50px';
        square.style.backgroundColor = getRandomColor(); // В стиль для кольору квадрата підтягую кольори з попередньої функції
        container.appendChild(square); // Додаю кожний квадрат до контейнера методом appendChild()
    }

    document.body.appendChild(container); // Додаю контейнер в body
}

// Функція для зміни кольору квадратів щосекунди
function generateBlocksInterval() {
    const squares = document.querySelectorAll('div > div'); // Використовую метод querySelectorAll() для отримання квадратІВ з батьківського div

    setInterval(() => { // Роблю функцію на інтервал у виконанні коду
        squares.forEach((square) => { // Роблю ітерацію по кожному елементу square в колекції squares
        square.style.backgroundColor = getRandomColor(); // Для кожного квадратного елементу square, викликаю функцію яка змінює стиль кольору
        });
    }, 1000); // Кожної секунди
}

generateBlocks(); // Виклик функції для генерації квадратів
generateBlocksInterval(); // Виклик функції для зміни кольору квадратів щосекундно

// Тільки я не можу зрозуміти, чому в браузері в html ці всі div відображаються після <script src="./script.js"></script>, можливо на лекції і пояснювали, але я могла це пропустити.
// Бо цікавить: якби це був реальний сайт в якому б я хотіла якусь частину коду написати на ванільному js, то як цей код розмістити не в самому кінці а десь посередині html щоб відображався?