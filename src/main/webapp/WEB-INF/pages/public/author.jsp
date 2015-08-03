<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<div class='panel'>
  <div class='header'>
    <span class='col_fade'>作者</span>
  </div>
  <div class='inner'>
    <div class='user_card'>
      <div>
        <a class='user_avatar' href="/user/${topic.author.id}">
          <div class="avatar">${topic.author.email}</div>
        </a>
        <span class='user_name'><a class='dark' href="/user/${topic.author.id}">${topic.author.nickname}</a></span>
        <div class='board clearfix'>
          <div class='floor'>
            <span class='big'>${topic.author.points}</span> 积分
          </div>
        </div>
        <div class="space clearfix"></div>
    <span class="signature">
      ${topic.author.signature}
    </span>
      </div>
    </div>
    <script>
      $(document).ready(function () {
        $('.follow_btn').click(function () {
          var $me = $(this);
          var action = $me.attr('action');
          var params = {
            follow_id: '5555a6715b6959756e0f5698',
            _csrf: 'K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'
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
