# Technical test

This was a technical test for a job application. The goal was to create a simple web application that would work as a mech radar. The application should be able to present an API that would allow the mech to receive a json with field information and select the targets that would be displayed on the radar, following different protocols.

I added a frontend view with webgl and  containers to make it easier to test the application.


# Instrucciones de uso para el módulo de visión del droide de combate YVH

Estimados compañeros de la alianza, hemos desarrollado el módulo de visión solicitado. 
Se ha generado un endpoint que atiende todos los requisitos acordados. Pero como teníamos algo más de tiempo hemos decidido extenderlo con una interfaz gráfica 3d que pueda reemplazar el antiguo frontend que disponemos actualmente.
Está interfaz es un módulo de visión en 3 dimensiones que permite identificar los mechs (cuadrados rojos grandes), los soldados (cuadrados rojos pequeños) y a los aliados (cuadrados verdes) desde la posición de nuestro droide (cuadrado azul) y permite movernos a través de la escena rotando y haciendo zoom con la cámara.

En caso de no querer contar con el lo entendemos perfectamente, por lo que el endpoint de visión es independiente y puede atender las peticiones del antiguo sistema gráfico.

# Deploy del sistema, backend y frontend

En caso de querer integrar el frontend y backend que hemos desarrollado, pueden desplegarlo en un modo de desarrollo.  Para ello, hemos generado una serie de tasks para automatizar las tareas utilizando la herramienta **vscode** y pulsando la tecla **F5**.

Si quieren desplegar el módulo en modo producción, hemos generado 3 contenedores docker que simplifican dicha tarea. Tenemos los contenedores de frontend, backend y un contenedor nginx que hace las veces de proxy inverso.

Para desplegarlo, basta con que tengan docker instalado en sus sistema y escriban el siguiente comando en la terminal:

```bash
docker compose up
```

El sistema será accesible en la siguiente direccion mediante su navegador web.
```bash
http://localhost
```

# Deploy del endpoint independiente

En caso de necesitar solo el módulo de endpoint, pueden abrir solo dicho proyecto.
Escribir en el terminal:
```bash
npm install
```
Y pulsar de nuevo **F5** en la herramienta **vscode** para desplegarlo en modo desarrollo.

O pueden mediante el terminal escribir el siguiente comando para desplegarlo en modo producción:

```bash
npm run start
```
El sistema será accesible en la direccion:

```bash
localhost:8888/radar
```

## Testing

Hemos seguido todos los protocolos de seguridad acordados, y hemos comprobado que todos sus tests se cumplen correctamente. Y para estar aún mas seguros, hemos implementado una bateria de tests más en el módulo de endpoint, para comprobarlos basta con escribir el siguiente comando:

```bash
npm run test
```
**Que la fuerza os acompañe**


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/1280px-Rebel_Alliance_logo.svg.png" width="200">


