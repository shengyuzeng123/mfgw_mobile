<template>
    <div id="media">
        <PubHead>全媒营销</PubHead>
        <div class="swiper-container media-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in media" v-bind:key="index">
                    <div class="media-box">
                        <div class="media-positive">
                            <div class="media-pic">
                                <img class="media-logo" :src="item.logo" alt="">
                                <img class="pic" :src="item.pic" alt="">
                            </div>
                            <div class="banner"></div>
                            <div class="media-text">
                                <p class="media-title">{{item.text}}</p>
                                <div class="getmore">了解更多</div>
                            </div>
                        </div>
                        <div class="media-negative">
                            <div class="media-pic">
                                <img class="media-logo" :src="item.logo" alt="">
                                <img class="pic pic-code" :src="item.code" alt="">
                            </div>
                            <div class="banner"></div>
                            <div class="media-text">
                                <p class="media-title direction">{{item.direction}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination media-pagination"></div>
        <!--<p class="text-tips" id="media-tips">点击图片查看二维码</p>-->
    </div>
</template>
<script>
    export default {
        name: 'media',
        data() {
            return {
                media: [
                    {
                        'logo': 'static/img/media/lama-l.png',
                        'pic': 'static/img/media/lama.jpg',
                        'text': '辣妈俱乐部plus',
                        'code': 'static/img/media/lama-code.jpg',
                        'direction': '拥有35w+粉丝的垂直化辣妈亲子生活方式分享平台，整合电视节目+新媒体平台+线下活动多种渠道。'
                    },
                    {
                        'logo': 'static/img/media/by-l.png',
                        'pic': 'static/img/media/nao.jpg',
                        'text': '浙江少儿播音主持等级考试',
                        'code': 'static/img/media/by-code.jpg',
                        'direction': '中国视协青少儿播音主持考级报名、培训、考级权威发布平台，浙江省小主持人大赛精彩动态信息。'
                    },
                    {
                        'logo': 'static/img/media/yijiao-l.png',
                        'pic': 'static/img/media/yijiao.jpg',
                        'text': '艺教头条',
                        'code': 'static/img/media/yijiao-code.jpg',
                        'direction': '中国首个少儿艺教产业链社交服务平台。行业动态、前沿观察、商业福利、行业培训。赛事、演出、丰富的表演舞台。'
                    },
                    {
                        'logo': 'static/img/media/lewei-l.png',
                        'pic': 'static/img/media/lewei.jpg',
                        'text': '楽味',
                        'code': 'static/img/media/lewei-code.jpg',
                        'direction': '美食内容自媒体品牌,“何楽而不味”。生产料理教程、美食测评、趣味视频……提供轻食料理、美食产品……'
                    },
                    {
                        'logo': 'static/img/media/mhmm-l.png',
                        'pic': 'static/img/media/mhmm.jpg',
                        'text': '米花妈妈Plus',
                        'code': 'static/img/media/mhmm-code.jpg',
                        'direction': '淘宝母婴短视频自媒体，面向辣妈亲子精准人群，专注于妈妈们关心和感兴趣的内容生产。'
                    }
                ]
            }
        },
        methods: {},
        mounted() {
            let _this = this;
            let rotate = 0;
            let mediaSwiper = new Swiper('.media-swiper', {
                slidesPerView: 'auto',
                slideToClickedSlide: true,
                speed: 480,
                spaceBetween: 32,
                slidesOffsetBefore: ($(window).width()) * 0.18,
                slidesOffsetAfter: ($(window).width()) * 0.18,
                resistanceRatio: 1,
                watchSlidesProgress: true,
                noSwiping: false,
                iOSEdgeSwipeDetection : true,
                pagination: {
                    el: '.media-pagination',
//                    bulletClass: 'media-bullet',
                },
                on: {
                    progress: function (progress) {
                        for (let i = 0; i < this.slides.length; i++) {
                            let slide = this.slides.eq(i),
                                slideProgress = this.slides[i].progress,
                                prevIndent = 0.253,
                                scale = 1;
                            if (Math.abs(slideProgress + prevIndent) < 1) {
                                scale = (1 - Math.abs(slideProgress + prevIndent)) * 0.1 + 1
                            } else {
                                scale = 1;
                            }
//                            slide.find('.media-box').transform('scale3d(' + scale + ',' + scale + ',1)');
                            slide.find('.media-box').transform('scale(' + scale + ')');
                        }
                    },
                    setTransition: function (transition) {
                        for (let i = 0; i < this.slides.length; i++) {
                            let slide = this.slides.eq(i)
                            slide.find('.media-box').transition(transition);
                        }
                    },
                }
            });

            //让公众号二维码成正方形完全呈现
            $(".media-pic").height($(".media-pic").width());

            //卡片旋转控制
            let media_box = $(".media-box");
            media_box.data('rotate', 0);
            media_box.on('click', function () {
                let that = $(this),
                    media_pos = that.find('.media-positive'),
                    media_neg = that.find('.media-negative'),
                    rotate = that.data('rotate');
                if (rotate == 0) {
                    media_pos.css('transform', 'rotateY(180deg)');
                    media_neg.css('transform', 'rotateY(360deg)');
                    that.data('rotate', 1);
                } else {
                    media_pos.css('transform', 'rotateY(0deg)');
                    media_neg.css('transform', 'rotateY(180deg)');
                    that.data('rotate', 0);
                }
            });

            //初始化
            function init() {
                setTimeout(function () {
                    $(".media-box").trigger("click");
                }, 400);

                setTimeout(function () {
                    $(".media-box").trigger("click");
                }, 1200)
            }

            init();
        }
    }
</script>
<style scoped lang="less">
    @import "../assets/css/public.less";

    #media {
        width: 100%;
        background-color: #f9f7f7;
    }

    .media-swiper {
        width: 100%;
        overflow: visible;
        margin-top: 90px;
    }

    .media-swiper .swiper-slide {
        width: 62%;
        height: 330px;
    }

    .media-box {
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 1850px;
    }

    .media-box > div {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transition: all 0.6s;
        color: white;
    }

    .media-positive {
        z-index: 4;
        backface-visibility: hidden;
    }

    .media-negative {
        z-index: 1;
        backface-visibility: visible;
        transform: rotateY(180deg);
    }

    .media-pagination {
        position: fixed;
        width: 100%;
        /*margin: 100px auto 0 auto;*/
        bottom: 40px;
    }

    .media-pic {
        background-color: white;
        position: relative;
        width: 100%;
        /*height: 210px;*/
        border-radius: @border-radius;
        box-shadow: 0 8px 14px rgba(176, 177, 168, 0.41);
    }
    .pic-code{
        transform: scale(0.88);
    }
    .media-text {
        margin-top: 1px;
        width: 100%;
        height: 120px;
        border-radius: @border-radius;
        background: @theme-color;
        box-shadow: 0 8px 14px rgba(176, 177, 168, 0.41);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 24px 0;
        box-sizing: border-box;
    }

    .pic {
        width: 100%;
        border-radius: @border-radius;
    }

    .media-title {
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        letter-spacing: 2px;
        text-shadow: 1px 1px 1px @font-color;
        font-weight: 400;
    }

    .direction {
        letter-spacing: 1px;
        text-align: justify;
        padding: 0 12px;
        line-height: 1.8rem;
        font-size: 1rem;
    }

    .getmore {
        font-size: 0.8rem;
        display: inline-block;
        font-weight: lighter;
        letter-spacing: 2px;
        padding: 4px 8px;
        border: 1px solid white;
        border-radius: 5px;
        opacity: 0.8;
    }

    .media-logo {
        position: absolute;
        width: 68px;
        left: calc(50% - 34px);
        top: -48px;
        z-index: 96;
    }

    .banner {
        margin-top: 2px;
        width: 100%;
        border-bottom: 1px dashed @font-color;
    }

    @media screen and (max-width: 320px) {
        .media-pagination {
            bottom: 4px;
        }
    }

    @media screen and (min-height: 728px) {
        .media-swiper {
            margin-top: 136px;
        }
    }
</style>

<style>
    .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        background-color: rgba(99, 68, 214, 0.9);
    }

    .swiper-pagination-bullet + .swiper-pagination-bullet {
        margin-left: 16px;
    }

    #media-tips {
        margin-top: 90px;
        text-align: center;
    }
</style>