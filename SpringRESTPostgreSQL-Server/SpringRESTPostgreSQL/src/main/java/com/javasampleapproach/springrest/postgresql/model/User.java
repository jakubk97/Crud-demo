package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@Column(name = "id")
	private int id;

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;

	@Column(name = "password")
	private String password;

	@Column(name = "role")
	private String role;

	@Column(name = "login")
	private String login;

	@Column(name = "active")
	private boolean active;

	public User() {
	}

	public User(int id, String firstname, String lastname, String password, String role, String login, boolean active) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.role = role;
		this.login = login;
		this.active = false;
	}

	public User(String firstname, String lastname, String password, String role, String login, boolean active) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.role = role;
		this.login = login;
		this.active = false;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
}
