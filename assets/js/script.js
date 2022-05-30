//obtenons tout les éléments requis

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
	e.preventDefault(); //empêche le formulaire de se soumettre
	statusTxt.style.display = "block";

	//Ajax pour envoyer les données du formulaire de html à php
	let xhr = new XMLHttpRequest(); //créer un nouvel objet xml
	xhr.open("POST","php/message.php", true); //envoi de la requête post au fichier message.php
	xhr.onload = () => {
		//une fois le chargement ajax
		if(xhr.readyState == 4 && xhr.status == 200) { //si le statut de la réponse ajax est 200 et readyState est 4, cela signifie qu'il n'y a pas d'erreur
			let response = xhr.response; //stockage de la réponse ajax dans une variable
			console.log(response);

		}
	}
	let formData = new FormData(form); //création d'un nouvel objet FormData. 
																 //Cet objet est utilisé pour envoyer les données du formulaire
	xhr.send(formData); //envoi de données de formulaire
} 