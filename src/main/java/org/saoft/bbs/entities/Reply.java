package org.saoft.bbs.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by saoft on 15/7/31.
 */
@Getter
@Setter
@Entity
@Table(name = "reply")
public class Reply extends GlobalEntity {

    private String content;/**内容*/
    private Date replyDateTime;/**回复时间*/
    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name="sponsorId")
    private User sponsor;/**回复的人*/
    private Boolean status;/**接收的状态*/
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="receiverId")
    private User receiver;/**接收的人*/
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="replyId")
    private Reply reply;/**回复的回复*/
    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name="topicId")
    private Topic topic;/**回复的文章*/
    public Reply() {
    }

    public Reply(Long id) {
        this.id = id;
    }
}
