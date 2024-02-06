// 'use strict';

const outputTotal = document.getElementById('total'),
    outputTotalSpaces = document.getElementById('totalSpaces'),
    outputCharacters = document.getElementById('characters'),
    inputField = document.getElementById('input'),
    totalDigits = document.getElementById('totalDigits'),
    totalLowChar = document.getElementById('totalLow'),
    totalUppChar = document.getElementById('totalUpp');

inputField.addEventListener('input', (e) => {
    const str = e.target.value;
    let totalCharacters = str.length; // загальна кількість символів у рядку
    let symbols = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    let symbolCount = 0; // кількість символів
    let digitCount = 0; // кількість цифр
    let lowercaseCount = 0; // кількість літер в нижньому регістрі
    let uppercaseCount = 0; // кількість літер в верхньому регістрі
    let spaceCount = (str.match(/\s/g) || []).length; // кількість пробілів

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (/\d/.test(char) && char !== ' ') {
            digitCount++;
        } else if (symbols.indexOf(char) !== -1) {
            symbolCount++;
        } else if (char === char.toLowerCase() && char !== ' ') {
            lowercaseCount++;
        } else if (char === char.toUpperCase() && char !== ' ') {
            uppercaseCount++;
        }
    }

    outputTotal.textContent = totalCharacters;
    totalDigits.textContent = digitCount;
    totalLowChar.textContent = lowercaseCount;
    totalUppChar.textContent = uppercaseCount;
    outputCharacters.textContent = symbolCount;
    outputTotalSpaces.textContent = spaceCount;
})










