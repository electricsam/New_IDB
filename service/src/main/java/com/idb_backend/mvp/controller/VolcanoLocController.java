package com.idb_backend.mvp.controller;

import com.querydsl.core.types.Predicate;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class VolcanoLocController {

  @RequestMapping(value = "/volcanoloc", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoLocs(@RequestParam Map<String, String> params,
                                       @QuerydslPredicate Predicate predicate){
    return ResponseEntity.status(HttpStatus.OK).body(null);
  }

}
