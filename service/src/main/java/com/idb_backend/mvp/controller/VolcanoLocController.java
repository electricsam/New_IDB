package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QVolLocTsqp;
import com.idb_backend.mvp.domain.model.VolLocTsqp;
import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.idb_backend.mvp.domain.repository.VolLocTsqpRepository;
import com.idb_backend.mvp.service.VolLocService;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.Expressions;
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
public class VolcanoLocController {

  @Autowired
  VolLocTsqpRepository volcanoLocRepository;

  @Autowired
  VolLocService volLocService;

  @RequestMapping(value = "/volcanolocs", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoLocs(@RequestParam Map<String, String> params,
                                       @QuerydslPredicate (root = VolLocTsqp.class) Predicate predicate){
    try{
      Iterable<VolLocTsqpProjection> result = volLocService.getVolLocs(params, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }

  @RequestMapping(value = "/volcanolocs/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoLocById(@PathVariable("id") Integer id){
    try{
      Optional<VolLocTsqp> result = volcanoLocRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }

  @RequestMapping(value = "/volcanolocs/{id}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchVolcanoLoc(@PathVariable("id") Integer id,
                                        @Valid @RequestBody VolLocTsqp volLocTsqp, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        volLocTsqp.setId(id);
        volcanoLocRepository.save(volLocTsqp);
        Optional<VolLocTsqp> patched = volcanoLocRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(patched);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }

  @RequestMapping(value = "/volcanolocs", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postVolcanoLoc(@Valid @RequestBody VolLocTsqp volLocTsqp, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        OrderSpecifier orderSpecifier = QVolLocTsqp.volLocTsqp.id.desc();
        Iterable<VolLocTsqp> ordered = volcanoLocRepository.findAll(orderSpecifier);
        Integer id = ordered.iterator().next().getId() + 1;
        volLocTsqp.setId(id);
        volcanoLocRepository.save(volLocTsqp);
        Optional<VolLocTsqp> posted = volcanoLocRepository.findById(id);

        return ResponseEntity.status(HttpStatus.OK).body(posted);

      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }

  @RequestMapping(value = "/volcanolocs/{id}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity deleteVolcanoLoc(@PathVariable("id") Integer id){
    try{
      volcanoLocRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }
  }
}
