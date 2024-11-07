// Definindo o momento final (1 de dezembro de 2024 à 00:00)
const endDate = new Date('December 1, 2024 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Calculando dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualizando os elementos HTML com os valores calculados
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // Se o contador acabar
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Colapso Final!";
    }
}

function enterFullscreen() {
    const body = document.documentElement;

    // Verifica se a API de tela cheia está disponível
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { // Para Firefox
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { // Para Chrome, Safari, Opera
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { // Para IE/Edge
        body.msRequestFullscreen();
    }
}

// Atualiza a contagem regressiva a cada segundo
const interval = setInterval(updateCountdown, 1000);
