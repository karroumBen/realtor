package com.abk.realtor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String username;
    private String password;
    private LocalDate createdAt = LocalDate.now();
    @OneToOne
    private Address address;
    @ManyToMany(cascade =  CascadeType.MERGE)
    private List<Role> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(roles!=null)
            return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName()))
                    .collect(Collectors.toList());
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    public List<String> getAuthoritiesList() {
        if(roles!=null)
            return roles.stream().map(role ->  role.getName())
                    .collect(Collectors.toList());
        return null;
    }

    public String[] getRoleNames() {
        return roles.stream().map(Role::getRoleName).toArray(String[]::new);
    }

}
