FROM openjdk:17
WORKDIR /usr/lib/app
ADD ./target/eureka-server-0.0.1-SNAPSHOT.jar /usr/lib/app/eureka-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java","-jar","eureka-server-0.0.1-SNAPSHOT.jar" ]
