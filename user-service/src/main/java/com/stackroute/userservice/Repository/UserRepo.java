package com.stackroute.userservice.Repository;
import com.stackroute.userservice.Domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {

}
