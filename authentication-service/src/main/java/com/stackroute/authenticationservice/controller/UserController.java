package com.stackroute.authenticationservice.controller;


import com.stackroute.authenticationservice.Exception.AlreadyFoundException;
import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService user;

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User u) throws AlreadyFoundException {
        try {
            User u1 = user.addUser(u);
            return new ResponseEntity<>(u1, HttpStatus.CREATED);
        } catch (AlreadyFoundException alreadyFoundException) {
            return new ResponseEntity<>("User is already present", HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User u) throws EntityNotFoundException {
        try {
            Map<String, String> map = user.login(u);
            String role = String.valueOf(u.getUserRole()); // Get the user's role from the User object
            map.put("role", role); // Add the role to the response map
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("Invalid Credential", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUser() {
        List<User> users = user.getAllUsers();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

}
