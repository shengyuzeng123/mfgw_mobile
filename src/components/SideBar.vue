<template>
    <div id="sidebar-box">
        <div id="sidebar">
            <img @click="push" id="sidebar-logo" style="width: 100%" src="static/img/sidebar/sidebar-logo.png" alt="">
            <ul id="nav-list">
                <li @click="transition(item.trans,item.name)" v-for="(item,index) in link" :key="index">
                    <img :src=item.imgSrc alt="">
                    <router-link :to="{name:item.name,params:{title:item.title}}">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div id="sidebar-master"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: [
                    {'name': 'intro', 'title': '关于米花', 'imgSrc': 'static/img/sidebar/intro-i.png', 'trans': 1},
                    {'name': 'media', 'title': '全媒营销', 'imgSrc': 'static/img/sidebar/media-i.png', 'trans': 2},
                    {'name': 'sales', 'title': '赛事运营', 'imgSrc': 'static/img/sidebar/sales-i.png', 'trans': 3},
                    {'name': 'creative', 'title': '内容创意', 'imgSrc': 'static/img/sidebar/creative-i.png', 'trans': 4},
                ]
            }
        },
        methods: {
            push() {
                this.$router.push('/');
                $("#sidebar").css('left', '-275px');
                $("#sidebar-master").fadeOut(200);
                setTimeout(function () {
                    $("#sidebar-box").hide();
                }, 600);
            },
            transition(ev, route) {
                this.$emit('transfer', ev);
                this.$router.push(route)
            }
        },
        mounted() {
            $("#sidebar-box").height($(window).height());

            //隐藏侧边导航栏
            function hidebar() {
                $("#sidebar").css('left', '-275px');
                $("#sidebar-master").fadeOut(200);
                setTimeout(function () {
                    $("#sidebar-box").hide();
                }, 600);
            }

            $("#sidebar-master").click(function () {
                hidebar();
            });

            //点击变色
            $("#nav-list li").click(function () {
                let img = $(this).find('img'),
                    imgSrc = img.prop('src'),
                    imgSrc_c = imgSrc.replace('-i', '-c');
                $(this).css('background-color', '#dfdfdf').siblings('li').css('background-color', 'transparent')
                    .end().find("a").css('color', '#584ec5')
                    .end().siblings('li').find("a").css('color', '#585858');
                $(this).find('img').prop('src', imgSrc_c)
                    .end().siblings('li').find('img').prop('src', function () {
                    return ($(this).prop('src')).replace('-c', '-i');
                });
                hidebar();
            });
        }
    }
</script>

<style lang="less">
    @import "../assets/css/public.less";

    @listFontSize: 1.6rem;
    #sidebar-box {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.6s ease;
        z-index: 97;
    }

    #sidebar-master {
        width: 100%;
        height: 100%;
        background-color: rgba(78, 71, 71, 0.57);
        display: none;
        z-index: 98;
    }

    #sidebar {
        position: absolute;
        /*left: 0;*/
        left: -275px;
        width: 275px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.89);
        transition: all 0.4s;
        z-index: 99;
    }

    #nav-list {
        margin-top: 40px;
        font-size: @listFontSize;
    }

    #nav-list li {
        margin-top: 10px;
        padding: 14px 0 14px 24px;
        /*background-color: #dfdfdf;*/
    }

    #nav-list li img {
        width: @listFontSize;
    }

    #nav-list li a {
        color: #585858;
        letter-spacing: 6px;
        font-weight: 500;
        padding-left: 24px;
    }
</style>