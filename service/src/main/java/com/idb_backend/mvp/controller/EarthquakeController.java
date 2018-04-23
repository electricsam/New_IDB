package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.web.bind.annotation.*;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeRepository earthquakeRepository;

//  @Autowired
//  ExtendedEarthquakeRepository extendedEarthquakeRepository;

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  @ResponseBody
  public Iterable<SignifTsqp> getAllEarthquakes(@QuerydslPredicate(root = SignifTsqp.class) Predicate predicate){
    return earthquakeRepository.findAll(predicate);
  }
}
