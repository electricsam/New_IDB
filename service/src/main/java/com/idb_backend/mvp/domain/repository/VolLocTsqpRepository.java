package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QVolLocTsqp;
import com.idb_backend.mvp.domain.model.VolLocTsqp;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

/**
 * Interface designed to generate Querydsl Predicates for VolLocTsqp objects that are passed in at the controller
 * level.Each binding is performed through a lambda expression that declares a specific part of the overall Predicate in
 * a pre-defined way.  Each of the arguments passed in to bindings.bind() is a ref to a field in the VolLocTsqp
 * table.
 *
 */
public interface VolLocTsqpRepository extends JpaRepository<VolLocTsqp, Integer>, QuerydslPredicateExecutor<VolLocTsqp>,
    QuerydslBinderCustomizer<QVolLocTsqp>, VolLocTsqpCustomRepository {

  default void customize(QuerydslBindings bindings, QVolLocTsqp root){
    bindings.bind(root.minLongitude).first((path, value) -> root.longitude.goe(value));
    bindings.bind(root.maxLongitude).first((path, value) -> root.longitude.loe(value));

    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.goe(value));
    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.loe(value));

    bindings.bind(root.nameEnd).first((path, value) -> root.name.endsWithIgnoreCase(value));
    bindings.bind(root.nameIncludes).first((path, value) -> root.name.containsIgnoreCase(value));
    bindings.bind(root.nameMatch).first((path, value) -> root.name.equalsIgnoreCase(value));
    bindings.bind(root.nameStart).first((path, value) -> root.name.startsWithIgnoreCase(value));
    bindings.bind(root.nameNot).first((path, value) -> root.name.notEqualsIgnoreCase(value));

    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));
  }

}
