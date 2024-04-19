package com.garageservice.og;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class OnlineGarageApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineGarageApplication.class, args);
	}

}
