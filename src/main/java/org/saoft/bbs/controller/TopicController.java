package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.markdown4j.Markdown4jProcessor;
import org.saoft.bbs.ViewObject.TopicViewObject;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.Topic;
import org.saoft.bbs.service.ReplyService;
import org.saoft.bbs.service.TopicService;
import org.saoft.bbs.support.AjaxResultMap;
import org.saoft.support.GlobalController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

/**
 * Created by saoft on 15/7/31.
 */
@Controller
@Api(value = "/topic controller", description = "主题控制器")
@RequestMapping("topic")
public class TopicController extends GlobalController {

    @Autowired
    private TopicService topicService;
    @Autowired
    private ReplyService replyService;

    @ResponseBody
    @RequestMapping(value = "save", method = RequestMethod.POST)
    @ApiOperation(value = "新增一个主题",response = TopicViewObject.class)
    AjaxResultMap save(TopicViewObject topicViewObject) {
        AjaxResultMap resultMap = new AjaxResultMap();

        Topic topic = new Topic();
        topic.build(topicViewObject, getUserDetailId());
        topicService.save(topic);

        return resultMap;
    }

    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    @ApiOperation(value = "查看一个主题",response = TopicViewObject.class)
    String topicDetail(@PathVariable Long id,Model model) {
        Topic topic = topicService.findOne(id);
        List<Reply> replyList = replyService.findByTopicId(id);

        Integer visits = topic.getVisits();
        visits = visits == null?1:visits+1;
        topic.setVisits(visits);
        topicService.update(topic);

        model.addAttribute("topic", topic);
        //回复列表
        model.addAttribute("replyList", replyList);
        //作者的其他话题
        List<Topic> topicList = topicService.findByAuthorIdIsAndIdNot(topic.getAuthor().getId(), id,5);
        model.addAttribute("topicList", topicList);
        //无人回复的话题
        List<Topic> zeroReply = topicService.findByReplyIsZero();
        model.addAttribute("zeroReply", zeroReply);
        return "topic";
    }
}
