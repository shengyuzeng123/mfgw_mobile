$.extend({
    //纯文本提示
    tip: function (text, time) {
        // var master='<div class="master"></div>'
        if ($('.tip').length <= 0) {
            var tpl = '<div class="tip">' + text + '</div>';
            $('html').append(tpl);
        } else {
            $('.tip').text(text);
        }
        setTimeout(function () {
            $('.tip').fadeIn(100);
        }, 100)
        setTimeout(function () {
            $('.tip').fadeOut(100);
        }, time)
    }
});

// 照片弹窗
$.fn.pic = function (picBox) {
    if ($('.master').length <= 0) {
        var tpl = '<div class="master"></div>';
        $('html').append(tpl);
    }
    if ($('.master-pic-wrapper').length <= 0) {
        var tpl2 = '<div class="master-pic-wrapper">' +
            '<img class="loading" src="http://store.meflourish.com/mfgw/mobile/img/loading.png" alt="">'
            + '<img class="master-pic" src=""></div>';
        $('html').append(tpl2);
    }

    var master = $('.master'),
        master_pic_wrapper = $('.master-pic-wrapper'),
        pic = $('.master-pic-wrapper')[0],
        master_pic = $('.master-pic'),
        winHeight = $(window).height(),
        winWidth = $(window).width(),
        flag = false;

    //图片的缩放、平移
    var zoom = new Hammer(pic);
    var x = 0,
        y = 0,
        scale = 1;
    zoom.get('pinch').set({enable: true});
    zoom.get('pan').set({direction: Hammer.DIRECTION_ALL});
    zoom.on('pinchstart', function (e) {
        pic.style.transform = "scale(" + scale + ")";
    }).on("pinchmove", function (e) {
        scale = ((e.scale - 1) * 0.1) + scale;
        if (scale > 3) {
            scale = 3;
        } else if (scale < 0.5) {
            scale = 0.5
        }
        pic.style.transform = "translate(" + x + "px," + y + "px) scale(" + scale + ")";
    }).on('pinchend', function (e) {
        // scale = e.scale;
    }).on('panmove', function (e) {
        var dx = x + e.deltaX,
            dy = y + e.deltaY;
        master_pic_wrapper.css({'transform': 'translate(' + dx + 'px,' + dy + 'px) scale(' + scale + ')'});
    }).on('panend', function (e) {
        x = x + e.deltaX;
        y = y + e.deltaY;
    }).on('doubletap', function (e) {
            flag = !flag;
            if (scale >= 2) {
                flag = false;
            }
            if (flag) {
                scale = 2;
                pic.style.transform = "translate(" + x + "px," + y + "px) scale(" + scale + ")";
            } else {
                x = 0;
                y = 0;
                scale = 1;
                pic.style.transform = "scale(" + scale + ")";
            }
    });

    this.on('click', picBox, function (event) {
        master.fadeIn(100);
        master_pic_wrapper.css('transform', 'scale(1)');
        var img = $(this).find('img'),
            naturalWidth = img[0].naturalWidth,
            naturalHeight = img[0].naturalHeight,
            rate = 1;
        if (naturalHeight > winHeight) {
            rate = (winHeight / naturalHeight) - 0.02;
        } else if (naturalWidth > winWidth) {
            rate = (winWidth / naturalWidth) - 0.05;
        }
        naturalWidth = naturalWidth * rate;
        naturalHeight = naturalHeight * rate;
        master_pic_wrapper.width(naturalWidth).height(naturalHeight).css({
            'left': 'calc(50% - ' + naturalWidth / 2 + 'px)',
            'top': 'calc(50% - ' + naturalHeight / 2 + 'px)',
        });
        var src = img.prop('src').replace('pic', 'bigPic');
        master_pic.prop('src', '').prop('src', src);
        master_pic[0].onload = function () {
            master_pic.css('opacity', '1');
        };
        master_pic_wrapper.fadeIn(100);
    });

    master.click(function () {
        hideMater();
    });

    function hideMater() {
        x = 0;
        y = 0;
        scale = 1;
        master_pic_wrapper.fadeOut(100);
        master.fadeOut(100);
        master_pic.css('opacity', '0');
    }
};

