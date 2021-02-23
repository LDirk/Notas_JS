var botaoAdicionar = document.querySelector("#adicionar-materia");

botaoAdicionar.addEventListener("click", function(event){

	event.preventDefault();
	
	var form = document.querySelector("#adicionar");

	materia = (form.nome.value);
	nota1 = (form.vae1.value);
	nota2 = (form.vae2.value); 
	credito = (form.creditos.value); 


	var notaTr = document.createElement("tr"); 

	var tdNome = document.createElement("td");
	var tdNota1 = document.createElement("td");
	var tdNota2 = document.createElement("td");
	var tdcredito = document.createElement("td");
	var tdNotaFinal = document.createElement("td");
	var tdSituacao = document.createElement("td");

	tdNome.textContent = materia; 
	tdNota1.textContent = nota1; 
	tdNota2.textContent = nota2; 
	tdcredito.textContent = credito; 

	notaTr.appendChild(tdNome);
	notaTr.appendChild(tdNota1);
	notaTr.appendChild(tdNota2);
	notaTr.appendChild(tdcredito)

	var tabela = document.querySelector("#tabela-nota");
	tabela.appendChild(notaTr);


});