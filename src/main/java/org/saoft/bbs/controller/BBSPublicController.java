package org.saoft.bbs.controller;

//import com.wordnik.swagger.annotations.Api;
//import com.wordnik.swagger.annotations.ApiOperation;
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
@Api(value = "/bbs public controller")
public class BBSPublicController extends GlobalController {

    @ApiOperation(value = "indexPage")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    String index() {

        return "index";
    }

    @ApiOperation(value = "aboutPage")
    @RequestMapping(value = "about",method = RequestMethod.GET)
    String about() {
        return "about";
    }

    @ApiOperation(value = "topic/create")
    @RequestMapping(value = "topic/create",method = RequestMethod.GET)
    String topicCreate() {
        return "talk";
    }

    @ApiOperation(value = "talkPage")
    @RequestMapping(value = "talk",method = RequestMethod.GET)
    String talk() {
        return "talk";
    }

    @ApiOperation(value = "users")
    @RequestMapping(value = "users",method = RequestMethod.GET)
    String users() {
        return "users";
    }

    @ApiOperation(value = "setting")
    @RequestMapping(value = "setting",method = RequestMethod.GET)
    String setting() {
        return "setting";
    }

    @ApiOperation(value = "signin")
    @RequestMapping(value = "signin",method = RequestMethod.GET)
    String signin() {
        return "signin";
    }

    @ApiOperation(value = "my messages")
    @RequestMapping(value = "my/messages",method = RequestMethod.GET)
    String messages() {
        return "messages";
    }

    @ApiOperation(value = "signout")
    @RequestMapping(value = "signout",method = RequestMethod.POST)
    String signout() {
        return "signin";
    }

}
