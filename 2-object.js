const user = {
    name: 'Christiane'
    lastName = 'Natacha Gozza'
};

//Recupera as chaves do objeto
console.log('\nPropriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:, Object.values(user));


//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedade de objectos
Object.assign(user, {fulName: 'Christiane Natacha Gozza'});

console.log('\nAdiciona a propriedades fulName no object user:', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:27}));

//Previne todas as alterações de um objeto
const newObj = {foo: 'bar'};
Object.freezer(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar ='foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alterações de propriedade existente em um objeto
const person = {name: 'Christiane'};
Object.seal(person);

person.name = 'Christiane Natacha';
delete person.name;
person.age = 27;

cosnole.log('\nVariável person após as alteações:', person);
