<template>
    <div id="test">
        <div>这是一个测试页</div>
        <ul>
            <li v-for="item in test">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data() {
            return {}
        },
        computed: {
            test() {
                return this.$store.getters.test;
            },
        },
        mounted() {
//            ES6主要语法
            //结构赋值
            let [a, b, c = '暂无'] = [1, 2, undefined];  //左右两边的结构要一样
            let {name, age: d} = {name: 1, age: 2};  //左右两边的结构要一样 ,并且可以取别名
            console.log(a, b, c);
            console.log(name, d);

        }
    }
</script>
<style scoped>

</style>