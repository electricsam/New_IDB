package com.idb_backend.mvp;

import com.idb_backend.mvp.domain.repository.impl.ExtendedRepositoryImpl;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.idb_backend.mvp.domain.repository",
    repositoryBaseClass = ExtendedRepositoryImpl.class)
public class JPAConfig {
  // additional JPA Configuration
}
