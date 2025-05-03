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



// LES FONCTIONS DU PROJET FINAL COMMENCENT ICI (PREMIERE PARTIE)

//A noter que pour certaines fonctions je ne me suis pas calquée complètement sur le javascript fourni

function Infoscv() { // La fonction va permettre de masquer ou d'afficher la première partie de mon CV
    const section = document.getElementById('infosSupplementaires'); // Récupération de la section contenant les informations supplémentaires sur le CV
    const bouton = document.getElementById('btnInfos');

    if (section.style.display === "none") { // Vérification si le bloc est en ce moment caché
        section.style.display = "block"; // Si le bloc est caché, alors il sera réaffiché
        bouton.textContent = "Masquer les informations sur mon CV"; // Mise à jour du bouton (vu que les sections sont maintenant visibles)
    } else { // Sinon si la section est visible
        section.style.display = "none"; // alors on cache la section
        bouton.textContent = "Afficher les informations sur mon CV"; // Nouvelle mise à jour du bouton (les sections sont maintenant cachées)
    }
}

function afficherDateHeure() { // Cette fonction va nous permettre de récupérer la date et l'heure séparées
    const maintenant = new Date();
    
    const date = maintenant.toLocaleDateString(); // Récupère la date de l'utilisateur
    const heure = maintenant.toLocaleTimeString(); // Récupère l'heure de l'utilisateur

  
    const texte = `Nous sommes le ${date} et il est ${heure}`; // Le texte dans lequel la date et l'heure seront affichés

    document.getElementById('dateAffichee').textContent = texte;
}

function afficherMajuscule() { 
    
    const dateHeure = document.getElementById('dateAffichee').textContent; // Récupére le texte affiché donc la date et l'heure

   
    document.getElementById('dateAffichee').textContent = dateHeure.toUpperCase();  // Mets tout le texte en majuscules
}

function InfoModeEmploi() { // Cette fonction reprend le même principe que la fonction InfoCV mais pour le Mode d'Emploi donc je ne recommenterai pas
    const section = document.getElementById("modeEmploi");
    const bouton = document.getElementById("btnModeEmploi");

    if (section.style.display === "none") {
        section.style.display = "block";
        bouton.textContent = "Masquer le mode d’emploi";
    } else {
        section.style.display = "none";
        bouton.textContent = "Afficher le mode d’emploi";
    }
}


// PROJET FINAL DEUXIEME PARTIE : LES OUTILS D'ANALYSE

window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0]; // Correction ici : pour accèder au fichier dans l'élément input
        let textType = new RegExp("text.*");

        if (file && file.type.match(textType)) {
            let reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;  // Place le contenu du fichier dans fileDisplayArea
                segText();  // Fonction segtext (la fonction juste après) va permettre de segmenter le texte
            };

            reader.readAsText(file);
            document.getElementById("logger1").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else {
            fileDisplayArea.innerText = "";
            document.getElementById("logger1").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
};

// J'ai décidé de séparer cette fonction du flux principal parce que j'arrivais pas à l'intégrer sans bugs
function segText() { // Fonction de segmentation du texte en tokens
    let text = document.getElementById('fileDisplayArea').innerText;

    global_var_tokens = text.match(/\b\w+\b/g);  // Cela va extraire tous les mots en ignorant les caractères spéciaux

    console.log(global_var_tokens);  // Affiche les tokens dans la console pour vérifier
}

// J'ai commencé par les fonctions les plus simples :

function nbPhrases() {
    let fileDisplay = document.getElementById('fileDisplayArea');

    if (fileDisplay.innerText.trim() === "") { // Vérifie que le contenu du fichier est bien chargé dans fileDisplayArea
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        document.getElementById('logger3').innerHTML = "";

        let text = fileDisplay.innerText; // Récupération du texte brut affiché dans la zone de résultat (fileDisplayArea)

        let phrases = text.split(/[.!?]+/).filter(p => p.trim().length > 0);// On dit au code que les phrases se terminent par(.)(!)(?) et qu’il faut couper le texte à chaque fois qu’il voit l’un de ces signes

        let resultat = phrases.length; // Ajout de phrases.length pour compter combien de phrases il y a dans le texte

        document.getElementById('page-analysis').innerHTML = // Affichage du résultat
            '<div>Il y a ' + resultat + ' phrase' + (resultat > 1 ? 's' : '') + ' dans ce texte.</div>';
    }
}

