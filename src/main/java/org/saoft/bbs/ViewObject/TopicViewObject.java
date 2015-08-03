package org.saoft.bbs.ViewObject;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.wordnik.swagger.annotations.ApiModel;
import com.wordnik.swagger.annotations.ApiModelProperty;
import com.wordnik.swagger.annotations.ApiParam;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.Serializable;

/**
 * Created by saoft on 15/7/31.
 */
@Getter
@Setter
@ApiModel(value = "A TopicViewObject is a representation of greeting")
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class TopicViewObject implements Serializable {

    private String tab;
    private String title;
    @ApiModelProperty(value = "greeting content", required = true)
    @ApiParam("content")
    private String t_content;
    private String topic_tags;
}
