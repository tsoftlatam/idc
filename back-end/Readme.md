
# POC IDC - BACKEND

### Servicio REST de inspecciones

Arranque la aplicacion con "mvn spring-boot:run"

* obtiene lista de analysis: http://localhost:8088/analysis
* get analysis: http://localhost:8088/analysis/{id}
* buscar por aplicativo: http://localhost:8088/services/analysis/search/applications?application=CRS
* buscar por fechas: http://localhost:8088/services/analysis/search/dates?initdate=20170101&enddate=20170630

### Ejemplo lista de analisis devuelto (json)
```
{
  "_embedded" : {
    "analysis" : [ {
      "application" : "CRS",
      "module" : "ADEP20170204",
      "execdate" : "2017-06-12T02:42:38.340+0000",
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
      "execdate" : "2017-06-12T02:42:38.344+0000",
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
      "execdate" : "2017-06-12T02:42:38.344+0000",
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
