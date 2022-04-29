# Code_Challenge

## API
Esta api es para consultar una lista de estudiantes, las funciones desarrolladas son bastante sencillas.
1. Se puede consultar una lista de estudiantes con todo y sus campos disponibles como lo son el nombre, el correo, la cantidad de creditos que tienen, entre otras cosas (Imagen 1).
2. Una de las rutas esta destinada para consultar los correos de los alumnos que tengan certificacion (Imagen 2).
3. Por ultimo otra ruta esta destinada para consultar el nombre de los alumnos que tengan creditos mayores a 500 (Imagen 3).

![image](https://user-images.githubusercontent.com/70303807/165883275-71c915d9-8f15-44c0-b5b9-1910b73c615f.png)
Imagen 1
![image](https://user-images.githubusercontent.com/70303807/165883304-a2319d6b-5919-4efe-a80b-c23b1f6b84f6.png)
Imagen 2
![image](https://user-images.githubusercontent.com/70303807/165883320-cc91627d-9169-486a-a2f2-86ccb10ba7b4.png)
Imagen 3

Yo se que es posible hacer todo de manera dinamica, por ejemplo, que puedas consultar a los alumnos con y sin certificado, o bien, buscar los alumnos con menor cantidad de creditos, peeeero, pensando se tratase de un cliente creo yo que no es bueno hacer cosas que el cliente no pide sin su consentimiento, ademas de que se podria cobrar mas por cambios extras, yo se que aqui son cambiar una cuantas lineas de codigo, cosa que puede quedar en 5 minutos, pero de nuevo, hago lo que me pidan.

## Diseño de componentes
Los componentes se fueron ideando conforme a las pruebas, primero se diseño una prueba para comprobar la funcionalidad de un metodo, tal como la siguiente.

![image](https://user-images.githubusercontent.com/70303807/165883741-0a1a7ce3-1ae7-4e31-bf88-5f046e6c686c.png)
Imagen 4

Posteriormente se creo las carpetas necesarias donde se colocaria dicho servicio para colocar el metodo deseado, tras pasar la prueba me fue al archivo de controlador para poder hacer uso de dicho servicio y posteriormente crear un endpoint para la consulta de dicha informacion (Imagen 5).

![image](https://user-images.githubusercontent.com/70303807/165884455-ece49667-3cb8-484f-8a77-3e2adaf86f37.png)
Imagen 5

## Dependencias
Dependencias utilizadas
- Jest. Necesaria para las pruebas de unidad
- Express. Necesaria para poder crear nuestro servidor local
- Linter. No realmente necesario, ya que si escribimos de manera correcta no se utilizaria, pero nos ayuda como un chequeo para comprobar que no tengamos cosas inecesarias y este escrito de manera correcta.
