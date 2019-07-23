package com.javasampleapproach.springrest.postgresql.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.javasampleapproach.springrest.postgresql.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findById(long Id);

	Optional<User> findBylogin(String login);

	User findByLogin(String login);

	Boolean existsByLogin(String login);

}
