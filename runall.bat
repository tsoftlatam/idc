xcopy /e /y front-end\dist\* back-end\src\main\webapp
cd back-end
mvn spring-boot:run
