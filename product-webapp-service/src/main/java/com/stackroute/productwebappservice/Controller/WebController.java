package com.stackroute.productwebappservice.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class WebController {
    @GetMapping("/")
    public String webapp() {
        return "index.html";
    }
}
