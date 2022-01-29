package com.pt.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.pt.authentication.models.User;
import com.pt.authentication.models.UserLogin;
import com.pt.authentication.services.UserService;

@Controller
public class HomeController {
	
	@Autowired
	private UserService userService;
    
    @GetMapping("/")
    public String index( ) {
    	return "redirect:/login";
    }
    
    @GetMapping("/register")
    public String registerForm(@ModelAttribute("newUser") User newUser, @ModelAttribute("newLogin") UserLogin newLogin) {
    	
    	return "registration.jsp";
    }
     
    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute("newUser") User newUser, BindingResult result,
    							HttpSession session, Model model) {

    	userService.register(newUser, result);
    	
    	if (result.hasErrors() ) {  		
    		System.out.println(result);  			
    		return "registration.jsp";
    	}
    	
    	session.setAttribute("userId", newUser.getId() );		
    	return "redirect:/home";	
    }
    
    @GetMapping("/login")
    public String login(Model model) {
    	model.addAttribute("login", new UserLogin() );
    	return "login.jsp";
    }
    
    @PostMapping("/login")
    public String loginUser(@Valid @ModelAttribute("login") UserLogin login, BindingResult result, Model model, HttpSession session) {
    	User user = userService.login(login, result);    	
    	
    	if (result.hasErrors() ) {
    		model.addAttribute("newUser", new User() );
    		return "login.jsp";
    	}
	
    	session.setAttribute("userId", user.getId() );
    	return "redirect:/home";
    }
    
    @GetMapping("/home")
    public String home(HttpSession session, Model model) {
    	if (session.getAttribute("userId") == null)
    		return "redirect:/login";
    	
    	User user = userService.findUserById((Long)session.getAttribute("userId") );

    	model.addAttribute("user", user);
    	return "home.jsp";
    }
    
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
  
}//END
