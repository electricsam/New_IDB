package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.Reference;
import com.querydsl.core.types.Predicate;

import java.util.List;
import java.util.Map;

public interface ReferenceService {

  Iterable<Reference> getReferences(Map<String, String> params, Predicate predicate);
}
