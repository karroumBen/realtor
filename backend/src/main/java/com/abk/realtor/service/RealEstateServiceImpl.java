package com.abk.realtor.service;

import com.abk.realtor.model.RealEstate;
import com.abk.realtor.repository.RealEstateRepository;
import com.abk.realtor.service.RealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RealEstateServiceImpl implements RealEstateService {

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

    public RealEstate updateRealEstate(RealEstate updatedRealEstate) {
        RealEstate existingRealEstate = realEstateRepository.findById(updatedRealEstate.getId())
                .orElseThrow(() -> new IllegalArgumentException("RealEstate with id " + updatedRealEstate.getId() + " not found"));
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

