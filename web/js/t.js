var xhr = new XMLHttpRequest();
xhr.open('GET', 'lrc/后会无期.lrc', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var lrcContent = xhr.responseText;
        // 将歌词内容赋值给 lrc 变量
        var lrc = lrcContent;
        console.log(lrc); // 输出歌词内容
        document.getElementById("p").innerHTML = "'" + lrc + "'";
    }

};
xhr.send();

