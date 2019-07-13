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

import com.javasampleapproach.springrest.postgresql.model.Manufacturer;
import com.javasampleapproach.springrest.postgresql.model.User;
import com.javasampleapproach.springrest.postgresql.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class UserController {
	@Autowired
	UserRepository userrepository;

	//downloading all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");
		List<User> users = new ArrayList<>();
		userrepository.findAll().forEach(users::add);

		return users;
	}

	//downloading all users with given lastname
	@GetMapping(value = "users/lastname/{lastname}")
	public List<User> findBylastname(@PathVariable String lastname) {

		List<User> users = userrepository.findBylastname(lastname);
		System.out.println("Searching aaaaaaaa");
		return users;
	}
	
	//delete user with given id
	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
		System.out.println("Delete User with ID = " + id + "...");
		userrepository.deleteById(id);
		System.out.println("Deleted");
		return new ResponseEntity<>("Customer has been deleted!", HttpStatus.OK);
	}
	
	//update user with given id
	@PutMapping("/users/update/{id}")
	public ResponseEntity<User> updateCustomer(@PathVariable("id") long id, @RequestBody User user) {
		System.out.println("Update Customer with ID = " + id + "...");

		Optional<User> userData = userrepository.findById(id);
		if (userData.isPresent()) {
			User _user = userData.get();
			_user.setFirstname(user.getFirstname());
			_user.setLastname(user.getLastname());
			_user.setLogin(user.getLogin());
			_user.setPassword(user.getPassword());
			_user.setRole(user.getRole());
			_user.setActive(user.isActive());
			System.out.println("Updating");
			return new ResponseEntity<>(userrepository.save(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//create new user
	@PostMapping(value = "users/create")
	public User postUser(@RequestBody User user) {
		System.out.println("Posting User...");
		User _user = userrepository.save(new User(user.getFirstname(),user.getLastname(),user.getPassword(),user.getLogin()));
		return _user;
	}
	
	
//	@PostMapping("/login")
//	public String loggin(@RequestParam(name = "id") String fooId, @RequestParam String name) {
//		System.out.println("Searching for data to loggin");
//
//		List<User> userDatalogin = userrepository.findBylogin(user.getLogin());
//		User _user = userDatalogin.get(0);
//		if(_user.getPassword()==user.getPassword()) {
//			System.out.println("Succes");
//			return new ResponseEntity<>(userrepository.save(_user),HttpStatus.OK);
//		}
//		else {
//			System.out.println("Failture");
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}

}
