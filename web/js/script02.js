
// 记录被选则的状态
var beOnclick_forme = 1
var beOnclick_mylove = 0
var beOnclick_mycollote = 0

var container = document.getElementById("photo-container");
var photos = container.getElementsByTagName("img");

var currentIndex = 0;
var interval = 4000; // 图片切换间隔，单位为毫秒

//当前页面与上一次停留的页面
// var atPage = 0;
// var lastPage = 0;

function pageback() {
    // if (lastPage == 0)
    OnclickleftMe("forme");
    // if (lastPage == 1)
    //     OnclickleftMe("mylove");
    // if (lastPage == 2)
    //     OnclickleftMe("mycollote");
}
var leftEntirety = [`<div class="grid-container">
                <div class="left-div" id="photo-container">
                    <img src="img/wallhaven-1p2ojg.jpg" alt="photo1" style="width: 100%; height: 100%;">
                    <img src="img/wallhaven-85eegj.jpg" alt="photo2" style="width: 100%; height: 100%;">
                    <img src=" img/wallhaven-ex338w.jpg" alt="photo3" style="width: 100%; height: 100%;">
                    <div class="div1" id="p1" onmouseover="cgePhoto('p1')" onmouseout="rePhoto('p1')">
                    </div>
                    <div class="div2" id="p2" onmouseover="cgePhoto('p2')" onmouseout="rePhoto('p2')">
                    </div>
                    <div class="div3" id="p3" onmouseover="cgePhoto('p3')" onmouseout="rePhoto('p3')">
                    </div>
                </div>
                <div class="middle-div">
                    <img src="img/fcrs.jpg" alt="photo1" style="width: 100%; height: 100%;">
                </div>
                <div class="right-div">
                    <img src="img/nzsk.webp" alt="photo1" style="width: 100%; height: 100%;">
                </div>
            </div>
            <!-- 推荐音乐 -->
            <div class="RecommendedMusic">
                <p>推荐歌单</p>
                <div class="SongList1"  onclick="SongList('1-1')">
                    <img src="img/houhuiwuqi.png" alt="">
                    <h3>每日推荐</h3>
                    <div class="text" id="1-1" onmouseover="PopPu('1-1')" onmouseout="retraction('1-1')">
                        <h4>
                            每日推荐 | 从 [从后会无期] 听起
                        </h4>

                        <p>
                            1 后会无期
                        </p>
                        <p>
                            2 烟火里的尘埃
                        </p>
                        <p>
                            3 无聊人
                        </p>
                    </div>
                </div>
                <div class="SongList2">
                    <img src="img/woligudan.jpg" alt="">
                    <div class="text" id="1-2" onmouseover="PopPu('1-2')" onmouseout="retraction('1-2')">
                        <h4>
                            孤独的人习惯沉寂孤独
                        </h4>

                        <p>
                            1 我离孤单几公里
                        </p>
                        <p>
                            2 向阳而生
                        </p>
                        <p>
                            3 当全世界忘了我
                        </p>
                    </div>
                </div>
                <div class="SongList3">
                    <img src="img/_xiwang.jpg" alt="">
                    <div class="text" id="1-3" onmouseover="PopPu('1-3')" onmouseout="retraction('1-3')">
                        <h4>
                            内娱的巴洛克摇滚
                        </h4>

                        <p>
                            1 虚幻与现实
                        </p>
                        <p>
                            2 斗牛
                        </p>
                        <p>
                            3 Here We Are
                        </p>
                    </div>
                </div>
                <div class="SongList4">
                    <img src="img/kaximoduo.jpg" alt="">
                    <div class="text" id="1-4" onmouseover="PopPu('1-4')" onmouseout="retraction('1-4')">
                        <h4>
                            今天《卡西莫多的礼物》爱不释耳|私人雷达
                        </h4>

                        <p>
                            1 卡西莫多的礼物
                        </p>
                        <p>
                            2 恶魔的爱
                        </p>
                        <p>
                            3 彩虹
                        </p>
                    </div>
                </div>
                <div class="SongList5">
                    <img src="img/gd.jpg" alt="">
                    <div class="text" id="1-5" onmouseover="PopPu('1-5')" onmouseout="retraction('1-5')">
                        <h4>
                            内心那片只想给她的净土
                        </h4>

                        <p>
                            1 凄美地
                        </p>
                        <p>
                            2 烟火里的尘埃
                        </p>
                        <p>
                            3 行星
                        </p>
                    </div>
                </div>
                <p>精选歌单</p>
                <div class="SongList2-1">
                    <img src="img/hcy.jpg" alt="">
                    <div class="text" id="2-1" onmouseover="PopPu('2-1')" onmouseout="retraction('2-1')">
                        <h4>
                            [作曲: 火星人华晨宇]
                        </h4>

                        <p>
                            1 虚幻与现实
                        </p>
                        <p>
                            2 你要相信这不是最后一天
                        </p>
                        <p>
                            3 好想爱这个世界啊(Live)
                        </p>
                    </div>
                </div>
                <div class="SongList2-2">
                    <img src="img/jay.jpg" alt="">
                    <div class="text" id="2-2" onmouseover="PopPu('2-2')" onmouseout="retraction('2-2')">
                        <h4>
                            华语老歌 | 8090后的经典
                        </h4>

                        <p>
                            1 屋顶
                        </p>
                        <p>
                            2 等一分钟
                        </p>
                        <p>
                            3 十年
                        </p>
                    </div>
                </div>
                <div class="SongList2-3">
                    <img src="img/jj.jpg" alt="">
                    <div class="text" id="2-3" onmouseover="PopPu('2-3')" onmouseout="retraction('2-3')">
                        <h4>
                            林俊杰经典歌曲集合
                        </h4>

                        <p>
                            1 美人鱼
                        </p>
                        <p>
                            2 江南
                        </p>
                        <p>
                            3 曹操
                        </p>
                    </div>
                </div>
                <div class="SongList2-4">
                    <img src="img/_xs1.jpg" alt="">" alt="">
                    <div class="text" id="2-4" onmouseover="PopPu('2-4')" onmouseout="retraction('2-4')">
                        <h4>
                            单曲循环 | 全网热播歌曲
                        </h4>

                        <p>
                            1 素颜
                        </p>
                        <p>
                            2 玫瑰花的葬礼
                        </p>
                        <p>
                            3 断桥残雪
                        </p>
                    </div>
                </div>
                <div class="SongList2-5">
                    <img src="img/_xzq.jpg" alt="">
                    <div class="text" id="2-5" onmouseover="PopPu('2-5')" onmouseout="retraction('2-5')">
                        <h4>
                            伤心频率 | 与你共鸣
                        </h4>

                        <p>
                            1 演员
                        </p>
                        <p>
                            2 陪你去流浪
                        </p>
                        <p>
                            3 我好像在哪见过你
                        </p>
                    </div>
                </div>

            </div>`

    ,

    `<!-- 我喜欢的音乐 -->
            <div class="add">
                <img src="img/houhuiwuqi.png" class="add-one">
                <h2>我喜欢的音乐</h2>
                <p><a href="#"><img src="img/wallhaven-ex338w.jpg" alt="头像" class="add-two"></a>
                    <span>海上明月&nbsp;&nbsp;2018-09-09创建</span>
                </p>
                <h3 class="mloveH3">
                    <a href="#">歌曲</a>
                    <a href="#" class="add-three">评论&nbsp;&nbsp;&nbsp;收藏者</a>
                </h3>
                <div class="conn">
                    <div class="add-four">
                        <span class="add-1">#</span>
                        <span class="add-2">标题</span>
                        <span class="add-3">专辑</span>
                        <span class="add-4">喜欢</span>
                        <span class="add-5">时长</span>
                    </div>
                    <div class="myloveAudio" id="a0" onclick="playMylove(0)" onmouseover="lightDown('a0')" onmouseout="reLightDown('a0')">
                        <span class="add-1">01</span>
                        <img src="img/houhuiwuqi.png" class="add-6">
                        <span class="add-7">后会无期 <br>汪苏泷&徐良</span>
                        <span class="add-six">不良少年</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:26</span>
                    </div>
                    <div class="myloveAudio" id="a1" onclick="playMylove(1)" onmouseover="lightDown('a1')" onmouseout="reLightDown('a1')">
                        <span class="add-1">02</span>
                        <img src="img/kaximoduo.jpg" class="add-6">
                        <span class="add-0">卡西莫多的礼物 <br>华晨宇</span>
                        <span class="add-five">卡西莫多的礼物</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:34</span>
                    </div>
                    <div class="myloveAudio" id="a2" onclick="playMylove(2)" onmouseover="lightDown('a2')" onmouseout="reLightDown('a2')">
                        <span class="add-1">03</span>
                        <img src="img/v2.jpg" class="add-6">
                        <span class="add-9">花海<br>周杰伦</span>
                        <span class="add-10">魔杰座</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">04:23</span>
                    </div>
                    <div class="myloveAudio" id="a3" onclick="playMylove(3)" onmouseover="lightDown('a3')" onmouseout="reLightDown('a3')">
                        <span class="add-1">04</span>
                        <img src="img/work0.jpg" class="add-6">
                        <span class="add-11">虚拟 <br>陈粒</span>
                        <span class="add-se">小梦大半</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">04:00</span>
                    </div>

                    <div class="myloveAudio" id="a4" onclick="playMylove(4)" onmouseover="lightDown('a4')" onmouseout="reLightDown('a4')">
                        <span class="add-1">05</span>
                        <img src="img/gbqq.webp" class="add-6">
                        <span class="add-12">告白气球 <br>周杰伦</span>
                        <span class="add-five">周杰伦的床边故事</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:35</span>
                    </div>
                    <div class="myloveAudio" id="a5" onclick="playMylove(5)" onmouseover="lightDown('a5')" onmouseout="reLightDown('a5')">
                        <span class="add-1">06</span>
                        <img src="img/one.jpg" class="add-6">
                        <span class="add-9">烟花易冷 <br>周杰伦</span>
                        <span class="add-six">跨时代</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">04:22</span>
                    </div>
                    <div class="myloveAudio" id="a6" onclick="playMylove(6)" onmouseover="lightDown('a6')" onmouseout="reLightDown('a6')">
                        <span class="add-1">07</span>
                        <img src="img/work0.jpg" class="add-6">
                        <span class="add-11">Mojito <br>周杰伦</span>
                        <span class="add-five">最伟大的作品</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:05</span>
                    </div>
                </div>
            </div>`

    ,

    `<!-- 我的收藏 -->
            <div id="acoll">
                <div>
                    <br>
                    <p><span class="collection">
                            专辑
                        </span>
                        <a href="#" class="coll-1">MV</a>
                        
                    </p>
                </div>
                <div>
                    <br><br>
                    <button><a href="#" class="coll-2">收藏歌曲</a></button>
                    <button><a href="#" class="coll-3">已购歌曲</a></button>
                </div>
                <br>
                <div class="conn">
                    <div class="add-four">
                        <span class="add-1">#</span>
                        <span class="add-2">标题</span>
                        <span class="add-3">专辑</span>
                        <span class="add-5">时长</span>
                    </div>
                    <div>
                        <span class="add-1">01</span>
                        <img src="img/one.jpg" class="add-6">
                        <span class="add-7">后会无期 <br>汪苏泷&徐良</span>
                        <span class="add-six">不良少年</span>
                        <span class="add-5">03:26</span>
                    </div>
                    <div>
                        <span class="add-1">02</span>
                        <img src="img/kaximoduo.jpg" class="add-6">
                        <span class="add-0">卡西莫多的礼物 <br>华晨宇</span>
                        <span class="add-five">卡西莫多的礼物</span>

                        <span class="add-5">03:34</span>
                    </div>
                    <div>
                        <span class="add-1">03</span>
                        <img src="img/v2.jpg" class="add-6">
                        <span class="add-9">花海<br>周杰伦</span>
                        <span class="add-10">魔杰座</span>

                        <span class="add-5">04:23</span>
                    </div>
                    <div>
                        <span class="add-1">04</span>
                        <img src="img/work0.jpg" class="add-6">
                        <span class="add-11">虚拟 <br>陈粒</span>
                        <span class="add-se">小梦大半</span>

                        <span class="add-5">04:00</span>
                    </div>

                    <div>
                        <span class="add-1">05</span>
                        <img src="img/gbqq.webp" class="add-6">
                        <span class="add-12">告白气球 <br>周杰伦</span>
                        <span class="add-five">周杰伦的床边故事</span>

                        <span class="add-5">03:35</span>
                    </div>
                    <div>
                        <span class="add-1">06</span>
                        <img src="img/one.jpg" class="add-6">
                        <span class="add-9">烟花易冷 <br>周杰伦</span>
                        <span class="add-six">跨时代</span>

                        <span class="add-5">04:22</span>
                    </div>
                    <div>
                        <span class="add-1">07</span>
                        <img src="img/work0.jpg" class="add-6">
                        <span class="add-11">Mojito <br>周杰伦</span>
                        <span class="add-five">最伟大的作品</span>
                        <span class="add-5">03:05</span>
                    </div>
                </div>
            </div>`, `<!-- 每日推荐 -->
            <div class="add">
                <img src="img/houhuiwuqi.png" class="add-one">
                <h2>每日推荐</h2>
                
                <h3 class="mloveH3">
                    <a href="#">歌曲</a>
                    <a href="#" class="add-three">评论&nbsp;&nbsp;&nbsp;收藏者</a>
                </h3>
                <div class="conn">
                    <div class="add-four">
                        <span class="add-1">#</span>
                        <span class="add-2">标题</span>
                        <span class="add-3">专辑</span>
                        <span class="add-4">喜欢</span>
                        <span class="add-5">时长</span>
                    </div>
                    <div class="myloveAudio" id="a0" onclick="playMylove(0)" onmouseover="lightDown('a0')" onmouseout="reLightDown('a0')">
                        <span class="add-1">01</span>
                        <img src="img/houhuiwuqi.png" class="add-6">
                        <span class="add-7">后会无期 <br>汪苏泷&徐良</span>
                        <span class="add-six">不良少年</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:26</span>
                    </div>
                    <div class="myloveAudio" id="a1" onclick="playMylove(7)" onmouseover="lightDown('a1')" onmouseout="reLightDown('a1')">
                        <span class="add-1">02</span>
                        <img src="img/yhldca.webp" class="add-6">
                        <span class="add-0">烟火里的尘埃 <br>华晨宇</span>
                        <span class="add-five">烟火里的尘埃</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">05:21</span>
                    </div>
                    <div class="myloveAudio" id="a2" onclick="playMylove(8)" onmouseover="lightDown('a2')" onmouseout="reLightDown('a2')">
                        <span class="add-1">03</span>
                        <img src="img/wlr.webp" class="add-6">
                        <span class="add-9">无聊人<br>华晨宇</span>
                        <span class="add-10">无聊人</span>
                        <span class="add-4"><a href="#" title="取消喜欢"><img src="img/heart1.png" class="add-8"></a></span>
                        <span class="add-5">03:49</span>
                    </div>
                </div>
            </div>`];

