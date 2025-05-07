function verificarParOuImpar (numero) {
    if (numero %2 === 0){
        return "par";
    } else {
        return "Ímpar";
    }
}
let resultado = verificarParOuImpar (numero);
console.log(`O Número ${numero} é ${resultado}`)

const botao = document.getElementById("btnNumero");
botao.addEventListener("click", function(){
    alert("Ll");

});