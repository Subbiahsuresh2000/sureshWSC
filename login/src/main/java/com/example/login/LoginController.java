package com.example.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/login") // Base URL for the controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    // Endpoint for registering a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Login login) {
        try {
            Login newUser = loginService.registerUser(login.getUsername(), login.getPassword());
            return ResponseEntity.ok(newUser); // Returns the registered user details
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    // Endpoint for validating a user's credentials
    @PostMapping("/validate")
    public ResponseEntity<?> validateUser(@RequestBody Login login) {
        boolean isValid = loginService.validateUser(login.getUsername(), login.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // Corrected endpoint for fetching a user by username
    @GetMapping("/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        Optional<Login> user = loginService.findUserByUsername(username);
        
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    }

