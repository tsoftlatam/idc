package idc;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Controller {
    @RequestMapping("/test")
    public String index() {
        return "{ \"ok\": \"true\" }";
    }
}
