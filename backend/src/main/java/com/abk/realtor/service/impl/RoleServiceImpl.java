package com.abk.realtor.service.impl;

import com.abk.realtor.model.Role;
import com.abk.realtor.repository.RoleRepository;
import com.abk.realtor.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public Role getRoleByName(String name) {
        return roleRepository.findByName(name);
    }
}
