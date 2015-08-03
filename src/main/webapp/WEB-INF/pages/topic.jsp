<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='理财范社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="理财范，理财，P2P，互联网金融"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>投了她，就要关心她 - 理财范社区</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc" name="csrf-token">
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
        <span class='col_fade'>作者</span>
      </div>
      <div class='inner'>
        <div class='user_card'>
          <div>
            <a class='user_avatar' href="/user/${topic.author.id}">
              <img src="/public/avatar/77b85c0990841f394600a1590e2d931a" title="${topic.author.nickname}"/>
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
        <span class='col_fade'>作者其它话题</span>
      </div>
      <div class='inner'>

        <ul class='unstyled'>
          <li>
            <div><a class='dark topic_title' href="/topic/55bb1c11b992cd0878558705" title="银行卡怎么就不能进账呢">银行卡怎么就不能进账呢</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/5566b3aa2a0d41d85f16f940" title="希望的第一步终于到了">希望的第一步终于到了</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/55993d48213857e3229086c4" title="手机投资1%的加息为什么没有体现？怎样才能体现？">手机投资1%的加息为什么没有体现？怎样才能体现？</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/55851663213857e322907dd2" title="合同要不要签订呀？">合同要不要签订呀？</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/557fd17b1cf85bb773d0c5c7" title="恭喜你们中了大奖">恭喜你们中了大奖</a>
            </div>
          </li>

        </ul>

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
  </div>

  <div id='content'>
    <div class='panel'>
      <div class='header topic_header'>
      <span class="topic_full_title">

        ${topic.title}
      </span>
        <div class="action">
          <span class='span-common span-success' id='collect_btn' action='collect'>加入收藏</span>
        </div>
        <div class="changes">
        <span>
          发布于 2天前
        </span>
        <span class="topic_">
          作者 <a href="/user/${topic.author.id}">${topic.author.nickname}</a>
        </span>
        <span>
          ${topic.visits} 次浏览
        </span>
          <span> 来自 <c:if test="${topic.type==1}">讨论</c:if><c:if test="${topic.type==2}">问答</c:if></span>
        </div>

        <div id="manage_topic">

        </div>

      </div>
      <div class='inner topic'>

        <div class='topic_content'>
          <div class="markdown-text">
            <p>${topic.content}</p>
            ${topic.content}
          </div>
        </div>
        <div class="share" style="display: none">
          <!-- JiaThis Button BEGIN -->
          <div class="jiathis_style_24x24">
            <a class="jiathis_button_qzone"></a>
            <a class="jiathis_button_tsina"></a>
            <a class="jiathis_button_tqq"></a>
            <a class="jiathis_button_weixin"></a>
            <a class="jiathis_button_renren"></a>
            <a class="jiathis_counter_style"></a>
          </div>
          <script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>
          <!-- JiaThis Button END -->
        </div>
      </div>
    </div>

    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>13 回复</span>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply1" reply_id="55b87c80b992cd0878558511" reply_to_id="">
        <a class="anchor" id="55b87c80b992cd0878558511"></a>

        <div class='author_content'>
          <a href="/user/338223" class="user_avatar">
            <img src="/public/avatar/47d2d4209a913f45689ab913162c9e2a"
                 title="139******37" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/338223">
              139******37
            </a>
            <a class="reply_time" href="#55b87c80b992cd0878558511">1楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-338223'>
          <div class="markdown-text"><p>对的，投资了当然会关心，网上“每一个理财范的信息”。</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b87c80b992cd0878558511'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b87c80b992cd0878558511" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b87c80b992cd0878558511' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item  user_star
  '
           id="reply2" reply_id="55b88c8eb992cd0878558525" reply_to_id="">
        <a class="anchor" id="55b88c8eb992cd0878558525"></a>

        <div class='author_content'>
          <a href="/user/188162" class="user_avatar">
            <img src="/public/avatar/9c3b7873f8a60c73c39ebc5a5b230f59"
                 title="爱吃泡馍的虫子" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/188162">
              爱吃泡馍的虫子
            </a>
            <a class="reply_time" href="#55b88c8eb992cd0878558525">2楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-188162'>
          <div class="markdown-text"><p>醉了！</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b88c8eb992cd0878558525'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b88c8eb992cd0878558525" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b88c8eb992cd0878558525' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item  user_star
  '
           id="reply3" reply_id="55b896f8b992cd087855852d" reply_to_id="">
        <a class="anchor" id="55b896f8b992cd087855852d"></a>

        <div class='author_content'>
          <a href="/user/267735" class="user_avatar">
            <img src="/public/avatar/e9d6fe881e37c876f3937d5d7957693c"
                 title="残影哥哥" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/267735">
              残影哥哥
            </a>
            <a class="reply_time" href="#55b896f8b992cd087855852d">3楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-267735'>
          <div class="markdown-text"><p>我一天上好几次社区</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b896f8b992cd087855852d'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b896f8b992cd087855852d" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b896f8b992cd087855852d' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply4" reply_id="55b8be8ab992cd0878558561" reply_to_id="">
        <a class="anchor" id="55b8be8ab992cd0878558561"></a>

        <div class='author_content'>
          <a href="/user/288011" class="user_avatar">
            <img src="/public/avatar/099cbfd8feb0f2f41aa56adc0b115ff2"
                 title="子然的小愚" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/288011">
              子然的小愚
            </a>
            <a class="reply_time" href="#55b8be8ab992cd0878558561">4楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-288011'>
          <div class="markdown-text"><p>楼主，你这段话很煽情啊～乍一看，还以为楼主和理财范谈恋爱了。哇哈哈O(∩_∩)O</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b8be8ab992cd0878558561'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b8be8ab992cd0878558561" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b8be8ab992cd0878558561' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply5" reply_id="55b8c12fb992cd0878558568" reply_to_id="">
        <a class="anchor" id="55b8c12fb992cd0878558568"></a>

        <div class='author_content'>
          <a href="/user/182645" class="user_avatar">
            <img src="/public/avatar/9c4efb580811334e66c0e3eff9d1f7ed"
                 title="180******82" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/182645">
              180******82
            </a>
            <a class="reply_time" href="#55b8c12fb992cd0878558568">5楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-182645'>
          <div class="markdown-text"><p>煽是煽了点，或多或少谁不这样呢！</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b8c12fb992cd0878558568'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b8c12fb992cd0878558568" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b8c12fb992cd0878558568' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply6" reply_id="55b8db27b992cd0878558578" reply_to_id="55b8c12fb992cd0878558568">
        <a class="anchor" id="55b8db27b992cd0878558578"></a>

        <div class='author_content'>
          <a href="/user/227119" class="user_avatar">
            <img src="/public/avatar/34f14ac33f36666b68771107163bef74"
                 title="瓶子" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/227119">
              瓶子
            </a>
            <a class="reply_time" href="#55b8db27b992cd0878558578">6楼•2天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-227119'>
          <div class="markdown-text"><ol>
            <li>@180******82 有道理，都一样，每天不上去转转，感觉缺点啥似的，😄</li>
          </ol>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b8db27b992cd0878558578'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b8db27b992cd0878558578" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b8db27b992cd0878558578' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply7" reply_id="55b9613fb992cd0878558599" reply_to_id="">
        <a class="anchor" id="55b9613fb992cd0878558599"></a>

        <div class='author_content'>
          <a href="/user/361626" class="user_avatar">
            <img src="/public/avatar/d0e55f5291bc92fdd30a4690ab49cc17"
                 title="落英缤纷" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/361626">
              落英缤纷
            </a>
            <a class="reply_time" href="#55b9613fb992cd0878558599">7楼•1天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-361626'>
          <div class="markdown-text"><p>每天来看看</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55b9613fb992cd0878558599'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b9613fb992cd0878558599" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b9613fb992cd0878558599' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply8" reply_id="55ba043fb992cd087855868f" reply_to_id="">
        <a class="anchor" id="55ba043fb992cd087855868f"></a>

        <div class='author_content'>
          <a href="/user/28166" class="user_avatar">
            <img src="/public/avatar/77b85c0990841f394600a1590e2d931a"
                 title="138******19" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/28166">
              138******19
            </a>
            <a class="reply_time" href="#55ba043fb992cd087855868f">8楼•1天前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-28166'>
          <div class="markdown-text"><p>比谈恋爱还痴去情</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55ba043fb992cd087855868f'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55ba043fb992cd087855868f" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55ba043fb992cd087855868f' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item  user_star
  '
           id="reply9" reply_id="55ba2a61b992cd08785586a0" reply_to_id="55ba043fb992cd087855868f">
        <a class="anchor" id="55ba2a61b992cd08785586a0"></a>

        <div class='author_content'>
          <a href="/user/317678" class="user_avatar">
            <img src="/public/avatar/ad157d856b6ed943451bedd722a2bb78"
                 title="狐狸妈妈" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/317678">
              狐狸妈妈
            </a>
            <a class="reply_time" href="#55ba2a61b992cd08785586a0">9楼•19小时前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-317678'>
          <div class="markdown-text"><p>@138******19  真是这样的。比吸毒还上瘾~~~</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55ba2a61b992cd08785586a0'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55ba2a61b992cd08785586a0" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55ba2a61b992cd08785586a0' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply10" reply_id="55bb114ab992cd08785586f0" reply_to_id="">
        <a class="anchor" id="55bb114ab992cd08785586f0"></a>

        <div class='author_content'>
          <a href="/user/28166" class="user_avatar">
            <img src="/public/avatar/77b85c0990841f394600a1590e2d931a"
                 title="138******19" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/28166">
              138******19
            </a>
            <a class="reply_time" href="#55bb114ab992cd08785586f0">10楼•3小时前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-28166'>
          <div class="markdown-text"><p>比吸毒还上瘾？？？</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55bb114ab992cd08785586f0'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55bb114ab992cd08785586f0" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55bb114ab992cd08785586f0' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item  user_star
  '
           id="reply11" reply_id="55bb18e8b992cd08785586fb" reply_to_id="">
        <a class="anchor" id="55bb18e8b992cd08785586fb"></a>

        <div class='author_content'>
          <a href="/user/211636" class="user_avatar">
            <img src="/public/avatar/93663216e402aea99479701ee47c1531"
                 title="czm" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/211636">
              czm
            </a>
            <a class="reply_time" href="#55bb18e8b992cd08785586fb">11楼•2小时前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-211636'>
          <div class="markdown-text"><p>呵呵</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55bb18e8b992cd08785586fb'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55bb18e8b992cd08785586fb" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55bb18e8b992cd08785586fb' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply12" reply_id="55bb194db992cd08785586ff" reply_to_id="">
        <a class="anchor" id="55bb194db992cd08785586ff"></a>

        <div class='author_content'>
          <a href="/user/19019" class="user_avatar">
            <img src="/public/avatar/16d459c4b261f3015061a7cc7362851c"
                 title="shuangdao" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/19019">
              shuangdao
            </a>
            <a class="reply_time" href="#55bb194db992cd08785586ff">12楼•2小时前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">
        </span>
      </span>

      <span>
          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-19019'>
          <div class="markdown-text"><p>感同身受！</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55bb194db992cd08785586ff'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55bb194db992cd08785586ff" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55bb194db992cd08785586ff' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div class='cell reply_area reply_item
  '
           id="reply13" reply_id="55bb3744b992cd087855874f" reply_to_id="">
        <a class="anchor" id="55bb3744b992cd087855874f"></a>

        <div class='author_content'>
          <a href="/user/186520" class="user_avatar">
            <img src="/public/avatar/a195b15745592550de39db38ad420628"
                 title="155******02" height="30" width="30" /></a>

          <div class='user_info'>
            <a class='dark reply_author' href="/user/186520">
              155******02
            </a>
            <a class="reply_time" href="#55bb3744b992cd087855874f">13楼•6分钟前</a>
          </div>
          <div class='user_action'>
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          invisible" title="喜欢"></i>
        <span class="up-count">

        </span>
      </span>

      <span>

          <i class="fa fa-reply reply2_btn" title="回复"></i>

      </span>
          </div>
        </div>
        <div class='reply_content from-186520'>
          <div class="markdown-text"><p>每天都应该看看，关注有什么消息，有什么好项目</p>
          </div>
        </div>
        <div class='clearfix'>
          <div class='reply2_area'>

            <form class='reply2_form' action='/55b87beeb992cd0878558510/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='55bb3744b992cd087855874f'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55bb3744b992cd087855874f" name='r_content' rows='4'></textarea>

                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55bb3744b992cd087855874f' data-loading-text="回复中.." value="回复">
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>

    </div>


    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>添加回复</span>
      </div>
      <div class='inner reply'>
        <form id='reply_form' action='/55b87beeb992cd0878558510/reply' method='post'>

          <div class='markdown_editor in_editor'>
            <div class='markdown_in_editor'>
              <textarea class='editor' name='r_content' rows='8'></textarea>

              <div class='editor_buttons'>
                <input class='span-primary submit_btn' type="submit" data-loading-text="回复中.." value="回复">
              </div>
            </div>

          </div>

          <input type='hidden' name='_csrf' id="_csrf" value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
        </form>
      </div>
    </div>

  </div>

  <div class="replies_history">
    <div class="inner_content"></div>
    <div class="anchor"></div>
  </div>



  <!-- markdown editor -->
  <script src="/static/js/editor.min.js"></script>

  <script>
    $(document).ready(function () {
      // 获取所有回复者name
      var allNames = $('.reply_author').map(function (idx, ele) {
        return $(ele).text().trim();
      }).toArray();
      allNames = _.uniq(allNames);
      // END 获取所有回复者name

      // 编辑器相关
      $('textarea.editor').each(function(){
        var editor = new Editor({
          status: []
        });
        var $el = $(this);

        editor.render(this);
        //绑定editor
        $(this).data('editor', editor);

        var $input = $(editor.codemirror.display.input);
        $input.keydown(function(event){
          if (event.keyCode === 13 && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            $el.closest('form').submit();
          }
        });

        // at.js 配置
        var codeMirrorGoLineUp = CodeMirror.commands.goLineUp;
        var codeMirrorGoLineDown = CodeMirror.commands.goLineDown;
        var codeMirrorNewlineAndIndent = CodeMirror.commands.newlineAndIndent;
        $input.atwho({
          at: '@',
          data: allNames
        })
                .on('shown.atwho', function () {
                  CodeMirror.commands.goLineUp = _.noop;
                  CodeMirror.commands.goLineDown = _.noop;
                  CodeMirror.commands.newlineAndIndent = _.noop;
                })
                .on('hidden.atwho', function () {
                  CodeMirror.commands.goLineUp = codeMirrorGoLineUp;
                  CodeMirror.commands.goLineDown = codeMirrorGoLineDown;
                  CodeMirror.commands.newlineAndIndent = codeMirrorNewlineAndIndent;
                });
        // END at.js 配置

      });
      // END 编辑器相关

      // 评论回复
      $('#content').on('click', '.reply2_btn', function (event) {
        var $btn = $(event.currentTarget);
        var parent = $btn.closest('.reply_area');
        var editorWrap = parent.find('.reply2_form');
        parent.find('.reply2_area').prepend(editorWrap);
        var textarea = editorWrap.find('textarea.editor');
        var user = $btn.closest('.author_content').find('.reply_author').text().trim();
        var editor = textarea.data('editor');
        editorWrap.show('fast', function () {
          var cm = editor.codemirror;
          cm.focus();
          if(cm.getValue().indexOf('@' + user) < 0){
            editor.push('@' + user + ' ');
          }
        });
      });

      $('#content').on('click', '.reply2_at_btn', function (event) {
        var $btn = $(event.currentTarget);
        var editorWrap = $btn.closest('.reply2_area').find('.reply2_form');
        $btn.closest('.reply2_item').after(editorWrap);
        var textarea = editorWrap.find('textarea.editor');
        var user = $btn.closest('.reply2_item').find('.reply_author').text().trim();
        var editor = textarea.data('editor');
        editorWrap.show('fast', function () {
          var cm = editor.codemirror;
          cm.focus();
          if(cm.getValue().indexOf('@' + user) < 0){
            editor.push('@' + user + ' ');
          }
        });
      });
      // END 评论回复

      // 加入收藏
      $('#collect_btn').click(function () {
        var $me = $(this);
        var action = $me.attr('action');
        var data = {
          topic_id: '55b87beeb992cd0878558510',
          _csrf: 'K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'
        };
        var $countSpan = $('.collect-topic-count');
        $.post('/topic/' + action, data, function (data) {
          if (data.status === 'success') {
            if (action == 'collect') {
              $me.text('取消收藏');
              $me.attr('action', 'de_collect');
            } else {
              $me.text('加入收藏');
              $me.attr('action', 'collect');
            }
            $me.toggleClass('span-success');
          }
        }, 'json');
      });
      // END 加入收藏

      // 删除回复
      $('#content').on('click', '.delete_reply_btn, .delete_reply2_btn', function (event) {
        var $me = $(event.currentTarget);
        if (confirm('确定要删除此回复吗？')) {
          var reply_id = null;
          if ($me.hasClass('delete_reply_btn')) {
            reply_id = $me.closest('.reply_item').attr('reply_id');
          }
          if ($me.hasClass('delete_reply2_btn')) {
            reply_id = $me.closest('.reply2_item').attr('reply_id');
          }
          var data = {
            reply_id: reply_id,
            _csrf: "K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc"
          };
          $.post('/reply/' + reply_id + '/delete', data, function (data) {
            if (data.status === 'success') {
              if ($me.hasClass('delete_reply_btn')) {
                $me.closest('.reply_item').remove();
              }
              if ($me.hasClass('delete_reply2_btn')) {
                $me.closest('.reply2_item').remove();
              }
            }
          }, 'json');
        }
        return false;
      });
      // END 删除回复

      // 删除话题
      $('.delete_topic_btn').click(function () {
        var topicId = $(this).data('id');
        if (topicId && confirm('确定要删除此话题吗？')) {
          $.post('/topic/' + topicId + '/delete', { _csrf: $('#_csrf').val() }, function (result) {
            if (!result.success) {
              alert(result.message);
            } else {
              location.href = '/';
            }
          });
        }
        return false;
      });
      // END 删除话题

      // 用户 hover 在回复框时才显示点赞按钮
      $('.reply_area').hover(
              function () {
                $(this).find('.up_btn').removeClass('invisible');
              },
              function () {
                var $this = $(this);
                if ($this.find('.up-count').text().trim() === '') {
                  $this.find('.up_btn').addClass('invisible');
                }
              });
      // END 用户 hover 在回复框时才显示点赞按钮


    });

  </script>


  <script type="text/javascript">
    (function(){
      var timer = null; //对话框延时定时器
      // 初始化 $('.replies_history')
      var $repliesHistory = $('.replies_history');
      var $repliesHistoryContent = $repliesHistory.find('.inner_content');
      $repliesHistory.hide();
      // END
      // 鼠标移入对话框清除隐藏定时器；移出时隐藏对话框
      $repliesHistory.on('mouseenter', function(){
        clearTimeout(timer);
      }).on('mouseleave', function(){
        $repliesHistory.fadeOut('fast');
      });
      // 显示被 at 用户的本页评论
      if ($('.reply2_item').length === 0) {
        // 只在流式评论布局中使用

        $('#content').on('mouseenter', '.reply_content a', function (e) {
          clearTimeout(timer);
          var $this = $(this);
          if ($this.text()[0] === '@') {
            var thisText = $this.text().trim();
            var loginname = thisText.slice(1);
            var offset = $this.offset();
            var width = $this.width();
            var mainOffset = $('#main').offset();
            $repliesHistory.css('left', offset.left-mainOffset.left+width+10); // magic number
            $repliesHistory.css('top', offset.top-mainOffset.top-10); // magic number
            $repliesHistory.css({
              'z-index': 1
            });
            $repliesHistoryContent.empty();
            var chats = [];
            var replyToId = $this.closest('.reply_item').attr('reply_to_id');
            while (replyToId) {
              var $replyItem = $('.reply_item[reply_id=' + replyToId + ']');
              var replyContent = $replyItem.find('.reply_content').text().trim();
              if (replyContent.length > 0) {
                chats.push([
                  $replyItem.find('.user_avatar').html(), // avatar
                  (replyContent.length>300?replyContent.substr(0,300)+'...':replyContent), // reply content
                  '<a href="#'+replyToId+'" class="scroll_to_original" title="查看原文">↑</a>'
                ]);
              }
              replyToId = $replyItem.attr('reply_to_id');
            }
            if(chats.length > 0) {
              chats.reverse();

              $repliesHistoryContent.append('<div class="title">查看对话</div>');
              chats.forEach(function (pair, idx) {
                var $chat = $repliesHistoryContent.append('<div class="item"></div>');
                $chat.append(pair[0]); // 头像
                $chat.append($('<span>').text(pair[1])); // 内容
                $chat.append(pair[2]); // 查看原文 anchor
              });
              $repliesHistory.fadeIn('fast');
            }else{
              $repliesHistory.hide();
            }
          }
        }).on('mouseleave', '.reply_content a', function (e) {
          timer = setTimeout(function(){
            $repliesHistory.fadeOut('fast');
          }, 500);
        });
      }
      // END 显示被 at 用户的本页评论
    })();

    // 点赞
    $('.up_btn').click(function (e) {
      var $this = $(this);
      var replyId = $this.closest('.reply_area').attr('reply_id');
      $.ajax({
        url: '/reply/' + replyId + '/up',
        method: 'POST'
      }).done(function (data) {
        if (data.success) {
          $this.removeClass('invisible');
          var currentCount = Number($this.next('.up-count').text().trim()) || 0;
          if (data.action === 'up') {
            $this.next('.up-count').text(currentCount + 1);
            $this.addClass('uped');
          } else {
            if (data.action === 'down') {
              $this.next('.up-count').text(currentCount - 1);
              $this.removeClass('uped');
            }
          }
        } else {
          alert(data.message);
        }
      }).fail(function (xhr) {
        if (xhr.status === 403) {
          alert('请先登录，登陆后即可点赞。');
        }
      });
    });
    // END 点赞
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

  ga('create', 'UA-4175adsxxxx-x', 'auto');
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

