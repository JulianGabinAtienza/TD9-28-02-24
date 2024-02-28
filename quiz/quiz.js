// Ajout des questions et des réponses

const questions = [
    {id: 1, 
    question: 'Qui est Brendan Eich ?',
    reponses: {
        a : 'Le fils de Douglas Eich',
        b : 'Le ministre de l\'éducation Finlandaise',
        c : 'Le créateur de Javascript',
        d : 'L\'inventeur de Chat GPT' 
    },
    correction: 'c'},
    {id: 2, 
    question: 'Javascript a été créé à partir de Java ?',
    reponses: {
        a : 'Vrai',
        b : 'Faux',
    },
    correction : 'b'},
    {id: 3, 
    question: 'Qu\'est ce qu\'un objet en JS ?',
    reponses: {
        a : 'Une paire de clés',
        b : 'Une entité cosmique',
        c : 'Un conteneur d\'informations',
        d : 'Rien d\'intéressant',
    },
    correction : 'c'}
]

// Ajout du système de correction

// HTML du site

const body = document.querySelector('body');

const QCM1 = document.createElement('div');
const N1 = document.createElement('h1');
const Q1 = document.createElement('h2');
const form1 = document.createElement('form');
const input1 = document.createElement('input');
const label1 = document.createElement('label');
const input2 = document.createElement('input');
const label2 = document.createElement('label');
const input3 = document.createElement('input');

const label3 = document.createElement('label');
const input4 = document.createElement('input');
const label4 = document.createElement('label');

let result1 = document.createElement('p');

const QCM2 = document.createElement('div');
const N2 = document.createElement('h1');
const Q2 = document.createElement('h2');
const form2 = document.createElement('form');
const input5 = document.createElement('input');
const label5 = document.createElement('label');
const input6 = document.createElement('input');
const label6 = document.createElement('label');

let result2 = document.createElement('p');

const QCM3 = document.createElement('div');
const N3 = document.createElement('h1');
const Q3 = document.createElement('h2');
const form3 = document.createElement('form');
const input7 = document.createElement('input');
const label7 = document.createElement('label');
const input8 = document.createElement('input');
const label8 = document.createElement('label');
const input9 = document.createElement('input');
const label9 = document.createElement('label');
const input10 = document.createElement('input');
const label10 = document.createElement('label');

let result3 = document.createElement('p');

const submit = document.createElement('input');

// Ajout des fonctionnalité, classes et des textes

// QCM1
QCM1.className = 'QCM1';

N1.textContent = '1';
Q1.textContent = '1 - Qui est Bredan Eich ?';

form1.setAttribute('required', true);

input1.type = 'radio';
input1.name = 'question1';
label1.textContent = 'a : Le fils de Douglas Eich';
input2.type = 'radio';
input2.name = 'question1';
label2.textContent = 'b : Le ministre de l\'éducation Finlandaise';
input3.type = 'radio';
input3.name = 'question1';
label3.textContent = 'c : Le créateur de Javascript';
input4.type = 'radio';
input4.name = 'question1';
label4.textContent = 'd : L\'inventeur de Chat GPT';

// QCM2
QCM2.className = 'QCM2';

N2.textContent = '2';
Q2.textContent = '2 - Javascript à été créé à partir de Java ?';

form2.setAttribute('required', true);

input5.type = 'radio';
input5.name = 'question2';
label5.textContent = 'a : Vrai';
input6.type = 'radio';
input6.name = 'question2';
label6.textContent = 'b : Faux';

// QCM3
QCM3.className = 'QCM3';

N3.textContent = '3';
Q3.textContent = 'Qu\'est ce qu\'un objet en JS';

input7.setAttribute('required', true);

input7.type = 'radio';
input7.name = 'question3';
label7.textContent = 'a : Une paire de clés';
input8.type = 'radio';
input8.name = 'question3';
label8.textContent = 'b : Une entité cosmique';
input9.type = 'radio';
input9.name = 'question3';
label9.textContent = 'c : Un contenuer d\'information';
input10.type = 'radio';
input10.name = 'question3';
label10.textContent = 'd : Rien d\'intéressant';

submit.type = 'submit';
submit.id = 'submit';
submit.value = 'Valider';
submit

// Ajout des éléments dans le body

body.appendChild(QCM1);
body.appendChild(QCM2);
body.appendChild(QCM3);

QCM1.appendChild(N1);
QCM1.appendChild(Q1);
QCM1.appendChild(form1);

form1.appendChild(label1);
form1.appendChild(label2);
form1.appendChild(label3);
form1.appendChild(label4);

label1.appendChild(input1);
label2.appendChild(input2);
label3.appendChild(input3);
label4.appendChild(input4);

QCM1.appendChild(result1);

QCM2.appendChild(N2);
QCM2.appendChild(Q2);
QCM2.appendChild(form2);

form2.appendChild(label5);
form2.appendChild(label6);

label5.appendChild(input5);
label6.appendChild(input6);

QCM2.appendChild(result2);

QCM3.appendChild(N3);
QCM3.appendChild(Q3);
QCM3.appendChild(form3);

form3.appendChild(label7);
form3.appendChild(label8);
form3.appendChild(label9);
form3.appendChild(label10);

label7.appendChild(input7);
label8.appendChild(input8);
label9.appendChild(input9);
label10.appendChild(input10);

QCM3.appendChild(result3);

QCM3.appendChild(submit);

// Ajout des évènements

submit.addEventListener('click', function(e){
    
    let score = 0;

    if (input3.checked) {
        result1.textContent = `Bonnes réponses`;
        result1.style.color = 'green';
    } else {
        result1.textContent = `Mauvaise réponse`;
        result1.style.color = 'red';
    }

    if (input6.checked) {
        result2.textContent = `Bonnes réponses`;
        result2.style.color = 'green';
    } else {
        result2.textContent = `Mauvaise réponse`;
        result2.style.color = 'red';
    }

    if (input9.checked) {
        result3.textContent = `Bonnes réponses`;
        result3.style.color = 'green';
    } else {
        result3.textContent = `Mauvaise réponse`;
        result3.style.color = 'red';
    }

});