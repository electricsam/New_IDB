package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifAndVolEvent;
import com.idb_backend.mvp.domain.model.SigVolId;
import com.idb_backend.mvp.domain.model.SignifAndVolEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface SignifAndVolEventRepository extends JpaRepository<SignifAndVolEvent, SigVolId>,
    QuerydslPredicateExecutor<SignifAndVolEvent>, QuerydslBinderCustomizer<QSignifAndVolEvent> {

  @Override
  default void customize(QuerydslBindings bindings, QSignifAndVolEvent root) {

  }
}
