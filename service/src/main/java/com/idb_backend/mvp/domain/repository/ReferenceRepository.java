package com.idb_backend.mvp.domain.repository;


import com.idb_backend.mvp.domain.model.QReference;
import com.idb_backend.mvp.domain.model.Reference;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface ReferenceRepository extends JpaRepository<Reference, Integer>, QuerydslPredicateExecutor<Reference>,
    QuerydslBinderCustomizer<QReference>, ReferenceCustomRepository {

  @Override
  default void customize(QuerydslBindings bindings, QReference root){
    bindings.bind(root.citIncludes).first((path, value) -> root.citation.containsIgnoreCase(value));
    bindings.bind(root.citMatches).first((path, value) -> root.citation.equalsIgnoreCase(value));
    bindings.bind(root.citStart).first((path, value) -> root.citation.startsWithIgnoreCase(value));
    bindings.bind(root.citNot).first((path, value) -> {
      return root.citation.notLike(Expressions.asString("%").concat(value.toUpperCase().concat("%")));
    });

    bindings.bind(root.authorIncludes).first((path, value) -> root.author.containsIgnoreCase(value));
    bindings.bind(root.authorMatches).first((path, value) -> root.author.equalsIgnoreCase(value));
    bindings.bind(root.authorStart).first((path, value) -> root.author.startsWithIgnoreCase(value));
    bindings.bind(root.authorNot).first((path, value) -> {
      return root.author.notLike(Expressions.asString("%").concat(value.toUpperCase().concat("%")));
    });

    bindings.bind(root.commentsIncludes).first((path, value) -> root.comments.containsIgnoreCase(value));
    bindings.bind(root.commentsMatches).first((path, value) -> root.comments.equalsIgnoreCase(value));
    bindings.bind(root.commentsStart).first((path, value) -> root.comments.startsWithIgnoreCase(value));
    bindings.bind(root.commentsNot).first((path, value) -> {
      return root.comments.notLike(Expressions.asString("%").concat(value.toUpperCase().concat("%")));
    });

  }

}
