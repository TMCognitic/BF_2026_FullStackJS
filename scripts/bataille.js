
function play() {
    const listUlHtml = document.getElementById('list');
    listUlHtml.innerHTML = "";

    //Création du jeu de cartes
    const couleurs = ['Coeur', 'Carreau', 'Pique', 'Trefle'];
    const valeurs = [undefined, undefined, 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix', 'Valet', 'Dame', 'Roi', 'As'];

    let jeu = [];
    let tasJoueur1 = []; //Cartes du joueur 1
    let tasJoueur2 = []; //Cartes du joueur 2
    let potJoueur1 = []; //Tas sur la table du joueur 1
    let potJoueur2 = []; //Tas sur la table du joueur 2


    for (let indexCouleur = 0; indexCouleur < couleurs.length; indexCouleur++) {
        for (let indexValeur = 2; indexValeur < valeurs.length; indexValeur++) {
            jeu.push({ valeur: indexValeur, valeurAsString: valeurs[indexValeur], couleur: couleurs[indexCouleur] });
        }
    }

    //Mélanger le jeu de carte
    for (let index = 0; index < jeu.length; index++) {
        let random;

        do {
            random = Math.floor(Math.random() * jeu.length);
        } while (random === index)

        let temp = jeu[index];
        jeu[index] = jeu[random];
        jeu[random] = temp;
    }

    //Distribution des cartes
    let estPourJoueur1 = true;

    while (jeu.length > 0) {
        (estPourJoueur1 ? tasJoueur1 : tasJoueur2).push(jeu.shift());
        // est équivalent à :
        // if(estPourJoueur1)
        //     tasJoueur1.push(jeu.shift());
        // else
        //     tasJoueur2.push(jeu.shift());

        estPourJoueur1 = !estPourJoueur1;
    }

    //Partie
    let bataille = false;

    while (tasJoueur1.length > 0 && tasJoueur2.length > 0) {
        let carteJ1 = tasJoueur1.shift();
        let carteJ2 = tasJoueur2.shift();
        potJoueur1.unshift(carteJ1);
        potJoueur2.unshift(carteJ2);

        if (bataille) {
            log("Bataille!!", true);
            log("les joueurs posent une carte face cachée");
            bataille = false;
        }
        else {
            log(`(J1) ${carteJ1.valeurAsString} de ${carteJ1.couleur} vs (J2) ${carteJ2.valeurAsString} de ${carteJ2.couleur}`);

            if (carteJ1.valeur > carteJ2.valeur) {
                log("le joueur 1 remporte la manche");

                while (potJoueur1.length > 0) {
                    tasJoueur1.push(potJoueur1.shift());
                }

                while (potJoueur2.length > 0) {
                    tasJoueur1.push(potJoueur2.shift());
                }
            }
            else if (carteJ2.valeur > carteJ1.valeur) {
                log("le joueur 2 remporte la manche");

                while (potJoueur2.length > 0) {
                    tasJoueur2.push(potJoueur2.shift());
                }

                while (potJoueur1.length > 0) {
                    tasJoueur2.push(potJoueur1.shift());
                }
            }
            else {
                bataille = true;
            }
        }
    }

    if (tasJoueur1.length == 0) {
        while (potJoueur2.length > 0) {
            tasJoueur2.push(potJoueur2.shift());
        }

        while (potJoueur1.length > 0) {
            tasJoueur2.push(potJoueur1.shift());
        }

        log("Le joueur 1 n'a plus de carte, le joueur 2 a gagné la bataille", true);
        console.log(tasJoueur2);
    }
    else {
        while (potJoueur1.length > 0) {
            tasJoueur1.push(potJoueur1.shift());
        }

        while (potJoueur2.length > 0) {
            tasJoueur1.push(potJoueur2.shift());
        }

        log("Le joueur 2 n'a plus de carte, le joueur 1 a gagné la bataille", true);
        console.log(tasJoueur1);
    }
}

function log(message, warning = false) {
    const listUlHtml = document.getElementById('list');

    const child = document.createElement("li");
    child.textContent = message;

    if (warning) {
        child.className = 'warning';
        console.warn(message);
    }
    else {
        console.log(message);
    }


    listUlHtml.append(child);
}