package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QVolcanoRefs;
import com.idb_backend.mvp.domain.model.VolRefsId;
import com.idb_backend.mvp.domain.model.VolcanoRefs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface VolcanoRefsRepository extends JpaRepository<VolcanoRefs, VolRefsId>,
    QuerydslPredicateExecutor<VolcanoRefs>, QuerydslBinderCustomizer<QVolcanoRefs>{

  @Override
  default void customize(QuerydslBindings bindings, QVolcanoRefs root){

  }
}
