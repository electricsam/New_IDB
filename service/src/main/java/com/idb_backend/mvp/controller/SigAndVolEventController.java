package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.SignifAndVolEvent;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.SignifAndVolEventRepository;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class SigAndVolEventController {

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  @Autowired
  SignifAndVolEventRepository signifAndVolEventRepository;

  @RequestMapping(value = "/eqvoljuction/{sigid}/{volid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postSigVolRelation(@PathVariable("sigid") Integer sigId, @PathVariable("volid") Integer volId){

    try{
      Optional<VolcanoEvent> optionalVol = volcanoEventRepository.findById(volId);
      VolcanoEvent volcanoEvent = optionalVol.get();

      Optional<SignifTsqp> optionalEq = earthquakeRepository.findById(sigId);
      SignifTsqp signifTsqp = optionalEq.get();

      SignifAndVolEvent signifAndVolEvent = new SignifAndVolEvent();
      signifAndVolEvent.setSignifTsqp(signifTsqp);
      signifAndVolEvent.setVolcanoEvent(volcanoEvent);
      signifAndVolEvent.setId(sigId, volId);

      signifAndVolEventRepository.save(signifAndVolEvent);

      return ResponseEntity.status(HttpStatus.OK).body("success");
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }


  }

}
