FROM openjdk:11
WORKDIR user/lib
EXPOSE 8089
ADD ./target/eureka-server-0.0.1-SNAPSHOT.jar  /user/lib/eureka-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","eureka-server-0.0.1-SNAPSHOT.jar"]

