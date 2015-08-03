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
  <meta content="QaG0ibLE-ruyKnHmp751QRHLK7q3Ffw99RWI" name="csrf-token">
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
    <span class="signature">“这家伙很懒，什么个性签名都没有留下。”
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


    <div class="panel">
      <div class='inner'>
        <a href='/topic/create' id='create_topic_btn'>
          <span class='span-success'>发布话题</span>
        </a>
      </div>
    </div>

    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>无人回复的话题</span>
      </div>
      <div class='inner'>

        <p>无</p>

      </div>
    </div>



    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>积分榜</span>
        &nbsp;
        <a class='dark' href='/users/top100'>TOP 100 &gt;&gt;</a>
      </div>
      <div class='inner'>

        <ol>
          <li>
            <span class='top_score'>3835</span>
            <span class="user_name top_user_star"><a href="/user/267735">残影哥哥</a></span>
          </li>
          <li>
            <span class='top_score'>3185</span>
            <span class="user_name top_user_official"><a href="/user/4008500700">米范</a></span>
          </li>
          <li>
            <span class='top_score'>2510</span>
            <span class="user_name top_user_star"><a href="/user/188162">爱吃泡馍的虫子</a></span>
          </li>
          <li>
            <span class='top_score'>1635</span>
            <span class="user_name top_user_star"><a href="/user/317678">狐狸妈妈</a></span>
          </li>
          <li>
            <span class='top_score'>1475</span>
            <span class="user_name top_user_star"><a href="/user/211636">czm</a></span>
          </li>
          <li>
            <span class='top_score'>1240</span>
            <span class="user_name top_user_star"><a href="/user/248311">雷欧</a></span>
          </li>
          <li>
            <span class='top_score'>780</span>
            <span class="user_name top_user_star"><a href="/user/22170">天下熙熙</a></span>
          </li>
          <li>
            <span class='top_score'>645</span>
            <span class="user_name top_"><a href="/user/288011">子然的小愚</a></span>
          </li>
          <li>
            <span class='top_score'>635</span>
            <span class="user_name top_"><a href="/user/254179">箭袋树</a></span>
          </li>
          <li>
            <span class='top_score'>590</span>
            <span class="user_name top_user_star"><a href="/user/278376">行空</a></span>
          </li>

        </ol>

      </div>
    </div>


    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>友情社区</span>
      </div>
      <div class='inner'>
        <ol class="friendship-community">
          <li>
            <a href="https://www.saoft.com/" target="_blank">
              saoft - 真诚透明的互联网理财平台
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


  <div id="content">
    <div class="panel">
      <div class="header">

        <a href="/?tab=all"
           class="topic-tab current-tab">全部</a>

        <a href="/?tab=good"
           class="topic-tab ">精华</a>

        <a href="/?tab=argue"
           class="topic-tab ">讨论</a>

        <a href="/?tab=ask"
           class="topic-tab ">问答</a>

      </div>
      <div class="inner no-padding">
        <div id="topic_list">
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/licaifanpr">
              <div class="avatar"></div>
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      5
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      179
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55b84eb3b992cd08785584b5#55b86965b992cd08785584f4">
              <img class="user_small_avatar" src="/public/avatar/729de343917dafbecf99f40824fd5987">
              <span class="last_active_time">10分钟前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class='put_top'>置顶</span>



              <a class='topic_title' href='/topic/55b84eb3b992cd08785584b5' title='【我的礼物我做主】英雄计划定制礼品创意征集活动开始啦！'>
                【我的礼物我做主】英雄计划定制礼品创意征集活动开始啦！
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/licaifanpr">
              <img src="/public/images/fanxiaobao.jpg"
                   title="范小宝"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      35
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      944
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55a32059304b9b712e931e7e#55b78b8fb992cd0878558486">
              <img class="user_small_avatar" src="/public/avatar/e9d6fe881e37c876f3937d5d7957693c">
              <span class="last_active_time">16小时前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class='put_top'>置顶</span>



              <a class='topic_title' href='/topic/55a32059304b9b712e931e7e' title='【有奖征文】说说您的理财人生，讲讲他的财富传奇'>
                【有奖征文】说说您的理财人生，讲讲他的财富传奇
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/212998">
              <img src="/public/avatar/ad83dbe9eaa90ab341d856cc0e9882d2"
                   title="不弃"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      94
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      2207
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/5555c4545b6959756e0f56c4#55b71050b992cd0878558401">
              <img class="user_small_avatar" src="/public/avatar/34f14ac33f36666b68771107163bef74">
              <span class="last_active_time">1天前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class='put_top'>置顶</span>



              <a class='topic_title' href='/topic/5555c4545b6959756e0f56c4' title='［意见］欢迎大家对App提出宝贵意见'>
                ［意见］欢迎大家对App提出宝贵意见
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/187367">
              <img src="/public/avatar/cd41ff4f5bb6f10c249b6627d0bdb7d9"
                   title="招财喵"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      31
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      413
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55acd51ab992cd0878557b98#55b86a7ab992cd08785584f9">
              <img class="user_small_avatar" src="/public/avatar/47d2d4209a913f45689ab913162c9e2a">
              <span class="last_active_time">6分钟前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class="topiclist-tab">问答</span>



              <a class='topic_title' href='/topic/55acd51ab992cd0878557b98' title='活利范是怎么个回事啊？？？？'>
                活利范是怎么个回事啊？？？？
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/336349">
              <img src="/public/avatar/00074ef1e38588f97e05728525be5c3f"
                   title="超级购物"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      43
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      519
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55b38dd4b992cd08785580d3#55b86a75b992cd08785584f7">
              <img class="user_small_avatar" src="/public/avatar/16d459c4b261f3015061a7cc7362851c">
              <span class="last_active_time">6分钟前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class="topiclist-tab">问答</span>



              <a class='topic_title' href='/topic/55b38dd4b992cd08785580d3' title='感觉汽车金融抵押的车辆好像不值那么多钱呢？'>
                感觉汽车金融抵押的车辆好像不值那么多钱呢？
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/291994">
              <img src="/public/avatar/fbf22c4e7b7d8b018a2113c5210d974b"
                   title="159******00"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      5
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      41
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55b850ceb992cd08785584b8#55b86726b992cd08785584ef">
              <img class="user_small_avatar" src="/public/avatar/16d459c4b261f3015061a7cc7362851c">
              <span class="last_active_time">20分钟前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class='put_good'>精华</span>



              <a class='topic_title' href='/topic/55b850ceb992cd08785584b8' title='【我的理财人生】农村娃与钱的故事'>
                【我的理财人生】农村娃与钱的故事
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/338069">
              <img src="/public/avatar/0a209ef1468a23e4d8764a005c6b5b9d"
                   title="岁月如歌"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      14
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      212
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b830a3b992cd087855849a#55b8649fb992cd08785584e8">
              <img class="user_small_avatar" src="/public/avatar/53da80d10ca3ea66e60235e4b636c493">
              <span class="last_active_time">31分钟前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b830a3b992cd087855849a' title='今天大公国际在发黑名单,英雄计划光荣入板。'>
                今天大公国际在发黑名单,英雄计划光荣入板。
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/350430">
              <img src="/public/avatar/334aa8c80448b6b1e56b1c8a3f0cac20"
                   title="butterfly"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      8
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      148
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b766d1b992cd087855845c#55b8579cb992cd08785584be">
              <img class="user_small_avatar" src="/public/avatar/334aa8c80448b6b1e56b1c8a3f0cac20">
              <span class="last_active_time">1小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">问答</span>
              <a class='topic_title' href='/topic/55b766d1b992cd087855845c' title='现在活利范不用抢了，一次发了600万'>
                现在活利范不用抢了，一次发了600万
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/194351">
              <img src="/public/avatar/ada277b74ced43a244c2a2663015b71f"
                   title="Gideon"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      6
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      119
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b749e1b992cd087855844d#55b85458b992cd08785584ba">
              <img class="user_small_avatar" src="/public/avatar/b3b9b7febd4be079b884e7c47f55f1ab">
              <span class="last_active_time">2小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">问答</span>
              <a class='topic_title' href='/topic/55b749e1b992cd087855844d' title='汽车金融为什么不能债权转让？'>
                汽车金融为什么不能债权转让？
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/267735">
              <img src="/public/avatar/e9d6fe881e37c876f3937d5d7957693c"
                   title="残影哥哥"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      47
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      800
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55a3737f304b9b712e931ead#55b83e0cb992cd08785584ac">
              <img class="user_small_avatar" src="/public/avatar/ada277b74ced43a244c2a2663015b71f">
              <span class="last_active_time">3小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class='put_good'>精华</span>
              <a class='topic_title' href='/topic/55a3737f304b9b712e931ead' title='【我的理财人生】献给正在努力的我们，感谢英雄计划让我们的积蓄发挥了最大的作用'>
                【我的理财人生】献给正在努力的我们，感谢英雄计划让我们的积蓄发挥了最大的作用
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/338223">
              <img src="/public/avatar/47d2d4209a913f45689ab913162c9e2a"
                   title="139******37"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      11
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      184
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b5899db992cd087855824d#55b81ce0b992cd0878558498">
              <img class="user_small_avatar" src="/public/avatar/47d2d4209a913f45689ab913162c9e2a">
              <span class="last_active_time">6小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b5899db992cd087855824d' title='广州P2P&amp;quot;老二主角警示：九成民营平台难存活'>
                广州P2P&amp;quot;老二主角警示：九成民营平台难存活
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/227119">
              <img src="/public/avatar/34f14ac33f36666b68771107163bef74"
                   title="瓶子"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      40
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      339
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b63bd9b992cd0878558346#55b812cbb992cd0878558496">
              <img class="user_small_avatar" src="/public/avatar/16d459c4b261f3015061a7cc7362851c">
              <span class="last_active_time">6小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class='put_good'>精华</span>
              <a class='topic_title' href='/topic/55b63bd9b992cd0878558346' title='【我的理财人生】我和闺蜜“小财迷”的幸福之旅'>
                【我的理财人生】我和闺蜜“小财迷”的幸福之旅
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/306961">
              <img src="/public/avatar/6d62e1974d441c2815ddc2912074be78"
                   title="浩然正气ING"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      12
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      119
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b724d1b992cd0878558425#55b7ac05b992cd0878558495">
              <img class="user_small_avatar" src="/public/avatar/6d62e1974d441c2815ddc2912074be78">
              <span class="last_active_time">14小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b724d1b992cd0878558425' title='80后偶们不是古董 我们也是什么都喜欢尝试一下的'>
                80后偶们不是古董 我们也是什么都喜欢尝试一下的
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/306961">
              <img src="/public/avatar/6d62e1974d441c2815ddc2912074be78"
                   title="浩然正气ING"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      19
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      176
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b7201fb992cd087855841c#55b79512b992cd0878558490">
              <img class="user_small_avatar" src="/public/avatar/49ebb9cc9e4930ee1181a431eca55451">
              <span class="last_active_time">15小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b7201fb992cd087855841c' title='【我的理财人生】英雄计划你可别忽悠我 O(∩_∩)O哈哈~'>
                【我的理财人生】英雄计划你可别忽悠我 O(∩_∩)O哈哈~
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/317678">
              <img src="/public/avatar/ad157d856b6ed943451bedd722a2bb78"
                   title="狐狸妈妈"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      26
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      317
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b45630b992cd087855819b#55b76e5db992cd0878558461">
              <img class="user_small_avatar" src="/public/avatar/e9d6fe881e37c876f3937d5d7957693c">
              <span class="last_active_time">18小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b45630b992cd087855819b' title='【转帖】平台不得增信 投资人权益如何保障'>
                【转帖】平台不得增信 投资人权益如何保障
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/27248">
              <img src="/public/avatar/299024cfe2cd92197e0ab02d2421285c"
                   title="Mr.W"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      51
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      548
    </span>
  </span>

            <a class='last_time pull-right' href="/topic/55b44de3b992cd087855817c#55b75015b992cd0878558452">
              <img class="user_small_avatar" src="/public/avatar/299024cfe2cd92197e0ab02d2421285c">
              <span class="last_active_time">20小时前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class='put_good'>精华</span>
              <a class='topic_title' href='/topic/55b44de3b992cd087855817c' title='【我的理财人生】【压轴篇】英雄计划元老诉说理财路程！欢迎围观^_^'>
                【我的理财人生】【压轴篇】英雄计划元老诉说理财路程！欢迎围观^_^
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/288011">
              <img src="/public/avatar/099cbfd8feb0f2f41aa56adc0b115ff2"
                   title="子然的小愚"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      6
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      126
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b669a2b992cd0878558397#55b71a17b992cd0878558415">
              <img class="user_small_avatar" src="/public/avatar/099cbfd8feb0f2f41aa56adc0b115ff2">
              <span class="last_active_time">1天前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">问答</span>
              <a class='topic_title' href='/topic/55b669a2b992cd0878558397' title='第三方支付平台到底是连连支付还是一九付？'>
                第三方支付平台到底是连连支付还是一九付？
              </a>
            </div>
          </div>
          <div class='cell'>

            <a class="user_avatar pull-left" href="/user/254179">
              <img src="/public/avatar/2ee66854d07d027f3a32392a264a0b88"
                   title="箭袋树"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      16
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      167
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b61517b992cd08785582f1#55b716adb992cd0878558410">
              <img class="user_small_avatar" src="/public/avatar/53da80d10ca3ea66e60235e4b636c493">
              <span class="last_active_time">1天前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">讨论</span>
              <a class='topic_title' href='/topic/55b61517b992cd08785582f1' title='债权转让问题'>
                债权转让问题
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/275550">
              <img src="/public/avatar/b505f835e39ae94d642530beeb809088"
                   title="158******96"
                      />
            </a>
  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      8
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      110
    </span>
  </span>
            <a class='last_time pull-right' href="/topic/55b62ca5b992cd0878558324#55b714eeb992cd0878558408">
              <img class="user_small_avatar" src="/public/avatar/53da80d10ca3ea66e60235e4b636c493">
              <span class="last_active_time">1天前</span>
            </a>
            <div class="topic_title_wrapper">
              <span class="topiclist-tab">问答</span>
              <a class='topic_title' href='/topic/55b62ca5b992cd0878558324' title='邀请好友的问题'>
                邀请好友的问题
              </a>
            </div>
          </div>
          <div class='cell'>
            <a class="user_avatar pull-left" href="/user/267831">
              <img src="/public/avatar/5aa0b70f31ba11d53340e3165d30be49"
                   title="四不像吖"
                      />
            </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      11
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      141
    </span>
  </span>


            <a class='last_time pull-right' href="/topic/55b330b3b992cd087855806a#55b70d64b992cd08785583fa">
              <img class="user_small_avatar" src="/public/avatar/34f14ac33f36666b68771107163bef74">
              <span class="last_active_time">1天前</span>
            </a>



            <div class="topic_title_wrapper">


              <span class="topiclist-tab">讨论</span>



              <a class='topic_title' href='/topic/55b330b3b992cd087855806a' title='【我的理财人生】我的纯纯的屌丝小理财'>
                【我的理财人生】我的纯纯的屌丝小理财
              </a>
            </div>
          </div>

        </div>
        <div class='pagination' current_page='1'>
          <ul>
            <li class='disabled'><a>«</a></li>
            <li class='disabled'><a>1</a></li>
            <li><a href='/?page=2'>2</a></li>
            <li><a href='/?page=3'>3</a></li>
            <li><a href='/?page=4'>4</a></li>
            <li><a href='/?page=5'>5</a></li>
            <li><a>...</a></li>
            <li><a href='/?page=32'>»</a></li>

          </ul>
        </div>
        <script>
          $(document).ready(function () {
            var $nav = $('.pagination');
            var current_page = $nav.attr('current_page');
            if (current_page) {
              $nav.find('li').each(function () {
                var $li = $(this);
                var $a = $li.find('a');
                if ($a.html() == current_page) {
                  $li.addClass('active');
                  $a.removeAttr('href');
                }
              });
            }
          });
        </script>
      </div>

    </div>
  </div>

</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
//  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//  ga('create', 'UA-4175xxxx-x', 'auto');
//  ga('send', 'pageview');
</script>
<script src="/public/libs/jquery.identicon5.packed.js"></script>
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

