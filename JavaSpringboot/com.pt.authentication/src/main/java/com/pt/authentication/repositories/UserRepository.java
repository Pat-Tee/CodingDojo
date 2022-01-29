package com.pt.authentication.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pt.authentication.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

		User findByEmail(String email);
		User findByUserName(String userName);
}
