Équipe :

|NOM|Prénom|
|---|---|
|LAYAN|Jason|
|PRUD'HOMME|Arthur|

Voir les tickets dans les issues.

Explications des choix techniques :
- utilisation de React typescript pour le front car les membres de l'équipe sont à l'aise avec cette technologie,

- utilisation de Vitest pour les tests car on l'a vu en cours

- vous pouvez retrouver dans /src/app.tsx le code de la page d'accueil et dans /tests/index.test.tsx les tests de cette même page.

Explication de la CI/CD :
- Des Issues sont créées pour chaque implémentation

- La feature est faite sur une branche dédiée

- Une fois la feature terminée, elle est merge sur la main et clôture l'issue dans le même temps en ajoutant son tag dans la description du merge

- Une fois sur main, une nouvelle release est faite ce qui déclenche la CI et à l'issu de toutes ses étapes, termine son déploiement sur Vercel

- La CI suit les étapes suivantes : install, test, lint, build et deploy

- Le déploiement n'est déclenché que dans le cas d'une nouvelle release

Pour acceder à l'application déployer, cliquez ici : https://ci-vite-pi.vercel.app/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# ci-vite
