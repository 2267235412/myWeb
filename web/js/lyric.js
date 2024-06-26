//播放进度条
var audio = document.getElementById('audio-player');
var progressBar = document.getElementById('progress');

audio.addEventListener('timeupdate', function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

function openLyric() {
    beOnclick_forme = 0
    beOnclick_mylove = 0
    beOnclick_mycollote = 0
    document.getElementById("lrcDiv").style.backgroundColor = "#BEFFF9"
    var lrc = `[ti:后会无期]
[ar:汪苏泷&徐良]
[al:不良少年]
[by:末笑源]
[00:00.00]后会无期
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
[03:22.04]歌词编辑：末笑源yf`;

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
    function setOffset(index) {
        let dis = -1 * (index * liH + liH / 2 - conH / 2);  // 位移距离
        doms.lrcList.style.transform = `translateY(${dis}px)`;
        console.info(dis);
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


//播放进度条
var audio = document.getElementById('audio-player');
var progressBar = document.getElementById('progress');

audio.addEventListener('timeupdate', function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

//跳转页面
function redirectToPage(page) {
    //缓存音乐
    sessionStorage.setItem('musicPlaying', audio.paused ? 'false' : 'true');
    window.location.href = page;
}


function simulateLinkClick(str) {
    sessionStorage.setItem('musicPlaying', audio.paused ? 'false' : 'true');
    // 创建一个<a>元素
    var link = document.createElement('a');

    // 设置链接的href属性
    link.setAttribute('href', str);

    // 将链接添加到文档中
    document.body.appendChild(link);

    // 模拟点击超链接
    link.click();

    // 在完成后从文档中移除链接元素
    document.body.removeChild(link);
}