FROM openjdk:11
WORKDIR user/lib
EXPOSE 8022
ADD ./target/authentication-service-0.0.1-SNAPSHOT.jar  /user/lib/authentication-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","authentication-service-0.0.1-SNAPSHOT.jar"]

