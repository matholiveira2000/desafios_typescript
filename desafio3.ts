let botaoAtualizar = document.getElementById('atualizar-saldo')! as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let valueSaldo = 0

function somarAoSaldo(soma: number) {
    valueSaldo += soma;
    limparValores();
    campoSaldo.innerHTML = valueSaldo.toString()
}

function limparValores(){
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo){
        valueSaldo = 0;
        campoSaldo.innerHTML = valueSaldo.toString()
    }
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
