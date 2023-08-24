FROM openjdk:17
WORKDIR /usr/lib/app
ADD ./target/user-service-0.0.1-SNAPSHOT.jar /usr/lib/app/user-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java","-jar","user-service-0.0.1-SNAPSHOT.jar" ]