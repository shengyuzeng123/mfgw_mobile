<template>
    <div id="cases">
        <div id="cases-nav-box">
            <div id="cases-nav">
                <div id="left-box">
                    <img id="left" src="static/img/cases/left.png" alt="" @click="back">
                </div>
                <div class="cases-pagination-wrapper">
                    <div class="swiper-pagination cases-pagination">
                    </div>
                </div>
            </div>
        </div>

        <div class="video-box">
            <div class="player animated">
                <div class="video-line"></div>
                <img id="close" src="static/img/cases/close.png" alt="">
                <video-player class="video-player vjs-custom-skin"
                              x5-video-player-type="h5"
                              x5-video-player-fullscreen="true"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions"
                >
                    <!--@play="onPlayerPlay($event)"-->
                    <!--@pause="onPlayerPause($event)"-->
                </video-player>
                <div id="video-title"></div>
            </div>
        </div>
        <div class="swiper-container cases-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(c,index) in video" v-bind:key="index">
                    <div class="wrapper"
                         :class="{'ifsub':c.ifsub,'pic-wrapper':c.ifpic}">
                    </div>
                    <div class="more" @click="getCases(c)" style="display: none">加载更多</div>
                    <div class="nomore">-没有更多了-</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import works from '../assets/js/works2.js'

    export default {
        name: 'Cases',
        data() {
            return {
                video: works.works,
//              flag: true,
                playerOptions: {
//                  playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://store.meflourish.com/mfgw/video/非常突然预告片.mp4" //你的m3u8地址（必填）
                    }],
                    poster: "", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //        controlBar: {
                    //          timeDivider: true,
                    //          durationDisplay: true,
                    //          remainingTimeDisplay: false,
                    //          fullscreenToggle: true  //全屏按钮
                    //        }
                },
            }
        },
        methods: {
            waterfull: function (obj) {
                obj.imagesLoaded(function () {
                    obj.masonry({
                        itemSelector: '.p-item',
                    });
                });
            },
            getCases(args) {
                let _this = this;
                $.ajax({
                    type: 'post',
                    url: args.url,
                    data: {type: args.type, page: args.page},
                    success: function (data) {
                        let wrapper = $('.swiper-slide').eq(args.index).find('.wrapper')
                        if (data == null) {
                            $('.nomore').eq(args.index - 1).show();
                        } else {
                            switch (args.el) {
                                case 'v-item':
                                    if (data.length < 4) {
                                        $('.nomore').eq(args.index - 1).show();
                                    }
                                    for (let i = 0; i < data.length; i++) {
                                        let v_src = 'http://store.meflourish.com/mfgw/video/' + data[i].ossurl + '.mp4',
                                            v_poster = 'http://store.meflourish.com/mfgw/video/poster/' + data[i].poster + '.jpg';
                                        let tpl = `
                                         <div class="v-item">
                                            <span class="videoSrc">${v_src}</span>
                                             <div class="v-item-poster">
                                             <img class="v-item-play" src="static/img/cases/play.png" alt="">
                                             <img class="v-item-img" src="${v_poster}" alt="">
                                              </div>
                                             <div class="v-item-text">
                                             <div class="v-item-title">
                                             <div class="main-title">${data[i].caseName}</div>
                                             <div class="v-item-direction">${data[i].direction}</div>
                                             </div>

                                             <p class="director" v-if="v.director">导演：<span>${data[i].composer}</span></p>
                                             <p class="director" v-if="v.director"><span class="${data[i].ifmv}">主演：</span><span>${data[i].actor}</span></p>
                                             <p class="other-info">
                                             <img class="v-item-player" src="static/img/cases/player.png" alt="">
                                             <span class="v-item-type">${data[i].subTag}</span>
                                            <span>/</span>
                                             <span class="v-item-time">${data[i].length}</span>
                                             </p>
                                            </div>
                                            </div>
                                                 `;
                                        wrapper.append(tpl);
                                    }
                                    break;
                                case 'p-item':
                                    if (data.length < 12) {
                                        $('.nomore').eq(args.index - 1).show();
                                    }
                                    let adClass = args.type == '平面设计' ? 'p-address pm' : 'p-address';
                                    for (let i = 0; i < data.length; i++) {
                                        let v_src = 'http://store.meflourish.com/mfgw/pic/' + data[i].ossurl + '.jpg';
                                        let tpl = `
                                            <div class="p-item">
                                                <div class="p-pic-box"><img class="p-pic" src="${v_src}" alt=""></div>
                                                <div class="p-text-box">
                                                    <p class="p-name">${data[i].caseName}</p>
                                                    <p class="${adClass}">${data[i].position}</p>
                                                      <p class="p-tag">${data[i].direction}</p>
                                                </div>
                                            </div>
                                                 `;
                                        tpl = $(tpl)
                                        tpl.imagesLoaded(function () {
                                            wrapper.masonry().append(tpl).masonry('appended', tpl);
                                        });
                                    }
                                    break;
                            }
                            args.page += 1;
                        }
                    }
                });
            },
            back: function () {
                this.$router.back(-1)
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        beforeMount() {
            this.video.forEach(function (item, index) {
                item.page = 1;
                if (index == 0) {
                    item.load = 1;
                } else {
                    item.load = 0
                }
            });
        },
        mounted() {
            let _this = this,
                flag = true;
            let casesSwiper = new Swiper('.cases-container', {
                initialSlide: 0,
                noSwiping: false,
                speed: 600,
                spaceBetween: 2,
                zoom: true,
                lazy: {
                    loadPrevNext: true,
                },
                iOSEdgeSwipeDetection: true,
                pagination: {
                    el: '.cases-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        let _html = '',
                            text = '';
                        for (let i = 1; i <= total; i++) {
                            switch (i) {
                                case 1:
                                    text = '影视剧';
                                    break;
                                case 2:
                                    text = '短视频';
                                    break;
                                case 3:
                                    text = '广告片';
                                    break;
                                case 4:
                                    text = '综艺节目';
                                    break;
                                case 5:
                                    text = '纪录片';
                                    break;
                                case 6:
                                    text = '宣传片';
                                    break;
                                case 7:
                                    text = '视觉包装';
                                    break;
                                case 8:
                                    text = '平面设计';
                                    break;
                                case 9:
                                    text = '活动摄影';
                                    break;
                            }
                            if (current == i) {
                                _html += '<li class="swiper-pagination-item active" id="' + i + '">' + text + '</li>';
                            } else {
                                _html += '<li class="swiper-pagination-item" id="' + i + '">' + text + '</li>';
                            }
                        }
                        return _html;//返回所有的页码html
                    }
                },
                on: {
                    slideChange: function () {
                        let index = this.activeIndex;
                        offsetx(index);
                        let args = _this.video[index];
                        if (args.load == 0) {
                            _this.getCases(args);
                            args.load = 1;
                        }
                    }
                }
            });

            //根据传过来的参数决定滑动到某一个模块
            if (_this.$route.params.part) {
                let p = _this.$route.params.part;
                casesSwiper.slideTo(p);
            }

            //导航条滚动方法
            function offsetx(index) {
                let nav = $('.cases-pagination-wrapper');
                if (index >= 4 && index <= 6) {
                    nav.animate({
                        'scrollLeft': 200
                    }, 400);
                } else if (index > 6) {
                    nav.animate({
                        'scrollLeft': 280
                    }, 400);
                } else {
                    nav.animate({
                        'scrollLeft': 0
                    }, 400);
                }
            }

            //swiper点击跳转
            $('.cases-pagination').on('click', 'li', function () {
                let index = $(this).attr('id');
                casesSwiper.slideTo(index - 1, 500, false);//切换到第一个slide，速度为1秒
            });

            //视频弹窗元素声明
            let video_box = $('.video-box'),
                container = $('.cases-container .swiper-slide'),
                player = $('.player'),
                close = $('#close'),
                video_title = $("#video-title");

            //视频插件进
            function videoIn() {
                video_box.fadeIn();
                if (player.hasClass('bounceOutUp')) {
                    player.removeClass('bounceOutUp').addClass('bounceInDown');
                } else {
                    player.addClass('bounceInDown');
                }
            }

            //视频插件出
            function videoOut() {
                _this.player.pause();
                if (player.hasClass('bounceInDown')) {
                    player.removeClass('bounceInDown').addClass('bounceOutUp');
                } else {
                    player.addClass('bounceOutUp');
                }
                setTimeout(function () {
                    video_box.fadeOut();
                }, 600)
            }

            //关闭视频
            close.click(function () {
                videoOut();
            });
            video_box.click(() => {
                videoOut();
            });

            //打开视频
            $('.swiper-slide').on('click', '.v-item', function () {
                let videoSrc = $(this).find('.videoSrc').text(),
                    videoTitle = $(this).find('.main-title').text();
                video_title.text(videoTitle);
                _this.playerOptions.sources[0].src = videoSrc;
                videoIn();
            });

            function initVideo() {
                _this.getCases(_this.video[0]);
            }

            initVideo()

//           上滑加载更多
            $('.swiper-slide').scroll(function () {
                let wrapper = $(this).find('.wrapper'),
                    more = $(this).find('.more');
                let scrollTop = $(this).scrollTop();                         //目前所在的位置
                let scrollHeight = wrapper.height();                    //文章一共有多长
                let windowHeight = $(this).height();
                if (scrollHeight - (scrollTop + windowHeight) <= 40) {      //40的意思是预留长度，总不能翻页到最底下才加载把~
                    if (flag) {
                        more.trigger('click');
                        flag = false;
                        setTimeout(function () {
                            flag = true;
                        }, 400)
                    }
                }
            });

            $('.pic-wrapper').pic('.p-item');
        }
    }
