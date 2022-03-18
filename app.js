(function _(a,b,c,d,e){var f=window.console;f&&Math.floor(new Date().getTime()/1e3)-b>7*24*60*60&&f.warn("The Facebook JSSDK is more than 7 days old.");if(window[c])return;if(!window.JSON)return;var g=window[c]={__buffer:{replay:function(){var a=this,b=function(d){var b=window[c];a.calls[d][0].split(".").forEach(function(a){return b=b[a]});b.apply(null,a.calls[d][1])};for(var d=0;d<this.calls.length;d++)b(d);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(a){g.__buffer.opts=a}};for(var b=0;b<d.length;b++){f=d[b];if(f in g)continue;var h=f.split("."),i=h.pop(),j=g;for(var k=0;k<h.length;k++)j=j[h[k]]||(j[h[k]]={});j[i]=function(a){if(a==="init")return;return function(){g.__buffer.calls.push([a,Array.prototype.slice.call(arguments)])}}(f)}k=document.createElement("script");k.src=a;k.async=!0;e&&(k.crossOrigin="anonymous");h=document.getElementsByTagName("script")[0];h.parentNode&&h.parentNode.insertBefore(k,h)})("https:\/\/connect.facebook.net\/en_US\/sdk.js?hash=98ed62b3ca1105c3ff2d7e26c66d971e", 1647440681, "FB", ["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"], true);
const s1 = document.getElementById("magnifying_area");
const s2 = document.getElementById("magnifying_img");
s1.addEventListener("mousemove",function(event){
    clientX = event.clientX - s2.offsetLeft
    clientY = event.clientY - s2.offsetTop
    mwidth = s2.offsetWidth
    mheight = s2.offsetHeight
    clientX = clientX / mwidth*100
    clientY = clientY / mheight*100
    s2.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(2)'
    //s2.style.transform = 'translate(-50%,-50%) scale(2)'
});
s1.addEventListener("mouseleave",function(){
    s2.style.transform = 'translate(-50%,-50%) scale(1)'
});
var cmt= document.getElementsByClassName("comment-sst");
$(document).ready(function(){
    var stt=2;
    $("#click-button").click(function(){
        next=stt;
        if (cmt.length-stt < 6)
        {
            for (var i=1;i<=cmt.length-stt;i++)
                $(cmt).eq(next+i).show();
             $(".text-center").hide();
            
        }
        else{
            for (var i=1;i<=3;i++)
                $(cmt).eq(next+i).show();
            stt+=3;
        }
        
        

        console.log(stt);
    });
});
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var alertTrigger1 = document.getElementById('liveAlertBtn1')
var alertTrigger2 = document.getElementById('liveAlertBtn2')
var alertTrigger3 = document.getElementById('liveAlertBtn3')
var alertTrigger4 = document.getElementById('liveAlertBtn4')
var alertTrigger5 = document.getElementById('liveAlertBtn5')
var alertTrigger6 = document.getElementById('liveAlertBtn6')
var alertTrigger7 = document.getElementById('liveAlertBtn7')
var alertTrigger8 = document.getElementById('liveAlertBtn8')
var alertTrigger9 = document.getElementById('liveAlertBtn9')
var alertTrigger10 = document.getElementById('liveAlertBtn10')
var alertTrigger11 = document.getElementById('liveAlertBtn11')
function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
}
if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger1) {
    alertTrigger1.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger2) {
    alertTrigger2.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger3) {
    alertTrigger3.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger4) {
    alertTrigger4.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger5) {
    alertTrigger5.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger6) {
    alertTrigger6.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger7) {
    alertTrigger7.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger8) {
    alertTrigger8.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger9) {
    alertTrigger9.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger10) {
    alertTrigger10.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger11) {
    alertTrigger11.addEventListener('click', function () {
      alert('Hệ thống đang cập nhật !', 'success')
    })
}
function Showslide(n){
    var i;
    var slide = document.getElementsByClassName("content-tab-list");
    var demo = document.getElementsByClassName("tab-item");
    var page = document.getElementById("pages");
    for (i=0;i<slide.length;i++)
        slide[i].style.display = "none";
    for (i=0;i<demo.length;i++)
        demo[i].className = demo[i].className.replace(" tab-active","");
    slide[n].style.display= "block";
    demo[n].className += "  tab-active";
    if (n==0)
        page.style.display="block";
    else   
        page.style.display="none";
}
document.getElementById("page1").onclick = function(){
    s2.src = page1.src;
};
document.getElementById("page2").onclick = function(){
    s2.src = page2.src;
};
document.getElementById("page3").onclick = function(){
    s2.src = page3.src;
};
document.getElementById("page4").onclick = function(){
    s2.src = page4.src;
};
document.getElementById("page5").onclick = function(){
    s2.src = page5.src;
};
document.getElementById("page6").onclick = function(){
    s2.src = page6.src;
};
