# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Prop-types
1. Instalar prop-types:
~~~
$ npm install prop-types
~~~
2. Importarlas en los componentes en las que se quiera usar:
~~~
import PropTypes from "prop-types";
~~~
3. Usarla en el código, antes del *export default componente*:
~~~
NombreComponente.propTypes = {
  nombrePropDeTipoStringOpcional: PropTypes.string,
  nombrePropDeTipoStringObligatoria: PropTypes.string.isRequired,
};
~~~
**Nota** Tipos de Prop.Types: array, bool, func, number, object, string, symbol, any(cualquiera)

## Publicar en GitHub Pages
1. Instalar el módulo gh-pages:
~~~
$ npm i gh-pages -D
~~~
2. Ir al fichero de configuración de vite *vite.config.js* y en *export default defineConfig* añadir como propiedad al final **base : "/nombre-del-repositorio/"**, quedando algo como:
~~~
export default defineConfig({
  plugins: [react()],
  base: "/nombre-repo/",
});
~~~
3. Añadir al *package.json* la línea **"deploy": "gh-pages -d dist"** dentro de las llaves de tus *scripts*, quedando algo como:
~~~
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
~~~
4. Ejecutar **npm run build**, que genera la carpeta *dist* en la raíz del proyecto con los ficheros optimizados.
~~~
$ npm run build
~~~
5. Ejecutar **npm run deploy**, que genera la rama gh-pages en el repositorio. Con los ficheros optimizados para ser publicados.
~~~
$  npm run deploy
~~~
6. Ir al repositorio en GitHub y configura GitHub Pages:
- Entrar en las **Settings**.
- Entrar en **Pages**, en el menú de la izquierda.
- Eligir la rama de la repo: **gh-pages**.
- Elige la carpeta **/root**.
- Publicar la url en **About**.
**Nota** al entrar en *pages* tanto la rama como la carpeta suelen estar ya por defecto y por eso no da la opción de guardar. Solo hay que esperar y refrescar la página para que aparezca la url.
**Nota 2** la configuración de *gh-pages* no se sube a GitHub, si es un trabajo colaborativo cada colaboradora tendrá que hacer un *npm i* o *npm i gh-pages -D*.

## Intalación de React Router DOM
1. Para gestionar las rutas de una web de React lo primero que tenemos que hacer es instalarlo en el proyecto:
~~~
$ npm install react-router-dom
~~~
2. Añadir *homepage* al package.json:
En las primeras líneas de package.json añadir debajo de "name" : "nombre-x", -> **"homepage": "./",**
3. Configurar React Router DOM en el proyecto:
En *main.jsx* importar el HashRouter -> **import { HashRouter } from "react-router-dom"**. Esto indica que vamos a usar las rutas con Browser.
En *.render* dentro de main.jsx escribir -> **<HashRouter> <App /> </HashRouter>**. Esto indica que el componente HashRouter es ahora la madre de App y que todos los componentes hijos o nietos de APP podrán trabajar con rutas.

**Nota** Cuando se tenga acceso a la configuración del servidor y se pueda usar el sistema moderno de rutas se cambiará la palabra *{HashRouter}* por **{BrowserRouter}** tanto en import como en el return.