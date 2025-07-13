package com.cognizant.jwt_learn.service;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService {

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withUsername("user")
                .password("{noop}pwd")  // {noop} means no password encoding
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }
}
