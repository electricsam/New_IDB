package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiRunup;
import com.idb_backend.mvp.domain.model.TsunamiRunup;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

/**
 * Interface designed to generate Querydsl Predicates for TsunamiRunup objects that are passed in at the controller level.
 * Each binding is performed through a lambda expression that declares a specific part of the overall Predicate in a
 * pre-defined way.  Each of the arguments passed in to bindings.bind() is a ref to a field in the TsunamiRunup table.
 *
 */
public interface RunupRepository extends JpaRepository<TsunamiRunup, Integer>, QuerydslPredicateExecutor<TsunamiRunup>,
    QuerydslBinderCustomizer<QTsunamiRunup> {

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiRunup root){

    // ensures that all predicates on string values ignore the case of the String value
    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));  }
}

