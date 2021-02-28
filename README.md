# Ma classe numérique

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies required

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` (aucun test n'a été écrit)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Structure du projet

- src/\
Contient des fichiers JS auto-générés ainsi que index.js, point d'entrée de l'application

- src/assets/\
Contient les images intégrées au projet

- src/components/\
Contient tous les composants React

- src/components/dialogs/\
Contient spécifiquement les composants dédiés aux dialogs

- src/fixtures/\
Contient les fixtures utilisés par les composants

- src/theme/\
Contient tous les thèmes graphiques utilisées par Material-ui

- src/utils/\
Contient des fonctions accessibles pour tous les composants

## Librairies et technologies utilisées

### Material-ui

Framework graphique utilisé afin de faciliter la construction de layout responsives, et de pouvoir intégrer des composants graphiques déjà construits.\
Les icones de Material-ui ont également été utilisées.

https://material-ui.com/

### Hooks

J'ai choisi de partir sur une architecture sans classe, et d'utiliser des Hooks, en espérant les avoir utilisé correctement.

## Commentaires supplémentaires

### style

- J'ai eu du mal à m'approprier en si peu de temps les bons outils de design, c'est pour cela que l'on peut trouver du plain CSS qui côtoie du theming Material-Ui et du makeStyles.
- Les élèves sont affichés sous forme de tableau pour faciliter une lecture rapide. Cependant, un affichage sous forme de liste plus compacte, multiligne, serait une bonne alternative, notamment pour les versions mobiles, même si l'on perdrait alors les tris par colonne.\
A noter : la version actuelle fonctionne néanmoins sur mobile sans casser le layout, un scroll horizontal est disponible afin de naviguer sur le tableau. Si l'écran est assez petit, un bouton apparaît également en haut du tableau afin de proposer un format rétréci, pour les besoins d'une lecture différente.


### Historique Git

Les composants de ce projet ont tout d'abord été développés dans un projet de test, servant originellement à découvrir React, avant d'être découpés puis intégrés dans ce nouveau repository. Cela explique l'absence d'historique Git.

### Couverture de tests

Malheureusement, aucun test n'a été écrit, par manque de temps.

### Déploiement

L'application a été déployée et est accessible à des fins de tests à l'addresse http://yohannrabatel.ddns.net