package com.idb_backend.mvp.service.impl;

import com.google.common.base.Function;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.idb_backend.mvp.service.EarthquakeService;
import com.querydsl.core.types.Predicate;
import org.owasp.html.HtmlPolicyBuilder;
import org.owasp.html.HtmlSanitizer;
import org.owasp.html.HtmlStreamEventReceiver;
import org.owasp.html.PolicyFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EarthquakeServiceImpl implements EarthquakeService{

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  @Override
  public Iterable getAllEarthquakes(Map<String, String> params, Predicate predicate) {
    if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
      Integer tsunamiId = Integer.parseInt(params.get("tsunamiid"));
      return earthquakeRepository.findRelatedEarthquakeFromTsunami(tsunamiId);
    }else if(params.get("refid") != null && !params.get("refid").equals("")){
      Integer refId = Integer.parseInt(params.get("refid"));
      return earthquakeRepository.findRelatedEarthquakeFromRef(refId);
    }else if(params.get("volcanoid") != null && !params.get("volcanoid").equals("")){
      Integer volId = Integer.parseInt(params.get("volcanoid"));
      return earthquakeRepository.findRelatedEarthquakeFromVolcano(volId);
    }else{
      return earthquakeViewRepository.findAll(predicate);
    }
  }

  public static final PolicyFactory POLICY_DEFINITION = new HtmlPolicyBuilder()
      .allowElements("p", "div", "a")
      .allowCommonBlockElements()
      .allowCommonInlineFormattingElements()
      .toFactory();

  @Override
  public SignifTsqp sanatizeObject(SignifTsqp eq){
      String html = eq.getComments();
      String safeHtml = POLICY_DEFINITION.sanitize(html);
      eq.setComments(safeHtml);
      return eq;
  }

}
