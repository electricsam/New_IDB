package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QVolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface VolcanoEventRepository extends JpaRepository<VolcanoEvent, Integer>,
    QuerydslPredicateExecutor<VolcanoEvent>, QuerydslBinderCustomizer<QVolcanoEvent>, VolcanoEventCustomRepository{

  default void customize(QuerydslBindings bindings, QVolcanoEvent root){
    bindings.bind(root.minYear).first((path, value) -> root.year.goe(value));

    bindings.bind(root.maxYear).first((path, value) -> root.year.loe(value));

    bindings.bind(root.minDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.goe(value));

    bindings.bind(root.maxDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.loe(value));

    bindings.bind(root.minDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.goe(value));

    bindings.bind(root.maxDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.loe(value));

    bindings.bind(root.minDamageAmountOrder).first((path, value) -> root.damageAmountOrder.goe(value));

    bindings.bind(root.maxDamageAmountOrder).first((path, value) -> root.damageAmountOrder.loe(value));

    bindings.bind(root.assocEq).first((path, value) -> root.assocEq.equalsIgnoreCase(value));

    bindings.bind(root.assocTsu).first((path, value) -> root.assocTsu.equalsIgnoreCase(value));

    bindings.bind(root.minVei).first((path, value) -> root.vei.goe(value));

    bindings.bind(root.maxVei).first((path, value) -> root.vei.loe(value));

    bindings.bind(root.comIncludes).first((path, value) -> root.comments.containsIgnoreCase(value));

    bindings.bind(root.comMatch).first((path, value) -> root.comments.equalsIgnoreCase(value));

    bindings.bind(root.comStart).first((path, value) -> root.comments.startsWithIgnoreCase(value));

    bindings.bind(root.comNot).first((path, value) -> {
      return root.comments.notLike(Expressions.asString("%").concat(value.toUpperCase().concat("%")));
    });
  }

}
