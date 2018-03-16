package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
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
  TsunamiService tsunamiService;

  //TODO: insert error handling for each of these endpoints

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  public @ResponseBody List<TsunamiEventView> getAllEvents(){
    return tsunamiEventRepository.getAllTsunamiEvents();
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents/select", method= RequestMethod.GET)
  public List<TsunamiEventViewNonPersist> getEventsByYear(@RequestParam Map<String, String> allRequestParams){
    return tsunamiService.generateCriteria(allRequestParams);
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method=RequestMethod.POST)
  public ResponseEntity<TsunamiEvent> postTsunamiEvent(@RequestBody TsunamiEvent tsunamiEvent){
    System.out.println(tsunamiEvent.toString());
    Integer maxId = new ArrayList<>(tsunamiService.checkMaxTsEventId()).get(0).getId() + 1;

      tsunamiEvent.setId(maxId);
//    query db for maxID , increment by 1, then use below function to assign id before sending to service to add as event
//    Just use tsunamiEvent.setId(
//    tsunamiService.addEvent(tsunamiEvent);

    return new ResponseEntity<>(tsunamiEvent, HttpStatus.OK);
  }

}