//指向歌单中的音乐时
function lightDown(str) {
    document.getElementById(str).style.backgroundColor = "rgba(144, 144, 144)"
}
//移开鼠标
function reLightDown(str) {
    document.getElementById(str).style.backgroundColor = ""
}
playMylove

var reLyric = [`[00:00.00]后会无期
[00:01.39]
[00:02.40]演唱：汪苏泷&徐良
[00:03.37]作词：徐良L/汪苏泷（Silence）
[00:04.50]作曲：徐良L/汪苏泷（Silence）
[00:05.69]
[00:07.85]歌词编辑：末笑源yf
[00:09.80]QQ：375201163
[00:11.99]
[00:14.80]你若离去 后会无期
[00:16.99]你若离去 后会无期
[00:19.90]你若离去 后会无期
[00:23.25]
[00:26.14]等不到 风中你的脸颊
[00:28.43]眼泪都美到很融洽
[00:30.71]等不到 掩饰的雨落下
[00:34.09]我得眼泪被你觉察
[00:36.26]
[00:36.99]等不到 你的雪月风花
[00:39.96]我们的爱也有时差
[00:42.27]等不到 不经意的牵挂
[00:45.65]却没出息的放不下
[00:47.85]你说陪我到某年某月某天
[00:50.52]却把我丢在某日某夜某街
[00:54.17]错的并不是你 而是全世界
[00:58.39]
[00:59.47]你带走我的思念
[01:02.63]却没说抱歉
[01:05.13]一起走过的黑夜
[01:08.39]变一地白雪
[01:10.71]我把记忆都翻遍
[01:14.15]却没有发现
[01:16.46]我们约好的明天
[01:19.95]你留给昨天
[01:22.44]
[01:34.65]你若离去 后会无期
[01:37.57]你若离去 后会无期
[01:40.46]你若离去 后会无期
[01:43.76]
[01:46.32]等不到 手中松开的沙
[01:49.01]被风扬起的很优雅
[01:51.43]等不到 送你蝴蝶发卡
[01:54.61]你的他爱上了短发
[01:56.84]你说陪我到某年某月某天
[01:59.58]却把我丢在某日某夜某街
[02:02.55]错的并不是你 而是全世界
[02:07.06]
[02:07.97]你带走我的思念
[02:11.50]却没说抱歉
[02:14.02]一起走过的黑夜
[02:17.39]变一地白雪
[02:20.16]我把记忆都翻遍
[02:22.99]却没有发现
[02:25.67]我们约好的明天
[02:29.03]你留给昨天
[02:31.55]
[02:45.96]你带走我的思念
[02:49.15]却没说抱歉
[02:51.30]一起走过的黑夜
[02:54.91]变一地白雪
[02:57.29]我把记忆都翻遍
[03:00.91]却没有发现
[03:03.08]我们约好的明天
[03:06.44]你留给昨天
[03:08.92]
[03:10.36]我们约好的明天
[03:15.39]你留给昨天
[03:20.54]
[03:22.04]歌词编辑：末笑源yf`
    ,
    `[00:00.00]作词:孛子
[00:01.00]作曲:华晨宇
[00:02.00]编曲:郑楠
[00:03.00]制作人:郑楠
[00:06.00]配唱制作人翁乙仁
[00:07.00]录音师刘灵
[00:08.00]录音棚：Big J Studio
[00:09.00]和声设计：郑楠
[00:10.00]和声：郑楠
[00:11.00]吉他：牛子健
[00:12.00]混音：赵靖
[00:13.00]OP:上海天娱传媒有限公司
[00:14.00]ISRC CN-D14-14-00071
[00:27.49]夜晚传来钟声
[00:31.55]风熄灭了蜡烛
[00:35.95]钟楼外 他的歌声
[00:42.26]回荡夜空
[00:44.92]镜子里的怪物
[00:49.16]穿着同样衣服
[00:53.54]在无助眼神之中
[00:59.97]是无边的孤独 呜~~~
[01:11.09]沉痛的歌 在诉说 这不是谁的错 喔~
[01:28.36]卡西莫多的礼物 享受孤独
[01:41.55]
[01:55.99]阳光从不光顾
[02:00.07]月光为我伴舞
[02:04.28]巴黎夜晚的钟声
[02:10.21]是我的音符
[02:12.72]如果习惯痛苦
[02:16.88]眼泪不会很苦
[02:20.92]若你伤悲 让我钟声
[02:27.20]给你安慰 呜~~~
[02:37.65]沙哑的歌 含着泪 也为你祝福 呜~~~
[02:54.40]卡西莫多的礼物 享受孤独`
    ,
    `[00:00.000] 作词 : 古小力/黄淩嘉
[00:01.000] 作曲 : 周杰伦
[00:02.000] 编曲 : 黄雨勋
[00:03.000] 制作人 : 周杰伦
[00:04.000] 吉他 : 李庭匡
[00:05.000] 录音师 : 杨瑞代
[00:06.000] 录音室 : JVR Studio
[00:07.000] 混音师 : 杨大纬
[00:08.000] 混音录音室 : 杨大纬录音工作室
[00:09.000] OP : JVR Music Int'l Ltd.ISRC TW-K97-08-015-04
[00:26.69]静止了 所有的花开
[00:33.21]遥远了 清晰了爱
[00:39.51]天郁闷 爱却很喜欢
[00:45.92]那时候 我不懂 这叫爱
[00:52.57]你喜欢 站在那窗台
[00:58.65]你好久 都没再来
[01:05.25]彩色的 时间染上空白
[01:12.33]是你流的泪晕开
[01:17.44]不要你离开
[01:20.29]距离隔不开
[01:23.62]思念变成海
[01:26.23]在窗外进不来
[01:29.82]原谅说太快
[01:33.02]爱成了阻碍
[01:36.28]手中的风筝放太快 回不来
[01:42.61]不要你离开
[01:45.81]回忆划不开
[01:49.00]欠你的宠爱
[01:51.95]我在等待重来
[01:55.56]天空仍灿烂
[01:58.81]它爱着大海
[02:02.01]情歌被打败
[02:05.10]爱已不存在
[02:34.71]你喜欢 站在那窗台
[02:41.28]你好久 都没再来
[02:47.67]彩色的 时间染上空白
[02:54.75]是你流的泪晕开
[02:59.70]不要你离开
[03:02.82]距离隔不开
[03:05.92]思念变成海
[03:08.62]在窗外进不来
[03:12.27]原谅说太快
[03:15.56]爱成了阻碍
[03:18.88]手中的风筝放太快 回不来
[03:25.10]不要你离开
[03:28.20]回忆划不开
[03:31.72]欠你的宠爱
[03:34.32]我在等待重来
[03:37.89]天空仍灿烂
[03:41.22]它爱着大海
[03:44.33]情歌被打败
[03:46.22]爱已不存在`,
    `[00:03.53]虚拟
[00:06.12]
[00:09.94]词曲：陈粒
[00:10.29]演唱：陈粒
[00:12.32]
[00:15.43]固执押韵的排比
[00:18.48]固执幼稚的押韵
[00:22.46]零零散散凑齐了阵营
[00:27.50]
[00:30.82]固执美丽的意义
[00:33.65]固执空洞的美丽
[00:37.47]飘飘然然空中遇见你
[00:42.80]
[00:44.43]你是我未曾拥有
[00:45.16]无法捕捉的亲昵
[00:47.43]我却有你的吻你的魂你的心
[00:51.73]载着我飞呀飞呀飞
[00:54.12]越过了意义
[00:56.49]
[00:58.64]你是我朝夕相伴
[01:00.20]触手可及的虚拟
[01:02.75]陪着我像纸笔像自己像雨滴
[01:06.32]看着我坠啊坠啊坠落到云里
[01:10.71]
[01:21.0]固执有趣的零星
[01:25.60]固执无聊的有趣
[01:28.53]平平淡淡管住了情绪
[01:33.20]
[01:36.75]固执声音的意义
[01:40.77]固执空洞的声音
[01:43.34]摇摇晃晃情绪却满溢
[01:48.18]
[01:50.39]你是我未曾拥有
[01:51.35]无法捕捉的亲昵
[01:54.83]我却有你的吻你的魂你的心
[01:57.31]载着我飞呀飞呀飞
[02:00.27]越过了意义
[02:02.55]
[02:05.80]你是我朝夕相伴
[02:06.2]触手可及的虚拟
[02:09.27]陪着我像纸笔像自己像雨滴
[02:12.19]看着我坠啊坠啊坠落到云里
[02:19.91]
[02:57.25]你是我未曾拥有
[02:58.97]无法捕捉的亲昵
[03:00.47]我却有你的吻你的魂你的心
[03:04.28]载着我飞呀飞呀飞
[03:07.14]越过了意义
[03:09.70]
[03:11.57]你是我朝夕相伴
[03:13.38]触手可及的虚拟
[03:15.0]陪着我像纸笔像自己像雨滴
[03:19.64]看着我坠啊坠啊坠落到云里
[03:25.10]`,
    `[00:00.00] 作词 : 方文山
[00:01.00] 作曲 : 周杰伦
[00:02.00] 编曲 : 林迈可
[00:03.00] 制作人 : 周杰伦
[00:04.00] 吉他 : 林迈可
[00:05.00] 录音师 : 杨瑞代 Gary Yang
[00:06.00] 录音室 : JVR Studio
[00:07.00] 混音师 : 林迈可
[00:08.00] 混音室 : VIP Music
[00:09.00] OP : JVR Music Int’l Ltd.
[00:10.00] SP : Universal Music Publishing Ltd. Taiwan
[00:23.53]塞纳河畔 左岸的咖啡
[00:26.15]我手一杯 品尝你的美
[00:29.32]留下唇印 的嘴
[00:32.03]
[00:34.16]花店玫瑰 名字写错 谁
[00:36.81]告白气球 风吹到 对街
[00:39.95]微笑 在天上飞
[00:42.59]
[00:43.89]你说 你有点难追
[00:46.60]想让 我知难而退
[00:49.29]礼物 不需挑最贵
[00:51.96]只要 香榭的落叶
[00:54.42]喔 营造浪漫 的约会
[00:57.29]不害怕 搞砸一切
[00:59.94]拥有你就拥有 全世界
[01:04.95]亲爱的 爱上你 从那天起
[01:11.28]甜蜜的很轻易
[01:15.58]亲爱的 别任性 你的眼睛
[01:21.97]在说我愿意
[01:25.67]
[01:48.75]塞纳河畔 左岸的咖啡
[01:51.48]我手一杯 品尝你的美
[01:54.59]留下唇印的 嘴
[01:57.30]
[01:59.45]花店玫瑰 名字写错谁
[02:02.10]告白气球 风吹到 对街
[02:05.26]微笑 在天上飞
[02:07.97]
[02:09.23]你说 你有点难追
[02:11.88]想让 我知难而退
[02:14.57]礼物 不需挑最贵
[02:17.22]只要 香榭的落叶
[02:19.76]喔 营造浪漫 的约会
[02:22.57]不害怕 搞砸一切
[02:25.22]拥有你就拥有 全世界
[02:30.24]亲爱的 爱上你 从那天起
[02:36.63]甜蜜的很轻易
[02:40.95]亲爱的 别任性 你的眼睛
[02:47.27]在说我愿意
[02:51.58]亲爱的 爱上你 恋爱日记
[02:57.91]飘香水的回忆
[03:02.27]一整瓶 的梦境 全都有你
[03:08.58]搅拌在一起
[03:12.94]亲爱的 别任性 你的眼睛
[03:21.33]在说我愿意`,
    `[00:00.00]周杰伦 - 烟花易冷
[00:02.00]
[00:03.00]作词：方文山 作曲：周杰伦
[00:05.00]
[00:06.00]LRC：By：sTory丶继续（百度）
[00:10.39] email：361843551@163.com
[00:11.39]繁华声 遁入空门 折煞了世人
[00:17.60]梦偏冷 辗转一生 情债又几本
[00:23.59]如你默认 生死枯等
[00:29.81]枯等一圈 又一圈的年轮
[00:36.20]
[00:36.51]浮图塔 断了几层 断了谁的魂
[00:42.56]痛直奔 一盏残灯 倾塌的山门
[00:48.65]容我再等 历史转身
[00:55.18]等酒香醇 等你弹一曲古筝
[01:00.94]
[01:01.44]雨纷纷 旧故里草木深
[01:07.47]我听闻 你始终一个人
[01:14.05]斑驳的城门 盘踞着老树根
[01:20.38]石板上回荡的是 再等
[01:25.99]
[01:26.33]雨纷纷 旧故里草木深
[01:32.54]我听闻 你仍守着孤城
[01:39.03]城郊牧笛声 落在那座野村
[01:45.31]缘份落地生根是 我们
[01:51.67]
[01:53.95]听青春 迎来笑声 羡煞许多人
[02:00.25]那史册 温柔不肯 下笔都太狠
[02:06.62]烟花易冷 人事易分
[02:12.82]而你在问 我是否还认真
[02:18.58]
[02:18.96]千年后 累世情深 还有谁在等
[02:25.18]而青史 岂能不真 魏书洛阳城
[02:31.34]如你在跟 前世过门
[02:37.89]跟着红尘 跟随我 浪迹一生
[02:43.72]
[02:44.33]雨纷纷 旧故里草木深
[02:50.37]我听闻 你始终一个人
[02:56.91]斑驳的城门 盘踞着老树根
[03:03.02]石板上回荡的是 再等
[03:08.85]
[03:09.26]雨纷纷 旧故里草木深
[03:14.91]我听闻 你仍守着孤城
[03:21.63]城郊牧笛声 落在那座野村
[03:28.04]缘份落地生根是 我们
[03:33.85]
[03:34.60]雨纷纷 旧故里草木深
[03:36.47]我听闻 你始终一个人
[03:38.29]斑驳的城门 盘踞着老树根
[03:40.08]石板上回荡的是 再等
[03:41.31]
[03:41.48]雨纷纷 雨纷纷 旧故里草木深
[03:44.55]我听闻 我听闻 你仍守着孤城
[03:47.00]城郊牧笛声 落在那座野村
[03:52.88]缘份落地生根是 我们
[03:59.26]缘份落地生根是 我们
[04:05.41]伽蓝寺听雨声盼 永恒`,
    `[00:00.00]作曲 : 周杰伦
[00:01.00]作词 : 黄俊郎
[00:11.17]编曲 : 黄雨勋
[00:16.59]麻烦给我的爱人来一杯Mojito
[00:20.79]我喜欢阅读她微醺时的眼眸
[00:24.98]而我的咖啡 糖不用太多
[00:29.15]这世界已经因为她甜得过头
[00:33.31]没有跟她笑容一样浓郁的雪茄
[00:37.45]就别浪费时间介绍收起来吧
[00:41.60]拱廊的壁画 旧城的涂鸦
[00:45.79]所有色彩都因为她说不出话
[00:49.91]这爱不落幕 忘了心事的国度
[00:54.15]你所在之处 孤单都被征服
[00:58.32]铁铸的招牌 错落着就像
[01:02.47]一封封城市 献给天空的情书
[01:06.67]当街灯亮起 Havana漫步
[01:10.82]这是世上最美丽的那双人舞
[01:14.82]
[01:32.30]缤纷的老爷车 跟着棕榈摇曳
[01:34.44]载着海风私奔漫无目的
[01:36.54]董书摊漫着时光香气
[01:38.51]我想 上辈子 是不是就遇过你
[01:40.97]喧嚣的海报躺在 慵懒的阁楼阳台
[01:45.25]而你是文学家笔下的那一片海
[01:48.33]麻烦给我的爱人来一杯Mojito
[01:52.55]我喜欢阅读她微醺时的眼眸
[01:56.70]而我的咖啡 糖不用太多
[02:00.89]这世界已经因为她甜得过头
[02:05.03]这爱不落幕 忘了心事的国度
[02:09.25]你所在之处 孤单都被征服
[02:13.40]铁铸的招牌 错落着就像
[02:17.58]封封城市 献给天空的情书
[02:21.73]当街灯亮起 Havana漫步
[02:25.96]这是世上最美丽的那双人舞
[02:38.54]铁铸的招牌 错落着就像
[02:42.61]一封封城市 献给天空的情书
[02:46.81]当街灯亮起 Havana漫步
[02:51.00]这是世上最美丽的那双人舞`
    ,
    `[00:00.000] 作词 : 林夕
[00:00.213] 作曲 : 西楼
[00:00.426] 编曲 : 西楼/郑楠
[00:00.639] 制作人 : 郑楠
[00:00.852] 配唱制作人 : 郑楠
[00:01.065] 录音师 : 刘灵
[00:01.278] 录音棚 : Big J Studio
[00:01.491] 和声编写 : 西楼/郑楠
[00:01.704] 和声 : 西楼
[00:01.917] 吉他 : 西楼/牛子健
[00:02.130] 混音师 : 赵靖
[00:02.343]OP: Denseline Co,Limited(Warner/Chappell Music H.K.Ltd).
[00:03.343]SP: 百代音乐版权代理(北京)有限公司(EMI Music Publishing China)
[00:03.643]ISRC CN-D14-14-00063
[00:04.543]看着飞舞的尘埃掉下来
[00:14.810]没人发现它存在
[00:18.061]多自由自在
[00:23.245]可世界都爱热热闹闹
[00:27.057]容不下我百无聊赖
[00:34.131]不应该一个人发呆
[00:44.628]只有我守着安静的沙漠
[00:49.286]等待着花开
[00:55.046]只有我看着别人的快乐
[00:59.874]竟然会感慨
[01:05.448]就让我听着天大的道理
[01:10.019]不愿意明白
[01:15.426]有什么是应该不应该
[01:47.209]我的心里住着一个
[01:50.068]苍老的小孩
[01:56.878]如果世界听不明白
[02:00.524]对影子表白
[02:05.305]是不是只有我还在问
[02:08.857]为什么明天更精彩
[02:16.251]烟火里找不到童真的残骸
[02:26.411]只有我守着安静的沙漠
[02:30.871]等待着花开
[02:36.229]只有我看着别人的快乐
[02:40.853]竟然会感慨
[02:46.388]就让我听着天大的道理
[02:50.950]不愿意明白
[02:56.628]只有我就是我好奇怪
[03:01.407]我还在感慨
[03:13.162]风阵阵吹过来为何不回来
[03:23.155]风一去不回来悲不悲哀
[03:33.337]麻木得那么快应不应该
[03:43.430]能不能慢下来
[03:48.789]笑得开怀哭得坦率
[03:53.937]为何表情要让这世界安排
[03:59.080]我就是我我只是我
[04:03.528]只是一场烟火散落的尘埃
[04:21.173]风阵阵吹过来
[04:31.502]风一去不回来
[04:51.553]能不能慢下来
[04:56.654]`
    ,
    `[00:00.00] 作词 : 裴育
[00:01.00] 作曲 : 华晨宇
[00:02.00] 编曲 : 郑楠
[00:03.00] 制作人 : 郑楠
[00:14.23]我嚼着最贵的晚餐
[00:16.84]可惜我无所谓应对这账单
[00:20.08]左右逢源不是个好习惯
[00:23.45]旁若无人要不要试试看
[00:27.00]好不容易脱下天价的衣衫
[00:30.47]不如说我卸下拖累的金砖
[00:33.74]是人是鬼一眼就看的穿
[00:37.24]不用非要学贵族的装扮
[00:41.02]太多废话都无关感情
[00:42.73]太多动作都始于环境
[00:44.67]就像青春期的小孩会被大人酷刑
[00:47.75]理由是 逼迫15岁的心灵
[00:50.14]比成人要理性
[00:51.30]那些道理我们从小就听
[00:53.13]长大后不得不听命运的命
[00:55.30]不是 道理多难履行
[00:56.97]而是现实它太任性
[00:58.53]多少人能看懂人心的空镜
[01:00.44]只不过活着活着只活出了年龄
[01:03.12]我攥着别人遥不可及的东西
[01:05.63]一边自嘲一边冷眼那些肮脏的事情
[01:08.68]如果真话
[01:09.59]搅局假话不如闭嘴来的清静
[01:12.09]鄙视那含蓄的交易
[01:14.17]都像强心针样的陷阱
[01:15.91]让人 无时无刻高速运转
[01:17.94]该怎么保持清醒
[01:19.37]趁你们还热爱浑水摸鱼的游戏
[01:21.95]一本正经
[01:22.83]披着羊皮创造你们的使命
[01:24.97]当真的傻子乐此不疲在消耗着热情
[01:28.42]装傻的戏子
[01:29.73]你可赚到了吐沫飞溅的缓刑
[01:31.84]怕被拆穿还没被拆穿
[01:33.42]本就是你要的刺激
[01:36.20]I'm boring 我只想一个人不说话
[01:49.61]I'm boring 我只想一个人不用笑
[02:03.23]我很想望着一闪一闪发光的星星
[02:06.14]像其他同学一样唱着亮晶晶
[02:09.03]可我的眼前饱满
[02:10.37]来自虚伪世界的轰鸣
[02:12.20]我还有很多事做很多歌听
[02:14.64]可我就想窝在沙发做些无聊的点评
[02:17.67]朋友
[02:18.20]在醉酒后咒骂世界不公平
[02:20.41]滑稽的排列组合让我想起了曾经
[02:23.24]那时候爸妈总算分开的场景
[02:25.78]和我高举成绩单强颜镇定的表情
[02:28.44]老爸你揣着银子
[02:29.66]到底是应酬还是旅行
[02:31.32]闹吧
[02:31.86]我总算找到适者生存的途径
[02:34.42]总有人说的好听做起来像个逃兵
[02:37.31]过河拆桥 真的好吗
[02:39.02]但凡是活着就得习惯
[02:40.74]这附带悬念的案情
[02:42.18]我大脑都是各种嘴脸在抢镜
[02:45.14]行吧
[02:45.69]我看够了自私的目的 生硬的交情
[02:48.11]我听够了善意的欺瞒 辩驳的矫情
[02:50.66]所谓的个性 并非教养的不明
[02:53.29]谁来解释下为什么好人卡那么流行
[02:55.83]得到它 等于判定了人性
[02:58.06]I'm boring 我只想一个人不说话
[03:11.86]I'm boring 我只想一个人不用笑
[03:26.34]我嚼着最贵的晚餐
[03:28.81]可惜我无所谓应对这账单
[03:32.09]左右逢源不是个好习惯
[03:35.52]旁若无人要不要试试看`
]

