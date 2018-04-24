package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  @ResponseBody
  public Iterable<SignifVsqp> getAllEarthquakes(@QuerydslPredicate(root = SignifVsqp.class) Predicate predicate){
    Iterable<SignifVsqp> result = earthquakeViewRepository.findAll(predicate);
    return result;
  }

  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.GET)
  @ResponseBody
  public Optional<SignifVsqp> getEarthquakeById(@PathVariable("id") Integer id){
    return earthquakeViewRepository.findById(id);
  }


  /* NEED TO MOVE PATCH AND POST AND DELETE METHODS TO CALL ANOTHER REPO BECUASE NEED TO RUN AGAINST TSQP AND NOT VSQP*/
  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.PATCH)
  @ResponseBody
  public Optional<SignifTsqp> patchEarthquake(@PathVariable("id") Integer id, @RequestBody SignifTsqp signifTsqp){

    //TODO: you will need to send through a copy of the whole object or call each method to update each field

    signifTsqp.setId(id);

    earthquakeRepository.save(signifTsqp);
    return earthquakeRepository.findById(id);
  }

  @RequestMapping(value = "/earthquakes", method= RequestMethod.POST)
  @ResponseBody
  public Optional<SignifTsqp> postEarthquake(@RequestBody SignifTsqp signifTsqp){
    Predicate predicate = QSignifVsqp.signifVsqp.id.gt(10000);
    OrderSpecifier orderSpecifier = QSignifVsqp.signifVsqp.id.desc();
    Iterable<SignifTsqp> result = earthquakeRepository.findAll(predicate, orderSpecifier);

    Integer id = result.iterator().next().getId() + 1;
    signifTsqp.setId(id);

    earthquakeRepository.save(signifTsqp);
    return earthquakeRepository.findById(id);
  }

  @RequestMapping(value = "/earthquakes/{id}", method = RequestMethod.DELETE)
  public void deleteEarthquake(@PathVariable("id") Integer id){
    earthquakeRepository.deleteById(id);
  }

}
