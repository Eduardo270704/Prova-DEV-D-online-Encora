/*Importante: Caso node js não esteja instalado é necessário a instalação do mesmo.

Para executar basta usar "npm run start" no terminal ou "node ./src/CoinChange.js".
*/

// Classe CoinChange.
class CoinChange {
    // Este método estático calcula todas as combinações possíveis de moedas que podem ser usadas para representar um valor.
    static makeChange(n) {
        const result = new Set();
        // Aqui analisamos a quantidade de quarters podem ser utilizados.
        for (let quarters = 0; quarters <= n / 25; quarters++) {
            // Aqui fazemos com os dimes.
            for (let dimes = 0; dimes <= Math.floor((n - quarters * 25) / 10); dimes++) {
                // Seguido, pelos nickels.
                for (let nickels = 0; nickels <= Math.floor((n - quarters * 25 - dimes * 10) / 5); nickels++) {
                    // E, finalizamos com pennies.
                    const pennies = n - quarters * 25 - dimes * 10 - nickels * 5;
                    // Agora adicionamos a combinação a um set.
                    result.add([quarters, dimes, nickels, pennies]);
                };
            };
        };
        // Por fim, convertemos os sets em um array e retornamos.
        return Array.from(result);
    };
};

// Exemplo de uso.

// n = valor desejado a ser buscado.
const n = 12;
// Chamada do método.
const combinations = CoinChange.makeChange(n);
// Saida das combinações no terminal.
console.log(combinations);
