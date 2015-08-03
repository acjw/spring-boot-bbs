package org.saoft.bbs.service;

import org.saoft.bbs.dao.UserRepository;
import org.saoft.bbs.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

/**
 * Created by saoft on 15/7/31.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repository;

    @Override
    public User findOne(Long id) {
        Assert.notNull(id);
        return repository.findOne(id);
    }

    @Override
    public User findOne(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return repository.saveAndFlush(user);
    }

    @Override
    public User update(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> list4points(int number) {
        Sort s=new Sort(Sort.Direction.DESC, "points");
        Pageable pageable = new PageRequest(0,number,s);
        Page page = repository.findAll(pageable);
        return page.getContent();
    }
}
