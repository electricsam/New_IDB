package com.idb_backend.mvp;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
@AutoConfigureWebTestClient
public class EarthquakeIntegrationTest {

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  ObjectMapper objectMapper;

  @Autowired
  TestRestTemplate testRestTemplate;

  public SignifTsqp signifTsqp;

  @Before
  public void addSignifTsqp(){
    this.signifTsqp = new SignifTsqp();
    this.signifTsqp.setId(15000);
    this.signifTsqp.setYear(2018);
    this.signifTsqp.setMonth(1);
    this.signifTsqp.setDay(1);
    this.signifTsqp.setHour(10);
    this.signifTsqp.setMinute(10);
    this.signifTsqp.setSecond(13.0);
    this.signifTsqp.setLatitude(89.0);
    this.signifTsqp.setLongitude(20.0);
    this.signifTsqp.setLocationName("Test Location Name");
    this.signifTsqp.setCountry("ALBANIA");

    earthquakeRepository.save(signifTsqp);
  }



  @Test
  public void getEarthquakeByIdTest() throws Exception{
    String body = this.testRestTemplate.getForObject("/earthquakes/15000", String.class);
    String json = objectMapper.writeValueAsString(signifTsqp);
    assertThat(body).isEqualTo(json);
  }

  @Test
  public void getEarthquakeByQuery() throws Exception{

  }



}
