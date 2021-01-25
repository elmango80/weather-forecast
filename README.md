# Índice

- [Tecnologías](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#tecnolog%C3%ADas)
- [Estructura del repositorio](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#esructura-del-repositorio)
- [Intalar dependencias](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#1-intalar-dependencias)
- [Iniciar el proyecto](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#3-iniciar-el-proyecto-modo-dev)
- [Deploy](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#4-deploy)
- [Linter ](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#5-linter)
- [Testing](https://git.aerolab.co/invertir-online/website-redesign/-/blob/master/README.md#6-testing)

## 💻 Tecnologías

El proyecto fue realizado con [React](https://reactjs.org/), [Redux](https://es.redux.js.org/) y se implemento [Redux-Thunk](https://github.com/reduxjs/redux-thunk) como middleware.

Se utilizo la plataforma de [Firebase](https://firebase.google.com/), para la persistencia de datos y administrar los usuarios de la aplicación.

Para el diseño de la UI se utilizo [Elastic UI](https://eui.elastic.co/).

Finalmente, las pruebas están desarrollados con [Jest](https://jestjs.io/) y [Enzyme](https://enzymejs.github.io/enzyme/).

## 📁 Estructura del repositorio

- **/gitlhub**: Configuración de Github.
- **/public**: Todos los archivos publicos como imágenes, favicon, etc.
- **/src/components**: Los componentes de proyecto.
- **/src/pages**: Las páginas del proyecto.

👉 [Ver diagrama completo del repositorio](https://whimsical.com/weather-forecast-VtS26ywEK55zPpTmLH9J9a)

## 🏃 Instalar dependencias

- Correr `npm install` o `npm ci` para instalar las dependencias.

## ⚒️ Iniciar el proyecto

Asegurate de estar en el root del directorio y ejecuta el siguiente comando para iniciar proyecto en modo desarrollo.

`npm start`

Si todo anda bien, deberías ver el sitio en: http://localhost:3000

> Puedes encontrar mas comandos en el [package.json](https://github.com/elmango80/weather-forecast/blob/master/package.json) del proyecto
> Puedes encontrar mas comandos en el [package.json]() del proyecto

## 🚀 Deploy

El proyecto se despliega de forma automática en la plataforma de [Vercel](https://vercel.com/).

[DEMO](https://weather-forecast-sigma.vercel.app/)

## 🔦 Linter

El proyecto utiliza un hook de git para iniciar Prettier automáticamente antes de realizar cualquier commit. También puede inicializarse manualmente cada vez que lo requiera:

- `npm run lint`: Runs the linter project-wide.
- `npm run lint:fix`: Fixes ESLint issues.

## 🧪 Testing

El proyecto contiene test de componentes, que se pueden encontrar junto al componente con el sufijo .test.js. Ademas existen otros test unitarios para custom hooks y redux.

El proyecto utiliza usando Jest como test framework.

Puedes ejecutar los siguientes comandos:

- `npm run test`: Run tests.
