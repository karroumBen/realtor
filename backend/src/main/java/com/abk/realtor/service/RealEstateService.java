package com.abk.realtor.service;

import com.abk.realtor.model.RealEstate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RealEstateService {
    List<RealEstate> getAllRealEstates();

    Optional<RealEstate> getRealEstateById(Integer id);

    RealEstate saveRealEstate(RealEstate realEstate);
    RealEstate updateRealEstate(RealEstate updatedRealEstate);

    void deleteRealEstate(Integer id);
}
