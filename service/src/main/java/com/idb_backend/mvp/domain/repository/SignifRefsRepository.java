package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifRefs;
import com.idb_backend.mvp.domain.model.SignifRefs;
import com.idb_backend.mvp.domain.model.SignifRefsId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface SignifRefsRepository extends JpaRepository<SignifRefs, SignifRefsId>,
    QuerydslPredicateExecutor<SignifRefs>, QuerydslBinderCustomizer<QSignifRefs>{

  @Override
  default void customize(QuerydslBindings bindings, QSignifRefs root){ }
}
