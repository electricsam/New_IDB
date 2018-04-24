package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.Optional;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  @ResponseBody
  public Iterable<SignifVsqp> getAllEarthquakes(@RequestParam final MultiValueMap<String, String> map,
                                                @QuerydslPredicate(root = SignifTsqp.class) Predicate predicate){
    Iterable<SignifVsqp> result = earthquakeRepository.findAll(predicate);
    return result;
  }

  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.GET)
  @ResponseBody
  public Optional<SignifVsqp> getEarthquakeById(@PathVariable("id") Integer id){
    return earthquakeRepository.findById(id);
  }


  /* NEED TO MOVE PATCH AND POST AND DELETE METHODS TO CALL ANOTHER REPO BECUASE NEED TO RUN AGAINST TSQP AND NOT VSQP*/
  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.PATCH)
  @ResponseBody
  public Optional<SignifVsqp> patchEarthquake(@PathVariable("id") Integer id, @RequestBody SignifVsqp signifVsqp){

    //TODO: you will need to send through a copy of the whole object or call each method to update each field

    signifVsqp.setId(id);

    earthquakeRepository.save(signifVsqp);
    return earthquakeRepository.findById(id);
  }

  @RequestMapping(value = "/earthquakes", method= RequestMethod.POST)
  @ResponseBody
  public Optional<SignifVsqp> postEarthquake(@RequestBody SignifVsqp signifVsqp){
    Predicate predicate = QSignifVsqp.signifVsqp.id.gt(10000);
    OrderSpecifier orderSpecifier = QSignifVsqp.signifVsqp.id.desc();
    Iterable<SignifVsqp> result = earthquakeRepository.findAll(predicate, orderSpecifier);

    Integer id = result.iterator().next().getId() + 1;
    signifVsqp.setId(id);

    earthquakeRepository.save(signifVsqp);
    return earthquakeRepository.findById(id);
  }

  @RequestMapping(value = "/earthquakes/{id}", method = RequestMethod.DELETE)
  public void deleteEarthquake(@PathVariable("id") Integer id){
    earthquakeRepository.deleteById(id);
  }

}
