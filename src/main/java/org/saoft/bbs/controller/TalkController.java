package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.support.GlobalController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by saoft on 15/7/30.
 */
@Controller
@Api("talk controller")
@RequestMapping("talk")
public class TalkController extends GlobalController {

    @RequestMapping(value = "create", method = RequestMethod.POST)
    @ApiOperation(value = "发布话题")
    String create() {
        return "返回页面";
    }
}
