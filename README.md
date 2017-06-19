Inspector de código (IDC)
=========================

Construido con [Spring Boot](https://spring.io/guides/gs/spring-boot/), [React](https://facebook.github.io/react/) y [Material Design Lite](https://getmdl.io/)

Requerimientos
--------------

* JDK 1.8 o superior
* Maven 3.0 o superior
* Node 6.11 o superior con NPM 3.10 o superior

Construcción y ejecución
------------------------

Instalar Webpack globalmente:

    npm install -g webpack

Luego compilar el front end:

    cd front-end
    npm install
    npm run build

Para iniciar el back-end, `./runall.sh` (Linux) o `runall.bat` (Windows).

Luego abrir en un navegador [http://localhost:8088/](http://localhost:8080/)
