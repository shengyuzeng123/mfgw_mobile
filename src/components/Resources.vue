<template>
    <div id="resources">
        <PubHead>案&nbsp;例</PubHead>
        <div class="cases-video-box">
            <img class="poster" src="http://store.meflourish.com/mfgw/video/cases/poster/燃烧吧少年.jpg" alt="">
            <img class="play" @click="play" src="static/img/cases/play.png" alt="">
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
        </div>
        <div class="video-text">
            <div class="video-title">木木屋&唯品会</div>
            <div class="video-direction">
                2018年，米花传媒与童鞋领导品牌木木屋联合打造第一季《燃烧吧，麦克风》。《燃烧吧，麦克风》在浙江少儿频道及中国蓝TV播出，四大明星导师助阵，掀起一股“少儿版中国新歌声”热潮。围绕节目IP的全渠道推广，让木木屋品牌知名度得到迅速提升。
                同时，借助唯品会平台联动，为木木屋带来产品销售的直接拉升。合作期内，木木屋平台销量较合作前增长60%，投入产出比大于200%，效果显著。
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'resources',
        data() {
            return {
                playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://store.meflourish.com/mfgw/video/cases/video/燃烧吧少年.mp4" //你的m3u8地址（必填）
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
            play:function () {
                $('.poster').hide();
                $('.play').hide();
                $('.video-player').css('opacity','1');
                this.player.play();
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        mounted() {

        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/css/public.less";

    #resources {
        height: 100%;
    }

    .cases-video-box {
        position: relative;
        overflow: hidden;
    }

    .cases-video-box .video-player {
        /*opacity: 0;*/
    }

    .cases-video-box .poster {
        position: absolute;
        width: 100%;
        z-index: 97;
        left: 0;
        top: 0;
    }

    .cases-video-box .play {
        position: absolute;
        width: 50px;
        z-index: 98;
        left: calc(50% - 25px);
        top: calc(50% - 25px);
    }

    .video-text {
        margin-top: 28px;
    }

    .video-title {
        font-size: 1.6rem;
        color: @font-color;
        letter-spacing: 2px;
        font-weight: bold;
        text-align: center;
    }

    .video-direction {
        margin-top: 16px;
        font-size: 1.1rem;
        color: #484848;
        text-align: justify;
        line-height: 2rem;
        letter-spacing: 1px;
        padding: 0 18px;
    }
</style>