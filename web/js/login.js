//条款是否被选中
var agree = 0;
//验证码
var key;

//检查是否勾选协议
function isAgree() {
    if (!agree) {
        alert("请勾选服务协议");
        return 0;
    }
    else
        return 1;

}

//检查是否手机号
function checkUsername() {
    var usernameElement = document.getElementById('username');
    var username = usernameElement.value;

    var pattern = /^1\d{10}$/;
    var isValid = pattern.test(username);

    if (!isValid) {
        alert('输入的手机号不符合要求');
        return 0;
    }
    return 1;
}
//检查验证码
function checkKey() {
    let userInput = document.getElementById('password').value;
    if (userInput == key)
        return 1;
    alert("请输入正确的验证码");
    return 0;
}

//点击登录
function LogIn() {
    if (isAgree() && checkUsername() && checkKey()) {
        window.location.href = "test.html";
    }
}

//点击服务协议
function onclickAgreement() {
    if (!agree)
        agree = 1;
    else
        agree = 0;
}

//发送验证码进入倒计时
function sendCode(codeId) {
    // 获取元素
    var codeElement = document.getElementById(codeId);
    var countdownElement = document.getElementById('countdown');

    // 禁用点击事件
    codeElement.onclick = null;

    // 设置倒计时时间（单位：秒）
    var secondsLeft = 60;

    // 更新倒计时显示的秒数
    countdownElement.innerText = secondsLeft;

    // 定义计时器
    var timer = setInterval(function () {
        secondsLeft--;
        countdownElement.innerText = secondsLeft;

        // 倒计时结束时清除计时器，并恢复点击事件
        if (secondsLeft === 0) {
            clearInterval(timer);
            codeElement.onclick = function () {
                sendCode('code');
            };
            countdownElement.innerText = '';
        }
    }, 1000);

    key = generateRandomKey();

}
//生成一个4位随机数
function generateRandomKey() {
    var key = Math.floor(Math.random() * 9000) + 1000;
    console.log(key);
    return key.toString();
}
