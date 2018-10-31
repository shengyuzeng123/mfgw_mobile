<template>
    <div id="sales">
        <PubHead>赛事运营</PubHead>
        <div class="main-content">
            <div id="titlebg">
                <div class="swiper-container sales-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in topImg" :key="item.index">
                            <img class="top-img" :src="item.imgSrc" alt="">
                        </div>
                    </div>
                    <div class="swiper-button-prev swiper-button-white"></div><!--左箭头-->
                    <div class="swiper-button-next swiper-button-white"></div><!--右箭头-->
                </div>
                <div id="content-box">
                    <div id="text">
                        <p>围绕少儿群体打造三大赛事</p>
                        <p>深挖少儿艺教行业资源和价值。</p>
                    </div>
                    <div id="list-box" class="animated fadeIn">
                        <div class="list" v-for="(item,index) in list" :key="index">
                            <p class="title"><img src="static/img/sales/bubble.png" alt="">{{item.title}}</p>
                            <p class="direction">{{item.direction}}</p>
                            <!--<img class="list-img" :src="item.imgSrc" alt="">-->
                            <div class="list-img" :style="item.style"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Sales',
        data() {
            return {
                topImg: [
                    {imgSrc: 'static/img/sales/1.jpg'},
                    {imgSrc: 'static/img/sales/2.jpg'},
                    {imgSrc: 'static/img/sales/3.jpg'},
                    {imgSrc: 'static/img/sales/4.jpg'},
                    {imgSrc: 'static/img/sales/5.jpg'}
                ],
                list: [
                    {
                        'title': '燃烧吧，麦克风',
                        'direction': '少儿音乐成长秀节目，面向浙江省11地市4-15岁爱唱歌的少年儿童，近万名音乐少年参与，打造全省少年儿童音乐最高赛事。',
                        'imgSrc': 'static/img/sales/2_1.jpg',
                        'style': 'background-image:url("http://store.meflourish.com/mfgw/mobile/img/sales/2_1.jpg")'
                    },
                    {
                        'title': '浙江省小主持人大赛',
                        'direction': '全省最大规模，最具权威，最专业的小主持舞台。由浙江广电集团主办，覆盖全省11地市，关注度高达百万级。',
                        'imgSrc': 'static/img/sales/2_2.jpg',
                        'style': 'background-image:url("http://store.meflourish.com/mfgw/mobile/img/sales/2_2.jpg")'
                    },
                    {
                        'title': '浙江少儿书画大赛',
                        'direction': '由浙江少儿频道、中国美术学院联合主办的大型权威书画赛事，是全省最有影响力的儿童书画赛事。',
                        'imgSrc': 'static/img/sales/2_3.jpg',
                        'style': 'background-image:url("http://store.meflourish.com/mfgw/mobile/img/sales/2_3.jpg")'
                    }
                ]
            }
        },
        mounted() {
            $('.main-content').css('height', $(window).height() - 50);
            let salesSwiper = new Swiper('.sales-container', {
                noSwiping: false,
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
</script>
<style scoped lang="less">
    @import "../assets/css/public.less";

    #sales {
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
    }

    .top-img {
        width: 100%;
    }

    #titlebg {
        position: relative;
        background-size: 100%;
        background-position: 0 80%;
        width: 100%;
        font-size: 0;
        /*height: 42%;*/
    }

    #titlebg #content-box {
        position: absolute;
        width: 100%;
        padding: 16px 24px 0 24px;
        height: 96px;
        background: -webkit-linear-gradient(-80deg, rgba(67, 76, 205, 0.51) 0%, rgba(85, 81, 212, 0.5) 64%, rgba(119, 91, 226, 0.51) 93%, rgba(161, 105, 244, 0.51));;
        bottom: 0;
        color: #4d4d4d;
        box-sizing: border-box;
        z-index: 99;
    }

    #text p {
        color: #f5f5f5;
        font-size: 1.4rem;
        line-height: 1.8rem;
        letter-spacing: 2px;
        padding-left: 10px;
        margin-bottom: 6px;
    }

    #list-box {
        width: 100%;
        background-color: #ffffff;
        margin-top: 12px;
        border-radius: @border-radius;
        box-shadow: 0 0 2px rgba(226, 226, 226, 0.91);
        margin-bottom: 36px;
    }

    .list {
        padding: 18px 14px 10px 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #dfdfdf;
    }

    .list-img {
        width: 100%;
        height: 100px;
        margin: 10px 0 4px 0;
        border-radius: 1px;
        background-size: cover;
    }

    .title {
        position: relative;
        font-size: 1.3rem;
        margin-bottom: 8px;
        color: #0d0d0d;
    }

    .title img {
        position: absolute;
        width: 1.2rem;
        left: -2rem;
        top: 1px;
    }

    .list:last-child {
        border: none;
    }

    .title:before {

    }

    .direction {
        font-size: 1.1rem;
        line-height: 1.6rem !important;
        text-align: justify;
        color: #8d8d8d;
    }

    .swiper-button-white {
        transform: scale(0.5);
        opacity: 0.8;
    }

    /*@media screen and (min-height: @iphoneX) {
        #titlebg {
            height: 50%;
        }

        .list {
            padding: 20px 14px 18px 40px;
        }

        .title {
            margin-bottom: 10px;
        }

        .direction {
            line-height: 1.8rem;
        }
    }

    @media screen and ( min-height: @iphone6p ) and (max-height: @iphoneX) {
        #titlebg {
            height: 46%;
        }

        .list {
            padding: 18px 14px 14px 40px;
        }

        .title {
            margin-bottom: 10px;
        }

        .direction {
            line-height: 1.8rem;
        }
    }

    @media screen and (max-width: 320px) {
        #text p {
            font-size: 1.1rem;
        }

        #titlebg {
            height: 35%;
        }

        #titlebg #content-box {
            height: 50%;
        }

        .list {
            padding: 8px 4px 6px 28px;
        }

        .title img {
            left: -18px;
        }

        .direction {
            font-size: 1.1rem;
        }
    }*/
</style>