function tokenLong() {
    if (document.getElementById('fileDisplayArea').innerHTML == "") {
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        document.getElementById('logger3').innerHTML = "";

        let tokenSort = global_var_tokens.sort((a, b) => b.length - a.length);  // Tri par longueur décroissante

        tokenSort = tokenSort.slice(0, 10);  // Prends uniquement les 10 premiers

        let map = tokenSort.map(token => '<tr><td>' + token + '</td><td>' + token.length + '</td></tr>').join('');

       
        let resultat = '<table border="1" cellpadding="5"><tr><th colspan="2"><b>10 Mots les plus longs</b></th></tr><tr><th><b>Mot</b></th><th><b>Longueur</b></th></tr>' + map + '</table>';  // Créer le tableau HTML avec une en-tête

        document.getElementById('page-analysis').innerHTML = resultat; 
    }
}

function kujuj() {
    if (global_var_tokens.length === 0) {
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        alert("C'est une plaisanterie !");
        let kujujTokens = global_var_tokens.map(token => token + "uj");
        let kujujText = kujujTokens.join(' ');
        document.getElementById('page-analysis').innerHTML = '<div>' + kujujText + '</div>';
    }
}

// Dictionnaire -----------------------------------------------------------------
function dictionnaire() {
    // Vérifie si un fichier a été chargé
    if (document.getElementById('fileDisplayArea').innerHTML == "") { // .innerHTML == "" permet de vérifier si l'élément fileDisplayArea est vide pour ne pas procéder à une opération sur un contenu vide
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        document.getElementById('logger3').innerHTML = "";
        
        let tokenFreq = {}; // Objet pour stocker la fréquence des tokens
        let tokens = global_var_tokens; // Récupére les tokens à partir de la variable globale
        tokens.forEach(token => tokenFreq[token] = (tokenFreq[token] || 0) + 1);  // Calcul de la fréquence de chaque token
        let freqPairs = Object.entries(tokenFreq);
        freqPairs.sort((a, b) => b[1] - a[1]);
        let tableArr = [['<b>Token</b>', '<b>Fréquence</b>']];
        let tableData = freqPairs.map(pair => [pair[0], pair[1]]);
        let finalTable = tableArr.concat(tableData);
        let tableHtml = finalTable.map(row => {
            return '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>';
        }).join('');
        document.getElementById('page-analysis').innerHTML = '<table>' + tableHtml + '</table>';
    }
}

// Concordancier ---------------------------------------------------------------------------
function concord() {
    if (document.getElementById('fileDisplayArea').innerHTML == "") {
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        document.getElementById('logger3').innerHTML = "";
        
        let poleInput = document.getElementById('poleID').value; 
        if (poleInput == "") {
            document.getElementById('logger3').innerHTML = "Il faut d'abord entrer un pôle !";
        } else {
        
            let lgInput = document.getElementById('lgID').value;
            let long = parseInt(lgInput);
            if (isNaN(long) || long <= 0) {
                document.getElementById('logger3').innerHTML = "Il faut d'abord entrer une longueur > 0 !";
            } else {
                
                let poleRegex = new RegExp("^" + poleInput + "$", "gi");

                let concordance = global_var_tokens.reduce((acc, token, i) => {
                    if (poleRegex.test(token)) {
                        let cLeft = global_var_tokens.slice(Math.max(0, i - long), i).join(" ");
                        let cRight = global_var_tokens.slice(i + 1, Math.min(global_var_tokens.length, i + long + 1)).join(" ");
                        acc.push([cLeft, token, cRight]);
                    }
                    return acc; // Retourne l'accumulateur contenant toutes les concordances trouvées
                }, []); // Commence avec un tableau vide
                
                let table = document.createElement('table');
                let tableHeader = table.createTHead();
                let headerRow = tableHeader.insertRow();
                headerRow.innerHTML = "<th>Contexte gauche</th><th>Pôle</th><th>Contexte droit</th>";
                
                concordance.forEach(([cLeft, pole, cRight]) => { // cette ligne permet d'extrait 3 éléments : cLeft relatif au contexte à gauche du pole entré, le pole qui correspond à le mot entré par l'utilisateur, et cRight qui correspond au contexte à droite du pole
                    let row = table.insertRow();
                    row.innerHTML = `<td>${cLeft}</td><td>${pole}</td><td>${cRight}</td>`;
                });
                
                if (concordance.length === 0) {
                    document.getElementById('page-analysis').innerHTML = "";
                    document.getElementById('logger3').innerHTML = "Aucune concordance trouvée.";
                } else {
                    document.getElementById('logger3').innerHTML = "";
                    document.getElementById('page-analysis').innerHTML = "";
                    document.getElementById('page-analysis').appendChild(table);
                }
            }
        }
    }
}


