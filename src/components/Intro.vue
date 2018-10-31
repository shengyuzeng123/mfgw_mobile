<template>
    <div id="intro">
        <PubHead>关于米花</PubHead>
        <div class="main-content">
            <div id="logo-box">
                <img id="logo" src="static/img/intro/logo.png" alt="" width="100px">
                <!--<img src="static/img/intro/intro.jpg" alt="" style="width: 90%;margin-top: 10px;border-radius: 3px;">-->
            </div>

            <!--总体简介-->
            <div id="intro-text">
                <p id="intro-text-main">自带营销渠道的新媒体创意制作中心</p>
                <!--<p id="intro-text-sub">-->
                <!--米花影视传媒以新媒体营销传播、影视制作发行营销、文化创意为主营业务，致力于泛娱乐领域下优质内容的创意研发、渠道分发、宣传推广和商务运营等全领域运作，为合作伙伴提供一站式全渠道内容营销解决方案。-->
                <!--</p>-->
            </div>

            <!--主营业务-->
            <div class="part-title">
                <div class="part-title-main">主营业务</div>
                <div class="part-title-sub">BUSINESS SECTORS</div>
            </div>
            <div id="intro-box">
                <div class="intro-item" v-for="(item,index) in intro" :key="index">
                    <img class="item-logo" :src="item.img" alt="">
                    <div class="item-text">
                        <p class="intro-label themeText">{{item.title}}</p>
                        <p class="intro-text">{{item.direction}}</p>
                    </div>
                </div>
            </div>

            <!--独家资源-->
            <div class="part-title">
                <div class="part-title-main">独家资源</div>
                <div class="part-title-sub">EXCLUSIVE RESOURCES</div>
            </div>
            <div id="resource-box">
                <p id="res-top">品牌整合营销新思路，新玩法</p>
                <p id="res-center">随着当下营销环境的迅速变革，传统广告投放4A模式，已无法满足品牌的推广要求。</p>
                <p class="res-bubble">我们拥有内容打造能力， 为品牌量身定制推广内容IP，打响品牌。</p>
                <p class="res-bubble">我们拥有销售平台独家资源，为品牌直接助推产品销售。</p>
                <p class="res-bubble">我们能有效整合推广渠道和销售平台，让品牌只需一次投入，就能实现品牌推广+销售提升的多渠道产出，真正达到品效合一。</p>
                <div id="res-footer">
                    <img id="up" src="static/img/intro/up.png" alt="">
                    <div>
                        <p>看得见的品牌形象提升</p>
                        <p>看得见的实际效果转化</p>
                    </div>
                    <div id="case-router" @click="toCases">查看案例</div>
                </div>
            </div>

            <!--聚焦领域-->
            <div class="part-title">
                <div class="part-title-main">聚焦领域</div>
                <div class="part-title-sub">FOCUS AREA</div>
            </div>
            <div id="area-box">
                <div class="area-item" v-for="(item,index) in area" :key="index">
                    <div class="area-title">
                        <img class="area-logo" :src="item.img" alt="">
                        <p class="area-title-main">{{item.title}}</p>
                        <p class="area-title-sub">{{item.subtitle}}</p>
                    </div>
                    <div class="area-text">
                        <p class="area-text">{{item.direction}}</p>
                    </div>
                </div>
            </div>

            <!--联系我们-->
            <div class="part-title">
                <div class="part-title-main">联系我们</div>
                <div class="part-title-sub">CONTACT</div>
            </div>
            <div id="map-box">
                <div class="animated fadeIn" style="width:100%;height:240px;border:#ccc solid 1px;font-size:12px"
                     id="map"></div>
            </div>
            <div id="contact-box">
                <ul>
                    <li>
                        <div class="contact-img"><img src="static/img/intro/address.png" alt=""></div>
                        <div class="contact-info">
                            <div>地址:</div>
                            <div>浙江省杭州市西湖区大华·华领国际五楼</div>
                        </div>
                    </li>
                    <li>
                        <div class="contact-img"><img src="static/img/intro/phone.png" alt=""></div>
                        <div class="contact-info">
                            <div>电话:</div>
                            <div><a href="tel:0571-88077050">0571-81061558</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Intro',
        data() {
            return {
                intro: [
                    {title: '品牌策划', img: 'static/img/intro/3.png', direction: '品牌全案策划、传播策略、整合营销、创意执行、媒介关系'},
                    {
                        title: '内容营销',
                        img: 'static/img/intro/1.png',
                        direction: '新媒体营销、内容IP打造、IP运营、影视制作发行、线下活动֙'
                    },
                    {
                        title: '创意制作',
                        img: 'static/img/intro/2.png',
                        direction: '影视剧、综艺大片、纪录片、各类广告形象宣传片、短视频创意制作、视觉包装、平面设计、活动摄影'
                    },

                ],
                area: [
                    {
                        title: '亲子',
                        subtitle: 'Parenting',
                        img: 'static/img/intro/2_1.png',
                        direction: '聚焦辣妈亲子群体，打造辣妈生活方式分享平台，深挖圈层价值。'
                    },
                    {
                        title: '教育',
                        subtitle: 'Education',
                        img: 'static/img/intro/2_2.png',
                        direction: '聚焦儿童教育培训整合营销，拥有浙江省级小主持人资格考级授权。'
                    },
                    {
                        title: '影视',
                        subtitle: 'Movies',
                        img: 'static/img/intro/2_4.png',
                        direction: '聚焦影视内容生产和价值转化，拥有电影、电视剧、网大、网剧与微剧等影视项目策划、制作、营销、宣发的丰富经验。'
                    },
                    {
                        title: '旅游',
                        subtitle: 'Travel',
                        img: 'static/img/intro/2_3.png',
                        direction: '聚焦旅游目的地与民宿的整合营销。打造O2O平台，整合旅游、民宿、设计师、品牌等资源。'
                    }
                ]
            }
        },
        methods: {
            toCases: function () {
                this.$router.push('resources');
            }
        },
        mounted() {

            $('.main-content').css('height', $(window).height() - 50);

            //创建化百度地图
            function initMap() {
                createMap();//创建地图
                setMapEvent();//设置地图事件
//                addMapControl();//向地图添加控件
                addMapOverlay();//向地图添加覆盖物
            }

            function createMap() {
                map = new BMap.Map("map");
                map.centerAndZoom(new BMap.Point(120.129943, 30.289042), 17);
            }

            function setMapEvent() {
                map.enableScrollWheelZoom();
                map.enableKeyboard();
                map.enableDragging();
                map.enableDoubleClickZoom()
            }

            function addClickHandler(target, window) {
                target.addEventListener("click", function () {
                    target.openInfoWindow(window);
                });
            }

            function addMapOverlay() {
                var markers = [
                    {
                        content: "这是米花公司官网",
                        title: "公司地址",
                        imageOffset: {width: 0, height: 3},
                        position: {lat: 30.288714, lng: 120.130895}
                    }
                ];
                for (var index = 0; index < markers.length; index++) {
                    var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
                    var marker = new BMap.Marker(point, {
                        icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {
                            imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
                        })
                    });
                    var label = new BMap.Label(markers[index].title, {offset: new BMap.Size(25, 5)});
                    var opts = {
                        width: 200,
                        title: markers[index].title,
                        enableMessage: false
                    };
                    var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
                    marker.setLabel(label);
                    addClickHandler(marker, infoWindow);
                    map.addOverlay(marker);
                }
                ;
            }

            //向地图添加控件
            function addMapControl() {
                var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
                scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
                map.addControl(scaleControl);
                var navControl = new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    type: BMAP_NAVIGATION_CONTROL_LARGE
                });
                map.addControl(navControl);
                var overviewControl = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: true});
                map.addControl(overviewControl);
            }

            var map;
            initMap();
        }
    }
