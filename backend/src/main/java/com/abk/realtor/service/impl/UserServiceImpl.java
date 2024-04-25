package com.abk.realtor.service.impl;

import com.abk.realtor.dto.RegisterForm;
import com.abk.realtor.model.User;
import com.abk.realtor.repository.UserRepository;
import com.abk.realtor.service.RoleService;
import com.abk.realtor.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleService roleService;
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Integer id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User with id " + id + " not found"));
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setAddress(updatedUser.getAddress());
        existingUser.setRoles(updatedUser.getRoles());
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    @Override
    public User addCustomer(RegisterForm registerForm) {
        User u = new User();
        u.setUsername(registerForm.username());
        u.setFirstName(registerForm.firstName());
        u.setLastName(registerForm.lastName());
        u.setRoles(List.of(roleService.getRoleByName("admin")));
        u.setPassword(passwordEncoder.encode(registerForm.password()));

        return userRepository.save(u);
    }
}
