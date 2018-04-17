package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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

@RestController
public class TsunamiEventController {

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;
  
  @Autowired
  TsunamiEventService tsunamiEventService;

  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  public @ResponseBody ResponseEntity<List<TsunamiEventView>> getAllEvents(){
    try{
      List<TsunamiEventView> events = tsunamiEventRepository.getAllTsunamiEvents();
      return new ResponseEntity<>(events, HttpStatus.OK);
    }catch(Exception e){
      return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @RequestMapping(value = "/tsunamievents/{id}", method= RequestMethod.GET)
  public @ResponseBody ResponseEntity<List<TsunamiEvent>> getEventById(@PathVariable("id") Integer id){
    try{
      List<TsunamiEvent> event = tsunamiEventRepository.getEventById(id);
      return new ResponseEntity<>(event, HttpStatus.OK);
    }catch(Exception e){
      List<TsunamiEvent> event = new ArrayList<>();
      return new ResponseEntity<>(event, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @RequestMapping(value = "/tsunamievents/select", method= RequestMethod.GET)
  public ResponseEntity<List<TsunamiEventViewNonPersist>> getEventsByQuery(@RequestParam Map<String, String> allRequestParams){
    try{
      boolean validParams = tsunamiEventService.validateParams(allRequestParams);
      if(!validParams){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
      }
      List<TsunamiEventViewNonPersist> events = tsunamiEventService.generateCriteria(allRequestParams);
      return new ResponseEntity<>(events, HttpStatus.OK);
    }catch (NumberFormatException e){
      List<TsunamiEventViewNonPersist> events = new ArrayList<>();
      return new ResponseEntity<>(events, HttpStatus.BAD_REQUEST);
    }
  }

  @RequestMapping(value = "/tsunamievents", method=RequestMethod.POST)
  public ResponseEntity postTsunamiEvent(@Valid @RequestBody TsunamiEvent tsunamiEvent, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }

      Integer maxId = new ArrayList<>(tsunamiEventService.checkMaxTsEventId()).get(0).getId() + 1;
      tsunamiEvent.setId(maxId);
      tsunamiEventService.addEvent(tsunamiEvent);

      return new ResponseEntity<>(tsunamiEvent, HttpStatus.OK);
    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }
  }

  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.PATCH)
  public ResponseEntity patchEvent( @PathVariable("id") Integer id,
                                                  @Valid @RequestBody TsunamiEvent tsunamiEvent, Errors errors){
    try{
      if(errors.hasErrors()){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }

      tsunamiEvent.setId(id);
      tsunamiEventService.updateEvent(tsunamiEvent);

      return new ResponseEntity<>(tsunamiEvent, HttpStatus.OK);

    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch(TransactionSystemException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }

  }

  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.DELETE)
  public ResponseEntity deleteTsunamiEvent(@PathVariable("id") Integer id){
    try{
      tsunamiEventService.deleteEvent(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (IndexOutOfBoundsException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }catch (JpaObjectRetrievalFailureException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @RequestMapping(value = "/tsunamirunups/select", method= RequestMethod.GET)
  public ResponseEntity<List<TsunamiRunupViewNonPersist>> getRunupsByQuery(@RequestParam Map<String, String> allRequestParams){
    try{
      boolean validParams = tsunamiEventService.validateParams(allRequestParams);
      if(!validParams){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
      }

      List<TsunamiRunupViewNonPersist> list = tsunamiEventService.generateRunupCriteria(allRequestParams);

      return new ResponseEntity<>(list, HttpStatus.OK);

    }catch (NumberFormatException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

  }

  @RequestMapping(value = "/tsunamirunups", method= RequestMethod.GET)
  public ResponseEntity<List<TsunamiRunupViewNonPersist>> getAllRunups(){
    try{
      List<TsunamiRunupViewNonPersist> list = tsunamiEventService.getAllRunups();
      return new ResponseEntity<>(list, HttpStatus.OK);
    }catch (Exception e){
      List<TsunamiRunupViewNonPersist> list = new ArrayList<>();
      return new ResponseEntity<>(list, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @RequestMapping(value = "/tsunamirunups/{id}", method= RequestMethod.GET)
  public ResponseEntity<List<TsunamiRunup>> getRunupById(@PathVariable("id") Integer id){
    try{
      List<TsunamiRunup> list = tsunamiEventService.getRunupById(id);
      return new ResponseEntity<>(list, HttpStatus.OK);
    }catch (Exception e){
      List<TsunamiRunup> list = new ArrayList<>();
      return new ResponseEntity<>(list, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @RequestMapping(value = "/tsunamirunups/{eventid}", method=RequestMethod.POST)
  public ResponseEntity postRunup(@PathVariable("eventid") Integer eventId,
                                                @Valid @RequestBody TsunamiRunup tsunamiRunup, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }
      Integer maxId = new ArrayList<>(tsunamiEventService.checkMaxRunupId()).get(0).getId() + 1;

      tsunamiRunup.setId(maxId);
      tsunamiRunup.setTsunamiEvent(tsunamiEventService.getEventProxy(eventId));
      tsunamiEventService.addRunup(tsunamiRunup);

      return new ResponseEntity<>(tsunamiRunup, HttpStatus.OK);
    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }


  }

  @RequestMapping(value = "/tsunamirunups/{runupid}/{eventid}", method = RequestMethod.PATCH)
  public ResponseEntity patchRunup(@PathVariable("runupid") Integer runupId,
                                   @PathVariable("eventid") Integer eventId,
                                   @Valid @RequestBody TsunamiRunup tsunamiRunup, Errors errors){
    try{
      if(errors.hasErrors()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors.getAllErrors());
      }

      tsunamiRunup.setId(runupId);
      tsunamiRunup.setTsunamiEvent(tsunamiEventService.getEventProxy(eventId));
      tsunamiEventService.updateRunup(tsunamiRunup);

      return ResponseEntity.status(HttpStatus.OK).body(tsunamiRunup);


    }catch (EntityNotFoundException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch (DataIntegrityViolationException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }catch(TransactionSystemException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }
  }

  @RequestMapping(value = "/tsunamirunups/{id}", method = RequestMethod.DELETE)
  public ResponseEntity deleteRunup(@PathVariable("id") Integer id){
    try{
      tsunamiEventService.deleteRunup(id);

      return ResponseEntity.status(HttpStatus.OK).body(null);

    }catch (JpaObjectRetrievalFailureException e){

      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }catch (IndexOutOfBoundsException e){
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

  }

}
