package com.idb_backend.mvp;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties
@ConfigurationProperties
public class YAMLConfig {
  private String corsAllowed;

  public String getCorsAllowed() {
    return corsAllowed;
  }

  public void setCorsAllowed(String corsAllowed) {
    this.corsAllowed = corsAllowed;
  }
}
