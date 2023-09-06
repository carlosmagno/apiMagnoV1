
/**
 * @param {*} tipoPai //
 * @param {*} idPai 
 * @param {*} estruturaInterna 
 * @param {*} prefixoID 
 * @param {*} estilo
 */
export function criarElementos(tipoPai, idPai, estruturaInterna, prefixoID, estilo, dados){
    var elementPai = document.createElement(tipoPai);
    document.body.insertAdjacentElement("beforeend", elementPai)
    elementPai.setAttribute('id',idPai )

    var elementPaiSelect = document.getElementById(idPai)

   //var matrizInter=[]
    console.log(estruturaInterna)
    estruturaInterna.forEach((element, index) => {
        console.log(element)
        console.log(index)
        var ele = document.createElement(estruturaInterna[index])
        var idMatriz = ele.setAttribute('id', `${prefixoID}${index}`);
       // matrizInter.push(idMatriz)
        //document.getElementById()
        elementPai.appendChild(ele)
        
        
    });
    //setElementos(matrizInter)
    /** Definição de Estilos */
   //estilo = {cor:estilo.cor}
    elementPaiSelect.style.backgroundColor=estilo.backgroundColor
    elementPaiSelect.style.color=estilo.color
    console.log(tipoPai)
    console.log(idPai)


    //divHome.insertAdjacentElement("beforeend", newPost)
   

};

export function listarElementos(obj, func){

    for (var prop in obj) {
        // ctrl+shift+k (para abrir o console no mozilla firefox)
        console.log(prop,obj[prop]);
        //criarElementos(func)
      }

}

export function setHtml(id, text){
    document.getElementById(id).innerHTML=text
}

export function setElementos (matriz) {
    matriz=[]
    matriz.forEach(element =>{
        var sele = document.getElementById(element)
        console.log(sele)
        matriz.push(sele)
        console.log(matriz)
    })
}
