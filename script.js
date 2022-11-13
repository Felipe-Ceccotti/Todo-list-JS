 var input = document.getElementById("tarefa");
 var add = document.getElementById("enviar");
 var main = document.getElementById("lista");
 var contador = 0
 
function addtarefa() {
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"> Deletar</i></button>
        </div>

    </div>`;
    //    quando há a crase para implementar um codigo e tem que
    //    passar uma função dentro deve se usar o ${}
    
    //adicionar Novo Item no main 
    main.innerHTML += novoItem
    // Zerar o campo de digitação 
    input.value="";
    input.focus();
    
    }
 }
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe == "item"){
        item.classList.add('clicado');
        
        var icone = document.getElementById('icone_' +id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
item.parentNode.appendChild(item);
    }
    else{
        item.classList.remove('clicado');
        
        var icone = document.getElementById('icone_' +id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}
    

 input.addEventListener ("keyup", function(event) {
    //se teclou enter 13= enter aciona o adicionar
    if(event.keyCode === 13){
       event.preventDefault();
        add.click();
    }
 })