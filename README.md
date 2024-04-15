![Kasa](/src/assets/images/logo.svg)

# Kasa 🏠🏢

![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)


## Description FR :

Ceci est un projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react)

> Implémentez le front end d'une application de location de logements.
> Mettez en place des composants avec React et les routes de l'application avec React Router.
>
> #### Compétences évaluées :
>
> -   Créer des composants avec React ⚛️
> -   Développer les routes d'une application web avec React Router 🛣️
> -   Initialiser une application web avec un framework 🚀

### Situation (fictive) du projet :

Développeur freelance, missionné en tant que Développeur Front-end, une entreprise spécialisée dans la location d’appartements entre particuliers depuis près de 10 ans. .

L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

Mon rôle a été de développer le front-end de l’application, en utilisant les composants React, les routes React Router et en respectant les maquettes Figma.

### Contraintes techniques :

-   Outils :
    -   Create React App.
    -   React Router.
    -   L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut.
    -   Pas de librairie React externe.
-   React :
    -   Structure logique des différents fichiers.
    -   Découpage en composants modulaires et réutilisables (Un composant par fichier).
    -   Il est recommandé d’utiliser des composants fonctionnels au lieu des composants classes.
    -   Utilisation des props entre les composants.
    -   Utilisation du state dans les composants quand c'est nécessaire.
    -   Gestion des événements.
    -   Utiliser les listes autant que possible en itérant dessus (par exemple avec map).
-   React Router :
    -   La logique du routeur est réunie dans un seul fichier.
    -   Il existe une page par route.
    -   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
    -   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
    -   Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

### Contraintes fonctionnelles :

-   Pour le défilement des photos dans la galerie (composant Gallery) :
    -   Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
    -   Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
    -   S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
    -   La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-   Collapse :
    -   Par défaut, les Collapse sont fermés à l'initialisation de la page.
    -   Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    -   Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation :

1. Cloner le repository:

-   `git clone https://github.com/ArthurBlanc/Kasa`

2. Installer toutes les dépendances pour le front-end:

-   `npm install`

3. Lancer le front-end:

-   `npm start`
Le front-end sera lancé à l'URL:
`http://localhost:3000/Kasa/`.

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [React 18](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook
-   [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [GitHub Pages](https://pages.github.com/) - Outil d’hébergement

## Maquettes :

Lien des maquettes : https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1
