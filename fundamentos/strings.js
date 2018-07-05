const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));// Tabela 'unicode HTML' ou Tabela 'Ascii'
console.log(escola.indexOf('3'));
console.log(escola.substring(1));// imprimir a partir do indice 1 em diante
console.log(escola.substring(0, 3));//imprime a partir do indice 0 até o 3 sem inclui-lo / em outras palavras 'a partir de 0 quero apenas 3 caracters' 
console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e'));
console.log(escola.replace(/\w/g, 'e'));
console.log("Ana,Maria,Juliana,Edwin".split(","))//convertendo string para array
console.log("Ana,Maria,Juliana,Edwin".split(/,/))//convertendo string para array
