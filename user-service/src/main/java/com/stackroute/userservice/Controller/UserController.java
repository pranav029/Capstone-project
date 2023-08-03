package com.stackroute.userservice.Controller;

import com.stackroute.userservice.Domain.User;
import com.stackroute.userservice.Exception.AlreadyExistException;
import com.stackroute.userservice.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/register")

public class UserController {
    private UserService user;
    @Autowired
    public UserController(UserService user) {
        this.user = user;
    }

    @PostMapping("/adduser")
    public ResponseEntity<?> addNews(@RequestBody User u) throws AlreadyExistException {
        System.out.println(user);
        User u1=user.addUser(u);
        return new ResponseEntity<>(u1, HttpStatus.CREATED);
    }
    @PutMapping("/Update/{email}")
    public ResponseEntity<?> updateuser(@RequestBody User u,@PathVariable String email){
       User u4 = user.updateuser(u, email);
       return new ResponseEntity<>("Updated successfully",HttpStatus.OK);
    }

    @GetMapping("/getUser")
    public ResponseEntity<?> getuser(User u){
        List<User> u2=user.getUser();
        return new ResponseEntity<List<User>>(u2,HttpStatus.OK);
    }

    @GetMapping("/getUser/{email}")
    public ResponseEntity<?>getbyid(@PathVariable String email)
    {
        User u3=user.getUserbyemail(email);
        return new ResponseEntity<User>(u3,HttpStatus.OK);
    }
}