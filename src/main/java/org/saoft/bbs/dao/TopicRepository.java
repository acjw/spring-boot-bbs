package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Topic;
import org.saoft.bbs.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoft on 15/7/31.
 */
@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {

}
