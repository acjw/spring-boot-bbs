package org.saoft.bbs.entities;

import lombok.Getter;
import lombok.Setter;
import org.saoft.bbs.ViewObject.TopicViewObject;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by saoft on 15/7/31.
 */
@Getter
@Setter
@Entity
@Table(name = "message")
public class Message extends GlobalEntity {

    private Boolean status;/**接收的状态*/

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="userId")
    private User receiver;/**接收的人*/

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="replyId")
    private Reply reply;/** 回复的id*/

    private Date birth;

}
