package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

@Entity
@Table(name = "users")
@TypeDef(
	    name = "pgsql_enum",
	    typeClass = PostgreSQLEnumType.class
	)
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;

	@Column(name = "password")
	private String password;

	//definition of enum type (projection of enum type from database)
	@Enumerated(EnumType.STRING)
    @Column(length = 5,columnDefinition = "rola") //max value length and column name
	@Type( type = "pgsql_enum" )
    private Role role;

	@Column(name = "login")
	private String login;

	@Column(name = "active")
	private boolean active;

	public User() {
	}

	public User(String firstname, String lastname, String password, String login) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.login = login;
		this.role = role.user;
		this.active = true;
	}

	public long getId() {
		return id;
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
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
