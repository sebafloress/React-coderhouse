# Carshop - Tienda de Autos

## Descripción

Carshop es una aplicación web de comercio electrónico enfocada en la venta de automóviles de distintas marcas, incluyendo **Peugeot**, **Volkswagen** y **Toyota**. Los usuarios pueden navegar por las distintas marcas, ver una selección de autos disponibles y agregar productos al carrito para realizar una compra simulada.

### Características principales:
- **Filtrado por marca**: Los usuarios pueden seleccionar entre diferentes marcas (Peugeot, Volkswagen, Toyota) y ver solo los productos correspondientes a esa marca.
- **Detalles de producto**: Al hacer clic en el botón "Ver más detalles", los usuarios pueden ver información detallada del producto, como nombre, imagen y precio.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar la cantidad de productos, y eliminar elementos antes de finalizar la compra.
- **Finalización de compra**: Los usuarios pueden finalizar su compra y vaciar el carrito al hacerlo.

## Tecnologías utilizadas

### 1. **Lenguajes de programación:**
- **JavaScript**: Lenguaje principal utilizado para la lógica de la aplicación.
- **CSS**: Usado para el estilo y diseño de la interfaz de usuario.
- **HTML**: Generado a través de los componentes React.

### 2. **Frameworks y librerías:**
- **React.js**: Librería de JavaScript para la construcción de interfaces de usuario basadas en componentes.
- **React Router**: Utilizado para la navegación entre páginas y rutas dinámicas.
- **Firebase Firestore**: Base de datos NoSQL en la nube utilizada para almacenar los productos de la tienda.
- **Firebase Hosting**: Para alojar la aplicación web.

### 3. **Firebase**:
La aplicación utiliza **Firebase Firestore** para almacenar y obtener los productos del catálogo. Cada producto tiene un campo para **marca**, **nombre**, **precio**, **imagen**, y un **ID** único que es usado en la navegación dinámica.

### 4. **Estilo**:
- **CSS personalizado**: La aplicación tiene un diseño sencillo pero efectivo, con un enfoque en la presentación de productos, tarjetas de producto, y un carrito de compras interactivo.

## Instalación

1. Clona el repositorio de la aplicación.
    ```bash
    git clone https://github.com/usuario/carshop.git
    cd carshop
    ```

2. Instala las dependencias necesarias.
    ```bash
    npm install
    ```

3. Configura Firebase.
    - Crea un proyecto en [Firebase](https://firebase.google.com/).
    - Habilita Firestore y agrega los detalles de configuración de Firebase en un archivo `.env` o en el archivo `firebaseConfig` dentro del código.
    
4. Inicia la aplicación localmente.
    ```bash
    npm start
    ```

5. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Estructura del proyecto

