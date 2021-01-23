

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://www.linkedin.com/in/gilbertoandreatta/");
    window.location.href = "https://www.linkedin.com/in/gilbertoandreatta/";
}


/*
//PASSAR O MOUSE:
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
    //alert("trocar texto");
}

//qdo tira o MOUSE:
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse AQUI";    
}
*/

//passar o mouse de outro jeito:
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}



//FUNÇÃO ONLOAD
function load() {
    alert("página carregada");
}


//FUNÇÃO ONCHANGE
function funcaoChange(elemento) {
    console.log(elemento.value) 
}





/*
function clicou(){
    alert("Obrigado por clicar");
}
*/




/*
// FUNÇÕES

function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));


function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));


function validaIdade(idade) {
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }     
    return validar;   
}
var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/







/* DATA

var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());

console.log("hoje é " + d.getDate() + "/" + (d.getMonth()+1));
*/







/*
//LAÇOS DE REPETIÇÃO

FOR

var count;
for(count=0; count <= 5; count++) {
    //alert(count);
    console.log(count);
};
*/


/*  WHILE
var count = 0; 
while(count <= 5) {
    console.log(count);
    //count = count+1;
    //alert(count);
    count++
}
*/









/*
var idade = prompt("Qual é a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}    
*/








/*
//lista de dicionários
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/






/*
//dicionário
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/









/*
var lista = ["maçã", "pera", "laranja"];
console.log(lista);
console.log(lista[1])
alert(lista[1]);

lista.push("uva");
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.length);

console.log(lista.reverse());

//console.log(lista.toString());

//console.log(lista[0]);
//console.log(lista.toString()[0]);

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/








//var nome = "Gilberto Andreatta Maia";
//var idade = 44;
//var idade2 = 10;

//var n1 = 5;
//var n2 = 3;

//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 + n2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());

