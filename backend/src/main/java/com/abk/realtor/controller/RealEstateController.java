package com.abk.realtor.controller;


import com.abk.realtor.model.RealEstate;
import com.abk.realtor.service.RealEstateServiceImpl;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RealEstateController {

    @Autowired
    private RealEstateServiceImpl realEstateService;

    @GetMapping("/list")
    public List<RealEstate> getAllRealEstates() {
        System.out.println("inside properties");
        return realEstateService.getAllRealEstates();
    }

    @GetMapping("/{id}")
    public Optional<RealEstate> getRealEstateById(@PathVariable Integer id) {
        return realEstateService.getRealEstateById(id);
    }

    @PostMapping("/new")
    public RealEstate saveRealEstate(@RequestBody RealEstate realEstate) {
        return realEstateService.saveRealEstate(realEstate);
    }

    @PostMapping("/update")
    public RealEstate updateRealEstate(@RequestBody RealEstate updatedRealEstate) {
        return realEstateService.updateRealEstate(updatedRealEstate);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRealEstate(@PathVariable Integer id) {
        realEstateService.deleteRealEstate(id);
    }
}

