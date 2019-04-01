<meta charset = 'utf-8'/>
<input type='text' id='numero'/>
<input type='submit' value='Adicione e verifique no Bingo!' id='adivinhar'/>
<script type="text/javascript">
var n1 = Math.round(Math.random() * 60)
var n2 = Math.round(Math.random() * 60)
var n3 = Math.round(Math.random() * 60)
var n4 = Math.round(Math.random() * 60)
var n5 = Math.round(Math.random() * 60)
var n6 = Math.round(Math.random() * 60)
var loteria = [n1,n2,n3,n4,n5,n6];
console.log(loteria);
var escolhas = [];
var caixaDoNumero = document.getElementById('numero');
function adicionarEscolha(){
    var numero = document.getElementById('numero').value;
    for(i = 0; i < escolhas.length; i = i + 1){
        prompt('digite sua escolha: ');
        if (escolhas[i] == caixaDoNumero.value) {
            alert('acertou!')
            return
        }
        else{
            alert('errou!')
        }
    }
    escolhas.push(numero);
    console.log(escolhas);
};
var botaoAdivinhar = document.getElementById('adivinhar');
botaoAdivinhar.onclick = adicionarEscolha;
</script>