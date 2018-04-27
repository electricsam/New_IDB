package com.idb_backend.mvp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class MvpApplication {

  public static void main(String[] args) {
		SpringApplication.run(MvpApplication.class, args);
	}

}
