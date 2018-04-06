package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TsunamiEventServiceImpl implements TsunamiEventService {

  @PersistenceContext
  EntityManager em;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;


  public List<TsunamiEventViewNonPersist> generateCriteria (Map<String, String> map){

    CriteriaBuilder builder = em.getCriteriaBuilder();
    CriteriaQuery<TsunamiEventViewNonPersist> criteria = builder.createQuery( TsunamiEventViewNonPersist.class );
    Root<TsunamiEventView> root = criteria.from( TsunamiEventView.class );
    Join<TsunamiEventView, TsunamiRunupView> join = root.join("tsunamiRunupViews");
    List criteriaList = new ArrayList();

    List<Predicate> predList = new ArrayList<>();

    criteria.multiselect(
        root.get("id"), root.get("year"), root.get("month"), root.get("day"), root.get("hour"), root.get("minute"),
        root.get("second"), root.get("country"), root.get("eventValidity"), root.get("causeCode"),
        root.get("eqMagnitude"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
        root.get("maxEventRunup"), root.get("numRunup"), root.get("tsMtAbe"), root.get("tsMtIi"),
        root.get("tsIntensity"), root.get("deaths"), root.get("deathsAmountOrder"), root.get("missing"),
        root.get("missingAmountOrder"), root.get("injuries"), root.get("injuriesAmountOrder"),
        root.get("damageMillionsDollars"), root.get("damageAmountOrder"), root.get("housesDestroyed"),
        root.get("housesAmountOrder"), root.get("housesDamaged"), root.get("housesDamagedAmountOrder"),
        root.get("deathsTotal"), root.get("deathsAmountOrderTotal"), root.get("missingTotal"),
        root.get("missingAmountOrderTotal"), root.get("injuriesTotal"), root.get("injuriesAmountOrderTotal"),
        root.get("damageMillionsDollarsTotal"), root.get("damageAmountOrderTotal"), root.get("housesDestroyedTotal"),
        root.get("housesAmountOrderTotal"), root.get("housesDamagedTotal"), root.get("housesDamAmountOrderTotal")
    ).distinct(true);


    predList.add(genIntMinMax(map, "minyear", "maxyear", "year", builder, root));
    predList.add(genIntMinMax(map, "minvalidity", "maxvalidity", "eventValidity", builder, root));
    predList.add(genEqRestriction(map, "country", "country", builder, root));
    predList.add(genIntMinMax(map,  "mincause", "maxcause", "causeCode", builder, root));
    predList.add(checkRegionParams(map, "regioncode", "regionCode", builder, root));
    predList.add(genEqRestriction(map, "area", "area", builder, root));
    predList.add(genFloatMinMax(map, "latnorth", "latsouth", "latitude", builder, root));
    predList.add(genFloatMinMax(map, "longwest", "longeast", "longitude", builder, root));
    predList.add(genFloatMinMax(map, "eqmagmin", "eqmagmax", "eqMagnitude", builder, root));
    predList.add(checkRegionParams(map, "runupregion", "tsRunups.regionCode", builder, join));
    predList.add(genEqRestriction(map, "runupcountry", "country", builder, join));
    predList.add(genEqRestriction(map, "runuparea", "area", builder, join));
    predList.add(genIntMinMax(map, "runuptraveltimemin", "runuptraveltimemax", "travHours", builder, join));
    predList.add(genIntMinMax(map, "runupdistancemin", "runupdistancemax", "distFromSource", builder, root));
    predList.add(genIntMinMax(map, "numberofrunupsmin", "numberofrunupsmax", "numRunup", builder, root));
    predList.add(genFloatMinMax(map, "waterheightmin", "waterheightmax", "maxEventRunup", builder, root));
    predList.add(genIntMinMax(map, "numberofdeathsmin", "numberofdeathsmax", "deaths", builder, root));
    predList.add(genIntMinMax(map, "numberofinjuriesmin", "numberofinjuriesmax", "injuries", builder, root));
    predList.add(genIntMinMax(map, "numhousesdestroyedmin", "numhousesdestroyedmax", "housesDestroyed", builder, root));
    predList.add(genIntMinMax(map, "deathdescriptionmin", "deathdescriptionmax", "deathsAmountOrder", builder, root));
    predList.add(genIntMinMax(map, "injurydescriptmin", "injurydescriptmax", "injuryAmountOrder", builder, root));
    predList.add(genIntMinMax(map, "damagedescriptmin", "damagedescriptmax", "damageAmountOrder", builder, root));
    predList.add(genIntMinMax(map, "housesdescriptmin", "housesdescriptmax", "housesAmountOrder", builder, root));
    predList.add(genIntMinMax(map, "totaldeathsmin", "totaldeathsmax", "deathsTotal", builder, root));
    predList.add(genEqRestriction(map, "rnpmeasuretype", "typeOfMeasurementId", builder, join));
    predList.add(genFloatMinMax(map, "rnphtmin", "rnphtmax", "runuoHt", builder, join));
    predList.add(genIntMinMax(map, "rnpdeathmin", "rnpdeathmax", "deaths", builder, join));
    predList.add(genIntMinMax(map, "rnpdeathdescripmin", "rnpdeathdescripmax", "deathsAmountOrder", builder, join));
    predList.add(genIntMinMax(map, "rnpinjurymin", "rnpinjurymax", "injuries", builder, join));
    predList.add(genIntMinMax(map, "rnpinjurydescripmin", "rnpinjurydescripmax", "injuriesAmountOrder", builder, join));
    predList.add(genFloatMinMax(map, "rnpdamagemin", "rnpdamagemax", "damageMillionsDollars", builder, join));
    predList.add(genIntMinMax(map, "rnpdamagedescripmin", "rnpdamagedescripmax", "damageAmountOrder", builder, join));
    predList.add(genIntMinMax(map, "rnphousesmin", "rnphousesmax", "housesDestroyed", builder, join));
    predList.add(genIntMinMax(map, "rnphousesdescripmin", "rnphousesdescripmax", "housesAmountOrder", builder, join));
    predList.add(checkLocParams(map, "runuplocstart", "runuplocend", "runuplocincludes", "runuplocmatch", "runuplocnot",
        "locationName", builder, join
    ));
    predList.add(checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName", builder,
        root
    ));
    predList.add(genIntMinMax(map, "totaldeathdescripmin", "totaldeathdescripmax", "deathsAmountOrderTotal", builder,
        root));
    predList.add(genFloatMinMax(map, "damageinmillionsmin", "damageinmillionsmax", "damageMillionsDollars", builder,
        root
    ));

    for(int i = 0; i < predList.size(); i++){
      if(predList.get(i) != null){
        criteriaList.add(predList.get(i));
      }
    }

    Predicate [] predArray = new Predicate[criteriaList.size()];
    criteriaList.toArray(predArray);
    criteria.where(predArray);

    return getEventsByQuery(criteria);
  }

  public List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria){
    return tsunamiEventRepository.getEventsByQuery(criteria);
  }

  @Override
  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Root root){
    if(min != null && max != null){
      return builder.between(root.get(colName), min, max);
    }else if(min != null){
      return builder.ge(root.get(colName), min);
    }else if(max != null){
      return builder.le(root.get(colName), max);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Join join){
    if(min != null && max != null){
      return builder.between(join.get(colName), min, max);
    }else if(min != null){
      return builder.ge(join.get(colName), min);
    }else if(max != null){
      return builder.le(join.get(colName), max);
    }else{
      return null;
    }
  }


  @Override
  public Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Root root){
    if(min != null && max != null){
      return builder.between(root.get(colName), min, max);
    }else if(min != null){
      return builder.ge(root.get(colName), min);
    }else if(max != null){
      return builder.le(root.get(colName), max);
    }else{
      return null;
    }
  }

  public Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Join join){
    if(min != null && max != null){
      return builder.between(join.get(colName), min, max);
    }else if(min != null){
      return builder.ge(join.get(colName), min);
    }else if(max != null){
      return builder.le(join.get(colName), max);
    }else{
      return null;
    }
  }

  @Override
  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  @Override
  public Float generateFloat(Map<String, String> map, String key) {
    return map.get(key) != null? new Float(Float.parseFloat(map.get(key))) : null;
  }

  @Override
  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
                                CriteriaBuilder builder, Root root) throws NumberFormatException{
    //TODO: need to figure out validation
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, colName, builder, root);
  }

  @Override
  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
                                CriteriaBuilder builder, Join join) throws NumberFormatException{
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, colName, builder, join);
  }

  @Override
  public Predicate genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
                                  CriteriaBuilder builder, Root root) throws NumberFormatException{
    Float min = generateFloat(map, minKey);
    Float max = generateFloat(map, maxKey);

    return checkMinMax(min, max, colName, builder, root);
  }

  @Override
  public Predicate genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
                                  CriteriaBuilder builder, Join join) throws NumberFormatException{
    Float min = generateFloat(map, minKey);
    Float max = generateFloat(map, maxKey);

    return checkMinMax(min, max, colName, builder, join);
  }

  @Override
  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                                    Root root){
    String condition = map.get(key);
    if(condition != null){
      return builder.equal(root.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                                    Join join){
    String condition = map.get(key);
    if(condition != null){
      return builder.equal(join.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkRegionParams(Map<String, String> map, String key, String colName,
                                     CriteriaBuilder builder, Root root){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return builder.equal(root.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                                     Join join ){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return builder.equal(join.get(colName), condition);
    }else{
      return null;
    }
  }


  @Override
  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                                  String not, String colName, CriteriaBuilder builder, Root root){

    if(map.get(start) != null){
      return builder.like(root.get(colName), map.get(start) + "%");
    }else if(map.get(end) != null){
      return builder.like(root.get(colName), "%" + map.get(end));
    }else if(map.get(includes) != null){
      return builder.like(root.get(colName), "%" + map.get(includes) + "%");
    }else if(map.get(match) != null){
      return builder.equal(root.get(colName), map.get(match));
    }else if(map.get(not) != null){
      return builder.notLike(root.get(colName), "%" + map.get(not) + "%");
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                                  String not, String colName, CriteriaBuilder builder,
                                  Join join){
    if(map.get(start) != null){
      return builder.like(join.get(colName), map.get(start) + "%");
    }else if(map.get(end) != null){
      return builder.like(join.get(colName), "%" + map.get(end));
    }else if(map.get(includes) != null){
      return builder.like(join.get(colName), "%" + map.get(includes) + "%");
    }else if(map.get(match) != null){
      return builder.equal(join.get(colName), map.get(match));
    }else if(map.get(not) != null){
      return builder.notLike(join.get(colName), "%" + map.get(not) + "%");
    }else{
      return null;
    }
  }

  @Override
  public void addEvent(TsunamiEvent tsunamiEvent){
    tsunamiEventRepository.addEvent(tsunamiEvent);
  }

  @Override
  public void addRunup(TsunamiRunup tsunamiRunup){
    tsunamiEventRepository.addRunup(tsunamiRunup);
  }

  @Override
  public List<TsunamiEvent> checkMaxTsEventId() {
    return tsunamiEventRepository.checkMaxTsEventId();
  }

  @Override
  public List<TsunamiRunup> checkMaxRunupId(){
    return tsunamiEventRepository.checkMaxRunupId();
  }

  @Override
  public void updateEvent(TsunamiEvent tsunamiEvent) {
    tsunamiEventRepository.updateEvent(tsunamiEvent);
  }

  @Override
  public List<TsunamiRunupViewNonPersist> generateRunupCriteria(Map<String, String> map) {
    CriteriaBuilder builder = em.getCriteriaBuilder();
    CriteriaQuery<TsunamiRunupViewNonPersist> criteria = builder.createQuery( TsunamiRunupViewNonPersist.class );
    Root<TsunamiRunupView> root = criteria.from( TsunamiRunupView.class );
    Join<TsunamiRunupView, TsunamiEventView> join = root.join("tsunamiEventView");
    List criteriaList = new ArrayList();

    List<Predicate> predList = new ArrayList<>();

    criteria.multiselect(
        root.get("id"), join.get("year"), join.get("month"), join.get("day"), join.get("hour"), join.get("second"),
        join.get("eventValidity"), join.get("causeCode"), join.get("eqMagnitude"), root.get("country"),
        root.get("area"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
        root.get("distFromSource"), root.get("arrDay"), root.get("arrHour"), root.get("arrMin"), root.get("travHours"),
        root.get("travMins"), root.get("runupHt"), root.get("runupHoriz"), root.get("typeOfMeasurementId"),
        root.get("period"), root.get("firstMotion"), root.get("deaths"), root.get("deathsAmountOrder"),
        root.get("injuries"), root.get("injuriesAmountOrder"), root.get("damageMillionsDollars"),
        root.get("damageAmountOrder"), root.get("housesDestroyed"), root.get("housesAmountOrder"),
        root.get("housesDamaged"), root.get("housesDamagedAmountOrder"), join.get("id").alias("eventId")
    ).distinct(true);

    predList.add(genIntMinMax(map, "tsminyear", "tsmaxyear", "year", builder, join));
    predList.add(genEqRestriction(map, "tsregion", "regionCode", builder, join));
    predList.add(genEqRestriction(map, "tscountry", "regionCode", builder, join));
    predList.add(genEqRestriction(map, "region", "regionCode", builder, root));
    predList.add(genEqRestriction(map, "country", "country", builder, root));
    predList.add(genIntMinMax(map, "distancemin", "distancemax", "distFromSource", builder, root));
    predList.add(genFloatMinMax(map, "latnorth", "latsouth", "latitude", builder, root));
    predList.add(genFloatMinMax(map, "longwest", "longeast", "longitude", builder, root));
    predList.add(genFloatMinMax(map, "minwaterht", "maxwaterht", "runupHt", builder, root));
    predList.add(genEqRestriction(map, "typeofmeasure", "typeOfMeasurementId", builder, root));
    predList.add(genIntMinMax(map, "deathsmin", "deathsmax", "deaths", builder, root));
    predList.add(genIntMinMax(map, "damagemillioinsmin", "damagemillioinsmax", "damageMillionsDollars", builder, root));
    predList.add(checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName", builder,
        root
    ));

    for(int i = 0; i < predList.size(); i++){
      if(predList.get(i) != null){
        criteriaList.add(predList.get(i));
      }
    }

    Predicate [] predArray = new Predicate[criteriaList.size()];
    criteriaList.toArray(predArray);
    criteria.where(predArray);

      return getRunupsByQuery(criteria);

  }

  List<TsunamiRunupViewNonPersist> getRunupsByQuery(CriteriaQuery<TsunamiRunupViewNonPersist> criteria){
    return tsunamiEventRepository.getRunupsByQuery(criteria);
  }

  @Override
  public void updateRunup(TsunamiRunup tsunamiRunup){
    tsunamiEventRepository.updateRunup(tsunamiRunup);
  }

  @Override
  public void deleteRunup(Integer id){
    tsunamiEventRepository.deleteRunup(id);
  }

  @Override
  public TsunamiEvent getEventProxy(Integer id){
    return tsunamiEventRepository.getEventProxy(id);
  }

  @Override
  public void deleteEvent(Integer id){
    tsunamiEventRepository.deleteEvent(id);
  }

  @Override
  public List<TsunamiRunup> getRunupById(Integer id){
    return tsunamiEventRepository.getRunupById(id);
  }

  @Override
  public List<TsunamiRunupViewNonPersist> getAllRunups(){
    CriteriaBuilder builder = em.getCriteriaBuilder();
    CriteriaQuery<TsunamiRunupViewNonPersist> criteria = builder.createQuery( TsunamiRunupViewNonPersist.class );
    Root<TsunamiRunupView> root = criteria.from( TsunamiRunupView.class );
    Join<TsunamiRunupView, TsunamiEventView> join = root.join("tsunamiEventView");
    List criteriaList = new ArrayList();

    List<Predicate> predList = new ArrayList<>();

    criteria.multiselect(
        root.get("id"), join.get("year"), join.get("month"), join.get("day"), join.get("hour"), join.get("second"),
        join.get("eventValidity"), join.get("causeCode"), join.get("eqMagnitude"), root.get("country"),
        root.get("area"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
        root.get("distFromSource"), root.get("arrDay"), root.get("arrHour"), root.get("arrMin"), root.get("travHours"),
        root.get("travMins"), root.get("runupHt"), root.get("runupHoriz"), root.get("typeOfMeasurementId"),
        root.get("period"), root.get("firstMotion"), root.get("deaths"), root.get("deathsAmountOrder"),
        root.get("injuries"), root.get("injuriesAmountOrder"), root.get("damageMillionsDollars"),
        root.get("damageAmountOrder"), root.get("housesDestroyed"), root.get("housesAmountOrder"),
        root.get("housesDamaged"), root.get("housesDamagedAmountOrder"), join.get("id").alias("eventId")
    ).distinct(true);

    for(int i = 0; i < predList.size(); i++){
      if(predList.get(i) != null){
        criteriaList.add(predList.get(i));
      }
    }

    Predicate [] predArray = new Predicate[criteriaList.size()];
    criteriaList.toArray(predArray);
    criteria.where(predArray);

    return getRunupsByQuery(criteria);
  }

  @Override
  public boolean validateParams(Map<String, String> map){
    boolean isValid = true;
    for(String key: map.keySet()){
      String value = map.get(key);
      switch (key){
        case "tsminyear":
          Integer minyear  = Integer.parseInt(value);
          if(minyear < -2000 || minyear > 3000){
            isValid = false;
          }
          break;
        case "tsmaxyear":
          Integer maxyear = Integer.parseInt(value);
          if(maxyear < -2000 || maxyear > 3000){
            isValid = false;
          }
          break;
        case "tsregion":
          Integer tsRegion = Integer.parseInt(value);
          int[] tsregions = {30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89};
          boolean tsregionTmp = false;
          for(int i = 0; i < tsregions.length; i++){
            if(tsregions[i] == tsRegion){
              tsregionTmp = true;
            }
          }
          isValid = tsregionTmp;
          break;
        case "tscountry":
          String[] tscountries = {
              "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA",
              "BANGLADESH","BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA",
              "CROATIA","CUBA","CYPRUS", "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA",
              "ECUADOR","EGYPT","EL SALVADOR", "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA",
              "GREECE","GREENLAND", "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND",
              "INDIA","INDONESIA","IRAN", "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA",
              "KERMADEC ISLANDS","KOREA","LEBANON", "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)",
              "MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT", "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL",
              "NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA", "NORTH SEA",
              "NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
              "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
              "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
              "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
              "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
              "WALLIS AND FUTUNA (FRENCH TERRITORY)"
          };
          boolean tsCountryTmp = false;
          for(int i = 0; i < tscountries.length; i++){
            if(tscountries[i].equals(value)){
              tsCountryTmp = true;
            }
          }
          isValid = tsCountryTmp;
          break;
        case "region": {
          Integer region = Integer.parseInt(value);
          int[] regions = {30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89};
          boolean regionTmp = false;
          for(int i = 0; i < regions.length; i++){
            if(regions[i] == region){
              regionTmp = true;
            }
          }
          isValid = regionTmp;
          break;
        }
        case "country":
          String[] countries = {
              "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA",
              "BANGLADESH","BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA",
              "CROATIA","CUBA","CYPRUS", "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA",
              "ECUADOR","EGYPT","EL SALVADOR", "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA",
              "GREECE","GREENLAND", "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND",
              "INDIA","INDONESIA","IRAN", "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA",
              "KERMADEC ISLANDS","KOREA","LEBANON", "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)",
              "MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT", "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL",
              "NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA", "NORTH SEA",
              "NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
              "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
              "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
              "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
              "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
              "WALLIS AND FUTUNA (FRENCH TERRITORY)"
          };
          boolean countryTmp = false;
          for(int i = 0; i < countries.length; i++){
            if(countries[i].equals(value)){
              countryTmp = true;
            }
          }
          isValid = countryTmp;
          break;
        case "distancemin":
          Integer distanceMin = Integer.parseInt(value);
          if(distanceMin < 0 || distanceMin > 20000){
            isValid = false;
          }
          break;
        case "distanceMax":
          Integer distanceMax = Integer.parseInt(value);
          if(distanceMax < 0 || distanceMax > 20000){
            isValid = false;
          }
          break;
        case "latnorth" :
          Float latNorth = Float.parseFloat(value);
          if(latNorth < -90 || latNorth > 90){
            isValid = false;
          }
          break;
        case "latsouth":
          Float latSouth = Float.parseFloat(value);
          if(latSouth < -90 || latSouth > 90){
            isValid = false;
          }
          break;
        case "longwest":
          Float longWest = Float.parseFloat(value);
          if(longWest < -180 || longWest > 180){
            isValid = false;
          }
          break;
        case "longeast" :
          Float longEast = Float.parseFloat(value);
          if(longEast < -180 || longEast > 180){
            isValid = false;
          }
          break;
        case "minwaterht" :
          Float minWaterHt = Float.parseFloat(value);
          if(minWaterHt < 0 || minWaterHt > 800){
            isValid = false;
          }
          break;
        case "maxwaterht" :
          Float maxWaterHt = Float.parseFloat(value);
          if(maxWaterHt < 0 || maxWaterHt > 800){
            isValid = false;
          }
          break;
        case "typeofmeasure":
          Integer typeOfMeasure = Integer.parseInt(value);
          boolean measureTmp = false;
          int[] types = {1,2,3,4,5,6,7,8,9,10};
          for(int i = 0; i < types.length; i++){
            if(types[i] == typeOfMeasure){
              measureTmp = true;
            }
          }
          isValid = measureTmp;
          break;
        case "deathsmin":
          Integer deathsMin = Integer.parseInt(value);
          if(deathsMin < 0 || deathsMin > 300000){
            isValid = false;
          }
          break;
        case "deathsmax" :
          Integer deathsMax = Integer.parseInt(value);
          if(deathsMax < 0 || deathsMax > 300000){
            isValid = false;
          }
          break;
        case "damagemillioinsmin":
          Float damageMin = Float.parseFloat(value);
          if(damageMin < 0 || damageMin > 4500){
            isValid = false;
          }
          break;
        case "damagemillioinsmax":
          Float damageMax = Float.parseFloat(value);
          if(damageMax < 0 || damageMax > 4500){
            isValid = false;
          }
          break;
      }
      if(isValid == false){
        return isValid;
      }
    }

    return isValid;

  }
}

