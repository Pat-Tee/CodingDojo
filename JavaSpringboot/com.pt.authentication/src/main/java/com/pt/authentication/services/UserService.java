package com.pt.authentication.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.pt.authentication.models.User;
import com.pt.authentication.models.UserLogin;
import com.pt.authentication.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
    // register user and hash their password
    public User register(User newUser, BindingResult result) {
    	
    	if (userRepository.findByUserName(newUser.getUserName() ) != null) {
    		result.rejectValue("userName", "Unique", "This username is already in use!");
    	}
    	
    	if (userRepository.findByEmail(newUser.getEmail() ) != null) {
    		result.rejectValue("email", "Unique", "This email is already in use!");
    	}
    	
    	String pass1 = newUser.getPassword();
    	String pass2 = newUser.getPasswordConfirmation();
    	
    	if ( !pass1.equals(pass2) ) {
    		System.out.println("newUser.password = |"+ pass1 +"|" );
    		System.out.println("newUser.passwordConfirmation = |"+ pass2 +"|" );
    		result.rejectValue("passwordConfirmation", "Matches", "The confirmation password does not match!");
    	}
    	
    	if (result.hasErrors() ) {
    		return null;
    	} else {
    		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt() );
    		newUser.setPassword(hashed);
    		return userRepository.save(newUser);
    	}
    }
    
    public User login(UserLogin newLogin, BindingResult result) {
    	if (result.hasErrors() )
    		return null;
    	
    	User lUser = userRepository.findByUserName(newLogin.getUserName() );
    	
    	if (lUser == null ) {
    		result.rejectValue("userName","Unique","Unknown username!");
    		return null;
    	}
    	
    	if (!BCrypt.checkpw(newLogin.getPassword(), lUser.getPassword() ) )
    		result.rejectValue("password", "Matches", "Invalid password!");
    	
    	if (result.hasErrors() )
    		return null;
    	else
    		return lUser;
    }
    
    // find user by id
    public User findUserById(Long id) {
    	Optional<User> u = userRepository.findById(id);
    	
    	if(u.isPresent()) {
            return u.get();
    	} else {
    	    return null;
    	}
    }
    
/*    // authenticate user; this is the old login/registration functionality for authentication
    public boolean authenticateUser(String username, String password) {

        User user = userRepository.findByUserName(username);

        if(user == null) {
            return false;
        } else {
            // if the passwords match, return true, else, return false
            if(BCrypt.checkpw(password, user.getPassword())) {
                return true;
            } else {
                return false;
            }
        }
    }
*/    
}//END
