package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
  @RequestMapping(value = "/tsunamirunups/select", method= RequestMethod.GET)
  public List<TsunamiRunupViewNonPersist> getRunupsByQuery(@RequestParam Map<String, String> allRequestParams){
    return tsunamiEventService.generateRunupCriteria(allRequestParams);
  }


  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamirunups", method=RequestMethod.POST)
  public ResponseEntity<TsunamiRunup> postRunup(@RequestBody TsunamiRunup tsunamiRunup){
    Integer maxId = new ArrayList<>(tsunamiEventService.checkMaxRunupId()).get(0).getId() + 1;
    tsunamiRunup.setId(maxId);
    tsunamiEventService.addRunup(tsunamiRunup);

    return new ResponseEntity<>(tsunamiRunup, HttpStatus.OK);
  }


}
