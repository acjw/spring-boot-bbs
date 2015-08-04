package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Topic;
import org.saoft.bbs.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by saoft on 15/7/31.
 */
interface TopicRepositoryCustom {
    //作者的其他话题
    List<Topic> findByAuthorIdIsAndIdNotOrderByModifyDateTimeDesc(Long authorId,Long id,int limit);
}
@Repository
public interface TopicRepository extends JpaRepository<Topic, Long>, TopicRepositoryCustom {

    //无人回复的话题
    List<Topic> findByReplyIs(Integer zero);
}
