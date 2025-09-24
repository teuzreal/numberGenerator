const numero = document.getElementById('numero');
const botao = document.getElementById('botao');
const maximo = document.getElementById('maximo');

const randomNumberGenerator = () => {
    const max =+ maximo.value || 1;
    const randomNumber = Math.floor(Math.random() * max + 1);
    numero.textContent = randomNumber;
};

botao.addEventListener('click', randomNumberGenerator);
