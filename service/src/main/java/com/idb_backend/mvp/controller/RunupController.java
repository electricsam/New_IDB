package com.idb_backend.mvp.controller;


import com.idb_backend.mvp.domain.model.TsunamiRunupView;
import com.querydsl.core.types.Predicate;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class RunupController {

  @RequestMapping(value = "/runups", method = RequestMethod.GET)
  public ResponseEntity getRunups(@RequestParam Map<String, String> map,
                                  @QuerydslPredicate(root = TsunamiRunupView.class) Predicate predicate){

  }

  @RequestMapping("/runups/{id}", method = RequestMethod.GET)
  public ResponseEntity getRunupsById(@PathVariable("id") Integer id){
    try{

    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
