
var titulo = document.querySelector(".titulo");

// Para alterar o conteudo da variavel titulo 
titulo.textContent = "Histórico De Notas";


// Calculando as notas

var materias = document.querySelectorAll(".Nota");

var somacreditos = 0; 
var somanotas_pesos = 0; 
var CrGeral = 0; 

for (var i = 0; i< materias.length; i++){

	
	var materia = materias[i]
	
	var tdvae1 = materia.querySelector(".info-VAE1");
	var vae1 = tdvae1.textContent;

	var tdvae2 = materia.querySelector(".info-VAE2");
	var vae2 = tdvae2.textContent;

	var tdcredito = materia.querySelector(".creditos");
	var credito = tdcredito.textContent; 

	vae1valido = true;
	vae2valido = true; 

	if (vae1<0 || vae1>10){

		alert("Nota da vae1 Invalida");
		vae1valido = false;
		tdvae1.textContent = "Invalido";

		materia.style.color = "black";
		materia.style.backgroundColor = "LightCoral";	
	
	}

	if (vae2<0 || vae2 >10){
		alert("Nota da vae2 invalida");
		vae2valido = false; 
		tdvae2.textContent = "Invalido";

		materia.style.color = "black";
		materia.style.backgroundColor = "LightCoral"


	}


	if (vae1valido && vae2valido){

		var notafinal = (parseInt(vae1)+parseInt(vae2))/2;

		var tdnotafinal = materia.querySelector(".info-NotaFinal");

		tdnotafinal.textContent = notafinal;
	}

	// Calculando a situação ( Aprovado ou reprovado)

	var tdsituacao = materia.querySelector(".info-Situação");

	if (vae1valido && vae2valido){

		if (notafinal>=7){
			tdsituacao.textContent = "Aprovado";
		}
		else if (notafinal<7 && notafinal >=0){
			tdsituacao.textContent = "Reprovado";
		}
		else{
			tdsituacao.textContent = "";
			tdnotafinal.textContent ="";
		}
	}

	if (vae1valido && vae2valido){

		somacreditos = somacreditos + parseInt(credito); 
		

		somanotas_pesos = somanotas_pesos + parseFloat(notafinal)*parseInt(credito);
		
	}
}


CrGeral = somanotas_pesos/somacreditos;

var notas = document.querySelectorAll(".NotaGeral");

for (var i = 0; i< notas.length; i++){

	var nota = notas[i]

	if (vae1valido && vae2valido){
		var tdcr = nota.querySelector(".info-cr");
		tdcr.textContent = CrGeral.toFixed(2);

	}

}











