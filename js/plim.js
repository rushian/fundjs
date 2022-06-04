function executa_plim() {
    let plins = [];
    let corpo ='';
	let i = 0;
    
	for(i = 1; i <= 20; i++){
    	let resto = 0;
        let tipo = "impar";
       
        resto = i % 2;
        if (resto == 0){
        	tipo = "par";
        }
        resto = i % 4;
        if (resto == 0){
            corpo += "plim-" + tipo + "<br>";
        } else {
    		corpo += i + "-" + tipo + "<br>";
        }
        document.getElementById('demo').innerHTML = corpo;
       
        
    }

}
function contarItensDaLista(){
    const cores = ['azul', 'verde', 'amarelo', 'branco', 'preto'];
    document.getElementById('lista_cor').innerHTML = 'a lista contem ' + cores.length + ' itens';

}