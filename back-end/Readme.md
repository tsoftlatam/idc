
# POC IDC - BACKEND

### Servicio REST de inspecciones

Implementa un repositorio de inspecciones (entidad `analysis`) que puede consultarse por fechas o por aplicativo. 

Contrucción y arranque 
`mvn spring-boot:run`

Ejemplos URLs
* obtiene lista de analysis: http://localhost:8088/services/analysis
* get analysis: http://localhost:8088/services/analysis/1
* buscar por aplicativo: http://localhost:8088/services/analysis/search/applications?application=CRS
* buscar por fechas: http://localhost:8088/services/analysis/search/dates?initdate=20170101&enddate=20170630

### Ejemplo respuesta lista de analisis (json)
```
{
  "_embedded" : {
    "analysis" : [ {
      "application" : "CRS",
      "module" : "ADEP20170204",
      "execdate" : "2017-06-12T03:25:34.737+0000",
      "result" : "RECHAZADO",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8088/services/analysis/1"
        },
        "analysis" : {
          "href" : "http://localhost:8088/services/analysis/1"
        }
      }
    }, {
      "application" : "CRS",
      "module" : "ART20161050",
      "execdate" : "2017-06-12T03:25:34.754+0000",
      "result" : "APROBADO",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8088/services/analysis/2"
        },
        "analysis" : {
          "href" : "http://localhost:8088/services/analysis/2"
        }
      }
    }, {
      "application" : "SSDD",
      "module" : "DEV1.3",
      "execdate" : "2017-06-12T03:25:34.754+0000",
      "result" : "RECHAZADO",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8088/services/analysis/3"
        },
        "analysis" : {
          "href" : "http://localhost:8088/services/analysis/3"
        }
      }
    } ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8088/services/analysis/search/dates?initdate=20170101&enddate=20170630"
    }
  }
}
```
