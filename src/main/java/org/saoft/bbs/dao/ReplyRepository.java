package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoft on 15/8/3.
 */
@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {


}
