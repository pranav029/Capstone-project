FROM openjdk:17
WORKDIR /usr/lib/app
ADD ./target/booking-service-0.0.1-SNAPSHOT.jar /usr/lib/app/booking-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java","-jar","booking-service-0.0.1-SNAPSHOT.jar" ]