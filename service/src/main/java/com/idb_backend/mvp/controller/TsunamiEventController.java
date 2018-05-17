package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QTsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class TsunamiEventController {

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  @Autowired
  TsunamiEventViewRepository tsunamiEventViewRepository;
  
  @Autowired
  TsunamiEventService tsunamiEventService;


//  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
//  @ResponseBody
//  public ResponseEntity getAllEvents(){
//    try{
//      List<TsunamiEventView> events = tsunamiEventViewRepository.findAll();
//      return new ResponseEntity<>(events, HttpStatus.OK);
//    }catch(Exception e){
//      return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
//    }
//  }

  @RequestMapping(value = "/tsunamievents/{id}", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getEventById(@PathVariable("id") Integer id){
    try{
      Optional<TsunamiEvent> result = tsunamiEventRepository.findById(id);
      System.out.println("hello");
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch(Exception e){
      List<TsunamiEvent> event = new ArrayList<>();
      return new ResponseEntity<>(event, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getEventsByQuery(@RequestParam Map<String, String> allRequestParams,
                                         @QuerydslPredicate(root = TsunamiEventView.class) Predicate predicate){
    try{
      Iterable<TsunamiEventView> result = tsunamiEventService.getTsunamis(allRequestParams, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(result);

    }catch (NumberFormatException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @RequestMapping(value = "/tsunamievents", method=RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postTsunamiEvent(@Valid @RequestBody TsunamiEvent tsunamiEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }
      Predicate predicate = QTsunamiEvent.tsunamiEvent.id.gt(5000);
      OrderSpecifier orderSpecifier = QTsunamiEvent.tsunamiEvent.id.desc();

      Iterable<TsunamiEvent> result = tsunamiEventRepository.findAll(predicate, orderSpecifier);
      Integer id = result.iterator().next().getId() + 1;

      tsunamiEvent.setId(id);
      tsunamiEventRepository.save(tsunamiEvent);

      Optional<TsunamiEvent> posted = tsunamiEventRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(posted);
    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }
  }

  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchEvent( @PathVariable("id") Integer id,
                                    @Valid @RequestBody TsunamiEvent tsunamiEvent, Errors errors){
    try{
      if(errors.hasErrors()){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }
      tsunamiEvent.setId(id);
      tsunamiEventRepository.save(tsunamiEvent);
      Optional<TsunamiEvent> result = tsunamiEventRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(result);

    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch(TransactionSystemException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }

  }

  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseEntity deleteTsunamiEvent(@PathVariable("id") Integer id){
    try{
      tsunamiEventRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (IndexOutOfBoundsException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }catch (JpaObjectRetrievalFailureException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

}
