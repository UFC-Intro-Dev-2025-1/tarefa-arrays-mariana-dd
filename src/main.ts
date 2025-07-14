// Tarefa: Treinando Arrays

// Seu colega de trabalho precisou sair urgente e pediu para você completar o código dele na entrega que ele precisa fazer hoje. Como um bom amigo, você concordou. Mas ele não passou muitas instruções. O código abaixo está incompleto. Encontre os locais que precisam de ajuste para cumprir com as demandas abaixo. Não altere as estruturas textuais.
// Utilize o comando: `npm test` para validar a resposta.

// Requisitos da entrega:
// 1. Criar um array de números. ✅
// 2. Criar uma função para exibir o array e seu tamanho. ✅
// 3. Adicionar elementos 60 e 70 ao array. ✅
// 4. Exibir o array usando a função mostrarArray. ✅
// 5. Remover o último elemento do array usando o método pop. ✅
// 6. Exibir o array usando a função mostrarArray. ✅
// 7. Mostrar o elemento excluído. ✅
// 8. Mostrar cada elemento do array em uma linha usando o método forEach. ✅
// 9. Criar um novo array com os valores dobrados usando o método map. ✅
// 10. Calcular a soma de todos os elementos do array usando o método reduce. ✅

const numeros: number[] = [10, 20, 30, 40, 50];

//2
function mostrarArray(array: number[]): void {
    console.log('--------------------------------');
    console.log(`Tamanho: ${array.length}`);
    console.log(`Array: ${array}`);
}
mostrarArray(numeros);

//3
numeros.push(60, 70);

//5
const elementoExcluido = numeros.pop();

//6
mostrarArray(numeros);

//7
console.log(`Elemento excluído: ${elementoExcluido}`);

//8
numeros.forEach((num) => {
    console.log(num);
});

//9
const dobrados = numeros.map((num) => num * 2);
mostrarArray(dobrados);

//10
const soma = numeros.reduce((acum, atual) => acum + atual, 0);
console.log(`Soma dos elementos do array: ${soma}`);

// para rodar o código, use o comando:
// npm run build
