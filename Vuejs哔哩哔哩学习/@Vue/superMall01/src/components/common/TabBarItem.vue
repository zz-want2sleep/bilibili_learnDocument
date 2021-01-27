<!--
 * @Author: your name
 * @Date: 2020-09-23 04:09:11
 * @LastEditTime: 2020-09-23 04:14:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \哔哩哔哩学习文档\Vuejs哔哩哔哩学习\@Vue\tabBar\src\components\tabBar\TabBarItem.vue
-->
// 标签内的元素是固定的话,使用具名插槽可能比较好操作，就像下列高亮图片和普通图片动态切换时使用的是v-if和v-else
// 最好在插槽的外面再包上一层标签，这样更好操作是否展示插槽内的信息以及调整样式
<template>
 <div class="TabBarItem" @click="btnClick">
     <div v-if="!isActive"><slot name="slot-img"></slot></div>
     <div v-else><slot name="slot-img-active"></slot></div>
     <!-- 动态绑定class -->
     <!-- 需要动态传递样式，复杂的话就封装到methods或computed中 -->
     <div :style="{color: isActiveColor}"><slot name="slot-text"></slot></div>
 </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data () {
        return {
            msg:'Welcome to your vuetemplate',
        }
    },
    computed: {
        //使用indexOf来判断当前路由是否活跃是否
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        isActiveColor() {
            return this.isActive ? this.activeColor : ''
        }
    },
    methods: {
        btnClick() {
            this.active = !this.active
            this.$router.push(this.path).catch(err => err)
        }
    }
}
</script>

<style scoped>
 .TabBarItem {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.TabBarItem img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
}
</style>
