document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://forms.carloscasado.es/?key=uSqrYFY0515t', {
        method: 'POST',
        body: data,
    });

    if (response.ok) {
        alert('¡Mensaje enviado correctamente!');
        form.reset();
    } else {
        alert('Hubo un error al enviar el mensaje.');
    }
});