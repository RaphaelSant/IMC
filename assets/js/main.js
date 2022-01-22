// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelIMC(imc);
    const pesoIdea = pesoIdeal(altura);

    const msg1 = `Seu IMC é ${imc} (${nivelImc}).`;
    const msg2 = `${pesoIdea}`;

    setResultado(msg1, msg2, true);
});

/*
Menos de 18,5 ----------- Abaixo do peso
Entre 18,5 e 24,9 ------- Peso normal
Entre 25 e 29,9 --------- Sobrepeso
Entre 30 e 34,9 --------- Obesidade grau 1
Entre 35 e 39,9 --------- Obesidade grau 2
Mais do que 40 ---------- Obesidade grau 3
*/

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) { return nivel[5]; }
    if (imc >= 34.9) { return nivel[4]; }
    if (imc >= 29.9) { return nivel[3]; }
    if (imc >= 24.9) { return nivel[2]; }
    if (imc >= 18.5) { return nivel[1]; }
    if (imc < 18.5) { return nivel[0]; }

}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function pesoIdeal (altura) {
    if (altura >= 2) {
        return "Seu peso ideal esta entre 75kg e 100kg";
    } else if (altura >= 1.98) {
        return "Seu peso ideal esta entre 73kg e 98kg";
    } else if (altura >= 1.96) {
        return "Seu peso ideal esta entre 72kg e 96kg";
    } else if (altura >= 1.94) {
        return "Seu peso ideal esta entre 70kg e 94kg";
    } else if (altura >= 1.92) {
        return "Seu peso ideal esta entre 69kg e 92kg";
    } else if (altura >= 1.90) {
        return "Seu peso ideal esta entre 67kg e 90kg";
    } else if (altura >= 1.88) {
        return "Seu peso ideal esta entre 66kg e 88kg";
    } else if (altura >= 1.86) {
        return "Seu peso ideal esta entre 65kg e 86kg";
    } else if (altura >= 1.84) {
        return "Seu peso ideal esta entre 63kg e 84kg";
    } else if (altura >= 1.82) {
        return "Seu peso ideal esta entre 62kg e 82kg";
    } else if (altura >= 1.80) {
        return "Seu peso ideal esta entre 60kg e 81kg";
    } else if (altura >= 1.78) {
        return "Seu peso ideal esta entre 59kg e 79kg";
    } else if (altura >= 1.76) {
        return "Seu peso ideal esta entre 58kg e 77kg";
    } else if (altura >= 1.74) {
        return "Seu peso ideal esta entre 57kg e 75kg";
    } else if (altura >= 1.72) {
        return "Seu peso ideal esta entre 55kg e 73kg";
    } else if (altura >= 1.70) {
        return "Seu peso ideal esta entre 54kg e 72kg";
    } else if (altura >= 1.68) {
        return "Seu peso ideal esta entre 53kg e 70kg";
    } else if (altura >= 1.66) {
        return "Seu peso ideal esta entre 51kg e 68kg";
    } else if (altura >= 1.64) {
        return "Seu peso ideal esta entre 50kg e 67kg";
    } else if (altura >= 1.62) {
        return "Seu peso ideal esta entre 49kg e 65kg";
    } else if (altura >= 1.60) {
        return "Seu peso ideal esta entre 48kg e 64kg";
    } else if (altura >= 1.58) {
        return "Seu peso ideal esta entre 47kg e 62kg";
    } else if (altura >= 1.56) {
        return "Seu peso ideal esta entre 46kg e 60kg";
    } else if (altura >= 1.54) {
        return "Seu peso ideal esta entre 44kg e 59kg";
    } else if (altura >= 1.52) {
        return "Seu peso ideal esta entre 43kg e 57kg";
    } else if (altura >= 1.50) {
        return "Seu peso ideal esta entre 42kg e 56kg";
    }
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, msg2, isValid) {
    const resultado = document.querySelector('#resultado');
    const resultado2 = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();
    const p2 = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafro-resultado');
        p2.classList.add('paragrafro-resultado');
    } else {
        p.classList.add('bad');
        p2.classList.add('bad');
    }

    p.innerHTML = msg;
    p2.innerHTML = msg2;

    resultado.appendChild(p);
    resultado2.appendChild(p2);
}