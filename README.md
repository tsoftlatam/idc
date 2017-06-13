Inspector de código (IDC)
=========================

Construido con [Spring Boot](https://spring.io/guides/gs/spring-boot/)

Requerimientos
--------------

* JDK 1.8 o superior
* Maven 3.0 o superior
* Node 6.11 o superior con NPM 3.10 o superior

Construcción y ejecución del back-end
-------------------------------------

    cd back-end
    mvn package
    java -jar target/idc-1.0-SNAPSHOT.jar

Luego abrir en un navegador [http://localhost:8080/test](http://localhost:8080/test)

Construcción del front-end
--------------------------

Instalar Webpack globalmente:

    npm install -g webpack

Luego:

    cd front-end
    npm install
    npm run build

Luego abrir en un navegador `dist/index.html`
