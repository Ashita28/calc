let currentInput = "";
let resultDisplayed = false;

const buttons = document.querySelectorAll('.btn');
const resultElement = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        const action = button.getAttribute('data-action');

        if (action) {
            if (action === 'del') {
                currentInput = currentInput.slice(0, -1);
            } else if (action === 'reset') {
                currentInput = 0;
            } else if (action === 'calculate') {
                try {
                    currentInput = currentInput.replace(/x/g, '*');
                    currentInput = eval(currentInput).toString();
                    resultDisplayed = true;
                } catch {
                    currentInput = "Error";
                }
            }
        } else {
            if (resultDisplayed) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
        }

        resultElement.textContent = currentInput;
    });
});
