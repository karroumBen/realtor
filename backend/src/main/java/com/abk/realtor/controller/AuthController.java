package com.abk.realtor.controller;

import com.abk.realtor.dto.IncomingUser;
import com.abk.realtor.dto.LoginResponse;
import com.abk.realtor.dto.RegisterForm;
import com.abk.realtor.util.JwtUtilityService;
import com.abk.realtor.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtilityService jwtUtilityService;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody IncomingUser user) {
        var userDetail = userDetailsService.loadUserByUsername(user.username());

        var password = userDetail.getPassword();

        System.out.println(userDetail);

        if(!passwordEncoder.matches(user.password(), password)) {
            throw new BadCredentialsException("Invalid username or password");
        }
        String[] roleNames = userDetail.getAuthorities()
                .stream().map(GrantedAuthority::getAuthority).toArray(String[]::new);

        String token = jwtUtilityService.generateToken(user.username(), roleNames);
        var response = new LoginResponse(token, userDetail.getUsername());

        return ResponseEntity.ok(response);
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterForm registerForm) {
        try {
            System.out.println("inside register");
            userService.addCustomer(registerForm);
            return ResponseEntity.ok("User successfully registered");

        } catch (BadCredentialsException e){
            System.out.println("User Not Found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
