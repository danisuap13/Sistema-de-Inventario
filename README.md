# Sistema-de-Inventario
METODOLOGÍA SCRUM

-- Nombre del Caso de Uso: "Gestión de Inventario para Tienda Pequeña Colombiana"

Actor Principal: Empleado de la tienda

Precondiciones:

El software de gestión de inventario está instalado y configurado en la tienda.
El empleado tiene acceso autorizado al sistema con sus credenciales.
Descripción:
El objetivo de este caso de uso es permitir que el empleado de la tienda gestione el inventario de manera efectiva, asegurando que los productos estén disponibles para su venta y que se mantenga un registro preciso de las existencias.

Flujo Principal:

Registro de Producto

El empleado inicia sesión en el sistema.
Selecciona la opción de "Registro de Producto".
Ingresa los detalles del nuevo producto, como nombre, descripción, precio, categoría y cantidad inicial en inventario.
Confirma la creación del nuevo producto.
El sistema registra el producto en la base de datos del inventario.
Actualización de Inventario

El empleado selecciona la opción de "Actualización de Inventario".
Escanea el código de barras o busca el producto por nombre.
Ingresa la cantidad de productos que se han vendido o recibido en el inventario.
El sistema actualiza automáticamente las existencias y registra el movimiento en el historial.
Consulta de Inventario

El empleado elige la opción de "Consulta de Inventario".
Puede buscar productos por nombre, categoría o código de barras.
El sistema muestra la información detallada de los productos, incluyendo su cantidad disponible en inventario y su historial de movimientos.
Generación de Reportes

El empleado puede seleccionar la opción de "Generación de Reportes".
Puede generar informes sobre productos más vendidos, productos con poca existencia, entre otros.
Los informes son generados por el sistema y se pueden exportar en diferentes formatos, como PDF o Excel.
Poscondiciones:

El inventario de la tienda se mantiene actualizado con precisión.
Se pueden generar informes que ayuden en la toma de decisiones para la gestión de inventario.

-- Historia de Usuario: Actualización Rápida de Existencias

Nombre: Actualización Rápida de Existencias

Descripción:
Como empleado de la tienda, quiero poder actualizar rápidamente las existencias de múltiples productos al mismo tiempo, para ahorrar tiempo y minimizar errores en el registro de inventario.

Criterios de Aceptación:

Como usuario, debo poder acceder a la función de "Actualización Rápida de Existencias" desde la página principal del sistema.

Debo poder seleccionar varios productos a la vez para actualizar sus existencias.

Para cada producto seleccionado, debo poder especificar si quiero agregar o restar unidades del inventario existente.

Debo poder ingresar la cantidad de unidades que se agregarán o restarán para cada producto seleccionado.

El sistema debe realizar la actualización de las existencias de forma inmediata y precisa para cada producto.

Debe haber una confirmación visual de que las existencias se han actualizado correctamente para cada producto.

El sistema debe mantener un registro de las actualizaciones realizadas, incluyendo la fecha, el producto, la cantidad modificada y el usuario que realizó la actualización.

Definición de Terminado:

La función de "Actualización Rápida de Existencias" está completamente implementada en el sistema.
La función se ha probado exhaustivamente y no presenta errores significativos.
Se ha realizado una revisión de código y se ha asegurado que cumple con los estándares de calidad.
La función se ha documentado adecuadamente en la guía de usuario del sistema.
