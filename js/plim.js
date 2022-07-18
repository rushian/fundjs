let pessoa = {
  nome      : 'Lucas',
  sobrenome : 'Alves',
  idade     : 30,
  vip       : true
};



function executa_plim() {
  let plins = [];
  let corpo = "";
  let i = 0;

  for (i = 1; i <= 20; i++) {
    let resto = 0;
    let tipo = "impar";

    resto = i % 2;
    if (resto == 0) {
      tipo = "par";
    }
    resto = i % 4;
    if (resto == 0) {
      corpo += "plim-" + tipo + "<br>";
    } else {
      corpo += i + "-" + tipo + "<br>";
    }
  }

  if (document.getElementById("demo").innerHTML == "Par ou Impar") {
    document.getElementById("demo").innerHTML = corpo;
  } else {
    document.getElementById("demo").innerHTML = "Par ou Impar";
  }
}

function contarItensDaLista() {
  const cores = ['Azul', 'Verde', 'Amarelo', 'Branco', 'Preto'];
  //const cores = ['Azul'];
  //const cores = [];
  let msg = cores;

  if (cores.length > 1) {
    msg += "<p>A lista tem " + cores.length + " itens</p>";
  } else if (cores.length == 1) {
    msg += "<p>A lista tem 1 item</p>";
  } else {
    msg += "<p>A lista está vazia</p>";
  }

  console.log(cores);

  if (document.getElementById("lista_cor").innerHTML == msg) {
    document.getElementById("lista_cor").innerHTML = '';
    document.getElementById("btnContarItens").innerHTML = 'Contar Itens';
  } else {
    document.getElementById("lista_cor").innerHTML = msg;
    document.getElementById("btnContarItens").innerHTML = 'Itens contados';
  }
}

function contarItensDaListaMelhorado() {
  let msg = "";
  let cores = [];
  let solicita_cores = prompt(
    "Digite as cores separadas por vírgulas, por favor"
  );

  if (solicita_cores != null) {
    cores = solicita_cores.split(",");
  }

  //filtrar itens vazios
  cores = cores.filter(function (v) { 
    return v.trim();
  });

  console.log(cores.flat() + '\n' + cores.length);

  let tamanho = cores.length;

  switch (tamanho) {
    case 0:
      msg = "<p>A lista está vazia</p>";
      break;
    case 1:
      msg = "<p>A lista tem <span class='destaque'>1</span> item</p>";
      break;
    default:
      msg =
        "<p>A lista tem <span class='destaque'>" +
        cores.length +
        "</span> itens</p>";
      break;
  }
  let listar_cores = "";
  cores.forEach(function (cor, i) {
    listar_cores += cor + "<br>";
  });
  if (cores.length > 0) {
    if (cores[0].length > 0)
      msg += "<p>Cores digitadas:</p><p>" + listar_cores + "</p>";
    else {
      msg = "<p>A lista está vazia</p>";
    }
  }

  if (document.getElementById("lista_cor1").innerHTML == msg) {
    document.getElementById("lista_cor1").innerHTML =
      "<p>A lista está vazia</p>";
  } else {
    document.getElementById("lista_cor1").innerHTML = msg;
  }
}

function ordenarLista() {
  const alunos = ["Luciano", "José", "Abel", "Sara", "Jeferson"];
  console.log(alunos);
  let ordenados = alunos.sort();

  if (
    ordenados[0] ==
    document.getElementById("lista_ordenada").innerHTML.split(",")[0]
  ) {
    document.getElementById("lista_ordenada").innerHTML = ordenados.reverse();
  } else {
    document.getElementById("lista_ordenada").innerHTML = ordenados;
  }
}

function aumentarLista(){
  let nome = [];
  let inpt = prompt("Digite um nome");
  if(inpt != null && inpt.trim().length != 0){
    nome.push(inpt);
    console.log(nome);
    document.getElementById("lista_expansivel").innerHTML += "<br>" + nome ;
  }else{
    alert("Nome em branco não adicionado");
  }
}

function saudarPessoa(){
  
  if (!document.getElementById("pessoa").innerHTML.includes('Ola')) {
    document.getElementById("pessoa").innerHTML = 'Ola ' + pessoa.nome + " " + pessoa.sobrenome;
  } else {
    document.getElementById("pessoa").innerHTML = '';
  }
  
}

$(document).ready(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();
});
