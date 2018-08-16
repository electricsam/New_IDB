package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface TsunamiEventRepository extends JpaRepository<TsunamiEvent, Integer>,
    QuerydslPredicateExecutor<TsunamiEvent>, QuerydslBinderCustomizer<QTsunamiEvent>, TsunamiEventCustomRepository {
  @Override
  default void customize(QuerydslBindings bindings, QTsunamiEvent root){

    //ensures that all predicates on string fields are set to query for equality without regard for case
    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));
  }
}