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
## _Como se hace una compra_
1. Selecionar un producto con el boton "VER DETALLE"
2. Selecionamos la cantidad deseada utilizando los botones de + y -
3. Presionamos "AGREGAR AL CARRITO" y aparece el boton "IR AL CARRITO" o puedes usar "CONTINIAR COMPRANDO" para selecionar otro producto
4. Al presionar "IR AL CARRITO" muestra el CARRITO DE COMPRAS que contiene los productos que se han agragado, cada item puede ser eliminado individualmente usando la X que esta al  costado derecho de cada uno. Tambien puede usarse "VACIAR CARRITO" para eliminar todos los productos en el carrito.
5. Al presionar "CONFIRMAR PEDIDO" muestra la seccion de CONFIRMAR PEDIDO, donde se solicitan los datos del  comprador y al presionar "GENERAR PEDIDO" se genera el mismo con los datos del comprador y productos que contiene, es mostrada una notificacion.
## _Como es la navegación dentro de la app_
Categorias
Ficha del producto
Carrito de Compras
Confirmar Pedido
## _Que componentes tiene y que hace cada componente, que funcion tiene_

**Free Software, Hell Yeah! -  Armando Rivas**
