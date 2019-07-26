package com.javasampleapproach.springrest.postgresql.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.javasampleapproach.springrest.postgresql.model.Role;
import com.javasampleapproach.springrest.postgresql.model.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class UserPrinciple implements UserDetails {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String firstname;

	private String lastname;

	private String login;

	private Role role;

	private Boolean active;

	private Collection<? extends GrantedAuthority> authorities;

	@JsonIgnore
	private String password;

	public UserPrinciple(Long id, String firstname, String lastname, String login, String password, Role role,
			Boolean active, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.login = login;
		this.role = role;
		this.active = active;
		this.authorities = authorities;
	}

	public static UserPrinciple build(User user) {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole().name()));

		return new UserPrinciple(user.getId(), user.getFirstname(), user.getLastname(), user.getLogin(),
				user.getPassword(), user.getRole(), user.isActive(), authorities);
	}

	public Long getId() {
		return id;
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getLogin() {
		return login;
	}

	public Role getRole() {
		return role;
	}

	public Boolean getActive() {
		return active;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		UserPrinciple user = (UserPrinciple) o;
		return Objects.equals(id, user.id);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getUsername() {
		return login;
	}
}
