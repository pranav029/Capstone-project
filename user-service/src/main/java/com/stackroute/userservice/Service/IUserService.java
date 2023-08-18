package com.stackroute.userservice.service;
import java.util.List;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.AlreadyExistException;
import com.stackroute.userservice.exception.EmailPasswordUpdateException;


public interface
IUserService {
    public User addUser(User u) throws AlreadyExistException;
    public User updateuser(User u,String email,String password,String urole) throws EmailPasswordUpdateException;
    public List<User> getUser();
    public User getUserbyemail(String email);


}