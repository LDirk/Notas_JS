
var titulo = document.querySelector(".titulo");

// Para alterar o conteudo da variavel titulo 
titulo.textContent = "Cálculo das notas";


// Calculando as notas

var materias = document.querySelectorAll(".Nota");


for (var i = 0; i< materias.length; i++){

	
	var materia = materias[i]
	
	var tdvae1 = materia.querySelector(".info-VAE1");
	var vae1 = tdvae1.textContent;

	var tdvae2 = materia.querySelector(".info-VAE2");
	var vae2 = tdvae2.textContent;


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
}