function grep() {
    let text = document.getElementById("fileDisplayArea").innerText;
    let poleInput = document.getElementById("poleID").value.trim();
    let logger = document.getElementById("logger3");
    let output = document.getElementById("page-analysis");

    if (!text) {
        logger.innerHTML = "Il faut d'abord charger un fichier .txt !";
        output.innerHTML = "";
        return;
    }
    if (!poleInput) {
        logger.innerHTML = "Il faut d'abord entrer un pôle !";
        output.innerHTML = "";
        return;
    }

    let regex; 
    try {
        regex = new RegExp(poleInput, "gi"); // Création d'une regex insensible à la casse et globale
    } catch (e) {
        logger.innerHTML = "Le pôle saisi n'est pas une expression régulière valide.";
        output.innerHTML = "";
        return;
    }

    let lines = text.split(/(?<=[.?!])\s+(?=[A-ZÉÀÂÎÔÛ])/); // Découpe le texte en phrases complètes, pour les repérer je lui ai donnée des indications comme identifié, . ! ?, les espaces suivies une majuscule (cad début probable d’une nouvelle phrase)
    let resultTable = "<table border='1'><tr><th>Numéro de la ligne</th><th>Contenu</th></tr>"; // J'ai modifié le nom pour dire que c'est le numéro de la ligne
    let matchCount = 0;

    // Rechercher les correspondances (les phrases qui présentent ce motif)
    lines.forEach((line, index) => {
        if (regex.test(line)) {
            matchCount++;
            resultTable += `<tr><td>${index + 1}</td><td>${line}</td></tr>`;
        }
    });

    // Affichage des résultats dans un tableau
    if (matchCount > 0) {
        resultTable += "</table>";
        logger.innerHTML = `Le motif "<strong>${poleInput}</strong>" apparaît dans ${matchCount} ligne(s).`;
        output.innerHTML = resultTable;
    } else {
        logger.innerHTML = `Aucune occurrence du motif "${poleInput}" n’a été trouvée.`;
        output.innerHTML = "";
    }
}

