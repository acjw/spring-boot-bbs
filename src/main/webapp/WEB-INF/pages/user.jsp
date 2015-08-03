<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="ocpsoft" uri="http://ocpsoft.org/prettytime/tags"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='英雄计划社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="英雄计划，理财，P2P，互联网金融"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>@373049 的个人主页 - 英雄计划社区</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8" name="csrf-token">
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
              <div class="avatar"></div>
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
                _csrf: 'Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8'
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
        </ul>
      </div>
      <div class='inner userinfo'>
        <div class='user_big_avatar'>
          <div class="avatar"></div>
        </div>
        <a class='dark'>182******89</a>

        <div class='user_profile'>
          <ul class='unstyled'>
            <span class='big'>0</span> 积分





          </ul>
        </div>
        <p class='col_fade'><ocpsoft:prettytime date="${user.registerDateTime}" locale="zh_CN" /></p>

      </div>
    </div>

    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>最近创建的话题</span>
      </div>

      <div class='inner'>
        <p>无话题</p>
      </div>

    </div>

    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>最近参与的话题</span>
      </div>

      <div class='inner'>
        <p>无话题</p>
      </div>

    </div>
  </div>


  <script>
    $(document).ready(function () {
      $('#set_star_btn').click(function () {
        var $me = $(this);
        var action = $me.attr('action');
        var params = {
          user_id: '55b869dcb992cd08785584f6',
          _csrf: 'Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8'
        };
        $.post('/user/' + action, params, function (data) {
          if (data.status === 'success') {
            if (action === 'set_star') {
              $me.html('取消达人');
              $me.attr('action', 'cancel_star');
            } else {
              $me.html('设为达人');
              $me.attr('action', 'set_star');
            }
          }
        }, 'json');
      });

      $('#set_block_btn').click(function () {
        var $me = $(this);
        var action = $me.attr('action');
        var params = {
          _csrf: 'Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8',
          action: action
        };
        if (action === 'set_block' && !confirm('确定要屏蔽该用户吗？')) {
          return;
        }
        $.post('/user/373049/block', params, function (data) {
          if (data.status === 'success') {
            if (action === 'set_block') {
              $me.html('取消屏蔽用户');
              $me.attr('action', 'cancel_block');
            } else if (action === 'cancel_block') {
              $me.html('屏蔽用户并删其所有帖');
              $me.attr('action', 'set_block');
            }
          }
        }, 'json');
      })

      $('#set_official_btn').click(function () {
        var $me = $(this);
        var action = $me.attr('action');
        var params = {
          _csrf: 'Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8',
          action: action
        };
        if (action === 'set_official' && !confirm('确定要设置该用户为官方用户吗？')) {
          return;
        }
        $.post('/user/373049/official', params, function (data) {
          if (data.status === 'success') {
            if (action === 'set_official') {
              $me.html('取消官方用户');
              $me.attr('action', 'cancel_official');
            } else if (action === 'cancel_official') {
              $me.html('设为官方用户');
              $me.attr('action', 'set_official');
            }
          }
        }, 'json');
      })

      $('#delete_all').click(function () {
        var $me = $(this);
        var params = {
          _csrf: 'Z4OUEYuA-jPTaG1D_T9BiLOu8ytOQPx1BAO8'
        };
        if (!confirm('确定要删除吗？此操作不可逆')) {
          return;
        }
        $.post('/user/373049/delete_all', params, function (data) {
          if (data.status === 'success') {
            alert('操作成功');
          }
        }, 'json');
      })
    });
  </script>


</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-417asdf5xxxx-x', 'auto');
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

