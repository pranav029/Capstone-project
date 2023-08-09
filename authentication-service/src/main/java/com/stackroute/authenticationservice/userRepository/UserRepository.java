package com.stackroute.authenticationservice.userRepository;

import com.stackroute.authenticationservice.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    public User findByEmailAndPassword(String email, String password);
}
