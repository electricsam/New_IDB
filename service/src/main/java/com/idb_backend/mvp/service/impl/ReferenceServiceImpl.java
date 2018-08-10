package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.Reference;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.service.BaseService;
import com.idb_backend.mvp.service.ReferenceService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ReferenceServiceImpl extends BaseService implements ReferenceService{

  @Autowired
  ReferenceRepository referenceRepository;

  @Override
  public Iterable<Reference> getReferences(Map<String, String> params, Predicate predicate){
    if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
      return referenceRepository.findRelatedReferencesFromTsunami(Integer.parseInt(params.get("tsunamiid")));
    }else if(params.get("volcanoid") != null && !params.get("volcanoid").equals("")){
      return referenceRepository.findRelatedReferencesFromVolcano(Integer.parseInt(params.get("volcanoid")));
    }else if(params.get("earthquakeid") != null && !params.get("earthquakeid").equals("")){
      return referenceRepository.findRelatedReferencesFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("runupid") != null && !params.get("runupid").equals("")){
      return referenceRepository.findRelatedReferencesFromRunup(Integer.parseInt(params.get("runupid")));
    }else{
      return referenceRepository.findAll(predicate);
    }
  }

  @Override
  public Reference sanitizeObject(Reference ref){

    String refNo = ref.getRefNo();
    refNo = NO_HTML_POLICY_DEFINITION.sanitize(refNo);
    ref.setRefNo(refNo);

    String author = ref.getAuthor();
    author = NO_HTML_POLICY_DEFINITION.sanitize(author);
    ref.setAuthor(author);

    String year = ref.getYear();
    year = NO_HTML_POLICY_DEFINITION.sanitize(year);
    ref.setYear(year);

    String citation = ref.getCitation();
    citation = POLICY_DEFINITION.sanitize(citation);
    ref.setCitation(citation);

    String ok = ref.getOk();
    ok = NO_HTML_POLICY_DEFINITION.sanitize(ok);
    ref.setOk(ok);

    String comments = ref.getComments();
    comments = POLICY_DEFINITION.sanitize(comments);
    ref.setComments(comments);

    return ref;
  }
}
