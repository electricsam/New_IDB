package com.idb_backend.mvp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static junit.framework.TestCase.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest {
    @InjectMocks
    private UserController uc;

    @Mock
    private UserRepository ur;



    @Test
    public void testUserGet(){
        List<User> list = uc.list();
        assertTrue(false == true);
    }
}
