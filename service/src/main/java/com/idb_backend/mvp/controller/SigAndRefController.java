package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.Reference;
import com.idb_backend.mvp.domain.model.SignifRefs;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.domain.repository.SignifRefsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SigAndRefController {

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  ReferenceRepository referenceRepository;

  @Autowired
  SignifRefsRepository signifRefsRepository;

  @RequestMapping(value = "/eqrefjunction/{sigid}/{refid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postSigRefRelation(@PathVariable("sigid") Integer sigId, @PathVariable("refid") Integer refId){

    try{

      Reference reference = referenceRepository.findById(refId).get();
      SignifTsqp signifTsqp = earthquakeRepository.findById(sigId).get();

      SignifRefs signifRefs = new SignifRefs();
      signifRefs.setSignifTsqp(signifTsqp);
      signifRefs.setReference(reference);
      signifRefs.setId(sigId, refId);

      signifRefsRepository.save(signifRefs);

      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
