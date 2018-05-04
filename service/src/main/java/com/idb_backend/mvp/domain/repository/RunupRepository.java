package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiRunup;
import com.idb_backend.mvp.domain.model.TsunamiRunup;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface RunupRepository extends JpaRepository<TsunamiRunup, Integer>, QuerydslPredicateExecutor<TsunamiRunup>,
    QuerydslBinderCustomizer<QTsunamiRunup> {

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiRunup root){
    bindings.bind(String.class).first((StringPath path, String value) -> path.containsIgnoreCase(value));  }
}
