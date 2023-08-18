package com.stackroute.userservice.Service;

import java.util.List;
import java.util.Optional;

import com.stackroute.userservice.Domain.User;
import com.stackroute.userservice.Repository.UserRepo;
import com.stackroute.userservice.exception.AlreadyExistException;
import com.stackroute.userservice.exception.EmailPasswordUpdateException;
import com.stackroute.userservice.rabbitMq.UserData;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService implements IUserService{
    private RabbitTemplate rabbitTemplate;
    private UserRepo urepo;
    private DirectExchange exchange;
    @Autowired
    public UserService(RabbitTemplate rabbitTemplate,UserRepo urepo,DirectExchange exchange) {
        this.rabbitTemplate = rabbitTemplate;
        this.urepo = urepo;
        this.exchange = exchange;
    }

    @Override
    public User addUser(User u) throws AlreadyExistException {
        Optional<User> user=urepo.findById(u.getEmail());
        if(!user.isEmpty())
        {
            throw new AlreadyExistException();
        }
        UserData userData=new UserData(u.getEmail(), u.getPassword(), u.getUserRole());
        rabbitTemplate.convertAndSend(exchange.getName(),"user_routing",userData);
        System.out.println(exchange.getName());
        return urepo.save(u);
    }
    @Override
    public List<User> getUser() {
        // TODO Auto-generated method stub
        List<User> u2=(List<User>)urepo.findAll();
        return u2;
    }

    @Override
    public User getUserbyemail(String email){
        Optional<User> u3=urepo.findById(email);
        return u3.get();

    }
    @Override
    public User updateuser(User u,String email,String password ,String urole) throws EmailPasswordUpdateException {
        Optional<User> existing = urepo.findById(email);
        if (existing.isEmpty()) {
            return null;
        }
        System.out.println(existing.get().getEmail());
        System.out.println(email);
        User existingUser = existing.get();
        if(!u.getEmail().equals(email) || !u.getPassword().equals(password) || !u.getUserRole().equals(urole))
        {
            throw new EmailPasswordUpdateException();
        }

        existingUser.setFirstname(u.getFirstname());
        existingUser.setLastname(u.getLastname());
        existingUser.setHouseno(u.getHouseno());
        existingUser.setStreetname(u.getStreetname());
        existingUser.setCity(u.getCity());
        existingUser.setState(u.getState());
        existingUser.setCountry(u.getCountry());
        existingUser.setContactno(u.getContactno());

        User uu=urepo.save(existingUser);
        return uu;

    }

}




