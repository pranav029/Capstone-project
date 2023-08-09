package com.stackroute.authenticationservice.UserService;

import com.stackroute.authenticationservice.Exception.AlreadyFoundException;
import com.stackroute.authenticationservice.User.User;
import com.stackroute.authenticationservice.userRepository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class userService implements IService {
    @Autowired
    private UserRepository urepo;

    @Override
    public User addUser(User u) throws AlreadyFoundException {
        Optional<User> user=urepo.findById(u.getEmail());
        if(!user.isEmpty())
        {
            throw new AlreadyFoundException();
        }
        return (User) urepo.save(u);
    }

    @Override
    public Map<String, String> login(User u) throws EntityNotFoundException {
        Map<String,String> token=new HashMap<String,String>();
        try{
            User uu=urepo.findByEmailAndPassword(u.getEmail(), u.getPassword());
            if(uu!=null)
            {
                token=getJWTToken(u);
            }}
        catch (Exception e){
            throw new EntityNotFoundException();
        }
        return token;
    }

    @Override
    public List<User> getAllUsers() {
        // TODO Auto-generated method stub
        System.out.println("Hello all");
        List<User> userL=urepo.findAll();
        userL.forEach(u->System.out.println(u));
        return userL;
    }

    private Map<String, String> getJWTToken(User u) {
        String tok= Jwts.builder().setSubject(u.getEmail()).setIssuedAt(new Date(0)).signWith(SignatureAlgorithm.HS256,"secretkey").compact();
        Map<String,String> tokMap=new HashMap<String,String>();
        tokMap.put("token", tok);
        return tokMap;
    }


}
