package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTseventAndVolEvent;
import com.idb_backend.mvp.domain.model.TsEventVolId;
import com.idb_backend.mvp.domain.model.TseventAndVolEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface TseventAndVolEventRepository extends JpaRepository<TseventAndVolEvent, TsEventVolId>,
    QuerydslPredicateExecutor<TseventAndVolEvent>, QuerydslBinderCustomizer<QTseventAndVolEvent>{

  @Override
  default void customize(QuerydslBindings bindings, QTseventAndVolEvent root){ }
}
