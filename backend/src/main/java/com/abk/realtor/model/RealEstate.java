package com.abk.realtor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RealEstate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private double price;
    private String description;
    private String imageLink = "";
    private Integer rooms;
    private Integer baths;
    private Double area;
    private Boolean isFurnished = false;
    private LocalDate createdAt = LocalDate.now();
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
}