//选中的音乐id用于更新歌词
var updateLyric = 0;
function changeLyric() {
    return reLyric[updateLyric];
}

//点击歌单的音乐时
function playMylove(id) {
    switch (id) {
        case 0:
            updateLyric = 0;
            document.getElementById('bottom-one').src = "img/houhuiwuqi.png"
            document.getElementById('bottom-name').innerHTML = "后会无期-汪苏泷"
            document.getElementById('switchAudio').src = "audio/hhwq.mp3"
            break;
        case 1:
            updateLyric = 1;
            document.getElementById('bottom-one').src = "img/kaximoduo.jpg"
            document.getElementById('bottom-name').innerHTML = "卡西莫多的礼物-华晨宇"
            document.getElementById('switchAudio').src = "audio/kxmd.mp3"
            break;
        case 2:
            updateLyric = 2;
            document.getElementById('bottom-one').src = "img/v2.jpg"
            document.getElementById('bottom-name').innerHTML = "花海-周杰伦"
            document.getElementById('switchAudio').src = "audio/huahai.mp3"
            break;
        case 3:
            updateLyric = 3;
            document.getElementById('bottom-one').src = "img/work0.jpg"
            document.getElementById('bottom-name').innerHTML = "虚拟-陈粒"
            document.getElementById('switchAudio').src = "audio/_xuli.mp3"
            break;
        case 4:
            updateLyric = 4;
            document.getElementById('bottom-one').src = "img/gbqq.webp"
            document.getElementById('bottom-name').innerHTML = "告白气球-周杰伦"
            document.getElementById('switchAudio').src = "audio/gbqq.mp3"
            break;
        case 5:
            updateLyric = 5;
            document.getElementById('bottom-one').src = "img/one.jpg"
            document.getElementById('bottom-name').innerHTML = "烟花易冷-周杰伦"
            document.getElementById('switchAudio').src = "audio/yhyl.mp3"
            break;
        case 6:
            updateLyric = 6;
            document.getElementById('bottom-one').src = "img/work0.jpg"
            document.getElementById('bottom-name').innerHTML = "Mojito-周杰伦"
            document.getElementById('switchAudio').src = "audio/Mojito.mp3"
            break;
        case 7:
            updateLyric = 7;
            document.getElementById('bottom-one').src = "img/yhldca.webp"
            document.getElementById('bottom-name').innerHTML = "烟火里的尘埃-华晨宇"
            document.getElementById('switchAudio').src = "audio/yhldca.mp3"
            break;
        case 8:
            updateLyric = 8;
            document.getElementById('bottom-one').src = "img/wlr.webp"
            document.getElementById('bottom-name').innerHTML = "无聊人-华晨宇"
            document.getElementById('switchAudio').src = "audio/wlr.mp3"
            break;
    }
    //切换播放图标
    audioPlaying = 0
    audioPlay();
    //播放新音乐
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.load(); // 加载新的音频文件
    audioPlayer.play(); // 开始播放新的音频
}

