# Carshop - Tienda de Autos

## Descripción

Carshop es una aplicación web de comercio electrónico enfocada en la venta de automóviles de distintas marcas, incluyendo **Peugeot**, **Volkswagen**, y **Toyota**. Los usuarios pueden explorar diferentes categorías de autos, ver los detalles de cada producto y agregar productos al carrito para simular una compra.

Puedes acceder a la aplicación desplegada en Netlify a través del siguiente enlace:

🔗 [Carshop en Netlify](https://comfy-alfajores-05ae94.netlify.app)

## Características

- **Navegación por marcas**: Los usuarios pueden seleccionar diferentes marcas (Peugeot, Volkswagen, Toyota) para ver solo los productos correspondientes a cada una.
- **Detalle del producto**: Cada producto tiene una página de detalles donde se muestra su imagen, nombre, precio, y un botón para agregarlo al carrito.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar las cantidades, y eliminar productos antes de completar la compra.
- **Creación de órdenes**: Los usuarios pueden proporcionar su nombre y correo electrónico y crear una orden que se guarda en Firebase Firestore, mostrando el ID de la orden en pantalla.
- **Firebase Firestore**: Los productos y las órdenes se almacenan y se gestionan utilizando Firebase Firestore.

## Tecnologías utilizadas

### 1. **Lenguajes y herramientas**:
- **JavaScript (React.js)**: Usado para la lógica del frontend y la estructura de la aplicación basada en componentes.
- **CSS**: Utilizado para el diseño y estilo de la interfaz de usuario.
- **HTML**: Generado a través de los componentes de React.

### 2. **Frameworks y librerías**:
- **React.js**: Librería principal utilizada para la construcción de la interfaz de usuario.
- **React Router**: Utilizado para la navegación entre las diferentes rutas de la aplicación.
- **Firebase Firestore**: Base de datos NoSQL que almacena los productos y órdenes de la tienda.
- **Firebase Hosting**: Usado para el despliegue y hospedaje de la base de datos.
- **Netlify**: Plataforma utilizada para desplegar la aplicación en la web.

## Instalación y configuración

### 1. Clona este repositorio:
```bash
git clone https://github.com/usuario/carshop.git
cd carshop
