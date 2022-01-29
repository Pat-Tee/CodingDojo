package com.pt.authentication.models;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class UserLogin {
	
    @NotEmpty(message="Username is required!")
    @Size(min=5, max=30, message="Username must be between 5 and 30 characters")
    private String userName;
	
	@NotEmpty(message="Password is required.")
	@Size(min=7, max=45, message="Password must be between 8 and 45 characters in length")
	private String password;

	public UserLogin() {}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
