package com.abk.realtor.dto;

public record RegisterForm(
    String firstName,
    String lastName,
    String username,
    String password
) {
}