</script>
<style lang="less">
    @import "../assets/css/public.less";

    #cases {
        width: 100%;
        height: 100%;
        background-color: #f3f3f3;
    }

    .cases-container .swiper-slide {
        transition: filter 0.6s;
        /*filter: blur(0px);*/
    }

    .cases-container .swiper-slide {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    #cases-nav-box {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        /*background: -webkit-linear-gradient(-10deg, #434ccd 0%, #5551d4 20%, #775be2 63%, #a169f4); //定义一个主题色;*/
        background: @theme-color;
        z-index: 96;
    }

    #cases-nav {
        position: relative;
        height: @case-nav-height;
        width: 100%;

    }

    #left-box {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #left-box img {
        height: 18px;
    }

    .cases-container {
        height: calc(100% - @case-nav-height);
        margin-top: 44px;
    }

    .swiper-pagination-item {
        float: left;
        font-size: 1.2rem;
        color: rgba(224, 224, 224, 0.95);
        padding: 0 6px;
        height: 100%;
        letter-spacing: 1px;
        line-height: @case-nav-height;
    }

    .active {
        color: #ffffff;
        font-weight: bold;
    }

    .cases-pagination-wrapper {
        position: absolute;
        left: 14%;
        top: 0;
        height: 100%;
        width: 86%;
        background: transparent;
        /*display: flex;*/
        /*align-items: center;*/
        overflow-x: scroll;
        transition: all 0.4s;
        /*-webkit-overflow-scrolling: touch;*/
    }

    .cases-pagination {
        position: absolute;
        height: 100%;
        width: 600px;
        left: 0;
        top: 0;
    }

    .v-item {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        background-color: white;
        box-shadow: 0 2px 1px #e8e8e8;
    }

    .v-item-img {
        width: 100%;
    }

    .v-item-poster {
        position: relative;
        width: 100%;
        background-size: 100%;
        min-height: 100px;
    }

    .v-item-play {
        position: absolute;
        width: 56px;
        left: calc(50% - 28px);
        top: calc(50% - 28px);
    }

    .main-title {
        letter-spacing: 1px;
    }

    .v-item-text {
        position: relative;
        padding: 12px 20px 16px 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        overflow-x: hidden;
    }

    .v-item-text p {
        width: 100%;
    }

    .v-item-title {
        position: relative;
        color: #8a86ed;
        font-size: 1.4rem;
        letter-spacing: 3px;
        margin: 12px 0 14px 0;
        font-weight: bold;

    }

    .other-info {
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        color: #8f8f8f;
        width: 120px;
        margin-top: 12px;
        font-size: 1.1rem;
        font-family: '微软雅黑';
    }

    .other-info span {
        margin-left: 10px;
    }

    .v-item-player {
        width: 1.1rem;
        margin-top: -1px;
    }

    .v-item-direction {
        font-size: 1.1rem;
        letter-spacing: 1px;
        line-height: 1.8rem;
        text-align: justify;
        color: #949494;
        font-weight: lighter;
        margin-top: 10px;
    }

    .ifsub .v-item-direction {
        position: absolute;
        color: #adadad;
        font-size: 1rem;
        bottom: 0px;
        left: 104%;
        line-height: 1rem;
        font-weight: lighter;
        text-align: left;
        width: 120%;
    }

    .ifsub .director {
        display: block;
    }

    .director {
        font-size: 1rem;
        letter-spacing: 1px;
        color: #5e5e5e;
        margin-bottom: 10px;
        display: none;
    }

    .video-box {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(43, 43, 43, 0.76);
        z-index: 99;
    }

    .player {
        position: relative;
        width: 96%;
        margin: 180px auto 0 auto;
        box-shadow: 0 6px 14px rgba(17, 17, 17, 0.92);
    }

    .video-line {
        position: absolute;
        left: 24px;
        bottom: 100%;
        height: 800px;
        width: 1px;
        background-color: rgba(226, 226, 226, 0.53);
    }

    #video-title {
        position: absolute;
        top: -36px;
        left: 24px;
        font-size: 1.2rem;
        color: rgba(249, 249, 249, 0.85);
        letter-spacing: 3px;
        /*font-weight: lighter;*/
        /*text-shadow: 0 0 4px rgba(255, 255, 255, 0.81);*/
        padding: 5px 4px 6px 9px;
        border: 1px solid rgba(218, 218, 218, 0.6);
        background-color: rgba(247, 247, 247, 0.09);
        border-left: none;
    }

    #close {
        position: absolute;
        width: 30px;
        right: 2px;
        bottom: -45px;
        opacity: 0.8;
    }

    .videoSrc {
        display: none;
    }

    .pic-wrapper {
        box-sizing: border-box;
        /*padding: 20px 10px 20px 10px;*/
        margin: 20px auto 0 auto;
        background-color: #f1f1f1;
        width: 96%;
        font-size: 0;
    }

    .p-item {
        width: 50%;
        margin-bottom: 18px;
        /*display: inline-block;*/
        transition: all 0.4s;
        box-sizing: border-box;
        padding: 0 6px;
        /*opacity: 0;*/
    }

    .p-pic-box {
        background-color: #bbbbbb;
        /*min-height: 100px;*/
        margin-bottom: 6px;
        border-radius: 6px;
        overflow: hidden;
    }

    .p-pic {
        width: 100%;
    }

    .p-text-box {
        font-size: 1rem;
        line-height: 1.3rem;
        padding: 0 2px;
        color: #888888;
    }

    .p-name {
        font-size: 1.2rem;
        line-height: 1.4rem;
        margin-bottom: 4px;
        color: rgb(68, 59, 59);
        letter-spacing: 1px;
        font-weight: bold;
    }

    .p-tag {
        position: relative;
        font-size: 1rem;
        padding-left: 1.6rem;
    }

    .p-tag::before {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: 0.2rem;
        background: url('../../static/img/cases/tag.png');
        background-size: 100%;
    }

    .p-address {
        position: relative;
        font-size: 1rem;
        padding-left: 1.6rem;
        margin-top: 4px;
    }

    .pm {
        display: none;
    }

    .p-address::before {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 1px;
        top: 0.2rem;
        background: url('../../static/img/cases/address.png');
        background-size: 100%;
    }

    .mv {
        display: none;
    }

    .more {
        width: 100%;
        height: 40px;
        background: @theme-color;
        letter-spacing: 6px;
        color: white;
        font-size: 1.4rem;
        line-height: 40px;
        text-align: center;
        font-weight: lighter;
    }

    .nomore {
        font-size: 1rem;
        color: #a9a9a9;
        letter-spacing: 1px;
        text-align: center;
        display: none;
        line-height: 1.6rem;
        margin-bottom: 8px;
        text-shadow: .2px .2px .2px #ffffff;
    }

    @media screen and (max-width: @iphone5) {
        .swiper-pagination-item {
            font-size: 1rem;
        }
    }

    @media screen and (min-height: @iphoneX) {
        .player {
            margin-top: 240px;
        }
    }
</style>