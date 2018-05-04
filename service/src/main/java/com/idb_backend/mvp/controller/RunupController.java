package com.idb_backend.mvp.controller;


import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.RunupRepository;
import com.idb_backend.mvp.service.RunupService;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class RunupController {

  @Autowired
  RunupService runupService;

  @Autowired
  RunupRepository runupRepository;

  @RequestMapping(value = "/runups", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getRunups(@RequestParam Map<String, String> map,
                                  @QuerydslPredicate(root = TsunamiRunupView.class) Predicate predicate){
    List<RunupProjection> runups = runupService.getRunups(map, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(runups);
  }

  @RequestMapping(value = "/runups/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getRunupsById(@PathVariable("id") Integer id){
    try{
      Optional<TsunamiRunup> runup = runupRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(runup);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/runups/{id}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchRunup(@PathVariable("id") Integer id,
                                   @Valid @RequestBody TsunamiRunup tsunamiRunup, Errors errors){

    try {
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        tsunamiRunup.setId(id);
        runupRepository.save(tsunamiRunup);
        Optional<TsunamiRunup> runup = runupRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(runup);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }

  @RequestMapping(value = "/runups", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postRunup(@Valid @RequestBody TsunamiRunup tsunamiRunup, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        OrderSpecifier orderSpecifier = QTsunamiRunup.tsunamiRunup.id.desc();
        Iterable<TsunamiRunup> result = runupRepository.findAll(orderSpecifier);
        Integer id = result.iterator().next().getId() + 1;
        tsunamiRunup.setId(id);
        runupRepository.save(tsunamiRunup);

        Optional<TsunamiRunup> postedRunup = runupRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(postedRunup);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/runup/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseEntity deleteRunup(@PathVariable("id") Integer id){
    try{
      runupRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

}