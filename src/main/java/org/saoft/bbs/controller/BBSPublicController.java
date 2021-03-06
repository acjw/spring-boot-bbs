package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.Topic;
import org.saoft.bbs.service.ReplyService;
import org.saoft.bbs.service.TopicService;
import org.saoft.bbs.service.UserService;
import org.saoft.support.GlobalController;
import org.saoft.support.SaoUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by saoft on 15/7/30.
 */
@Controller
@Api(value = "/bbs public controller")
public class BBSPublicController extends GlobalController {

    @Autowired
    TopicService topicService;
    @Autowired
    UserService userService;
    @Autowired
    ReplyService replyService;

    private Page<Topic> topicList(int number) {
        Pageable pageable = new PageRequest(0,number);
        Page<Topic> topics = topicService.findAll(pageable);
        return topics;
    }

    @ApiOperation(value = "indexPage")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    String index(Model model) {
        model.addAttribute("topicList", topicList(20).getContent());
        model.addAttribute("userPointTOp10", userService.list4points(10));
        //无人回复的话题
        List<Topic> zeroReply = topicService.findByReplyIsZero();
        model.addAttribute("zeroReply", zeroReply);
        return "index";
    }

    @ApiOperation(value = "aboutPage")
    @RequestMapping(value = "about", method = RequestMethod.GET)
    String about() {
        return "about";
    }

    @ApiOperation(value = "topic/create")
    @RequestMapping(value = "topic/create", method = RequestMethod.GET)
    String topicCreate() {
        return "talk";
    }

    @ApiOperation(value = "talkPage")
    @RequestMapping(value = "talk", method = RequestMethod.GET)
    String talk() {
        return "talk";
    }

    @ApiOperation(value = "users")
    @RequestMapping(value = "users", method = RequestMethod.GET)
    String users() {
        return "users";
    }

    @ApiOperation(value = "setting")
    @RequestMapping(value = "setting", method = RequestMethod.GET)
    String setting() {
        return "setting";
    }

    @ApiOperation(value = "signin")
    @RequestMapping(value = "signin", method = RequestMethod.GET)
    String signin() {
        return "signin";
    }

    @ApiOperation(value = "my messages")
    @RequestMapping(value = "my/messages", method = RequestMethod.GET)
    String messages(Model model) {
        SaoUserDetail detail = getUserDetail();
        detail.setUnReadMessageNumber(replyService.unReadMessageCount(detail.getId()));
        //未读消息
        Pageable pageable = new PageRequest(0, 20);
        Page<Reply> unKnownMessage = replyService.unKnownMessage(getUserDetailId(),pageable);
        //过往消息
        Page<Reply> knownMessage = replyService.knownMessage(getUserDetailId(), pageable);
        List<Reply> messageList = unKnownMessage.getContent();
        for (Reply reply : messageList) {
            reply.setStatus(true);
        }
        replyService.saveBatch(messageList);
        model.addAttribute("readMessage", knownMessage);
        model.addAttribute("unReadMessage", unKnownMessage);
        return "messages";
    }

    @ApiOperation(value = "signout")
    @RequestMapping(value = "signout", method = RequestMethod.POST)
    String signout() {
        return "signin";
    }

}
