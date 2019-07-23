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
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.postgresql.model.Role;
import com.javasampleapproach.springrest.postgresql.model.User;
import com.javasampleapproach.springrest.postgresql.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class UserController {
	@Autowired
	UserRepository userrepository;

	// downloading all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");
		List<User> users = new ArrayList<>();
		userrepository.findAll().forEach(users::add);
		return users;
	}

//	// downloading all users with given lastname
//	@GetMapping(value = "users/lastname/{lastname}")
//	public List<User> findBylastname(@PathVariable String lastname) {
//
//		List<User> users = userrepository.findBylastname(lastname);
//		System.out.println("Searching aaaaaaaa");
//		return users;
//	}

	// delete user with given id
	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
		System.out.println("Delete User with ID = " + id + "...");
		userrepository.deleteById(id);
		Optional<User> userData = userrepository.findById(id);
		if (userData.isPresent()) {
			System.out.println("Error");
			return new ResponseEntity<>("Error", HttpStatus.CONFLICT);
		} else {
			System.out.println("Deleted");
			return new ResponseEntity<>("Ok", HttpStatus.OK);
		}
	}

	// update user with given id
	@PutMapping("/users/update/{id}")
	public ResponseEntity<User> updateCustomer(@PathVariable("id") long id, @RequestBody User user) {
		System.out.println("Update Customer with ID = " + id + "...");

		Optional<User> userData = userrepository.findById(id);
		if (userData.isPresent()) {
			System.out.println("Updating");
			return new ResponseEntity<>(userrepository.save(user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// search user by login
	@GetMapping(value = "users/{login}")
	public ResponseEntity<String> searchUser(@PathVariable("login") String login) {
		System.out.println("Searching for user with login =" + login + "...");
		Optional<User> userData = userrepository.findBylogin(login);
		if (userData.isPresent()) {
			return new ResponseEntity<>("Login exist", HttpStatus.CONFLICT);
		} else {
			return new ResponseEntity<>("Ok", HttpStatus.OK);
		}
	}

	// create new user
	@PostMapping(value = "users/create")
	public ResponseEntity<String> postUser(@RequestBody User user) {
		System.out.println("Creating user with login =" + user.getLogin() + "...");
		user.setRole(Role.user);
		userrepository.save(user);
		Optional<User> userData = userrepository.findBylogin(user.getLogin());
		if (userData.isPresent()) {
			return new ResponseEntity<>("Created", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
		}
	}

}
