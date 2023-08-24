package com.stackroute.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class apiConfig {
    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                .route(p -> p
                        .path("/api/v1/arena/**")
                        .uri("http://localhost:8030/"))
                .route(p -> p
                        .path("/api/v1/region/**")
                        .uri("http://localhost:8030/"))
                .route(p -> p
                        .path("/api/v1/auth/**")
                        .uri("http://localhost:8022/"))
                .route(p -> p
                        .path("/api/v1/booking/**")
                        .uri("http://localhost:8024/"))
                .route(p -> p
                        .path("/api/v1/thrive/payments/**")
                        .uri("http://localhost:8028/"))
                .route(p -> p
                        .path("/api/v1/thrive/user/**")
                        .uri("http://localhost:8032/"))
                .route(p -> p
                        .path("/**")
                        .uri("http://localhost:8015/"))
                .build();
    }

}
