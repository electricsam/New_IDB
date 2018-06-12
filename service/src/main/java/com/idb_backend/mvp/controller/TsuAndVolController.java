package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.TseventAndVolEvent;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.idb_backend.mvp.domain.repository.TseventAndVolEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class TsuAndVolController {

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  @Autowired
  TseventAndVolEventRepository tseventAndVolEventRepository;

  @RequestMapping(value = "/tsuvoljunction/{tsuid}/{volid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postEqVolRelation(@PathVariable("tsuid") Integer tsuId, @PathVariable("volid") Integer volId){

    try{

      Optional<VolcanoEvent> optionalVol = volcanoEventRepository.findById(volId);
      VolcanoEvent volcanoEvent = optionalVol.get();

      Optional<TsunamiEvent> optionalTsu = tsunamiEventRepository.findById(tsuId);
      TsunamiEvent tsunamiEvent = optionalTsu.get();

      TseventAndVolEvent tseventAndVolEvent = new TseventAndVolEvent();
      tseventAndVolEvent.setTsunamiEvent(tsunamiEvent);
      tseventAndVolEvent.setVolcanoEvent(volcanoEvent);
      tseventAndVolEvent.setId(tsuId, volId);

      tseventAndVolEventRepository.save(tseventAndVolEvent);

      return ResponseEntity.status(HttpStatus.OK).body("success");
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }


  }
}
