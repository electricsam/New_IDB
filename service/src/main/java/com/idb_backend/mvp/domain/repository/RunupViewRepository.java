package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiRunupView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface RunupViewRepository extends JpaRepository<TsunamiRunupView, Integer>,
    QuerydslPredicateExecutor<TsunamiRunupView>, QuerydslBinderCustomizer<QTsunamiRunupView>{

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiRunupView root){

  }
}
