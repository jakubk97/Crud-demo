package com.javasampleapproach.springrest.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.postgresql.model.Customer;
import com.javasampleapproach.springrest.postgresql.model.User;
import com.javasampleapproach.springrest.postgresql.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class UserController {
	@Autowired
	UserRepository userrepository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");

		List<User> users = new ArrayList<>();
		userrepository.findAll().forEach(users::add);

		return users;
	}

	@GetMapping(value = "users/lastname/{lastname}")
	public List<User> findBylastname(@PathVariable String lastname) {

		List<User> users = userrepository.findBylastname(lastname);
		System.out.println("Searching aaaaaaaa");
		return users;
	}
	
	
	@PutMapping("/login")
	public ResponseEntity<User> loggin(@RequestBody User user) {
		System.out.println("Searching for data to loggin");

		List<User> userDatalogin = userrepository.findBylogin(user.getLogin());
		User _user = userDatalogin.get(0);
		if(_user.getPassword()==user.getPassword()) {
			System.out.println("Succes");
			return new ResponseEntity<>(userrepository.save(_user),HttpStatus.OK);
		}
		else {
			System.out.println("Failture");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
