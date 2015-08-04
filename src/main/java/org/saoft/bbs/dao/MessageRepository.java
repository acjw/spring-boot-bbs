package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;


/**
 * Created by saoft on 15/8/4.
 */
interface MessageRepositoryCustom{
}
@Repository
public interface MessageRepository extends JpaRepository<Message, Long>,JpaSpecificationExecutor<Message>,MessageRepositoryCustom {

}