// 图片滚动索引图标高亮显示
function lightHeight(str) {
    document.getElementById(str).style.backgroundColor = "rgba(255, 255, 255, 0.7)"
}

function cgePhoto(str) {
    lightHeight(str);
    let idPhtoto;
    switch (str) {
        case 'p1':
            currentIndex = 0;
            idPhtoto = 0;
            break;
        case 'p2':
            currentIndex = 1;
            idPhtoto = 1;
            break;
        case 'p3':
            currentIndex = 2;
            idPhtoto = 2;
            break;
    }
    // 设置再次显示在页面中
    photos[idPhtoto].style.display = 'block';
    let phtotoSum = 3;
    for (id = 0; id < phtotoSum; id++) {
        // 设置不显示在页面中
        if (id != idPhtoto) {
            photos[id].style.display = 'none';
        }
    }
}
function rePhoto(str) {
    document.getElementById(str).style.backgroundColor = ""
}

//实现图片滚动
function switchPhoto() {
    // 设置不显示在页面中
    photos[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % photos.length;
    // 设置再次显示在页面中
    photos[currentIndex].style.display = 'block';
    console.log(currentIndex);

    rePhoto('p1'); rePhoto('p2'); rePhoto('p3');

    switch (currentIndex) {
        case 0:
            lightHeight('p1');
            break;
        case 1:
            lightHeight('p2');
            break;
        case 2:
            lightHeight('p3');
            break;
    }
}
//每隔一段时间执行函数switchPhoto
setInterval(switchPhoto, interval);


// function change() {
//     var c = document.getElementById('addDiv')
//     c.innerHTML = ``;
// }
PopPu
// 清除颜色
function initializeColor() {
    document.getElementById("forme").style.background = "";
    document.getElementById("mylove").style.background = "";
    document.getElementById("mycollote").style.background = "";
    document.getElementById("forme").style.color = "";
    document.getElementById("mylove").style.color = "";
    document.getElementById("mycollote").style.color = "";
}
// 标记选中的功能区
function MarkCheck(str) {
    let element = document.getElementById(str);
    element.style.backgroundColor = "red";
    element.style.color = "white";
}

function OnclickleftMe(str) {
    if (beOnclick(str)) {
        return;
    }
    changeBeOn(str);
    initializeColor();

    MarkCheck(str);

    // lastPage = atPage;

    switch (str) {
        case "forme":
            // atPage = 0;
            document.getElementById("addDiv").innerHTML = leftEntirety[0];
            document.getElementById("addDiv").style.backgroundColor = "white";
            break;
        case "mylove":
            // atPage = 1;
            document.getElementById("addDiv").innerHTML = leftEntirety[1];
            document.getElementById("addDiv").style.backgroundColor = "white";
            break;
        case "mycollote":
            // atPage = 2;
            document.getElementById("addDiv").innerHTML = leftEntirety[2];
            document.getElementById("addDiv").style.backgroundColor = "white";
            break;
    }

}

function MousOutDiv(str) {
    if (beOnclick(str) == 1) {
        return;
    }
    document.getElementById(str).style.background = ""
}

function changeBeOn(str) {
    switch (str) {
        case "forme":
            beOnclick_forme = 1
            beOnclick_mylove = 0
            beOnclick_mycollote = 0
            break;
        case "mylove":
            beOnclick_forme = 0
            beOnclick_mylove = 1
            beOnclick_mycollote = 0
            break;
        case "mycollote":
            beOnclick_forme = 0
            beOnclick_mylove = 0
            beOnclick_mycollote = 1
            break;
    }
}
function MousInDiv(str) {
    // 检查str是否已被选择
    if (beOnclick(str)) {
        return;
    }
    document.getElementById(str).style.background = "#ccc"
}
// 检查是否已被选中
function beOnclick(str) {
    switch (str) {
        case 'forme':
            return beOnclick_forme;
        case 'mylove':
            return beOnclick_mylove;
        case 'mycollote':
            return beOnclick_mycollote;
        default:
            return 0;
    }
}
//鼠标进入时弹出
function PopPu(str) {
    document.getElementById(str).style.top = '65%';
}
//离开时缩回
function retraction(str) {
    document.getElementById(str).style.top = '80%';
}

pageback
//歌词lyric
function openLyric() {
    beOnclick_forme = 0
    beOnclick_mylove = 0
    beOnclick_mycollote = 0
    initializeColor();
    document.getElementById("addDiv").innerHTML = `<div class="lrcList">
        <li class="container"></li>
    </div>`
    document.getElementById("addDiv").style.backgroundColor = "#BEFFF9"
    var lrc = changeLyric();

    
    // 把歌词字符串处理为 Object 对象
    /**
     *   解析歌词字符串，的到歌词对象数组
     *   每个歌词对象：
     *   {
            time:开始时间,
            word:歌词
     *   }
    */
    function parseLRC(LRC) {
        let lines = LRC.split('\n'); // 把歌词转为数组
        let LRCArr = [];  // 歌词数组
        // 遍历数组
        lines.forEach(item => {
            // item数据： [00:06.77]安静地又说分开
            // 切割字符
            let parts = item.split("]"); //  [00:06.77 , 安静地又说分开
            let timer = parts[0].slice(1).trim();  // 00:06.77
            let obj = {
                time: parseTime(timer),
                word: parts[1].trim() == "" ? "" : parts[1]  // 安静地又说分开
            }
            // console.info( obj );
            LRCArr.push(obj);
        });
        return LRCArr;
    }
    /*
        把时间字符串转为时间数字
        eg:
        01:06.77  => 66.77
    */
    function parseTime(timer) {
        let t = timer.split(":");
        let result = Number(t[0]) * 60 + Number(t[1]);
        return result;
    }


    /*
    * 计算出，再当前播放器播放到第几秒的情况
    * LRCData 应该高亮显示的歌词下标。
    * 高亮歌词是: 比当前时间数【第一次大】的上一句。
    * 如果没有任何歌词显示，就为 -1 。
    * 返回值：当前歌词对应的索引
    */

    let doms = {
        audio: document.querySelector("audio"),
        lrcList: document.querySelector(".lrcList"),
        container: document.querySelector(".container")
    }
    function findIndex() {
        // 播放器当前时间
        let index = -1;
        let curTime = doms.audio.currentTime;
        for (let i = 0; i <= LRCData.length - 1; i++) {
            if (curTime < LRCData[i].time) {
                index = i - 1;
                return index;
            }
        }
        // 找遍了，都没有歌词，说明播放完毕里，显示最后一句歌词。
        index = LRCData.length - 1
        return index;
    }

    // 界面部分
    /*
      生成歌词 li
    */
    function createLrcList(lrc) {
        // 避免多次操作 DOM。创建一个 DOM 片段，它不会显示，但是可以集中处理 DOM。
        let frag = document.createDocumentFragment();
        doms.lrcList.innerHTML = "";
        lrc.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = item.word;
            frag.appendChild(li);
        });
        doms.lrcList.appendChild(frag);
    }

    /*
      设置歌词 ul 的偏移量
    */
    // function setOffset(index) {
    //     let dis = -1 * (index * liH + liH / 2 - conH / 2);  // 位移距离
    //     doms.lrcList.style.transform = `translateY(${dis}px)`;
    //     console.info(dis);
    // }
    /*
      设置歌词容器的滚动位置，并限制滚动范围
    */
    function setOffset(index) {
        // let dis = index * liH; // 滚动距离
        // let maxDis = doms.lrcList.offsetHeight - conH; // 最大滚动距离（歌词总高度减去容器可见高度）
        // dis = Math.min(dis, maxDis); // 限制滚动范围
        // doms.querySelector(".container").scrollTop = dis;

    }




    /*
      设置歌词高亮
    */
    function setLight(index) {
        let ul = doms.lrcList;
        let lis = ul.children;
        let cur = document.querySelector(".current");
        if (cur) { // 如果存在
            cur.classList.remove("current");
        }
        lis[index].classList.add("current");
    }

    let LRCData = parseLRC(lrc);
    createLrcList(LRCData);  // 创造歌词 li
    let conH = doms.container.clientHeight;  // 容器高度
    let liH = doms.lrcList.children[0].clientHeight;  // li 高度
    // 初始化歌词位置，让第一句歌词在歌词区中间
    doms.lrcList.style.transform = `translateY(${-1 * (liH / 2 - conH / 2)}px)`;

    doms.audio.addEventListener("timeupdate", function () {
        let index = findIndex();
        setLight(index);  // 歌词位移
        setOffset(index); // 歌词高亮
    });
}

