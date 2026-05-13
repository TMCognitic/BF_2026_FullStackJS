# Exercices

## Le tableau trié

Demandez à l'utilisateur d'entrer un nombre positif supérieur à 5
Ensuite, demandez à l'utilisateur d'entrez ce nombre de nombre pour remplir un tableau.

Attention le tableau doit être trié en temps réelle de manière descendante. (pas de sort() ni de reverse()).
n'utilisez que push(), unshit(), concat() et slice() et une boucle 'for' pour parcourir le tableau.

## Le jeu de bataille

Implémenté avec du DOM un jeu de bataille. [Jeu de bataille wikipédia](https://fr.wikipedia.org/wiki/Bataille_(jeu))

## 01 interaction avec le navigateur

Créer un nouveau projet Web :

+ un fichier html
+ un fichier JS

Dans le fichier JS faire :

+ Afficher dans la console un message d'attention avec le contenu « Hello World »
+ Permet à l'utilisateur d'encoder son nom et prenom (2 saisies diffs)
+ Afficher message via un popup pour dire bonjour à l'utilisateur

## 02 Intro DOM + variable

Créer un nouveau projet Web :

+ un fichier html
+ un fichier js
+ un fichier de style (css, sass, scss, ...)

Fonctionnalité :

+ Un titre dynamique
  + Initialement celui-ci indique « Bienvenue sur le site »
  + L'utilisateur peut encoder son nom avec une balise input et valider le changement avec un bouton
  + Le titre du site se modifie en « Bienvenue [...] »
+ Le site possede 2 themes (changement en cliquant sur un emoji)
  + Jour
  + Nuit

Bonus :

+ Après que l'utilisateur est validé son identité:
  + Le titre change de couleur .
  + L'input et le bouton sont déactivé.
+ Ajouter un bouton reset, qui restaure l'etat du site

# 03 Gestion des String

Sur base de la chaine de caractere suivantes_
« Développeur Fullstack JavaScript à DigitalCity ! », obtenir :

```javascript
const msg = 'Développeur Fullstack JavaScript à DigitalCity !'
```

+ L'index du dernier caractere « a »
+ La position (humain) du texte « Java »
+ Remplacer « DigitalCity » par « Bruxelles Formation »
+ Supprimer le texte « Script » à JavaScript
+ Obtenir un tableau avec chaque mots de la phrase (mais sans prendre le « à ») => ["Développeur", "Fullstack", "JavaScript", "DigitalCity"]

Exercices Bonus :

+ Inverser la chaine de caractere 🤯
+ Récuperer le 3e mot de la phrase et le mettre en majuscule (pour l'Azerbaïdjan)
