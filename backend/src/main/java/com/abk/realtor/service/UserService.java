package com.abk.realtor.service;

import com.abk.realtor.dto.RegisterForm;
import com.abk.realtor.model.User;
import com.abk.realtor.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    List<User> getAllUsers();

    Optional<User> getUserById(Integer id);

    User saveUser(User user);

    User updateUser(Integer id, User updatedUser);

    void deleteUser(Integer id);

    User addCustomer(RegisterForm registerForm);
}

