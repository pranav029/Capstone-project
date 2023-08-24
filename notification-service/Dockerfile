FROM openjdk:17
WORKDIR /usr/lib/app
ADD ./target/notification-service-0.0.1-SNAPSHOT.jar /usr/lib/app/notification-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java","-jar","notification-service-0.0.1-SNAPSHOT.jar" ]