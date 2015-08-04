<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<div class='panel'>
  <div class='header'>
    <span class='col_fade'>作者其它话题</span>
  </div>
  <div class='inner'>
    <c:if test="${empty topicList}">
      <p>无</p>
    </c:if>
    <ul class='unstyled'>
      <c:forEach var="topic2" items="${topicList}">
        <li>
          <div><a class='dark topic_title' href="/topic/${topic2.id}" title="${topic2.title}">${topic2.title}</a>
          </div>
        </li>
      </c:forEach>
    </ul>

  </div>
</div>
