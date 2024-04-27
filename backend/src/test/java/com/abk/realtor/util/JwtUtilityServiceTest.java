package com.abk.realtor.util;

import com.abk.realtor.util.JwtUtilityService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.crypto.SecretKey;

public class JwtUtilityServiceTest {
    private JwtUtilityService jwtUtilityService;

    @BeforeEach
    void setUp() {
        String SECRET = "M0g9JhdFu8bMfnkbywETmTmhtuTI+3XYBt20zQqK4w0=";
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET));
        jwtUtilityService = new JwtUtilityService();
        jwtUtilityService.setKey(key);
        jwtUtilityService.setSECRET(SECRET);
    }

    @Test
    void testGenerateToken() {
        String username = "testUser";
        String[] roles = {"ROLE_ADMIN", "ROLE_USER"};
        String token = jwtUtilityService.generateToken(username, roles);
        Assertions.assertNotNull(token);
    }

    @Test
    void testExtractAllClaims() {
        String username = "test@gmail.com";
        String[] roles = {"admin", "customer"};
        String token = jwtUtilityService.generateToken(username, roles);
        Claims claims = jwtUtilityService.extractAllClaims(token);
        Assertions.assertNotNull(claims);
        Assertions.assertEquals(username, claims.getSubject());
    }

    @Test
    void testValidateTokenValid() {
        String username = "test@gmail.com";
        String[] roles = {"admin", "customer"};
        String token = jwtUtilityService.generateToken(username, roles);
        boolean isValid = jwtUtilityService.validateToken(token);
        Assertions.assertTrue(isValid);
    }

    @Test
    void testValidateTokenInvalid() {
        String invalidToken = "invalidToken";
        Assertions.assertFalse(jwtUtilityService.validateToken(invalidToken));
    }
}

