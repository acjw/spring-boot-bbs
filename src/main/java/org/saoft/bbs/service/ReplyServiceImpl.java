package org.saoft.bbs.service;

import org.saoft.bbs.dao.ReplyRepository;
import org.saoft.bbs.entities.Reply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by saoft on 15/8/3.
 */
@Service
public class ReplyServiceImpl implements ReplyService {

    @Autowired
    private ReplyRepository repository;


    @Override
    public Reply findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public boolean exists(Long id) {
        return repository.exists(id);
    }

    @Override
    public Reply create(Reply reply) {
        return repository.save(reply);
    }
}
