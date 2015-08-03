package org.saoft.bbs.service;

import org.saoft.bbs.entities.User;

import java.util.List;

/**
 * Created by saoft on 15/7/31.
 */
public interface UserService {

    User findOne(Long id);

    User findOne(String username);
    /**新增用户*/
    User save(User user);

    /**
     * 修改用户
     */
    User update(User user);


    /**通过积分排序取得用户列表*/
    List<User> list4points(int number);
}
