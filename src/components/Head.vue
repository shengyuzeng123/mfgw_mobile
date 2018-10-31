<template>
    <div id="head">
        <p><slot></slot></p>
        <img id="more" @click="popSideBar" src="static/img/nav.png">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ifpop: false
            }
        },
        methods: {
            popSideBar: function () {
                $("#sidebar-box").show();
                $("#sidebar-master").fadeIn(400);
                $("#sidebar").css('left', '0px');
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less">
    @import "../assets/css/public.less";

    #head {
        background: @theme-color;
        height: @head-height;
        width: 100%;
        z-index: 95;
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
    }

    #head p {
        font-size: 1.4rem;
        font-weight: 400;
        color: white;
        letter-spacing: 2px;
        text-align: center;
        line-height: 50px;
    }

    #more {
        position: absolute;
        left: 12px;
        top: 14px;
        width: 20px;
    }
</style>