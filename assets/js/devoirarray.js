function afficherBonjour() {
						var prenom = document.getElementById("prenom").value;
						if (prenom) {
							document.getElementById("message").innerText = "Bonjour, " + prenom + " !";
						} else {
							document.getElementById("message").innerText = "Veuillez entrer un prénom.";
						}
}

function hidesection(){
						var section = document.getElementById("aide");
						section.style.display = "none";
}

function chargerfichier() {
						var fichier = document.getElementById("fileinput").files[0];
						if (fichier) {
							var lecteur = new FileReader();
							lecteur.onload = function(a) {
							document.getElementById("formattxt").textContent = a.target.result;
							};
							lecteur.readAsText(fichier);
						}
						else{
						alert("Sélectionner un fichier au format .txt :");
						}
}

function exercice1() {
    let tableau = [5, 6, 7];

    let derniereValeur = tableau.pop();  // pop() retire la dernière valeur du tableau
    tableau.unshift(derniereValeur);     // unshift() place cette valeur au début du tableau

    let resultat = tableau; 

  
    document.getElementById("exercice1codeResultat").textContent = `
        let tableau = [5, 6, 7];
        let derniereValeur = tableau.pop();
        tableau.unshift(derniereValeur);
        let resultat = tableau; 
    `; // Afficher le code dans le paragraphe

    document.getElementById("exercice1Resultat").textContent = JSON.stringify(resultat);  // Affiche le tableau après modification
}

function exemple2() {

    let texte = document.getElementById("texteInput").value; // Récupération du texte saisi


    if (texte.trim() === "") {
        document.getElementById("exercice2Resultat").textContent = "Veuillez entrer du texte à segmenter.";
        return;
    } // Vérification de la bonne saisi du texte (sinon retour du message d'erreur)
    
    function transformerEnMajuscule(mot) {
        return mot.toUpperCase();
    }// Transformation des mots en majuscule
  
    let mots = texte.split(' ').map(transformerEnMajuscule);   // Coupe du texte en mots (selon les espaces) et transformer chaque mot en majuscule
   
    let resultat = mots.join(' '); // Joindre les mots modifiés en une seule chaîne

    document.getElementById("exercice2codeResultat").textContent = `
        let texte = document.getElementById("texteInput").value;
        function transformerEnMajuscule(mot) {
            return mot.toUpperCase();
        }
        let mots = texte.split(' ').map(transformerEnMajuscule);
        let resultat = mots.join(' '); 
    `;// Afficher le code dans le paragraphe

    
    document.getElementById("exercice2Resultat").textContent =  mots.join(" | "); // Afficher le résultat dans l'élément id="exercice2Resultat"
}


function exemple3() {

    let texte = document.getElementById("texteInput2").value.trim();// Récupération du texte saisi

    
    if (texte === "") {
        document.getElementById("exercice3Resultat").textContent = "Veuillez entrer du texte à segmenter.";
        return;
    } // Vérification de la bonne saisi du texte (sinon retour du message d'erreur)

    let mots = texte.split(/\s+/).filter(mot => mot.length > 3); // Garde seulement les mots de plus de 3 caractères

    let resultat = mots.join(' '); // Joint les mots filtrés en une seule chaîne

    // Afficher le code dans le paragraphe
    document.getElementById("exercice3codeResultat").textContent = `
        let texte = document.getElementById("texteInput2").value.trim();
        let mots = texte.split(/\\s+/).filter(mot => mot.length > 3);
        let resultat = mots.join(' ');
    `;// Afficher le code dans le paragraphe

    document.getElementById("exercice3Resultat").textContent = mots.join(" | ")|| "Aucun mot à afficher après filtrage.";
} // Afficher le résultat dans l'élément id="exercice3Resultat"

function exemple4() {
    let texte = document.getElementById("texteInput3").value.trim();
            
            if (texte === "") {
                document.getElementById("exercice4Resultat").textContent = "Veuillez entrer du texte.";
                return;
            }

            let mots = texte.split(/\s+/); 
            document.getElementById("exercice4Resultat").textContent = mots.join(" | ");
        } // Je ne savais pas comment afficher le tableau donc j'ai juste segmenter