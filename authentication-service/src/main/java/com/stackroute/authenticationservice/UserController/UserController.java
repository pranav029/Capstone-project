package com.stackroute.authenticationservice.UserController;

import com.stackroute.authenticationservice.Exception.AlreadyFoundException;
import com.stackroute.authenticationservice.User.User;
import com.stackroute.authenticationservice.UserService.userService;
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
    private userService user;

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User u) throws AlreadyFoundException
    {
        User u1=user.addUser(u);
        return new ResponseEntity<>(u1, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User u) throws EntityNotFoundException
    {
        Map<String,String> map=user.login(u);
      return new ResponseEntity<>(map,HttpStatus.OK);
    }
    @GetMapping("/users")
    public ResponseEntity<?> getAllUser()
    {
        List<User> users=user.getAllUsers();
        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }






}
