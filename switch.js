/**
switch (expressão){
case valor1:
[break;]
case valorN:
[break;]

default:
[break;]
}

**/

const fruit = 'pera';//aqui você pode mudar o que será buscado no laço

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / Kg');
        break;//aqui para a execução 
    case 'mamão':
    case 'pera':
         console.log('R$ 2,00 / Kg'); 
        break;
    default:
        console.log('Produto não cadastrado');
        break;
}