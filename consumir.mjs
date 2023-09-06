import {cumprimentei} from "./cumprimentar.mjs";
import  {criarElementos, setHtml, setElementos, listarElementos} from "./renderize/renderize.mjs"
import { criarTabs } from "./layout/creatorLayout.mjs";

console.log(cumprimentei)

// var dados = {
//     1:{html:"<h1>Aula1</h1>", CSS:"body:color:red"},
//     2:{html:"<h1>Aula2</h1>", CSS:"body:color:blue"},
//     3:{html:"<h1>Aula3</h1>", CSS:"body:color:pink"}
// }

var dados = [
    {html:"<h1>Aula1</h1>", CSS:"body:color:red"},
    {html:"<h1>Aula2</h1>", CSS:"body:color:blue"},
    {html:"<h1>Aula3</h1>", CSS:"body:color:pink"}
]

criarElementos("div", "divPai", ['p','h1','h2','a'], 'papi', {color:'red', backgroundColor:'black'}), dados;

//listarElementos(dados, criarElementos("div", "divPai", ['p','h1','h2','a'], 'papi', {color:'red', backgroundColor:'black'}))
//setHtml('papi0', "Eu sou um parágrafo")
//var papi0 = document.getElementById('papi0').innerHTML="Eu sou um parágrafo"
//var papi1 = document.getElementById('papi1').innerHTML="Eu sou um título H1"
//var papi2 = document.getElementById('papi2').innerHTML="Eu sou um título H2"

//setElementos('papi0', 'papi1','papi2')
papi0.innerHTML="testewwwwwwwwww";
papi1.innerHTML="teste";
papi2.innerHTML="teste";
papi3.innerHTML="teste";
papi3.href="https://google.com";


criarTabs.criar([
    "tela1", "tela2","tela3", "tela4","tela5", "tela6",
]);
criarTabs.pular();
