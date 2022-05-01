# BESTBIKE APP
## App desarrollada con React JS.
Proyecto final de cursada de React en Coderhouse.
## _Cómo inicializar el proyecto_
- Descargar caperta 
- Ejecutar `npm start`
##  _Como son los datos que están en firebase_ 
Los data es guardada en tres colecciones:
1. categories (Categorias de productos)
    - id
    - name
2. orders (Ordenes generadas)
    - buyer (email, name, phone)
    - items (color, id, name, price, quantity, size)
    - date
    - total
3. products (productos)
    - sku (codigo interno)
    - name
    - cat
    - desc
    - price
    - stock 
## _Como se hace una compra en la App_
1. Selecionar un producto con el boton "VER DETALLE"
2. Selecionamos la cantidad deseada utilizando los botones de + y -
3. Presionamos "AGREGAR AL CARRITO" y aparece el boton "IR AL CARRITO" o puedes usar "CONTINIAR COMPRANDO" para selecionar otro producto
4. Al presionar "IR AL CARRITO" muestra el CARRITO DE COMPRAS que contiene los productos que se han agragado, cada item puede ser eliminado individualmente usando la X que esta al  costado derecho de cada uno. Tambien puede usarse "VACIAR CARRITO" para eliminar todos los productos en el carrito.
5. Al presionar "CONFIRMAR PEDIDO" muestra la seccion de CONFIRMAR PEDIDO, donde se solicitan los datos del  comprador y al presionar "GENERAR PEDIDO" se genera el mismo con los datos del comprador y productos que contiene, es mostrada una notificacion.
## _Como es la navegación dentro de la app_
Categorias -> Ficha del producto -> Carrito de Compras -> Confirmar Pedido
## _Que componentes tiene y que hace cada componente, que funcion tiene_ 

Adapters:
- productoAdapter: transforma los campos de los datos en nombres legibles para usar en la app.

Components:
- Cart: Contiene los items selecionados en el cart, el total de la orden y los botones de clearCart y Checkout
- CartItem: retorna los campos del item seleciconado en el cart y muestra un boton para eliminar el item
- Checkout: contiene la logica para agregar los datos del comprador y los items seleccionados en el cart, y permite generar la order en la bd.
- CartWidget: Conponente que muestra la cantidad de items seleccionada, el mismo esta oculto y cuando se agrega un item este se muestra en el navbar con el contador correspondiente.
- FormBuyer: Componente que contiene el input que sea usado en el formulario en el checkout de la app.
- Item: Permite mostrar el item individual en el listado de items, con el link al detalle del mismo.
- ItemCount:
- ItemDetail: Muestra el detalle del item, permite seleccionar cantidad, "color y talla  solo de muestra"
- ItemDetailContainer: Contenedor que permite mostrar el item realizando la consulta 
- ItemList: Hace un map de los items que conciden con la condicion.
- ItemListContainer: Permite mostrar los items, los cuales pueden ser filtrados por su categoria.
- ItemOption: Permite manejar las opciones de select
- NavBar: Contiene logo, categorias y el cart cuando este contiene al menos un item 


Context:
- CartContext: Contiene toda la logica para manejar los procesos de agregar item, obtener cantidad, obtener el total de la orden, validar si el producto ya esta en el cart, remover un item, vaciar el cart.

Services:
- Firestore: Contiene la promesa que devuelve la consulta a la bd firestore
- Index: Contiene las credenciales para bd de firebase  



**Free Software, Hell Yeah! -  Desarrollado por: Armando Rivas - Profesor: Sebastian Zuviria**
