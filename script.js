// Configuração do temporizador 
const startDate = new Date('2023-12-02'); // Coloque a data aqui

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos`;
}

setInterval(updateTimer, 1000);
updateTimer();