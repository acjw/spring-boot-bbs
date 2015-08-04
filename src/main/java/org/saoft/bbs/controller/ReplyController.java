package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.bbs.entities.*;
import org.saoft.bbs.service.PointsRecordService;
import org.saoft.bbs.service.ReplyService;
import org.saoft.bbs.service.TopicService;
import org.saoft.bbs.support.AjaxResultMap;
import org.saoft.support.GlobalController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by saoft on 15/8/3.
 */
@Api("reply controller")
@Controller
public class ReplyController extends GlobalController {

    @Autowired
    ReplyService replyService;
    @Autowired
    PointsRecordService pointsRecordService;
    @Autowired
    TopicService topicService;

    @ResponseBody
    @ApiOperation("reply")
    @RequestMapping(value = "{id}/reply", method = RequestMethod.POST)
    AjaxResultMap reply(@PathVariable Long id,
                 @RequestParam(value = "r_content") String r_content,
                 @RequestParam(value = "reply_id",required=false) Long reply_id) {
        if (id != null && r_content != null) {
            Topic topic = topicService.getOne(id);
            Reply reply = new Reply();
            reply.setContent(r_content);
            reply.setSponsor(new User(getUserDetailId()));
            reply.setTopic(new Topic(id));
            reply.setReplyDateTime(new Date());
            reply.setReceiver(topic.getAuthor());
            reply.setStatus(false);
            if (reply_id != null) {
                if (replyService.exists(reply_id)) {
                    reply.setReply(new Reply(reply_id));
                }
            }
            //创建回复
            replyService.create(reply);
            //生成消息
            pointsRecordService.create(getUserDetailId(), 5, "回复帖子得分");
        }
        AjaxResultMap resultMap = new AjaxResultMap();
        return resultMap;
    }
}
