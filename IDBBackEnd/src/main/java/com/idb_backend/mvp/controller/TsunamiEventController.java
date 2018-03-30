package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TsunamiEventController {

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;
  
  @Autowired
  TsunamiEventService tsunamiEventService;

  //TODO: insert error handling for each of these endpoints

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  public @ResponseBody List<TsunamiEventView> getAllEvents(){

    return tsunamiEventRepository.getAllTsunamiEvents();
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievent/{id}", method= RequestMethod.GET)
  public @ResponseBody List<TsunamiEvent> getEventById(@PathVariable("id") Integer id){

    return tsunamiEventRepository.getEventById(id);
  }


  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents/select", method= RequestMethod.GET)
  public List<TsunamiEventViewNonPersist> getEventsByQuery(@RequestParam Map<String, String> allRequestParams){

    return tsunamiEventService.generateCriteria(allRequestParams);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method=RequestMethod.POST)
  public ResponseEntity<TsunamiEvent> postTsunamiEvent(@RequestBody TsunamiEvent tsunamiEvent){
    Integer maxId = new ArrayList<>(tsunamiEventService.checkMaxTsEventId()).get(0).getId() + 1;
      tsunamiEvent.setId(maxId);
      tsunamiEventService.addEvent(tsunamiEvent);

    return new ResponseEntity<>(tsunamiEvent, HttpStatus.OK);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.PATCH)
    public TsunamiEvent patchEvent( @PathVariable("id") Integer id, @RequestBody TsunamiEvent tsunamiEvent){
      tsunamiEvent.setId(id);
      tsunamiEventService.updateEvent(tsunamiEvent);

      return tsunamiEvent;
    }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents/{id}", method = RequestMethod.DELETE)
  public HttpStatus deleteTsunamiEvent(@PathVariable("id") Integer id){
    tsunamiEventService.deleteEvent(id);

    return HttpStatus.OK;
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups/select", method= RequestMethod.GET)
  public List<TsunamiRunupViewNonPersist> getRunupsByQuery(@RequestParam Map<String, String> allRequestParams){

    return tsunamiEventService.generateRunupCriteria(allRequestParams);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups", method= RequestMethod.GET)
  public List<TsunamiRunupViewNonPersist> getAllRunups(){

    return tsunamiEventService.getAllRunups();
  }


  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups/{id}", method= RequestMethod.GET)
  public List<TsunamiRunup> getRunupById(@PathVariable("id") Integer id){

    return tsunamiEventService.getRunupById(id);
  }


  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups/{id}", method=RequestMethod.POST)
  public ResponseEntity<TsunamiRunup> postRunup(@PathVariable("id") Integer id, @RequestBody TsunamiRunup tsunamiRunup){
    Integer maxId = new ArrayList<>(tsunamiEventService.checkMaxRunupId()).get(0).getId() + 1;
    tsunamiRunup.setId(maxId);
    tsunamiRunup.setTsunamiEvent(tsunamiEventService.getEventProxy(id));
    tsunamiEventService.addRunup(tsunamiRunup);

    return new ResponseEntity<>(tsunamiRunup, HttpStatus.OK);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups/{runupid}/{eventid}", method = RequestMethod.PATCH)
  public ResponseEntity<TsunamiRunup> patchRunup(@PathVariable("runupid") Integer runupId, @PathVariable("eventid") Integer eventId,
                                 @RequestBody TsunamiRunup tsunamiRunup){
    tsunamiRunup.setId(runupId);
    tsunamiRunup.setTsunamiEvent(tsunamiEventService.getEventProxy(eventId));
    tsunamiEventService.updateRunup(tsunamiRunup);

    return new ResponseEntity<>(tsunamiRunup, HttpStatus.OK);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<Object> deleteRunup(@PathVariable("id") Integer id){
    tsunamiEventService.deleteRunup(id);

    return new ResponseEntity<>(null, HttpStatus.OK);
  }

}
