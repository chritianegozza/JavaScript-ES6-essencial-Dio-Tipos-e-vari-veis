const symbol1 = Symbol(nome);
const symbol2 = Symbol(nome);

//Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const namesymbol1 = Symbol('name');
const namesymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Christiane',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Christiane Gozza'
}

console.log(user);

//Symbols criam propriedade que não são enumberables
for (const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedade do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySybols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));


//Criar um enum
const directions = {
    UP : Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

