package com.javasampleapproach.springrest.postgresql.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.javasampleapproach.springrest.postgresql.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findBylastname(String lastname);
	Optional<User> findById(long Id);
	Optional<User> findBylogin(String login);
}
