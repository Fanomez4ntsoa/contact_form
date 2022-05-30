//Récupérons tout les éléments requis

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
	e.preventDefault(); //empêche le formulaire de se soumettre
	statusTxt.style.display = "block";
	statusTxt.style.color = "darkslategray";

	//Ajax pour envoyer les données du formulaire de html à php
	let xhr = new XMLHttpRequest(); //créer un nouvel objet xml
	xhr.open("POST","php/message.php", true); //envoi de la requête post au fichier message.php
	xhr.onload = () => {
		//une fois le chargement ajax
		if(xhr.readyState == 4 && xhr.status == 200) { //si le statut de la réponse ajax est 200 et readyState est 4, cela signifie qu'il n'y a pas d'erreur
			let response = xhr.response; //stockage de la réponse ajax dans une variable
			//si la réponse est une erreur comme entrer une adresse email valide
			if (response.indexOf("Les champs Email et message sont obligatoires !") != -1 || response.indexOf("Saisissez une email valide !") || response.indexOf("Erreur d'envoye du message !") ) {
				statusTxt.style.color = "red";
			} else {
				form.reset();
				setTimeout(() => {
					statusTxt.style.display = "none";
				}, 3000); //cacher le texte d'état après 3secondes
			}
			statusTxt.innerText = response;
		}
	}
	let formData = new FormData(form); //création d'un nouvel objet FormData. 
																 		 //Cet objet est utilisé pour envoyer les données du formulaire
	xhr.send(formData); //envoi de données de formulaire
} 