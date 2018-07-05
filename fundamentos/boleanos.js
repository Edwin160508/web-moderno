let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));//true
console.log(('' || null || 0 || 'epa'));//exibe epa

let nome = '';
console.log(nome || 'Desconhecido!') // maneira de atribuir  valor padrão'' em uma variavel no caso nome

let nome2 = 'Edwin';
console.log(nome2 || 'Desconhecido!') // maneira de atribuir  valor padrão'Edwin' em uma variavel no caso nome2
