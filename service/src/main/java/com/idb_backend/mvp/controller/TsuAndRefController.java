package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.Reference;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiRefs;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiRefsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class TsuAndRefController {

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  @Autowired
  ReferenceRepository referenceRepository;

  @Autowired
  TsunamiRefsRepository tsunamiRefsRepository;

  @RequestMapping(value = "/tsurefjunction/{tsuid}/{refid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postTsuRefRelation(@PathVariable("tsuid") Integer tsuId, @PathVariable("refid") Integer refId){
    try{
      Optional<TsunamiEvent> optionalTsu = tsunamiEventRepository.findById(tsuId);
      TsunamiEvent tsunamiEvent = optionalTsu.get();

      Optional<Reference> optionalRef = referenceRepository.findById(refId);
      Reference reference = optionalRef.get();

      TsunamiRefs tsunamiRefs = new TsunamiRefs();
      tsunamiRefs.setTsunamiEvent(tsunamiEvent);
      tsunamiRefs.setReference(reference);
      tsunamiRefs.setId(tsuId, refId);

      tsunamiRefsRepository.save(tsunamiRefs);

      return ResponseEntity.status(HttpStatus.OK).body("success");

    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
