package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.idb_backend.mvp.service.EarthquakeService;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  EarthquakeService earthquakeService;

  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getAllEarthquakes(@RequestParam Map<String, String> params,
                                          @QuerydslPredicate(root = SignifVsqp.class) Predicate predicate){
    try{
      Iterable<SignifVsqp> result = earthquakeService.getAllEarthquakes(params, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (NumberFormatException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getEarthquakeById(@PathVariable("id") Integer id){
    try{
      Optional<SignifTsqp> result = earthquakeRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes/{id}", method= RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchEarthquake(@PathVariable("id") Integer id,
                                        @Valid @RequestBody SignifTsqp signifTsqp, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        //TODO: you will need to send through a copy of the whole object or call each method to update each field
        signifTsqp.setId(id);
        earthquakeRepository.save(signifTsqp);
        Optional<SignifTsqp> result = earthquakeRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/earthquakes", method= RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postEarthquake(@Valid @RequestBody SignifTsqp signifTsqp, Errors errors){
      try{
        if(errors.hasErrors()){
          return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
        }else{
          Predicate predicate = QSignifTsqp.signifTsqp.id.gt(10000);
          OrderSpecifier orderSpecifier = QSignifTsqp.signifTsqp.id.desc();

          Iterable<SignifTsqp> result = earthquakeRepository.findAll(predicate, orderSpecifier);
          Integer id = result.iterator().next().getId() + 1;
          signifTsqp.setId(id);
          earthquakeRepository.save(signifTsqp);

          Optional<SignifTsqp> posted = earthquakeRepository.findById(id);
          return ResponseEntity.status(HttpStatus.OK).body(posted);
        }
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