var audioPlaying = 0;

function audioPlay() {
    let audio_ = document.querySelector('#audio-player');
    if (!audioPlaying) {
        //播放
        audio_.play();
        audioPlaying = 1;
        document.getElementById("PlayOrPaseu").setAttribute('src', 'img/pause-circle.svg');
    } else {
        //暂停
        audio_.pause();
        audioPlaying = 0;
        document.getElementById("PlayOrPaseu").setAttribute('src', 'img/play-circle.svg');
    }
}
openLyric
//播放进度条
var audio = document.getElementById('audio-player');
var progressBar = document.getElementById('progress');

audio.addEventListener('timeupdate', function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

//我喜欢的音乐列表
var myLove = []


//添加到我喜欢的音乐
function addMyLove() {

}

//点击歌单
function SongList(str) {
    switch (str) {
        case 11:
            break;
    }
}
//跳转页面
function redirectToPage(page) {
    window.location.href = page;
}

// document.addEventListener('DOMContentLoaded', function () {

//     var musicPlaying = sessionStorage.getItem('musicPlaying');
//     if (musicPlaying === 'true') {
//         // 恢复音乐播放
//         audio.play();
//     } else {
//         // 音乐暂停或停止
//         audio.pause();
//     }
// });


function SongList(str) {
    beOnclick_forme = 0
    beOnclick_mylove = 0
    beOnclick_mycollote = 0
    initializeColor();
    switch (str) {
        case '1-1':
            document.getElementById("addDiv").innerHTML = leftEntirety[3];
            document.getElementById("addDiv").style.backgroundColor = "white";
            break;
    }
}