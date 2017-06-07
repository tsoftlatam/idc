package idc;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Controller {
    @RequestMapping("/")
    public String index() {
        return "Bienvenido a Spring Boot";
    }
}
