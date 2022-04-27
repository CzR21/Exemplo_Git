let tabela;

function adicionar(){
    
    let novoNome = document.getElementById("novoNome").value;
    let novaIdade = document.getElementById("novaIdade").value;
    let novaCidade = document.getElementById("novaCidade").value;
    tabela = document.getElementById("tabela");

    let linha = tabela.rows.length;
    linha -= 1;

    let novaLinha = tabela.insertRow(linha).innerHTML = 
        "<tr id='novalinha"+linha+"'>"+
            "<td id='nomeAdiconado"+linha+"'>"+novoNome+"</td>"+
            "<td id='idadeAdicionada"+linha+"'>"+novaIdade+"</td>"+
            "<td id='cidadeAdicionada"+linha+"'>"+novaCidade+"</td>"+
            "<td>"+
                "<button id='excluir"+linha+"' onclick='excluir("+linha+")'>Excluir</button>"+
                "<button id='editar"+linha+"' onclick='editar("+linha+")'>Editar</button>"+
                "<button id='salvar"+linha+"' onclick='salvar("+linha+")'>Salvar</button>"+
            "</td>"+
        "</tr>";
    
    document.getElementById("salvar"+linha).style.display = "none";

    document.getElementById("novoNome").value = null;
    document.getElementById("novaIdade").value = null;
    document.getElementById("novaCidade").value = null;
    
}

function excluir(linha){
    
    document.getElementById("novalinha"+linha+"").outerHTML = null;
}


function editar(linha){
    
    document.getElementById("editar"+linha).style.display = "none";
    document.getElementById("excluir"+linha).style.display = "none";
    document.getElementById("salvar"+linha).style.display = "inline";
    
    let nome = document.getElementById("nomeAdiconado"+linha);
    let idade = document.getElementById("idadeAdicionada"+linha);
    let cidade = document.getElementById("cidadeAdicionada"+linha);
    
    let nomeEditado = nome.innerHTML;
    let idadeEditado = idade.innerHTML;
    let cidadeEditado = cidade.innerHTML;
    
    nome.innerHTML = "<input type='text' id='nomeEdita"+linha+"' value='"+nomeEditado+"'>";
    idade.innerHTML = "<input type='number' id='idadeEditar"+linha+"' value='"+idadeEditado+"'>";
    cidade.innerHTML = "<input type='text' id='cidadeEditar"+linha+"' value='"+cidadeEditado+"'>";
}


function salvar(linha){
    
    let nomeSalvar = document.getElementById("nomeEdita"+linha).value;
    let idadeSalvar = document.getElementById("idadeEditar"+linha).value;
    let cidadeSalvar = document.getElementById("cidadeEditar"+linha).value;
    
    document.getElementById("nomeAdiconado"+linha).innerHTML = nomeSalvar;
    document.getElementById("idadeAdicionada"+linha).innerHTML = idadeSalvar;
    document.getElementById("cidadeAdicionada"+linha).innerHTML = cidadeSalvar;
    
    document.getElementById("editar"+linha).style.display = "inline";
    document.getElementById("excluir"+linha).style.display = "inline";
    document.getElementById("salvar"+linha).style.display = "none";
}




