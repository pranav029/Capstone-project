package com.stackroute.authenticationservice.service;



import com.stackroute.authenticationservice.exception.AlreadyFoundException;
import com.stackroute.authenticationservice.model.User;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Map;

public interface IService {
    public Object addUser(User u) throws AlreadyFoundException;
    public Map<String,String> login(User u) throws EntityNotFoundException;
    public List<User> getAllUsers();

}
