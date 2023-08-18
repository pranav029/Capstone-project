package com.stackroute.notificationservice.Domain;




public class EmailDto {
    private String email;
    private String subject;

    public EmailDto() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    private String body;

    @Override
    public String toString() {
        return "EmailDto{" +
                "email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}
