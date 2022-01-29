package com.pt.authentication.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.pt.authentication.models.User;

@Component
public class UserValidator implements Validator{
	
	@Override
	public boolean supports(Class<?> myClass) {
		return User.class.equals(myClass);
	}
	
	@Override
	public void validate(Object target, Errors errors) {
		//User user = (User) target;

	}
}
