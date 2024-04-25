package com.abk.realtor.service;

import com.abk.realtor.model.Role;
import org.springframework.stereotype.Service;

@Service
public interface RoleService {
    Role getRoleByName(String name);
}
