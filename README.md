Proyecto Final del curso 14520 de RectJS

Carrito de Compras:

Descripción General:

1º. El carrito, lo primero que nos pide, es iniciar sesión para poder agregar items al carrito (http://localhost:3000/login).

2º. En caso de no poseer usuario, por no haberlo cargado nunca en la base de datos de firebase, podemos crearlo en (http://localhost:3000/signup)

3º. Una vez logueados, la navbar nos muestra el carrito y el nombre de usuario, a partir de allí podemos empezar a cargar los items que queremos.

4º. Dentro del carrito (http://localhost:3000/cartproducts), verificamos que el items y cantidades estén OK, podemos subir y bajar cantidades mediante los botones de + y - respectivamente. Una vez verificado, procedemos con la compra de los productos, pulsando el botón "Proceder al pago"

5º. Dentro de la pantalla de pago (http://localhost:3000/cashout), la página nos carga automáticamente los datos del cliente, cantidad de items y salgo a pagar. Nos pide también que agreguemos manualmente la dirección de entrega y un número de contacto. Una vez hecho esto y pulsando el botón "Enviar Compra", genera y envía una orden de compra a la base de datos de Firebase.

6º. La página tambien permite agregar los productos a la baste de datos de Firebase mediante el siguiente link (http://localhost:3000/cashout). Esto nos permite cargar los productos sin tener que dirigirnos a la web de Firebase.

7º. Tambien cuenta con una página de error 404 (Page not found), al colocar cualquier dirección en la pantalla que no sea las anteriormente mencionadas.