function segmenterTexte() {
    if (document.getElementById('fileDisplayArea').innerHTML == "") {
        document.getElementById('logger3').innerHTML = "Il faut d'abord charger un fichier .txt !";
    } else {
        if (document.getElementById("delimID").value === "") {
            document.getElementById("logger3").innerHTML = '<span class="errorlog">Aucun délimiteur donné !</span>';
        } else {
            document.getElementById('logger3').innerHTML = ""; 
            let text = document.getElementById("fileDisplayArea").innerText;
            let delim = document.getElementById("delimID").value || " ,;’'~|&#@=`%*$()[]{}_:+«»§\\/\"\n\t\r";

            let regex_delim = new RegExp(
                "[" + delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "\\s]+" 
            );

            let tokens = text.split(regex_delim).map(t => t.trim()).filter(t => t.length > 0);

            let display = document.getElementById('page-analysis'); 
            display.innerHTML = ""; 

            if (tokens.length > 0) {
             
                display.innerHTML = tokens.join(' | '); // Pour bien marquer la segmentation j'ai décidé de rajouter une barre verticale |
            } else {
                display.innerHTML = "Aucun token trouvé après segmentation.";
            }
        }
    }
}

 function pieChart() { 
    document.getElementById("piechartContainer").innerHTML = ""; // Vide le conteneur du graphique avant de le réafficher

    const stopwords = document.getElementById("stopwordID").value.split(",").map(w => w.trim().toLowerCase()); // Dans le code que vous avez communiqué les stopwords étaient découpés en se basant sur les virgules mais j'ai en plus ici retiré les espaces inutiles et tout mis en minuscule 
    const textArea = document.getElementById("fileDisplayArea");
    const text = textArea.textContent || textArea.innerText;

    if (!text.trim()) {
        alert("Veuillez entrer du texte à analyser.");
        return;
    }

    const delim = document.getElementById("delimID").value || " ,;’'~|&#@=`%*$()[]{}_:+«»§\\/\"\n\t\r"; // Récupère les délimiteurs de mots depuis le champ de saisie
    const regex = new RegExp(`[${delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}]`, "g");  // créer une méthode pour séparer le texte en tokens selon les délimiteurs fournis.

    const tokens = text.split(regex).map(t => t.toLowerCase().trim()).filter(t => t.length > 0 && !stopwords.includes(t)); // J'ai directement découpé le texte avec des délimiteurs personnalisés, nettoyé (minuscule, espaces) et exclu les stopwords, contrairement à la version communiqué qui partait d'une variable globale.

    if (tokens.length === 0) {
        alert("Aucun mot valide à analyser. Assurez-vous d'avoir du texte et des délimiteurs appropriés.");
        return;
    }

    const freqs = {}; // Crée un objet 'freqs' pour stocker la fréquence de chaque token.
    tokens.forEach(token => {
        freqs[token] = (freqs[token] || 0) + 1;
    });

    const sorted = Object.entries(freqs).sort((a, b) => b[1] - a[1]).slice(0, 30); //// La version original trie avec `Object.keys()` tandis que j'ai utilisé `Object.entries()` pour trier directement les valeurs et récupérer les 30 premiers éléments.
    const dataPoints = sorted.map(([word, count]) => ({ // Création d'un tableau à partir des tokens triés.
        label: word,
        y: count
    }));

    const chart = new CanvasJS.Chart("piechartContainer", { // Création du graphique
        animationEnabled: true, // Animation du graphique
        title: {
            text: "30 mots les plus fréquents (hors stopwords)"
        },
        data: [{
            type: "pie", // type de graphique
            startAngle: 240, // Angle de départ pour l'apparition de la première part du graphique (contrairement à la version original je n'ai pas mis de légend)
            yValueFormatString: "##0",
            indexLabel: "{label} ({y})",
            dataPoints: dataPoints
        }]
    });

    chart.render();
}

// TROISIEME PARTIE : CREATION D'UNE FONCTION

// Première lettre en Masjuscule
function MotMajuscule() { 
    const textArea = document.getElementById("fileDisplayArea");
    let text = textArea.textContent || textArea.innerText;
    if (!text.trim()) {
        alert("Veuillez entrer un texte à analyser.");
        return;
    }

    // Transformer chaque mot pour que la première lettre soit en majuscule
    const updatedText = text.replace(/([.!?])\s*(\w)/g, function(match, p1, p2) { // Après un point, un point d'exclamation ou un point d'interrogation, on met la première lettre du mot suivant en majuscule (j'ai ajouté cette fonction car certains mots étaient collés à ces ponctuations, notamment le premier de la deuxième phrase (dans))
        return p1 + " " + p2.toUpperCase();
    }).replace(/\b(\w)/g, function(match, p1) { // Mettre la première lettre de chaque mot en majuscule, en ignorant la ponctuation.
        return p1.toUpperCase();
    });
    document.getElementById("page-analysis").textContent = updatedText;
}



