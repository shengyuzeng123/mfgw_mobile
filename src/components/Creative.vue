<template>
    <div id="creative">
        <PubHead>内容创意</PubHead>
        <div class="main-content">
            <div id="content">
                <div class="list-box">
                    <div class="list animated fadeInUp" v-for="(item,index) in creative" v-bind:key="index">
                        <div class="title-wrapper">
                            <div class="list-title-box">
                                <div class="title">{{item.title}}</div>
                            </div>
                        </div>
                        <div class="title-img" :style="item.imgUrl" @click="push(item.part)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Creative',
        data() {
            return {
                creative: [
                    {
                        'title': '影视剧',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/ysj.jpg")',
                        'part': 0
                    },
                    {
                        'title': '短视频',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/dsp.jpg")',
                        'part': 1
                    },
                    {
                        'title': '广告片',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/ggp.jpg")',
                        'part': 2
                    },
                    {
                        'title': '综艺节目',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/zyjm.jpg")',
                        'part': 3
                    },
                    {
                        'title': '纪录片',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/jlp.jpg")',
                        'part': 4
                    },
                    {
                        'title': '宣传片',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/xcp.jpg")',
                        'part': 5
                    },
                    {
                        'title': '视觉包装',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/sjbz.jpg")',
                        'part': 6
                    },
                    {
                        'title': '平面设计',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/pmsj.jpg")',
                        'part': 7
                    },
                    {
                        'title': '活动摄影',
                        'imgUrl': 'background-image: url("http://store.meflourish.com/mfgw/mobile/img/creative/hdsy.jpg")',
                        'part': 8
                    },
                ]
            }
        },
        methods: {
            push: function (part) {
                this.$router.push({name: 'cases', params: {part: part}})
            }
        },
        mounted() {
            $('#content').height($(window).height() - 50);
        }
    }
</script>
<style scoped lang="less">
    @import "../assets/css/public.less";

    #creative {
        width: 100%;
        height: 100%;
    }

    #content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .list-box {
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .list {
        width: 100%;
        font-size: 0;
        height: 100px;
        margin-bottom: 14px;
    }

    .list > div {
        float: left;
        display: inline-block;
        box-sizing: border-box;
    }

    .title-wrapper {
        width: 20%;
        border: 1px solid rgb(153, 147, 219);
        height: 100%;
        border-right: 1px dashed rgb(153, 147, 219);
        border-radius: @border-radius;
        font-size: 1.2rem;
    }

    .list-title-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        display: inline-block;
        width: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.6rem;
    }

    .title-img {
        width: 80%;
        background-size: cover;
        /*background-position: 0 50%;*/
        height: 100%;
        border-radius: @border-radius;
    }
</style>