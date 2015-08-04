package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by saoft on 15/8/3.
 */
interface ReplyRepositoryCustom {

}
@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long>,JpaSpecificationExecutor<Reply>,ReplyRepositoryCustom {

    List<Reply> findByTopicId(Long topicId);

    Long countByTopicIdIs(Long topicId);

}
