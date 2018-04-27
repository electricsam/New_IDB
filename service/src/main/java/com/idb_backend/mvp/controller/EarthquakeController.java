package com.idb_backend.mvp.controller;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;
import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.idb_backend.mvp.domain.repository.impl.EarthquakeRepositoryImpl;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.hibernate.boot.jaxb.hbm.internal.CacheAccessTypeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  @Autowired
  EarthquakeRepository earthquakeRepository;


  /*
  * This is a test controller method that will assess the viablility of a custom implementation
  * */
  @RequestMapping(value = "/earthquakes/special", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getAllEarthquakesAboveNum(){
    try{
      Iterable<SignifVsqp> result = earthquakeRepository.findRelatedEarthquake(5200);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }


  }

  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getAllEarthquakes(@RequestParam Map<String, String> params, @QuerydslPredicate(root = SignifVsqp.class) Predicate predicate){
    try{
      if(params.get("tsunamiid") != ""){
        Iterable<SignifVsqp> result = earthquakeRepository
            .findRelatedEarthquake(Integer.parseInt(params.get("tsunamiid")));
        return ResponseEntity.status(HttpStatus.OK).body(result);
      }else{
        Iterable<SignifVsqp> result = earthquakeViewRepository.findAll(predicate);
        return ResponseEntity.status(HttpStatus.OK).body(result);
      }
    }catch (NumberFormatException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

  }

//This is will be for immediate removal
  @RequestMapping(value = "/earthquakes/tsqp", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getAllEarthquakesTsqp(@QuerydslPredicate(root = SignifTsqp.class) Predicate predicate){
    try{
      Iterable<SignifTsqp> result = earthquakeRepository.findAll(predicate);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getEarthquakeById(@PathVariable("id") Integer id){
    try{
      Optional<SignifVsqp> result = earthquakeViewRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }


  /* NEED TO MOVE PATCH AND POST AND DELETE METHODS TO CALL ANOTHER REPO BECUASE NEED TO RUN AGAINST TSQP AND NOT VSQP*/
  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchEarthquake(@PathVariable("id") Integer id, @RequestBody SignifTsqp signifTsqp){
    try{
      //TODO: you will need to send through a copy of the whole object or call each method to update each field
      signifTsqp.setId(id);
      earthquakeRepository.save(signifTsqp);
      Optional<SignifTsqp> result = earthquakeRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes", method= RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postEarthquake(@RequestBody SignifTsqp signifTsqp){
    try{
      Predicate predicate = QSignifVsqp.signifVsqp.id.gt(10000);
      OrderSpecifier orderSpecifier = QSignifVsqp.signifVsqp.id.desc();
      Iterable<SignifTsqp> result = earthquakeRepository.findAll(predicate, orderSpecifier);


      Integer id = result.iterator().next().getId() + 1;
      signifTsqp.setId(id);

      earthquakeRepository.save(signifTsqp);
      Optional<SignifTsqp> posted = earthquakeRepository.findById(id);

      return ResponseEntity.status(HttpStatus.OK).body(posted);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes/{id}", method = RequestMethod.DELETE)
  public ResponseEntity deleteEarthquake(@PathVariable("id") Integer id){
    try{
      earthquakeRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

}
