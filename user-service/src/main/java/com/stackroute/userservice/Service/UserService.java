package com.stackroute.userservice.Service;

        import java.util.List;
        import java.util.Optional;

        import com.stackroute.userservice.Exception.AlreadyExistException;
        import com.stackroute.userservice.Repository.UserRepo;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        import com.stackroute.userservice.Domain.User;

@Service
public class UserService implements IUserService{
    @Autowired
    private UserRepo urepo;
    @Autowired
    public UserService(UserRepo urepo) {
        this.urepo = urepo;
    }

    @Override
    public User addUser(User u) throws AlreadyExistException {
        Optional<User> user=urepo.findById(u.getEmail());
        if(!user.isEmpty())
        {
            throw new AlreadyExistException();
        }
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
    public User updateuser(User u,String email) {
        Optional<User> existing = urepo.findById(email);
        if (existing.isEmpty()) {
            return null;
        }
        User existingUser = existing.get();


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



