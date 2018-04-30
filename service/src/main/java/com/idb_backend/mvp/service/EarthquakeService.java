package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.querydsl.core.types.Predicate;
import org.springframework.stereotype.Service;

import java.util.Map;

public interface EarthquakeService {

  Iterable<SignifVsqp> getAllEarthquakes(Map<String, String> params, Predicate predicate);
}
