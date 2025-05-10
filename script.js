document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.download-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Kliknuto dugme za preuzimanje:', button.innerText);
            alert('Hvala što preuzimaš! Igra će odmah početi da se skida.');
        });
    });

    // Efekat titranja naslova
    const title = document.querySelector('header h1');
    let colors = ['#ff0000', '#cc0000', '#ff1a1a'];
    let i = 0;
    setInterval(() => {
        title.style.color = colors[i % colors.length];
        i++;
    }, 800);
});