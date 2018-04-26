package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifToTsEvent;
import com.idb_backend.mvp.domain.model.SignifToTsEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface SignifToTsEventRepository extends JpaRepository<SignifToTsEvent, Integer>, QuerydslPredicateExecutor<QSignifToTsEvent>,
    QuerydslBinderCustomizer<QSignifToTsEvent> {
  @Override
  default public void customize(QuerydslBindings bindings, QSignifToTsEvent root){

  }
}