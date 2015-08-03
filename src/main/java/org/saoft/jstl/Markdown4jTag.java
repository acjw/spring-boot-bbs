package org.saoft.jstl;

import org.markdown4j.Markdown4jProcessor;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

/**
 * Created by saoft on 15/8/3.
 */
public class Markdown4jTag extends SimpleTagSupport {

    private String input;

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out1 = this.getJspContext().getOut();
        out1.print(new Markdown4jProcessor().process(this.input));
    }

    public void setInput(String input) {
        this.input = input;
    }
}
