package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.querydsl.core.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;
import java.util.List;

@NoRepositoryBean
public interface ExtendedRepository<T, ID extends Serializable> extends JpaRepository<T, ID>{


  List<SignifTsqp> findByAttributeContainsText(String str);

}
