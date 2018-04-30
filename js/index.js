window.onload = function () {
    var Resigter = document.getElementById("Resigter");

    Resigter.onclick = function () {
        var TCdiv = document.getElementById("TCdiv");
        var DCdivHtml = TCdiv.innerHTML;
        showLayer(DCdivHtml,940,540,closeCallback);
    }
    var Login = document.getElementById("Login");

    Login.onclick = function () {
        var TCdiv1 = document.getElementById("TCdiv1");
        var DCdivHtml = TCdiv1.innerHTML;
        showLayer(DCdivHtml,940,540,closeCallback);
    }
    //TCdiv1
    function closeCallback() {
        var ErrorMsg = document.querySelector(".error-msg");
        ErrorMsg.innerHTML = "";
    }
    function showLayer(html,width,height,closeCallback){
        // 显示弹出层遮罩
        var layerMask = document.querySelector("#layer-mask");
        layerMask.style.display = "block";
        // 显示弹出层窗体
        var layerPop = document.querySelector("#layer-pop");
        layerPop.style.display = "block";
        // 设置弹出层窗体样式
        layerPop.style.width = width;
        layerPop.style.height = height;
        // 填充弹出层窗体内容
        var layerContent = document.querySelector("#layer-content");
        layerContent.innerHTML = html;
        // 弹出层关闭按钮绑定事件
        var layerClose = document.querySelector("#layer-close");
        layerClose.onclick = function() {
            // 弹出层关闭
            hideLayer();
            // 关闭的回调函数
            closeCallback();
        }
    }
    // 隐藏弹出层
    function hideLayer(){
        // 弹出层关闭
        var layerMask = document.querySelector("#layer-mask");
        var layerPop = document.querySelector("#layer-pop");
        layerMask.style.display = "none";
        layerPop.style.display = "none";
    }
}