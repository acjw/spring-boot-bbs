package org.saoft.bbs.service;

import org.saoft.bbs.entities.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
/**
 * Created by saoft on 15/7/31.
 */
public interface TopicService {

    Topic findOne(Long id);

    Topic save(Topic topic);
    Topic update(Topic topic);

    /**通过积分排序取得用户列表*/
    Page<Topic> findAll(Pageable pageable);
}
