Descrizione:
Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.



SCOMPOSIZIONE:

inserisco la cdn nell'HTML.
Creo una funzione per richiamare l'api richiesta tramite un ciclo for così da chiamarla per 10 volte e le inserisco in un array.
Stampo tutte le email nel DOM tramite VUE.