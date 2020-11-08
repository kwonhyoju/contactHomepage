package com.kyj.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping(value = "/api", method = RequestMethod.GET)
	public String home() {
		System.out.println("home");
		return "RESTController CALL!!!! \n";
	}
	
}
