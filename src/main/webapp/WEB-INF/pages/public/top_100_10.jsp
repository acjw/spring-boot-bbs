<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<div class='panel'>
  <div class='header'>
    <span class='col_fade'>积分榜</span>
    &nbsp;
    <a class='dark' href='/users/top100'>TOP 100 &gt;&gt;</a>
  </div>
  <div class='inner'>
    <ol>
      <c:forEach var="user" items="${userPointTOp10}">
        <li>
          <span class='top_score'>${user.points}</span>
          <span class="user_name top_user_${user.userLevel}"><a href="/user/${user.id}">${user.nickname}</a></span>
        </li>
      </c:forEach>
    </ol>
  </div>
</div>
