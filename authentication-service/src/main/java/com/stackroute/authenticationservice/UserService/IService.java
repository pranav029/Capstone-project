package com.stackroute.authenticationservice.UserService;

import com.stackroute.authenticationservice.Exception.AlreadyFoundException;
import com.stackroute.authenticationservice.User.User;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Map;

public interface IService {
    public Object addUser(User u) throws AlreadyFoundException;
    public Map<String,String> login(User u) throws EntityNotFoundException;
    public List<User> getAllUsers();

}
