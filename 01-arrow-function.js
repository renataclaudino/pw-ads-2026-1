//*função tradicional com 1 parametro*/
function quadrado (n) {
    return n * n
}
console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*FUNÇÃO EQUIVALENTE, USANDO A SINTAXE ARROW FUNCTION
- NÃO NECESSITA DE CHAVS
- NÃO NECESSITA DE PARANTESES EM TORNO DO PARAMETRO
- NÃO NECESSITA DA PALAVRA CHAVE return- A PALABRA CHAVE FUNCTION É SUBSTITUIDA PELA FLECHA
=> LOGO APÓS O PARAMETRO
A ARROW FUNCTION É INVOCADA USANDO O NOME DA CONSTANTE QUE A RECEBE COMO VALOR*/

const quadrado2 = n => n * n
console.log('[ARROW] O quadrado de 7 é', quadrado2(7))