function InitPoi(){
    loadlive2d('live2d', `${live2d_Path}model.json.php`,showConsoleTips("加载"));
}
function ChangePoi(){
    loadlive2d('live2d', `${live2d_Path}model.json.php`,showConsoleTips("更换"));
}
function showConsoleTips(content){
    var style_green = "font-family:'微软雅黑';font-size:1em;background-color:#34a853;color:#fff;padding:4px;";
    var style_green_light = "font-family:'微软雅黑';font-size:1em;background-color:#42d268;color:#fff;padding:4px;";
    console.log("%cPoiLive2d%cPoi模型" + content + "完成", style_green, style_green_light);$("#live2d").animate({opacity:'1'},100);
}
setTimeout("InitPoi()",500);