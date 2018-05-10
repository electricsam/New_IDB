package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.SignifAndVolEventRepository;
import com.idb_backend.mvp.domain.repository.SignifToTsEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class SigAndTsuController {

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  @Autowired
  SignifToTsEventRepository signifToTsEventRepository;


  @RequestMapping(value = "/eqtsujunction/{sigid}/{tsuid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postSigTsuRelation(@PathVariable("sigid") Integer sigId, @PathVariable("tsuid") Integer tsuId){

    try{
      Optional<TsunamiEvent> optionalTsu = tsunamiEventRepository.findById(tsuId);
      TsunamiEvent tsunamiEvent = optionalTsu.get();

      Optional<SignifTsqp> optionalEq = earthquakeRepository.findById(sigId);
      SignifTsqp signifTsqp = optionalEq.get();

      SignifToTsEvent signifToTsEvent = new SignifToTsEvent();
      signifToTsEvent.setSignifTsqp(signifTsqp);
      signifToTsEvent.setTsunamiEvent(tsunamiEvent);
      signifToTsEvent.setId(sigId, tsuId);

      signifToTsEventRepository.save(signifToTsEvent);

      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
