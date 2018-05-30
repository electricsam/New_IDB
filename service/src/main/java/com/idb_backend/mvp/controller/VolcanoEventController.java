package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QVolcanoEvent;
import com.idb_backend.mvp.domain.model.VolLocTsqp;
import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.idb_backend.mvp.domain.repository.VolLocTsqpRepository;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.idb_backend.mvp.service.VolcanoService;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
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

  @Autowired
  VolLocTsqpRepository volLocTsqpRepository;


  @RequestMapping(value = "/volcanoes", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoes(@RequestParam Map<String, String> params,
                                     @QuerydslPredicate(root = VolcanoEvent.class) Predicate predicate){
    try{
      List<VolcanoEventProjection> list = volcanoService.getVolcanoes(params, predicate);

      System.out.println("this is the list: " + list);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      throw e;
//      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getVolcanoById(@PathVariable("id") Integer id){
    try{
      Optional<VolcanoEvent> result = volcanoEventRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      System.out.println("error: " + e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{volId}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchVolcano(@PathVariable("volId") Integer volId,
                                     @Valid @RequestBody VolcanoEvent volcanoEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
        Integer volcanoEventId = volcanoEvent.getHazEventId();
        volcanoEvent.setVolLocTsqp(volLocTsqpRepository.findById(volId).get());
        volcanoEventRepository.save(volcanoEvent);
        Optional<VolcanoEvent> patched = volcanoEventRepository.findById(volcanoEventId);

        return ResponseEntity.status(HttpStatus.OK).body(patched);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/volcanoes/{volid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postVolcano(@PathVariable("volid") Integer volId,
                                    @Valid @RequestBody VolcanoEvent volcanoEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }else{
//        Must test these next two lines building an association
        Optional<VolLocTsqp> assocVol = volLocTsqpRepository.findById(volId);
        volcanoEvent.setVolLocTsqp(assocVol.get());

        OrderSpecifier orderSpecifier = QVolcanoEvent.volcanoEvent.hazEventId.desc();
        Iterable<VolcanoEvent> events = volcanoEventRepository.findAll(orderSpecifier);
        Integer id = events.iterator().next().getHazEventId() + 1;
        volcanoEvent.setHazEventId(id);
        volcanoEventRepository.save(volcanoEvent);

        BooleanExpression booleanExpression = QVolcanoEvent.volcanoEvent.hazEventId.eq(id);

        Optional<VolcanoEvent> posted = volcanoEventRepository.findOne(booleanExpression);
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
