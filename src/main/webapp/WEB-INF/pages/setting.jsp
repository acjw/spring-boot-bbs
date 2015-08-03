<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='英雄计划社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="英雄计划，理财，P2P，互联网金融"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>英雄计划社区－真诚透明的理财交流社区</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="hJqHp3Xt-lk8_GxD03rBJq02SQXbR5CXCrA4" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<jsp:include page="public/navbar.jsp"></jsp:include>
<div id='main'>
  <div id='sidebar'>

    <div class='panel'>

      <div class='header'>
        <span class='col_fade'>个人信息</span>
      </div>
      <div class='inner'>
        <div class='user_card'>
          <div>

            <a class='user_avatar' href="/user/373049">
              <img src="/public/avatar/b7a4f57af0198a33256c43ae67186ef7" title="182******89"/>
            </a>
            <span class='user_name'><a class='dark' href="/user/373049">182******89</a></span>

            <div class='board clearfix'>
              <div class='floor'>
                <span class='big'>0</span> 积分
              </div>
            </div>

            <div class="space clearfix"></div>
    <span class="signature">
        “

            这家伙很懒，什么个性签名都没有留下。

        ”
    </span>
          </div>
        </div>


        <script>
          $(document).ready(function () {
            $('.follow_btn').click(function () {
              var $me = $(this);
              var action = $me.attr('action');
              var params = {
                follow_id: '55b869dcb992cd08785584f6',
                _csrf: 'hJqHp3Xt-lk8_GxD03rBJq02SQXbR5CXCrA4'
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


    <div class="panel">
      <div class='inner'>
        <a href='/topic/create' id='create_topic_btn'>
          <span class='span-success'>发布话题</span>
        </a>
      </div>
    </div>




    <!--
    <div class='panel'>
      <div class='inner ads'>



          <a href="http://www.licaifan.com/activity/page?view=fanlive_entrance" target="_blank" class="banner sponsor_outlink"
        data-label="Fan Live">
            <img src="/public/images/fanlive.jpg">
          </a>

      </div>
    </div>
    -->







    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>友情社区</span>
      </div>
      <div class='inner'>
        <ol class="friendship-community">
          <li>
            <a href="https://www.licaifan.com/" target="_blank">
              英雄计划 - 真诚透明的互联网理财平台
            </a>
          </li>
          <div class="sep10"></div>
          <!--<li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="/public/images/golangtc-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="/public/images/phphub-logo.png">
            </a>
          </li>-->
        </ol>
      </div>
    </div>

  </div>


  <div id='content'>
    <div class='panel'>
      <div class='header'>
        <ul class='breadcrumb'>
          <li><a href='/'>主页</a><span class='divider'>/</span></li>
          <li class='active'>设置</li>
        </ul>
      </div>
      <div class='inner'>


        <form id='setting_form' class='form-horizontal' action='/setting' method='post'>
          <div class='control-group'>
            <label class='control-label' for='name'>昵称</label>
            <div class='controls'>
              <input class='input-xlarge' id='name' name='name' size='30' type='text'
                     value="182******89"/>
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='email'>电子邮件</label>
            <div class='controls'>
              <input class='input-xlarge' id='email' name='email' size='30' type='text' value=""/>
              <p>同时决定了 Gravatar 头像</p>
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='url'>个人网站</label>

            <div class='controls'>
              <input class='input-xlarge' id='url' name='url' size='30' type='text' value=""/>
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='location'>所在地点</label>

            <div class='controls'>
              <input class='input-xlarge' id='location' name='location' size='30' type='text'
                     value=""/>
            </div>
          </div>

          <div class='control-group'>
            <label class='control-label' for='weibo'>微博</label>

            <div class='controls'>
              <input class='input-xlarge' id='weibo' name='weibo' size='30' type='text' value=""
                     placeholder="例如 http://weibo.com/licaifan"/>
            </div>
          </div>
          <!--<div class='control-group'>
            <label class='control-label' for='github'>GitHub</label>

            <div class='controls'>
              <input class='input-xlarge' id='github' name='github' size='30' type='text'
                     value="" placeholder="@username" readonly="readonly" />
              <p>请通过 GitHub 登陆 CNode 来修改此处</p>
            </div>
          </div>-->
          <div class='control-group'>
            <label class='control-label' for='signature'>个性签名</label>

            <div class='controls'>
              <textarea class='input-xlarge' id='signature' name='signature' size='30'></textarea>
            </div>
          </div>
          <input type='hidden' id='action' name='action' value='change_setting'/>
          <input type='hidden' name='_csrf' value='hJqHp3Xt-lk8_GxD03rBJq02SQXbR5CXCrA4'/>

          <div class='form-actions'>
            <input type='submit' class='span-primary submit_btn' data-loading-text="保存中.." value='保存设置'/>
          </div>
        </form>
      </div>
    </div>
    <!--
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>更改密码</span>
      </div>
      <div class='inner'>
        <form id='change_pass_form' class='form-horizontal' action='/setting' method='post'>
          <div class='control-group'>
            <label class='control-label' for='old_pass'>当前密码</label>

            <div class='controls'>
              <input class='input-xlarge' type='password' id='old_pass' name='old_pass' size='30'/>
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='new_pass'>新密码</label>

            <div class='controls'>
              <input class='input-xlarge' type='password' id='new_pass' name='new_pass' size='30'/>
            </div>
          </div>
          <input type='hidden' id='action' name='action' value='change_password'/>
          <input type='hidden' name='_csrf' value='hJqHp3Xt-lk8_GxD03rBJq02SQXbR5CXCrA4'/>

          <div class='form-actions'>
            <input type='submit' class='span-primary submit_btn' data-loading-text="更改中.." value='更改密码'/>
          </div>
        </form>
      </div>
    </div>

    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>Access Token</span>
      </div>
      <div class='inner'>
        <div>
          <span>字符串：</span>
          4cb85cb2-4060-4e9c-b662-46a3a6a675cf
        </div>
        <div>
          <span>二维码：</span>
          <img class="access_token" src="data:image/gif;base64,R0lGODdhUgBSAIAAAAAAAP///ywAAAAAUgBSAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5mkC6sqyiGq06wvEdeIG8n5LvEyzAQ8wXY84M/6SvqOiaIsqd4yi1YnDOqAL7lVI7d6+DS7kmiPzpOssuyVtgtXjMBruNs7rlDu9PUSTEzRFJlfIh5iGJ8iEtBcX4Ze4+HRkljcZeVZXObWp91hGiYe5pSU6iNQGmVeF+noKZsmKaCk7seRJ99YbquvICezL+0u6VwuiKRrpiYIbGNqcZNoxqYpdSg2rGJzbGTa7um0olvxN2OjMbDw8Xh3LjpyY3q6rzn3Lvli+7nWf4V8jcf/6XQKoIRonUG+yXctnzhs0VMsIhkMn7ZOkg//1FMrDWBDitI6MXIGUaG8JLZR3GI4Spw8YJo8N6X1btgvLkHOtLPAjdyzLT1X4ONA0WdMfUA9H6yXdNlAjBkAHy82LijVjHztVbV4dt9Lpxp3gHuILCappxJxDHdVa1zPgj7MXi4llOvddXmI6RT6IBk9vS60aBRI+lU2YNquFOR5+CbZxNYclCTFeGPnnq5BEU3ndWBOz5n1uy/rlGzi01IyJbZ1EC7kz4L0XBsMUczuuSrkj7fXeDK5obZt/iHMbHXdrK8psj9NOjds1c6irV85OEdTgV5LQp2Y3vp10d8F1nVteasyl4t3qWQdv7Mun+fSEDcP1XSFwsZmO79tmfk1dca1Nw95wy313nXi0yXdgbt3EZBxZykn3Hl0QEqjNhBJKBpGAKHnXIIeimTbeIfGQdB5Vsp2GVIuGPdWWPvK5s5tZkaX14Sg05mXjbfyV+EyQQg5JZJFGHolkkkouyWSTRRYAADs=">
        </div>
      </div>
    </div>
    -->
  </div>

</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-sdf-x', 'auto');
  ga('send', 'pageview');
</script>
<script>
  (function(){
    if (!window.addEventListener) return;
    window.addEventListener('load', function(){
      var performance = window.performance;
      if (performance === undefined) return;
      timing = window.performance.timing;
      if (timing === undefined) return;

      if (document.cookie.indexOf('statistics_clientid=') != -1) return;

      var domain_lookup_time = timing.domainLookupEnd - timing.domainLookupStart;
      var connect_time = timing.connectEnd - timing.connectStart;
      var read_content_time = timing.responseEnd - timing.responseStart;

      new Image().src = ('https:' == document.location.protocol ? 'https://' : 'http://')
      + 'stat.dnspod.cn/statistics/'
      + domain_lookup_time + "/"
      + connect_time + "/"
      + read_content_time + ".png";

      var exdate=new Date();
      exdate.setDate(exdate.getDate() + 1);
      document.cookie="statistics_clientid=me"
      + ";expires="+exdate.toGMTString();

    }, false);
  }());
</script>
</body>
</html>
