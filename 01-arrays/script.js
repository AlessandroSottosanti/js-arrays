const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]

let lastIndex = teachers.length - 1;
console.log(lastIndex);

for(i = 0; i <= lastIndex; i++ ) {
  console.log(`${teachers[i]} è l'insegnante in posizione ${i}.`);
}

console.log('');
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

console.log('');
// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice(4, 1, "Patrick");
console.log(teachers);

console.log('');
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
console.log(lastTeacher, "è l'ultimo insegnante");
console.log(teachers);


console.log('');
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher, "è il primo insegnante");
console.log(teachers);


console.log('');
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);


console.log('');
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.splice(0, 0, "Sarah");
console.log(teachers);



console.log('');
// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);


console.log('');
// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log("L'insegnante Lewis è all'index", lewisIndex);


console.log('');
// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString);


console.log('');
// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log (isTeachersEmpty);

