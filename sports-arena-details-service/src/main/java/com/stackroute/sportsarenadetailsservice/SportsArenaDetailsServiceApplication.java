package com.stackroute.sportsarenadetailsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SportsArenaDetailsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SportsArenaDetailsServiceApplication.class, args);
	}

}
