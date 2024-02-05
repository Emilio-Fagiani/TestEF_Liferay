async function fetchJoke() {
    try {

        const response = await fetch('https://v2.jokeapi.dev/joke/Programming');

        const data = await response.json();
        console.log('Risultato della chiamata:', data);

        if (data.setup == null || data.delivery == null) {

            document.getElementById('loadingMessage').style.display = 'none';
            alert("Proprietà non esistente!");
            
        } else {

            document.getElementById('setup').innerText = data.setup;
            document.getElementById('delivery').innerText = data.delivery;
            document.getElementById('message').style.display = "none";
        }
        

    } catch (error) {
        console.error('Si è verificato un errore:', error.message);
    }
}
document.getElementById('fetchButton').addEventListener('click', fetchJoke);
fetchJoke();