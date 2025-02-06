# Evaluación final Melisa Cresta

Este proyecto consiste en el desarrollo de una página con un listado de personajes de *Harry Potter* que devuelva información sobre los personajes tras realizar una búsqueda. Este forma parte de la evaluación final del **Módulo 3: REACT** de Adalab, donde se evaluan los conocimientos adquiridos durante este módulo.

Las tecnologías y lenguajes usados para la realización de este proyecto han sido:

- **Starter Kit de React**. Creado con **node, vite y react**. Para crear una plantilla del proyecto JSX.
- **Repositorio git y GitHub**. Para el control de versiones.
- **Lenguajes HTML y CSS**. HTML para la estructura del proyecto y CSS para la hoja de estilos.
- **JavaScript y Sintaxis JSX**. Para el desarrollo del proyecto y funcionalidad de la aplicación.
- **Prepocesador SASS**. Para la creación de código CSS estándar.
- **APIs**. Para las peticiones al servidor.

## REQUISITOS

### Diseño
Para la ejecución del diseño se ha usado:
- Sass.
- Flexbox y CSS Grid.
- Media queries: mobil(320px), tablet(768px) y desktop (1280px).

### Maquetación
La maquetación cumple los siguientes requisitos:

### Interacción
El proyecto cumple con las siguientes interacciones:
- **Listado de personajes**: Cada personaje ha de mostrar su foto, nombre y especie.
- **Imágenes**: En caso de que un personaje no tenga foto se ha de mostrar una de relleno.
- **Filtros**:
Filtrado de personajes: Se puede realizar una búsqueda por nombre del personaje. Se utiliza un **input** para este filtro.
Filtrado por casa: Se puede realizar una búsqueda por la casa a la que pertenecen los personajes. Se utiliza un **select** para este filtro. Por defecto aparece la casa *Gryffindor*. 
(Bonus)Filtrado por género: Se puede realizar una búsqueda por el género del personaje. Se utiliza un **select** para este filtro. Por defecto aparece *Selecciona*. 
- **Componentes del listado de personajes**: El proyecto cuenta con:
Componente para el filtrado:
  - Componente para el filtrado por nombre.
  - Componente para el filtrado por casa.
  - Componente para el filtrado por género.
Componente para el listado.
Componente para la tarjeta de cada personaje del listado.
Componente para el detalle de cada personaje.
- **Detalle de personajes**: La información sobre un personaje aparece a pantalla completa cuando se hace click sobre él. Los datos mostrados son la foto y el nombre del personaje, casa a la que pertenece, si esta vivo o muerto, su género y su especie, y sus nombres alternativos. En el link *Volver* se vuelve a la página de inicio. Se usan rutas y React Router DOM.

> **NOTA:** 
- La lista de personajes se muestra por orden alfabético.
- El filtrado acepta el nombre tanto en mayúsculas como en minúsculas. Y si se busca un nombre que no coincide con los personajes se muestra un mensaje.
- Al mostrar la casa aparece el emblema respectivo y si un personaje está vivo o muerto aparece el icono respectivo.
- En caso de que la URL sea inexistente se muestra un mensaje.
- Con el botón *Reset* los valores de filtrado se reinician.

## INSTALACIÓN
Dentro de nuestro archivo de trabajo abrir una terminal BASH y clonar el repositorio de github.
Comprobar que estamos en la ruta del directorio adecuada. Posteriormente instalar las dependencias "node_modules" para la ejecución de Vite y la biblioteca React, e iniciar el proyecto. 

Clonar repositorio:

$ git clone https://example.com

Ruta directorio:

$ cd ../path/to/the/file

Instalación dependencias:

$ npm install

Iniciar proyecto:

$ npm run dev

## PUBLICACIÓN 
Para la publicación del proyecto en GitHub Pages, seguir los siguientes pasos:
1. Instalar el módulo gh-pages:
~~~
$ npm i gh-pages -D
~~~
2. En el fichero de configuración de vite *vite.config.js* añadir la propiedad **base : "/nombre-del-repositorio/"**:
~~~
export default defineConfig({
  plugins: [react()],
  base: "/nombre-repo/",
});
~~~
3. Añadir al *package.json* la línea **"deploy": "gh-pages -d dist"** en *scripts*:
~~~
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
~~~
4. Ejecutar **npm run build**:
~~~
$ npm run build
~~~
5. Ejecutar **npm run deploy**:
~~~
$  npm run deploy
~~~
6. A continuación subimos al repositorio la carpeta *dist* que se acaba de generar. En la pestaña `settings` del repositorio ir al apartado de GitHub Pages y activar la opción **main branch /root folder**. Publicar la url generada en **About**.