package org.saoft.bbs.service;

import org.saoft.bbs.entities.Reply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Iterator;
import java.util.List;

/**
 * Created by saoft on 15/8/3.
 */
public interface ReplyService {

    Reply findOne(Long id);

    boolean exists(Long id);
    //未读消息数量
    Long unReadMessageCount(Long userId);

    //未读消息
    Page<Reply> unKnownMessage(Long userId,Pageable pageable);
    //过往消息
    Page<Reply> knownMessage(Long userId,Pageable pageable);

    //批量修改
    Iterable<Reply> saveBatch(Iterable<Reply> iterator);

    Reply create(Reply reply);

    List<Reply> findByTopicId(Long topicId);


}
