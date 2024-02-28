// Tableau des choix de l'ordinateur
const table = ['pierre', 'feuille', 'ciseaux'];

// Choix du joueur et de l'ordinateur
const joueur = document.getElementById('joueur');
const ordi = document.getElementById('ordi');

const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');

// Input du joueur
const buttons = document.querySelectorAll('button');


buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        console.log(console.dataset.type);
        joueur.textContent = button.dataset.type;
    });
});

start.addEventListener('click', () => {
    Math.floor(Math.random() * table.length);
});