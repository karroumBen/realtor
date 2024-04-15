package com.abk.realtor.repository;

import com.abk.realtor.model.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealEstateRepository extends JpaRepository<RealEstate, Integer> {
    RealEstate findByName(String name);
    void deleteByName(String name);
}

