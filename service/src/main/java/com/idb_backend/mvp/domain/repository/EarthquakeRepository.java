package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface EarthquakeRepository extends JpaRepository<SignifTsqp, Integer>, QuerydslPredicateExecutor<SignifTsqp>,
    QuerydslBinderCustomizer<QSignifTsqp> {
  @Override
  default public void customize(QuerydslBindings bindings, QSignifTsqp root){
    bindings.bind(String.class).first((StringPath path, String value) -> path.containsIgnoreCase(value));

  }
}
