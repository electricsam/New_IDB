package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiRefs;
import com.idb_backend.mvp.domain.model.TsEventRefsId;
import com.idb_backend.mvp.domain.model.TsunamiRefs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface TsunamiRefsRepository extends JpaRepository<TsunamiRefs, TsEventRefsId>,
    QuerydslPredicateExecutor<TsunamiRefs>, QuerydslBinderCustomizer<QTsunamiRefs>{

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiRefs root){

  }
}
