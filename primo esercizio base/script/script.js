//solo su console

// //Chiedi all'utente di inserire il suo nome utilizzando prompt()..
// let userName = prompt('come ti chiami?');

// //Crea un messaggio di saluto personalizzato che includa il nome dell'utente.
// let message = 'Ciao' + " " + userName + " " + 'Benvenuto in questo primo esercizio!';

// //Mostra il messaggio di saluto all'utente utilizzando alert().
// alert(message);


//implementiamolo anche sul dom! 

//xreo l'evento click sul button send e dentro aggiungo tutto ciò che deve succedere 
document.getElementById("send").addEventListener("click", function () {

    //recupero il valore inserito dall'utente da un input
    let userName = document.getElementById("userName").value;

    //Crea un messaggio di saluto personalizzato che includa il nome dell'utente.
    let welcomeMessage = 'Ciao ' + userName + ' Benvenuto in questo primo esercizio!';

    document.getElementById('welcome').textContent = welcomeMessage;
});
