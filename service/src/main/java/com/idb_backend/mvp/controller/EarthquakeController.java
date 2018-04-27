package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  public ResponseEntity getAllEarthquakes(@RequestParam Map<String, String> params,
                                          @QuerydslPredicate(root = SignifVsqp.class) Predicate predicate){

//    return ResponseEntity.status(HttpStatus.OK).body(null);
    try{
      if(params.get("tsunamiid") != "" && params.get("tsunamiid") != null){
        Iterable<SignifVsqp> result = earthquakeRepository
            .findRelatedEarthquake(Integer.parseInt(params.get("tsunamiid")));
        System.out.println("you are passed the eq repo");
        return ResponseEntity.status(HttpStatus.OK).body(result);
      }else{
        System.out.println("you are inside of the else statement");
        Iterable<SignifVsqp> result = earthquakeViewRepository.findAll(predicate);
        return ResponseEntity.status(HttpStatus.OK).body(result);
      }
    }catch (NumberFormatException e){
      System.out.println("you are in the badrequest section ");
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
        Predicate predicate = QSignifTsqp.signifTsqp.id.gt(10000);
        OrderSpecifier orderSpecifier = QSignifTsqp.signifTsqp.id.desc();

        Iterable<SignifTsqp> result = earthquakeRepository.findAll(predicate, orderSpecifier);
        Integer id = result.iterator().next().getId() + 1;
        System.out.println("This is the old way " + id);
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
