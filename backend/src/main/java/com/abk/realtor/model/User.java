package com.abk.realtor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private LocalDate dob;
    private LocalDate createdAt;
    @OneToOne
    private Address address;
    @ManyToMany(cascade =  CascadeType.MERGE)
    @JoinTable(name = "users_roles")
    private List<Role> roles = new ArrayList<>();

}
