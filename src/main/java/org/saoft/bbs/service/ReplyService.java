package org.saoft.bbs.service;

import org.saoft.bbs.entities.Reply;

/**
 * Created by saoft on 15/8/3.
 */
public interface ReplyService {

    Reply findOne(Long id);

    boolean exists(Long id);

    Reply create(Reply reply);
}
