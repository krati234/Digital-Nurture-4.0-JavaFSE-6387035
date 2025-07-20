package com.cognizant.jwt_learn.controller;

import com.cognizant.jwt_learn.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class Authenticationcontroller {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@AuthenticationPrincipal UserDetails user) {
        String token = jwtUtil.generateToken(user.getUsername());
        return Map.of("token", token);
    }
}

