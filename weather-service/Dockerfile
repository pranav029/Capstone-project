FROM openjdk:11
WORKDIR user/lib
EXPOSE 8034
ADD ./target/weather-service-0.0.1-SNAPSHOT.jar /user/lib/weather-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","weather-service-0.0.1-SNAPSHOT.jar"]