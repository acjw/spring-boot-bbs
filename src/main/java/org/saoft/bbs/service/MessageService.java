package org.saoft.bbs.service;

import org.saoft.bbs.entities.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Iterator;


/**
 * Created by saoft on 15/8/4.
 */
public interface MessageService {

    //未读消息
    Page<Message> unKnownMessage(Pageable pageable);
    //过往消息
    Page<Message> knownMessage(Pageable pageable);

    //批量修改
    Iterator<Message> saveBatch(Iterator<Message> iterator);

    Message create();
}
