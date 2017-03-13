function detectOrient(portrait, landscape) {
    var storage = localStorage;
    var data = storage.getItem('J-recordOrientX');
    var w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    var _Width = 0,
        _Height = 0;
    if(!data) {
        _Width = window.screen.width;
        _Height = window.screen.height;
        storage.setItem('J-recordOrientX',_Width + ',' + _Height);
    }else {
        var str = data.split(',');
        _Width = str[0];
        _Height = str[1];
    }
    if(w == _Width) {
        // 竖屏
        if(portrait) portrait()
        return;
    }
    if(w == _Height){
        // 横屏
        if(landscape) landscape()
        return;
    }
}

module.exports = detectOrient