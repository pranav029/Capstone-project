FROM openjdk:17
WORKDIR /usr/lib/app
ADD ./target/payment-service-0.0.1-SNAPSHOT.jar /usr/lib/app/payment-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java","-jar","payment-service-0.0.1-SNAPSHOT.jar" ]