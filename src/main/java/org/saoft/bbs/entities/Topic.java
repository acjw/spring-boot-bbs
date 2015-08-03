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
@Table(name = "topic")
public class Topic extends GlobalEntity {

    public enum Tab{
        argue(1),ask(2);
        private int value;
        private Tab(){}
        private Tab(int value) {
            this.value = value;
        }
        public int getValue(){return this.value;};
    }

    private boolean top;
    private boolean essence;
    private Integer type;
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="userId")
    private User author;
    private Integer visits;

    private String title;
    private String content;
    private Date publishDateTime;
    private Date modifyDateTime;

    public void build(TopicViewObject object,long authorId){
        this.top = false;
        this.essence = false;
        this.type = "argue".equals(object.getTab()) ? Tab.argue.getValue() : Tab.ask.getValue();
        this.author = new User(authorId);
        this.visits = 0;
        this.title = object.getTitle();
        this.content = object.getT_content();
        this.publishDateTime = new Date();
        this.modifyDateTime = new Date();
    }

}
