package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsrunupRefs;
import com.idb_backend.mvp.domain.model.RunupRefId;
import com.idb_backend.mvp.domain.model.TsrunupRefs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface TsrunupRefsRepository extends JpaRepository<TsrunupRefs, RunupRefId>,
    QuerydslPredicateExecutor<TsrunupRefs>, QuerydslBinderCustomizer<QTsrunupRefs>{

  @Override
  default void customize(QuerydslBindings bindings, QTsrunupRefs root){

  }
}
