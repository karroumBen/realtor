package com.abk.realtor.controller;


import com.abk.realtor.model.RealEstate;
import com.abk.realtor.service.RealEstateService;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/realEstates")
public class RealEstateController {

    @Autowired
    private RealEstateService realEstateService;

    @GetMapping
    public List<RealEstate> getAllRealEstates() {
        return realEstateService.getAllRealEstates();
    }

    @GetMapping("/{id}")
    public Optional<RealEstate> getRealEstateById(@PathVariable Integer id) {
        return realEstateService.getRealEstateById(id);
    }

    @PostMapping
    public RealEstate saveRealEstate(@RequestBody RealEstate realEstate) {
        return realEstateService.saveRealEstate(realEstate);
    }

    @PutMapping("/{id}")
    public RealEstate updateRealEstate(@PathVariable Integer id, @RequestBody RealEstate updatedRealEstate) {
        return realEstateService.updateRealEstate(id, updatedRealEstate);
    }

    @DeleteMapping("/{id}")
    public void deleteRealEstate(@PathVariable Integer id) {
        realEstateService.deleteRealEstate(id);
    }
}

