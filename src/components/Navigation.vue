<template>
    <div id="navigation">
        <div id="main" style="background-image: url('http://store.meflourish.com/mfgw/mobile/img/navigation/bg.png');">
            <img class="animated slideInRight" src="static/img/navigation/logo.png" alt=""
                 style="position: absolute;top: 16px;right: 16px;width: 100px;">
            <img class="animated slideInLeft" @click="popSideBar" src="static/img/navigation/nav.png" alt=""
                 style="position: absolute;top: 18px;left: 16px;width: 20px;">
            <h1>ME FLOURISH</h1>
            <h2>media&film</h2>
            <h3>米花影视传媒</h3>
            <div id="route-box">
                <div id="router-wrapper">
                    <div class="router-item animated fadeIn"
                         style="background-image: url('http://store.meflourish.com/mfgw/mobile/img/navigation/a.jpg')"
                         @click="push('intro',0)">
                        <div class="router-inner">
                            <img src="static/img/navigation/a_1.png" alt="">
                            <p>关于米花</p>
                            <p>ABOUT</p>
                        </div>
                    </div>
                    <div class="router-item animated fadeIn"
                         style="background-image: url('http://store.meflourish.com/mfgw/mobile/img/navigation/m.jpg')"
                         @click="push('media',1)">
                        <div class="router-inner">
                            <img src="static/img/navigation/m_1.png" alt="">
                            <p>全媒营销</p>
                            <p>MEDIA</p>
                        </div>
                    </div>
                    <div class="router-item animated fadeIn"
                         style="background-image: url('http://store.meflourish.com/mfgw/mobile/img/navigation/c.jpg')"
                         @click="push('sales',2)">
                        <div class="router-inner">
                            <img src="static/img/navigation/c_1.png" alt="">
                            <p>赛事运营</p>
                            <p>COMMUNITY</p>
                        </div>
                    </div>
                    <div class="router-item animated fadeIn"
                         style="background-image: url('http://store.meflourish.com/mfgw/mobile/img/navigation/v.jpg')"
                         @click="push('creative',3)">
                        <div class="router-inner">
                            <img src="static/img/navigation/v_1.png" alt="">
                            <p>内容创意</p>
                            <p>VIDEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Navigation',
        data() {
            return {}
        },
        methods: {
            popSideBar: function () {
                $("#sidebar-box").show();
                $("#sidebar-master").fadeIn(400);
                $("#sidebar").css('left', '0px');
            },
            push(link, index) {
                let activeli = $("#nav-list li").eq(index);
                activeli.trigger('click');
                this.$router.push({name: link});
            }
        },
        mounted() {
            $(".router-item").height($(".router-item").width() * 1.048);
        }
    }
</script>
<style scoped lang="less">
    @import "../assets/css/public.less";

    #navigation {
        height: 100%;
        background-color: #f7f7f7;

    }

    #main {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: 100%;
        padding-top: 1px;
    }

    h1 {
        text-align: center;
        font-size: 2.6rem;
        color: #554ac4;
        font-weight: 600;
        letter-spacing: 3px;
        margin: 90px 0 0 0;

    }

    h2 {
        text-align: center;
        font-size: 1.6rem;
        color: #554ac4;
        letter-spacing: 2px;
        margin: 11px 0 0 0;
    }

    h3 {
        text-align: center;
        font-size: 1.1rem;
        color: @font-color;
        font-weight: lighter;
        letter-spacing: 8px;
        margin: 11px 0 0 0;
        text-indent: 4px;
    }

    #route-box {
        width: 100%;
        position: absolute;
        bottom: 10px;
        color: white;
    }

    #router-wrapper {
        box-sizing: border-box;
        padding: 8px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .router-item {
        position: relative;
        width: 45%;
        /*height: 160px;*/
        background-color: #664a80;
        border-radius: @border-radius;
        margin-top: 20px;
        background-size: 100%;
        box-shadow: 0 0 8px @font-color;
    }

    .router-inner {
        position: absolute;
        display: inline-block;
        bottom: 20px;
        left: 14px;
    }

    .router-inner img {
        width: 1.5rem;
    }

    .router-inner p {
        margin-top: 6px;
    }

    .router-inner p:nth-of-type(1) {
        font-size: 1.4rem;
        letter-spacing: 2px;
    }

    .router-inner p:nth-of-type(2) {
        font-size: 1.1rem;
        letter-spacing: 2px;
        font-weight: lighter;
        opacity: 0.8;
    }

    @media screen and (min-height: 728px ) {
        #route-box {
            bottom: 16px;
        }
    }

    @media screen and (max-width: 320px) {
        h1 {
            margin-top: 62px;
            font-size: 2rem;
        }
    }
</style>