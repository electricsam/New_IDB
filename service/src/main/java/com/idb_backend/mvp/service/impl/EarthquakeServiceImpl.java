package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.idb_backend.mvp.service.BaseService;
import com.idb_backend.mvp.service.EarthquakeService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EarthquakeServiceImpl extends BaseService implements EarthquakeService{

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  public EarthquakeServiceImpl(){
    super();
  }

  /**
   * Returns Iterable object that is created via Repository's query to the database.  The query used is determined by
   * the params that are present in the queryString passed in the controller.
   *
   * @param params
   * @param predicate
   * @return Iterable object of all Earthquakes resulting from query
   */
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

  /**
   * Returns SignifTsqp object sanatized of all unacceptable HTML
   *
   * @param eq
   * @return SignifTsqP without unacceptable HTML
   */
  @Override
  public SignifTsqp sanitizeObject(SignifTsqp eq){
      String flagDuplicate = eq.getFlagDuplicate();
      flagDuplicate = NO_HTML_POLICY_DEFINITION.sanitize(flagDuplicate);
      eq.setFlagDuplicate(flagDuplicate);

      String comments = eq.getComments();
      comments = POLICY_DEFINITION.sanitize(comments);
      eq.setComments(comments);

      String locationName = eq.getLocationName();
      locationName = NO_HTML_POLICY_DEFINITION.sanitize(locationName);
      eq.setLocationName(locationName);

      String area = eq.getArea();
      area = NO_HTML_POLICY_DEFINITION.sanitize(area);
      eq.setArea(area);

      String country = eq.getCountry();
      country = NO_HTML_POLICY_DEFINITION.sanitize(country);
      eq.setCountry(country);

      String intensity = eq.getIntensity();
      intensity = NO_HTML_POLICY_DEFINITION.sanitize(intensity);
      eq.setIntensity(intensity);

      String flagTsunami = eq.getFlagTsunami();
      flagTsunami = NO_HTML_POLICY_DEFINITION.sanitize(flagTsunami);
      eq.setFlagTsunami(flagTsunami);

      String flagEpicenterChk = eq.getFlagEpicenterChk();
      flagEpicenterChk = NO_HTML_POLICY_DEFINITION.sanitize(flagEpicenterChk);
      eq.setFlagEpicenterChk(flagEpicenterChk);

      String flagMagnitudeChk = eq.getFlagMagnitudeChk();
      flagMagnitudeChk = NO_HTML_POLICY_DEFINITION.sanitize(flagMagnitudeChk);
      eq.setFlagMagnitudeChk(flagMagnitudeChk);

      String flagEffectsChk = eq.getFlagEffectsChk();
      flagEffectsChk = NO_HTML_POLICY_DEFINITION.sanitize(flagEffectsChk);
      eq.setFlagEffectsChk(flagEffectsChk);

      return eq;
  }
}
