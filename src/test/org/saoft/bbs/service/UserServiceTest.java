package org.saoft.bbs.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.saoft.SaoftApplication;
import org.saoft.bbs.entities.User;
import org.saoft.bbs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

/**
 * Created by saoft on 15/7/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)   // 1
@SpringApplicationConfiguration(classes = SaoftApplication.class)   // 2
@WebAppConfiguration   // 3
public class UserServiceTest {

    @Autowired
    UserService userService;

    @Test
    public void save() {

        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.random();
            userService.save(user);
        }
    }

    @Test
    public void list() {
        List<User> users = userService.list4points(10);
        System.out.println("---------------"+users.size()+"---------------");
    }

    @Test
    public void findOneByUsername() {
        User user = userService.findOne("xm8hy5");
        System.out.println(user);
    }

    @Test
    public void findOne() {
        User user = userService.findOne(1l);
        user.setNickname("八戒");
        userService.update(user);
        System.out.println(user);
    }
}
