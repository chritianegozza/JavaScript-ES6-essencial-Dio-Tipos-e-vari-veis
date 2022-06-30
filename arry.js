const users = ['Christiane', 'Arthur', 'Alex'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W'),
}

const persons = [
    {
        name: 'Christiane',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Arthur',
        age: 8,
        gender: gender.MAN
    }, 
    {
        name: 'Alex',
        age: 26,
        gender: gender.MAN
    }  
];

//Retornar a quantidade de itens de um arry
console.log('Itens:', persons.length);

//Verificar se é array
console.log('A variável persons é um  array:', Array.isArray(persons));

//Iterar os itens do arry
person.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}`);
    
});


//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens: mens');


//Retornar um novo
const personWithCourse = persons.map(person => {
    person.course. 'Instudução ao Javascript';
    
})  
    















































































