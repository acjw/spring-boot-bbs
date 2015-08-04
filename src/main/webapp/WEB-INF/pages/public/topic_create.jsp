<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<c:if test="${not empty session_user}">
<div class="panel">
  <div class='inner'>
    <a href='/topic/create' id='create_topic_btn'>
      <span class='span-success'>发布话题</span>
    </a>
  </div>
</div>
</c:if>
