<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<c:if test="${not empty session_user}">
<div class='panel'>

  <div class='header'>
    <span class='col_fade'>个人信息</span>
  </div>
  <div class='inner'>
    <div class='user_card'>
      <div>

        <a class='user_avatar' href="/user/${session_user.id}">
          <div class="avatar">${session_user.email}</div>
        </a>
        <span class='user_name'><a class='dark' href="/user/${session_user.id}">${session_user.nickname}</a></span>

        <div class='board clearfix'>
          <div class='floor'>
            <span class='big'>${session_user.points}</span> 积分
          </div>
        </div>
        <div class="space clearfix"></div>
    <span class="signature">${session_user.signature}</span>
      </div>
    </div>
    <script>
      $(document).ready(function () {
        $('.follow_btn').click(function () {
          var $me = $(this);
          var action = $me.attr('action');
          var params = {
            follow_id: '55b869dcb992cd08785584f6',
            _csrf: 'QaG0ibLE-ruyKnHmp751QRHLK7q3Ffw99RWI'
          };
          $.post('/user/' + action, params, function (data) {
            if (data.status === 'success') {
              var $btns = $('.follow_btn');
              if (action === 'follow') {
                $btns.html('取消关注');
                $btns.attr('action', 'un_follow');
              } else {
                $btns.html('加入关注');
                $btns.attr('action', 'follow');
              }
              $btns.toggleClass('btn-success');
            }
          }, 'json');
        });
      });
    </script>
  </div>

</div>
</c:if>