</script>
<style scoped lang="less">
    @import "../assets/css/public.less";

    @intro-width: 80%;
    .contact-info a {
        color: #8582cb;
    }

    #intro {
        position: relative;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    #logo-box {
        width: 100%;
        margin-top: 20px;
        text-align: center;
    }

    #logo {
        margin: 24px 0 25px 0;
    }

    #intro-title {
        margin: 8px auto 10px auto;
        width: 94%;
        font-size: 1.1rem;
        line-height: 1.3rem;
        letter-spacing: 1px;
        text-align: justify;
    }

    .part-title {
        width: @intro-width;
        margin: 0 auto;
        padding: 6px 0;
        border-bottom: 1px solid #c2c2c2;
    }

    .part-title div {
        display: inline-block;
    }

    .part-title-main {
        font-size: 1.6rem;
        color: black;
        font-weight: bold;
    }

    .part-title-sub {
        font-size: 1.2rem;
        color: #919191;
        margin-left: 6px;
    }

    #intro-box {
        width: @intro-width;
        font-size: 0.8rem;
        line-height: 1.3rem;
        letter-spacing: 1px;
        margin: 0 auto 28px auto;
    }

    #intro-text {
        width: @intro-width;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    #intro-text-main {
        font-size: 1.2rem;
        color: black;
        text-align: center;
        letter-spacing: 2px;
    }

    #intro-text-sub {
        font-size: 1rem;
        letter-spacing: 1px;
        line-height: 1.6rem;
        color: #9c9c9c;
        margin-top: 4px;
        text-align: justify;
    }

    .intro-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 18px;
    }

    .item-logo {
        display: inline-block;
        width: 16%;
    }

    .intro-item p {
        width: 100%;
    }

    .item-text {
        width: 74%;
    }

    .intro-label {
        text-align: left;
        font-size: 1.1rem;
        letter-spacing: 1px;
        font-weight: 600;

    }

    .intro-text {
        box-sizing: border-box;
        text-align: justify;
        font-size: 1.1rem;
        color: #ababab;
        line-height: 1.5rem;
        margin-top: 8px;
    }

    #resource-box {
        width: @intro-width;
        margin: 24px auto;
    }

    #res-top {
        color: #6b6b6b;
        font-size: 1.3rem;
        line-height: 1.6rem;
        margin-bottom: 6px;
    }

    #res-center {
        font-size: 1rem;
        color: darkgrey;
        line-height: 1.6rem !important;
        margin-bottom: 10px !important;
    }

    #res-footer {
        position: relative;
        font-size: 1.1rem;
        margin-top: 14px !important;
        border-radius: 2px;
        box-shadow: 2px 2px 4px rgba(157, 140, 203, 0.28);
        padding: 10px 6px;
        color: gray;
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    #res-footer p{
        line-height: 2rem;
    }
    #up {
        width: 34px;
    }

    #case-router {
        font-size: 1rem;
        border: 1px solid rgba(154, 117, 229, 0.36);
        padding: 4px 6px;
        color: @font-color;
        border-radius: 4px;
    }

    .res-bubble {
        font-size: 0.9rem;
        color: @font-color;
        padding: 4px 4px 4px 28px;
        position: relative;
        margin-top: 10px;
        border-radius: 2px;
        box-shadow: 2px 2px 4px rgba(157, 140, 203, 0.29);
        line-height: 1.5rem;
    }

    .res-bubble:before {
        content: '';
        background: url("../../static/img/intro/bubble.png") no-repeat;
        background-size: 100%;
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 10px;
        top: 7px;
    }

    #resource-box p {
        letter-spacing: 1px;
    }

    #area-box {
        width: @intro-width;
        margin: 10px auto 40px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .area-item {
        text-align: center;
        display: inline-block;
        width: 40%;
        margin: 14px 0 14px 0;
    }

    .area-logo {
        width: 42px;
    }

    .area-title {
        color: #8c86cc;
        font-size: 1.3rem;
        line-height: 1.6rem;
    }

    .area-title-sub {
        color: #a7a4dd;
    }

    .area-text {
        margin-top: 10px;
        font-size: 1rem;
        color: #999999;
        line-height: 1.4rem;
        text-align: justify;
        letter-spacing: 1px;
    }

    #map-box {
        width: @intro-width;
        margin: 20px auto 0 auto;
    }

    #contact-box {
        width: 210px;
        font-size: 1.2rem;
        line-height: 1.4rem;
        margin: 40px auto;
    }

    #contact-box li {
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
    }

    #contact-box img {
        width: 1.4rem;
    }

    .contact-img {
        padding-top: 1px;
        margin-right: 10px;
    }

    .contact-info {
        line-height: 1.6rem;
        letter-spacing: 1px;
    }

    .contact-info > div {
        display: inline-block;
        float: left;
    }

    .contact-info > div:nth-of-type(1) {
        width: 40px;
    }

    .contact-info > div:nth-of-type(2) {
        width: 140px;
    }

    @media screen and (max-width: @iphone5 ) {
        .intro-text {
            width: 60%;
        }
    }
</style>