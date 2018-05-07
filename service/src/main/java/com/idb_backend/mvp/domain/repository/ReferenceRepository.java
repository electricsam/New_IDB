package com.idb_backend.mvp.domain.repository;


import com.idb_backend.mvp.domain.model.QReference;
import com.idb_backend.mvp.domain.model.Reference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface ReferenceRepository extends JpaRepository<Reference, Integer>, QuerydslPredicateExecutor<Reference>,
    QuerydslBinderCustomizer<QReference>, ReferenceCustomRepository {

  @Override
  default void customize(QuerydslBindings bindings, QReference root){
  }

}
