package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.Reference;
import com.idb_backend.mvp.service.ReferenceService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ReferenceController {

  @Autowired
  ReferenceService referenceService;

  @RequestMapping(value = "/references", method = RequestMethod.GET)
  public ResponseEntity getReferences(@RequestParam Map<String, String> params, @QuerydslPredicate Predicate predicate){
    try{
      Iterable<Reference> references = referenceService.getReferences(params, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(references);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }



}
