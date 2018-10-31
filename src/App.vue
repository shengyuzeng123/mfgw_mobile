<template>
    <div id="app">
        <sidebar @transfer="trans"></sidebar>
        <div class="swiper-container main-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-no-swiping">
                    <transition :name="transitionName">
                        <router-view class="child-view"></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from './components/SideBar.vue'

    export default {
        name: 'App',
        data() {
            return {
                transitionName: 'slide-up',
                transNum: 0,
            }
        },
        methods: {
            trans(data) {
                let i = data - this.transNum;
                if (i > 0) {
                    this.transitionName = 'slide-up'
                } else {
                    this.transitionName = 'slide-down'
                }
                this.transNum = data;
            }
        },
        components: {
            sidebar
        },
        mounted() {
            let mainSwiper = new Swiper('.main-swiper', {
                direction: 'vertical',
                height: $(window).height(),
                noSwiping: true
            })
        },
        watch: {
            '$route'(to, from) {
                if (to.path == '/') {
                    this.transitionName = 'slide-down';
                } else if (to.path == '/cases') {
                    this.transitionName = 'slide-left';
                } else if (from.path == '/cases') {
                    this.transitionName = 'slide-right';
                }
            }
        }
    }

</script>

<style lang="less">
    html {
        user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    @import "./assets/css/public.less";

    #app {
        background-color: white;
    }

    .child-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .6s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-up-enter, .slide-down-leave-active {
        opacity: 0;
        -webkit-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }

    .slide-up-leave-active, .slide-down-enter {
        opacity: 0;
        -webkit-transform: translate(0, -30px);
        transform: translate(0, -30px);
    }

    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }

    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
</style>
