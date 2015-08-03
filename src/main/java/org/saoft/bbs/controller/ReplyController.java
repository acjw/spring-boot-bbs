package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.User;
import org.saoft.bbs.service.ReplyService;
import org.saoft.support.GlobalController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by saoft on 15/8/3.
 */
@Api("reply controller")
@Controller
public class ReplyController extends GlobalController {

    @Autowired
    ReplyService replyService;

    @ResponseBody
    @ApiOperation("reply")
    @RequestMapping(value = "{id}/reply", method = RequestMethod.POST)
    String reply(@PathVariable Long id,
                 @RequestParam(value = "r_content") String r_content,
                 @RequestParam(value = "reply_id") Long reply_id) {
        if (id != null && r_content != null) {
            Reply reply = new Reply();
            reply.setContent(r_content);
            reply.setSponsor(new User(getUserDetailId()));
            if (reply_id != null) {
                if (replyService.exists(reply_id)) {
                    reply.setReply(new Reply(reply_id));
                }
            }
            replyService.create(reply);
        }
        return "forward:topic/";
    }
}
