package com.stackroute.authenticationservice.RabbitMq;

public class UserData {
    private String userEmail;
    private String password;
    private String userRole;

    @Override
    public String toString() {
        return "UserData{" +
                "userEmail='" + userEmail + '\'' +
                ", password='" + password + '\'' +
                ", userRole='" + userRole + '\'' +
                '}';
    }

    public String getUserEmail() {
        return this.userEmail;
    }

    public String getPassword() {
        return this.password;
    }

    public String getUserRole() {
        return this.userRole;
    }
}
