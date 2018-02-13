package com.idb_backend.mvp;


import com.idb_backend.mvp.controller.TsunamiEventController;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TsunamiEventControllerTest {

    @InjectMocks
    private TsunamiEventController tsunamiEventController;

    @Mock
    private TsunamiEventRepository tsunamiEventRepository;

    @Test
    public void testList(){
        try{
            List<TsunamiEvent> list = tsunamiEventController.getAllEvents();
            assertTrue(list instanceof List);
        }catch(Exception e){
            fail("expected Object of type List");
        }


    }


}
