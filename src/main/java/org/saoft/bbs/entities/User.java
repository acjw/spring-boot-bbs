package org.saoft.bbs.entities;

import lombok.Getter;
import lombok.Setter;
import org.saoft.support.RandomUtil;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by saoft on 15/7/31.
 */
@Getter
@Setter
@Entity
@Table(name="user")
public class User extends GlobalEntity {

    public enum Level{
        start,profile
    }

    private String userLevel;/**官方用户 vip 普通*/
    private String username;/**用户名*/
    private String password;/**密码*/
    private String nickname;/**昵称*/
    private String email;/**电子邮件*/
    private String domain;/**个人网站*/
    private String location;/**所在地点*/
    private String weibo;/**微博*/
    private String signature;/**个性签名*/
    private Integer points;/**积分*/
    private Date registerDateTime;/**积分*/
    private Date lastLoginDateTime;/**积分*/

    public User(){}
    public User(Long id){this.id=id;}

    public void random() {
        this.username = RandomUtil.getRandomString(6);
        this.password = RandomUtil.getRandomString(32);
        this.nickname = this.username;
        this.email = RandomUtil.getRandomString(3) + "@foxmial.com";
        this.domain = "www.saoft.com";
        this.location = "";
        this.weibo = "123@webbo.com";
        this.signature = "这个家伙很懒";
        this.points = 0;
        this.registerDateTime = new Date();
        this.lastLoginDateTime = null;
        int seed = ((int)(Math.random()*10))/3;
        if (seed == 1) {
            this.userLevel = Level.profile.toString();
        }else if (seed == 2) {
            this.userLevel = Level.start.toString();
        }else{
            this.userLevel = "";
        }

    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", nickname='" + nickname + '\'' +
                ", email='" + email + '\'' +
                ", domain='" + domain + '\'' +
                ", location='" + location + '\'' +
                ", weibo='" + weibo + '\'' +
                ", signature='" + signature + '\'' +
                ", points=" + points +
                ", registerDateTime=" + registerDateTime +
                ", lastLoginDateTime=" + lastLoginDateTime +
                '}';
    }
}
