<?php 

	//Récupérations de toutes les valeurs du formulaire
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$website = $_POST['website'];
	$message = $_POST['message'];

	if(!empty($email) && !empty($message)) { //si les champs "email" et "message" ne sont pas vides
		if(filter_var($email, FILTER_VALIDATE_EMAIL)) { //si l'email saisi par l'utilisateur est valide
			$receiver = "voary.fanomezantsoa@gmail.com" //adresse email du destinataire de l'e-mail
			$subject = "From: $name <$email>" // l'object de l'email.
			//fusionner toutes les valeurs de l'utilisateur dans la variable. \n est utilisé pour une nouvelle ligne
			$body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
			$sender = "From: $email;" //email de l'expéditeur
			if(mail($receiver, $subject, $body, $sender)) { //mail() est une fonction php intégrée qui permet d'envoyer du courrier.
				echo "Votre message a été envoyé";
			} else {
				echo "Erreur d'envoye du message !";
			}
		} else {
			echo "Saisissez une email valide !";
		}
	} else {
		echo "Les champs Email et message sont obligatoires !";
	}

?>