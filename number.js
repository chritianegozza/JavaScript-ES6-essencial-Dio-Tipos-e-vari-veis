const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimais = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimais);

//Transforma uma string em float
console.log('\nString parseada para float:', typeof parseFloat('13.20')); //se a ultima casa for zero ele corta

//Transforma um string em int
console.log('\nString parseada para int:', typeof parseInt('13.20'));

