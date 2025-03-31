# prueba-vue.js
Prueba técnica con **Vue.js**

Aplicación web desarrollada con **Vue 3**, **Pinia** y **Bootstrap** para mostrar una lista de usuarios obtenida desde la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Los usuarios pueden ser filtrados por nombre, y al hacer clic en uno de ellos, se muestran los detalles completos en una nueva vista.

## **Características:**
- **Lista de Usuarios**: Obtención de usuarios desde la API y visualización en una lista filtrable.
- **Filtrado en Tiempo Real**: Búsqueda por nombre de usuario.
- **Detalles del Usuario**: Vista detallada de la información del usuario, incluyendo dirección, teléfono y empresa.
- **Diseño Responsivo**: Interfaz completamente responsiva gracias a **Bootstrap**.
- **Manejo de Estado**: **Pinia** se utiliza para gestionar el estado global.

## **Tecnologías Utilizadas:**
- **Vue 3** (Composition API)
- **Pinia** (Manejo de estado)
- **Vue Router** (Navegación)
- **Bootstrap** (Diseño responsivo)
- **Axios** (Peticiones a la API)

## **Instrucciones para Ejecutar el Proyecto:**

### **1. Clonar el Repositorio**
Clona el repositorio en tu máquina local:

git clone https://github.com/tu-usuario/vue-users-app.git

### **2. Instalar Dependencias**
Accede al directorio del proyecto e instala las dependencias necesarias:

cd vue-users-app
npm install

### **3. Ejecutar el Proyecto**
Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:

npm run dev

Esto abrirá la aplicación en http://localhost:3000.

### **Estructura del Proyecto:**
-**src/components/**: Componentes reutilizables (por ejemplo, UserList.vue, UserDetails.vue).

-**src/views/**: Vistas principales de la aplicación (por ejemplo, UserListView.vue, UserDetailsView.vue).

-**src/store/**: Store de Pinia para el manejo de estado global de usuarios.

-**src/router/**: Configuración de Vue Router para la navegación entre vistas.
