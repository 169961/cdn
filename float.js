adDomain = '1002.men';

function setCookie(name,value)
{
    var Minute = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Minute*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return false;
}
// JavaScript Document
lastScrollY = 0;
function heartBeat()
{
    var diffY;
    if (document.documentElement && document.documentElement.scrollTop)
        diffY = document.documentElement.scrollTop;
    else if (document.body)
        diffY = document.body.scrollTop
    else {/*Netscape stuff*/
    }

    percent = .1 * (diffY - lastScrollY);
    if (percent > 0)percent = Math.ceil(percent);
    else percent = Math.floor(percent);
    document.getElementById("left2ad").style.top = parseInt(document.getElementById("left2ad").style.top) + percent + "px";
    document.getElementById("right2ad").style.top = parseInt(document.getElementById("left2ad").style.top) + percent + "px";

    lastScrollY = lastScrollY + percent;
}

left_ad = "<div id=\"left2ad\" style='left:2px;POSITION:absolute;TOP:50px;z-index:99;'>" +
		"<a href=JavaScript:; onclick=\"left2ad.style.display = 'none';setCookie('flaotad_close', '1');\"><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/close.gif' style='width: 120px;'></a><br>" +
		"<a href='https://" + adDomain + "/redirect.php?go=f1L' target='_blank'><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/f1L.gif' style='width: 120px; height: 280px;'></a><br>" +
        "<a href=JavaScript:; onclick=\"left2ad.style.display = 'none';setCookie('flaotad_close', '1');\"><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/close.gif' style='width: 120px;'></a></div>"

right_ad = "<div id=\"right2ad\" style='right:2px;POSITION:absolute;TOP:650px;z-index:99;'>" +
		"<a href=JavaScript:; onclick=\"right2ad.style.display = 'none';setCookie('flaotad_close', '1');\"><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/close.gif' style='width: 120px;'></a><br>" +
		"<a href='https://" + adDomain + "/redirect.php?go=f1R' target='_blank'><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/f1R.gif' style='width: 120px; height: 280px;'></a><br>" +
        "<a href=JavaScript:; onclick=\"right2ad.style.display = 'none';setCookie('flaotad_close', '1');\"><img border='0' src='https://cdn.jsdelivr.net/gh/sex169hub/cdn@master/close.gif' style='width: 120px;'></a></div>"

/* 显示广告 */
/*
if (getCookie('flaotad_close') != '1'){
	document.write(left_ad);
	document.write(right_ad);
	window.setInterval("heartBeat()", 1);
}
*/

//使用javascript回傳使用者瀏覽裝置的版本
/*
var mobile = 1;
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var mobile = 0;
	if (getCookie('flaotad_close') != '1'){
        document.write(left_ad);
        document.write(right_ad);
        window.setInterval("heartBeat()", 1);
    }
}
*/

    // 随机
    /*
    var maxNum = 10;  
    var minNum = 1;  
    var num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    if(num > 8) {
        jsUrl = '';
    } else if (num > 5) {
        jsUrl = '';
    } else {
        jsUrl = '';
    }
    */
    
    // 移动底部悬浮
    /*
    if (mobile == 1) {
        //底漂 body加長100px
        document.body.style.margin = "0px 0px 100px 0px";
        jsUrl = 'https://kw.9ipin.cn/s.php?id=3673&ispc=1&t=' + Math.random();
        incloudJS=document.createElement('script');
        incloudJS.setAttribute('type','text/javascript');
        incloudJS.setAttribute('async',true);
        incloudJS.setAttribute('src',jsUrl);
        document.body.appendChild(incloudJS);
    }
    */

    
    // 右下角悬浮
    /*
    jsUrl2 = '';
    incloudJS2=document.createElement('script');
    incloudJS2.setAttribute('type','text/javascript');
    incloudJS2.setAttribute('async',true);
    incloudJS2.setAttribute('src',jsUrl2);
    document.body.appendChild(incloudJS2);
    */
