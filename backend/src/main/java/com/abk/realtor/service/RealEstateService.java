package com.abk.realtor.service;

import com.abk.realtor.model.RealEstate;
import com.abk.realtor.repository.RealEstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RealEstateService {

    @Autowired
    private RealEstateRepository realEstateRepository;

    public List<RealEstate> getAllRealEstates() {
        return realEstateRepository.findAll();
    }

    public Optional<RealEstate> getRealEstateById(Integer id) {
        return realEstateRepository.findById(id);
    }

    public RealEstate saveRealEstate(RealEstate realEstate) {
        return realEstateRepository.save(realEstate);
    }

    public RealEstate updateRealEstate(Integer id, RealEstate updatedRealEstate) {
        RealEstate existingRealEstate = realEstateRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("RealEstate with id " + id + " not found"));
        existingRealEstate.setName(updatedRealEstate.getName());
        existingRealEstate.setPrice(updatedRealEstate.getPrice());
        existingRealEstate.setDescription(updatedRealEstate.getDescription());
        existingRealEstate.setAddress(updatedRealEstate.getAddress());
        return realEstateRepository.save(existingRealEstate);
    }

    public void deleteRealEstate(Integer id) {
        realEstateRepository.deleteById(id);
    }
}

