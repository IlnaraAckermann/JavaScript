function fibonacci(){
    var termo = parseInt(document.getElementById('numeroFibonacci').value);
    var respostaFibonacci = document.getElementById('respostaFibonacci');
    
    var penultimo=0, ultimo=1;
    var numero;

    if (termo === 0 || termo === 1) {
        respostaFibonacci.innerHTML= "o numero " + termo + "faz parte da sequencia Fibonacci";
    } else if (termo > 1){
       while(ultimo<termo){
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
       }
       if (ultimo===termo) {
        respostaFibonacci.innerHTML= "O numero " + termo + " faz parte da sequencia Fibonacci";
       } 
       else {
        respostaFibonacci.innerHTML= "O numero " + termo + " não faz parte da sequencia Fibonacci";
       }
    }
    else{
        respostaFibonacci.innerHTML= "O numero " + termo + " não faz parte da sequencia Fibonacci";
    }
}


function faturamentoMensal(){
    const SP = 67836.43;
    const RJ = 36678.66;
    const MG = 29229.88;
    const ES = 27165.48;
    const OUTROS = 19849.53;
    var respostaFaturamentoMensal = document.getElementById('respostaFaturamentoMensal');
    
    let total = SP+RJ+MG+ES+OUTROS;
    
    respostaFaturamentoMensal.innerHTML= 
    "<p>A <b>Distribuidora</b> teve um faturamento <b>total</b> de: <b>" + total.toLocaleString('pt-BR') + "</b>"+
    "<p><b>SP</b> teve um faturamento de: <b>" + SP.toLocaleString('pt-BR') + "</b> o qual representa aproximadamente <b>" + ((SP/total)*100).toFixed(2) + "%</b> do faturamento total</p>"+  
    "<p><b>RJ</b> teve um faturamento de: <b>" + RJ.toLocaleString('pt-BR') + "</b> o qual representa aproximadamente <b>" + ((RJ/total)*100).toFixed(2) + "%</b> do faturamento total/p>"+
    "<p><b>MG</b> teve um faturamento de: <b>" + MG.toLocaleString('pt-BR') + "</b> o qual representa aproximadamente <b>" + ((MG/total)*100).toFixed(2) + "%</b> do faturamento total</p>"+
    "<p><b>ES</b> teve um faturamento de: <b>" + ES.toLocaleString('pt-BR') + "</b> o qual representa aproximadamente <b>" + ((ES/total)*100).toFixed(2) + "%</b> do faturamento total</p>"+
    "<p><b>Outros</b> tiveram um faturamento de: <b>" + OUTROS.toLocaleString('pt-BR') + "</b> o qual representa aproximadamente <b>" + ((OUTROS/total)*100).toFixed(2) + "%</b> do faturamento total</p>"


}


function inverterString(){
    var stringRecebida = document.getElementById('stringRecebida').value;
    var respostaStringInvertida = document.getElementById('respostaStringInvertida');

    let arrayStrigRecebida = stringRecebida.split('');
    let newString = "";

    for (let i = arrayStrigRecebida.length - 1; i >= 0; i--) { 
        newString += arrayStrigRecebida[i];
    }

    respostaStringInvertida.innerHTML= "A string invertida é: <b>"+ newString +"</b>"

}