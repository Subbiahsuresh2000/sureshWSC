package com.example.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login registerUser(String username, String password) {
        Login login = new Login(username, password);
        return loginRepository.save(login);
    }

    public Optional<Login> findUserByUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    public boolean validateUser(String username, String password) {
        Optional<Login> user = loginRepository.findByUsername(username);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}
