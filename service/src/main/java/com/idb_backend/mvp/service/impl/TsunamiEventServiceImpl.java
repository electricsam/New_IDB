package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewRepository;
import com.idb_backend.mvp.domain.repository.impl.TsunamiEventViewRepositoryImpl;
import com.idb_backend.mvp.service.BaseService;
import com.idb_backend.mvp.service.TsunamiEventService;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TsunamiEventServiceImpl extends BaseService implements TsunamiEventService {

  @Autowired
  TsunamiEventViewRepository tsunamiEventViewRepository;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  public BooleanExpression generateCriteria (Map<String, String> map){
    QTsunamiRunupView root = QTsunamiRunupView.tsunamiRunupView;
    BooleanExpression master;

    List<BooleanExpression> boolList = new ArrayList<>();

    boolList.add(genEqRestriction(map, "runupRegion", root.regionCode));
    boolList.add(genEqRestriction(map, "runupCountry", root.country));
    boolList.add(genEqRestriction(map, "runupArea", root.area));
    boolList.add(genIntMinMax(map, "runupMinDistance", "runupMaxDistance", root.distFromSource));
    boolList.add(genIntMinMax(map, "runupMinTravelTime", "runupMaxTravelTime", root.travHours));
    boolList.add(checkLocParams(map, "runupLocStart", "runupLocEnd", "runupLocIncludes", "runupLocMatch", "runupLocNot",
        root.locationName));
    boolList.add(genEqRestriction(map, "runupMeasureType", root.typeMeasurementId));
    boolList.add(genDoubleMinMax(map, "runupMinHeight", "runupMaxHeight", root.runupHt));
    boolList.add(genIntMinMax(map, "runupMinDeaths", "runupMaxDeaths", root.deaths));
    boolList.add(genIntMinMax(map, "runupMinDeathsAmountOrder", "runupMaxDeathsAmountOrder", root.deathsAmountOrder));
    boolList.add(genIntMinMax(map, "runupMinInjuries", "runupMaxInjuries", root.injuries));
    boolList.add(genIntMinMax(map, "runupMinInjuriesAmountOrder", "runupMinInjuriesAmountOrder",
        root.injuriesAmountOrder));
    boolList.add(genDoubleMinMax(map, "runupMinDamageInMillions", "runupMaxDamageInMillions",
        root.damageMillionsDollars));
    boolList.add(genIntMinMax(map, "runupMinDamageAmountOrder", "runupMaxDamageAmountOrder", root.damageAmountOrder));
    boolList.add(genIntMinMax(map, "runupMinHousesDestroyed", "runupMaxHousesDestroyed", root.housesDestroyed));
    boolList.add(genIntMinMax(map, "runupMinHousesAmountOrder", "runupMaxHousesAmountOrder", root.housesAmountOrder));

    if(boolList.size() > 0){
      master = boolList.get(0);
      for(int i = 1; i < boolList.size(); i++){
        if(boolList.get(i) != null){
          master = master.and(boolList.get(i));
        }
      }
    }else{
      master = null;
    }

    return master;

  }

  @Override
  public Iterable<TsunamiEventView> getTsunamis(Map<String, String> params, Predicate predicate){

    BooleanExpression exp = generateCriteria(params);

    if(params.get("earthquakeid") != null ){
      return tsunamiEventRepository.findRelatedTsunamiFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("refid") != null){
      return tsunamiEventRepository.findRelatedTsunamiFromRef(Integer.parseInt(params.get("refid")));
    }else if(params.get("volcanoid") != null){
      return tsunamiEventRepository.findRelatedTsunamiFromVolcano(Integer.parseInt(params.get("volcanoid")));
    }else if(params.get("runupid") != null){
      return tsunamiEventRepository.findRelatedTsunamiFromRunup(Integer.parseInt(params.get("runupid")));
    }else if(exp == null){
      return tsunamiEventViewRepository.findEventsNoRunupParams(predicate);
    } else{
      return tsunamiEventViewRepository.findEventsByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }
}
