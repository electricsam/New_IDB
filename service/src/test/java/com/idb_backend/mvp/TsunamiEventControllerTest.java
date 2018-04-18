package com.idb_backend.mvp;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.idb_backend.mvp.controller.TsunamiEventController;
import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TsunamiEventController.class)
public class TsunamiEventControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private TsunamiEventRepository tsunamiEventRepository;

  @MockBean
  private TsunamiEventService tsunamiEventService;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void getAllEvents() throws Exception{

    List<TsunamiEventView> allEvents = new ArrayList<>();

    TsunamiEventView tsunamiEvent = new TsunamiEventView();
    tsunamiEvent.setId(1);
    tsunamiEvent.setCountry("PERU");
    tsunamiEvent.setRegionCode(78);

    allEvents.add(tsunamiEvent);

    given(tsunamiEventRepository.getAllTsunamiEvents()).willReturn(allEvents);

    mockMvc.perform(get("/tsunamievents")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].country", is("PERU")));
  }

  @Test
  public void getAllEventsFail() throws Exception{

    mockMvc.perform(get("/tsunamievents")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(0)));
  }

  @Test
  public void getEventById() throws Exception{

    List<TsunamiEvent> list = new ArrayList<>();

    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setId(100);
    tsunamiEvent.setRegionCode(78);

    list.add(tsunamiEvent);



    given(tsunamiEventRepository.getEventById(tsunamiEvent.getId())).willReturn(list);

    mockMvc.perform(get("/tsunamievents/100")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].regionCode", is(78)));
  }

  @Test
  public void getEventsByQuery() throws Exception{

    List<TsunamiEventViewNonPersist> list = new ArrayList<>();
    TsunamiEventViewNonPersist tsunamiEventView = new TsunamiEventViewNonPersist(
        20, 2017, 7, 10, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null);
    list.add(tsunamiEventView);

    Map<String, String> paramMap = new HashMap<>();
    paramMap.put("minyear", "2017");
    paramMap.put("maxyear", "2018");

//    TODO: add additional query params in as well as a fully kitted out eventview

    given(tsunamiEventService.validateParams(paramMap)).willReturn(true);
    given(tsunamiEventService.generateCriteria(paramMap)).willReturn(list);

    mockMvc.perform(get("/tsunamievents/select?minyear=2017&maxyear=2018").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)));
  }

  @Test
  public void getEventsByQueryFail() throws Exception{
    List<TsunamiEventViewNonPersist> list = new ArrayList<>();
    TsunamiEventViewNonPersist tsunamiEventView = new TsunamiEventViewNonPersist(
        20, 2017, 7, 10, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null);
    list.add(tsunamiEventView);

    Map<String, String> paramMap = new HashMap<>();
    paramMap.put("minyear", "-3000");

    given(tsunamiEventService.validateParams(paramMap)).willReturn(false);

    mockMvc.perform(get("/tsunamievents/select").param("minyear", paramMap.get("minyear")))
        .andExpect(status().isBadRequest());
  }

  @Test
  public void patchEvent() throws Exception{

    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setCountry("PERU");
    tsunamiEvent.setArea("AK");
    tsunamiEvent.setYear(2017);

    mockMvc.perform(patch("/tsunamievents/5673").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(tsunamiEvent))).andExpect(status().isOk());

  }

  @Test
  public void patchEventFail() throws  Exception{
    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setCountry("Per");

    mockMvc.perform(patch("/tsunamievents/5673").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(tsunamiEvent))).andExpect(status().isBadRequest());
  }

  @Test
  public void postEvent() throws Exception{
    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setCountry("PERU");
    tsunamiEvent.setRegionCode(78);
    tsunamiEvent.setEventValidity(2);
    tsunamiEvent.setYear(2017);

    List<TsunamiEvent> list = new ArrayList<>();
    TsunamiEvent max = new TsunamiEvent();
    max.setId(5673);
    list.add(max);

    given(tsunamiEventService.checkMaxTsEventId()).willReturn(list);

    mockMvc.perform(post("/tsunamievents").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(tsunamiEvent))).andExpect(status().isOk());
  }

  @Test
  public void postEventFail() throws Exception{
    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setRegionCode(0);

    List<TsunamiEvent> list = new ArrayList<>();
    TsunamiEvent max = new TsunamiEvent();
    max.setId(5673);
    list.add(max);

    given(tsunamiEventService.checkMaxTsEventId()).willReturn(list);

    mockMvc.perform(post("/tsunamievents").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(tsunamiEvent))).andExpect(status().isBadRequest());
  }

  @Test
  public void deleteEvent() throws  Exception{

    mockMvc.perform(delete("/tsunamievents/5673")).andExpect(status().isOk());

  }

  @Test
  public void getRunupsByQuery() throws Exception{
    TsunamiRunupViewNonPersist runup = new TsunamiRunupViewNonPersist(2000, 2017, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null);
    List<TsunamiRunupViewNonPersist> list = new ArrayList<>();
    list.add(runup);

    Map<String, String> paramMap = new HashMap<>();
    paramMap.put("tsminyear", "2017");

    given(tsunamiEventService.validateParams(paramMap)).willReturn(true);
    given(tsunamiEventService.generateRunupCriteria(paramMap)).willReturn(list);

    mockMvc.perform(get("/tsunamirunups/select").param("tsminyear", paramMap.get("tsminyear")))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].id", is(2000)));
  }

  @Test
  public void getRunupsByQueryFailValidation() throws Exception{
    TsunamiRunupViewNonPersist runup = new TsunamiRunupViewNonPersist(2000, 2017, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null);

    Map<String, String> paramMap = new HashMap<>();
    paramMap.put("tsminyear", "-3000");

    given(tsunamiEventService.validateParams(paramMap)).willReturn(false);

    mockMvc.perform(get("/tsunamirunups/select").param("tsminyear", paramMap.get("tsminyear")))
        .andExpect(status().isBadRequest());
  }

  @Test
  public void getRunupsById() throws Exception{
    List<TsunamiRunup> list = new ArrayList<>();
    TsunamiRunup tsunamiRunup = new TsunamiRunup();
    tsunamiRunup.setId(10);
    list.add(tsunamiRunup);

    given(tsunamiEventService.getRunupById(10)).willReturn(list);

    mockMvc.perform(get("/tsunamirunups/10").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].id", is(10)));

  }

  @Test
  public void getRunupsByIdNonExist() throws Exception{
    List<TsunamiRunup> list = new ArrayList<>();
    list.add(null);

    given(tsunamiEventService.getRunupById(90000)).willReturn(list);


    mockMvc.perform(get("/tsunamirunups/10").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(0)));
  }


  @Test
  public void postRunup() throws Exception{
    List<TsunamiRunup> maxList = new ArrayList<>();
    TsunamiRunup max = new TsunamiRunup();
    max.setId(1);
    maxList.add(max);

    TsunamiRunup postObject = new TsunamiRunup();
    postObject.setId(2);
    postObject.setCountry("PERU");

    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setId(10);

    given(tsunamiEventService.checkMaxRunupId()).willReturn(maxList);
    given(tsunamiEventService.getEventProxy(10)).willReturn(tsunamiEvent);

    mockMvc.perform(post("/tsunamirunups/10").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(postObject)))
        .andExpect(status().isOk());
  }

  @Test
  public void postRunupFail() throws Exception{
    TsunamiRunup postObject = new TsunamiRunup();
    postObject.setId(2);
    postObject.setCountry("PER");

    mockMvc.perform(post("/tsunamirunups/10").contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(postObject)))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].field", is("country")));
  }

  @Test
  public void patchRunup() throws Exception{
    TsunamiRunup patch = new TsunamiRunup();
    patch.setId(2);
    patch.setArea("AK");

    TsunamiEvent tsunamiEvent = new TsunamiEvent();
    tsunamiEvent.setId(10);

    given(tsunamiEventService.getEventProxy(10)).willReturn(tsunamiEvent);

    mockMvc.perform(patch("/tsunamirunups/2/10")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(patch)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.area", is("AK")));
  }

  @Test
  public void patchRunupFail() throws Exception{
    TsunamiRunup patch = new TsunamiRunup();
    patch.setId(2);
    patch.setArea("AW");

    mockMvc.perform(patch("/tsunamirunups/2/10")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(patch)))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$[0].field", is("area")));
  }

  @Test
  public void deleteRunup() throws Exception{
    mockMvc.perform(delete("/tsunamirunups/10").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

  }
}
