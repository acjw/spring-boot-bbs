package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.support.GlobalController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by saoft on 15/7/30.
 */
@Controller
@Api("uploader controller")
public class UploaderController extends GlobalController{

    @ApiOperation("upload")
    @ResponseBody
    @RequestMapping(value = "upload",method = RequestMethod.POST)
    Map upload(MultipartFile file) {


        Map result = new HashMap();
        result.put("success", true);
        result.put("url", "12323.jpg");
        return result;
    }
}
