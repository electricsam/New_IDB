package com.idb_backend.mvp.domain.repository;


import com.idb_backend.mvp.domain.model.QReference;
import com.idb_backend.mvp.domain.model.Reference;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

/**
 * Interface designed to generate Querydsl Predicates for Reference objects that are passed in at the controller level.
 * Each binding is performed through a lambda expression that declares a specific part of the overall Predicate in a
 * pre-defined way.  Each of the arguments passed in to bindings.bind() is a ref to a field in the Reference table.
 *
 */
public interface ReferenceRepository extends JpaRepository<Reference, Integer>, QuerydslPredicateExecutor<Reference>,
    QuerydslBinderCustomizer<QReference>, ReferenceCustomRepository {

  @Override
  default void customize(QuerydslBindings bindings, QReference root){
    bindings.bind(root.citIncludes).first((path, value) -> root.citation.containsIgnoreCase(value));
    bindings.bind(root.citMatches).first((path, value) -> root.citation.equalsIgnoreCase(value));
    bindings.bind(root.citStart).first((path, value) -> root.citation.startsWithIgnoreCase(value));
    bindings.bind(root.citNot).first((path, value) -> root.citation.notEqualsIgnoreCase(value));

    bindings.bind(root.authorIncludes).first((path, value) -> root.author.containsIgnoreCase(value));
    bindings.bind(root.authorMatches).first((path, value) -> root.author.equalsIgnoreCase(value));
    bindings.bind(root.authorStart).first((path, value) -> root.author.startsWithIgnoreCase(value));
    bindings.bind(root.authorNot).first((path, value) -> root.author.notEqualsIgnoreCase(value));

    bindings.bind(root.commentsIncludes).first((path, value) -> root.comments.containsIgnoreCase(value));
    bindings.bind(root.commentsMatches).first((path, value) -> root.comments.equalsIgnoreCase(value));
    bindings.bind(root.commentsStart).first((path, value) -> root.comments.startsWithIgnoreCase(value));
    bindings.bind(root.commentsNot).first((path, value) -> root.comments.notEqualsIgnoreCase(value));

    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));
  }
}