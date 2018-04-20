package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EarthquakeController {

  @Autowired
  EarthquakeRepository earthquakeRepository;


  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/earthquakes", method= RequestMethod.GET)
  public @ResponseBody ResponseEntity<List<SignifTsqp>> getAllEarthquakes(){
    try{
      //Logic for returning all of the entities
      //PLACEHOLDER
      List<SignifTsqp> earthquakes = earthquakeRepository.findAll();
      return new ResponseEntity<>(earthquakes, HttpStatus.OK);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
