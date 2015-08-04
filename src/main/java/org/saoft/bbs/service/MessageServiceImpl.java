package org.saoft.bbs.service;

import org.saoft.bbs.dao.MessageRepository;
import org.saoft.bbs.entities.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Iterator;

/**
 * Created by saoft on 15/8/4.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository repository;

    @Override
    public Page<Message> unKnownMessage(Pageable pageable) {
        repository.findAll(pageable);
        return null;
    }

    @Override
    public Page<Message> knownMessage(Pageable pageable) {
        return null;
    }

    @Override
    public Iterator<Message> saveBatch(Iterator<Message> iterator) {
        return null;
    }

    @Override
    public Message create() {
        return null;
    }
}
