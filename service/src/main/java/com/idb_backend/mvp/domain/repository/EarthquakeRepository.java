package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface EarthquakeRepository extends JpaRepository<SignifTsqp, Integer>, QuerydslPredicateExecutor<SignifTsqp>,
    QuerydslBinderCustomizer<QSignifTsqp>, EarthquakeCustomRepository {
  @Override
  default void customize(QuerydslBindings bindings, QSignifTsqp root){

    // ensures that all predicates on string values ignore the case of the String value
    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));

  }
}
