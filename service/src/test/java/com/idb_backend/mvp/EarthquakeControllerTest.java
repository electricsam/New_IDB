package com.idb_backend.mvp;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.idb_backend.mvp.controller.EarthquakeController;
import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(value = EarthquakeController.class)
@EnableSpringDataWebSupport
public class EarthquakeControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private EarthquakeRepository earthquakeRepository;

  @MockBean
  private EarthquakeViewRepository earthquakeViewRepository;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void getAllEarthquakesTest() throws Exception {

    SignifVsqp signifVsqp = new SignifVsqp();
    signifVsqp.setId(1);
    signifVsqp.setCountry("RUSSIA");
    signifVsqp.setYear(2016);
    signifVsqp.setMonth(12);

    BooleanExpression expression = QSignifVsqp.signifVsqp.year.eq(2016);

    List<SignifVsqp> list = new ArrayList<>();
    list.add(signifVsqp);
    Iterable<SignifVsqp> allEq = list;

    given(earthquakeViewRepository.findAll(QSignifVsqp.signifVsqp.year.eq(2016))).willReturn(allEq);

    mockMvc.perform(get("/earthquakes?year=2016")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].year", is(2016)));
  }

  @Test
  public void getAlEarthqukesByIdTest() throws Exception{

    Integer id = 2;

    SignifVsqp signifVsqp = new SignifVsqp();
    signifVsqp.setId(id);
    signifVsqp.setYear(2017);

    Optional<SignifVsqp> result = Optional.ofNullable(signifVsqp);

    given(earthquakeViewRepository.findById(id)).willReturn(result);

    mockMvc.perform(get("/earthquakes/2")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("id", is(signifVsqp.getId())))
        .andExpect(jsonPath("year", is(signifVsqp.getYear())));
  }

  @Test
  public void patchEarthquakeTest() throws Exception {
    Integer id = 2;

    SignifTsqp signifTsqp = new SignifTsqp();
    signifTsqp.setCountry("USA");
    signifTsqp.setYear(2016);
    signifTsqp.setMonth(10);

    Optional<SignifTsqp> optional = Optional.ofNullable(signifTsqp);

    given(earthquakeRepository.findById(id)).willReturn(optional);

    mockMvc.perform(patch("/earthquakes/" + id)
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(signifTsqp)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("id", is(signifTsqp.getId())));
  }

  @Test
  public void postEarthquakeTest() throws Exception {
    Predicate predicate = QSignifTsqp.signifTsqp.id.gt(10000);
    OrderSpecifier orderSpecifier = QSignifTsqp.signifTsqp.id.desc();

    SignifTsqp eqOne = new SignifTsqp();
    eqOne.setId(1);
    eqOne.setCountry("USA");

    Integer id = 2;

    SignifTsqp toPost = new SignifTsqp();
    toPost.setId(id);
    toPost.setCountry("RUSSIA");

    List<SignifTsqp> list = new ArrayList<>();
    list.add(eqOne);
    Iterable<SignifTsqp> eqList = list;

    given(earthquakeRepository.findAll(predicate, orderSpecifier)).willReturn(eqList);

    Optional<SignifTsqp> result = Optional.ofNullable(toPost);
    given(earthquakeRepository.findById(id)).willReturn(result);

    mockMvc.perform(post("/earthquakes")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(toPost)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("id", is(toPost.getId())));
  }

  @Test
  public void deleteEarthquakeTest() throws Exception {
    Integer id = 1;
    mockMvc.perform(delete("/earthquakes/" + id)).andExpect(status().isOk());
  }

}
