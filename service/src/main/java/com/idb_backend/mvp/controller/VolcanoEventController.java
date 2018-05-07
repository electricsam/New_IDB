package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QVolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.idb_backend.mvp.service.VolcanoService;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class VolcanoEventController {

  @Autowired
  VolcanoService volcanoService;

  @Autowired
  VolcanoEventRepository volcanoEventRepository;


  @RequestMapping(value = "/volcanoes", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoes(@RequestParam Map<String, String> params,
                                     @QuerydslPredicate(root = VolcanoEvent.class) Predicate predicate){
    try{
      List<VolcanoEventProjection> list = volcanoService.getVolcanoes(params, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoById(@PathVariable("id") Integer id){
    try{
      return ResponseEntity.status(HttpStatus.OK).body(volcanoEventRepository.findById(id));
    }catch (Exception e){
      System.out.println("error: " + e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{id}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchVolcano(@PathVariable("id") Integer id,
                                     @Valid @RequestBody VolcanoEvent volcanoEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        volcanoEvent.setHazEventId(id);
        volcanoEventRepository.save(volcanoEvent);

        Optional<VolcanoEvent> patched = volcanoEventRepository.findById(id);

        return ResponseEntity.status(HttpStatus.OK).body(patched);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postVolcano(@Valid @RequestBody VolcanoEvent volcanoEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        OrderSpecifier orderSpecifier = QVolcanoEvent.volcanoEvent.hazEventId.desc();
        Iterable<VolcanoEvent> events = volcanoEventRepository.findAll(orderSpecifier);
        Integer id = events.iterator().next().getHazEventId() + 1;
        volcanoEvent.setHazEventId(id);
        volcanoEventRepository.save(volcanoEvent);

        Optional<VolcanoEvent> posted = volcanoEventRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(posted);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseEntity deleteVolcanoEvent(@PathVariable("id") Integer id){
    try{
      volcanoEventRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

}
