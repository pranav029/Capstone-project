package com.stackroute.userservice.Service;
import java.util.List;
import com.stackroute.userservice.Domain.User;
import com.stackroute.userservice.Exception.AlreadyExistException;


public interface
IUserService {
    public User addUser(User u) throws AlreadyExistException;
    public User updateuser(User u,String email);
    public List<User> getUser();

    public User getUserbyemail(String email);


}