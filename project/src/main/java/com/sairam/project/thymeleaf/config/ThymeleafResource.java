package com.sairam.project.thymeleaf.config ;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class ThymeleafResource {
    @RequestMapping(value ="/h")
    String requisitionMain(Model model) {
    	System.out.println("hjdhhdhd");
        return "home";
    }	
  
}

