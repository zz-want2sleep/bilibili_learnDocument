<template>
  <div class="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物导航栏</div>
    </nav-bar>
    <scroll
    @contentScroll="contentScroll"
    @pullingUp="loadMore"
    class="wrapper" 
    ref="scroll"
    :pullUpLoad="true"
    :probeType="3">
    <!-- 使用v-bind传过去的常量就会判断类型，不然统一按照字符串传递参数例如3编程"3" -->
      <home-swiper 
        :bannersList="banner"
        class="home-swiper"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control 
        :tabTitle="['流行', '新品', '精选']" 
        class="control" 
        @tabClick="changeType"></tab-control>
      <goods-list :goodsList="showGoods"/>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComs/HomeSwiper'
import RecommendView from './childComs/RecommendView'
import FeatureView from './childComs/FeatureView'

import {getMultiData, getHomeGoods} from 'network/home'

export default {
    name: "home",
    data(){
      return {
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page:0, list: []}
        },
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],

        currentType: 'pop',
        itemImgLister: null,
        isShow: false
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
    ,
    created() {
      //网络请求
      this.getMultidata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')

    }
    ,
    methods: {
      //网络请求
      getMultidata() {
        getMultiData().then(
        res => 
        {
          // console.log(res.data)
          this.banner = res.data.banner.list
          this.dKeyword = res.data.dKeyword.list
          this.keywords = res.data.keywords.list
          this.recommend = res.data.recommend.list
        })
      .catch(
        err =>
         {console.log(err)})
      },
      getHomegoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(
          res => {
            // console.log(res)
            this.goods[type].list.push(...res.data.list)
          }
        ).catch(err => err)
        this.goods[type].page += 1
      //完成上拉更多
      },

      //事件监听的方法
      changeType(index) {
        switch(index) {
          case 0: this.currentType = 'pop';break;
          case 1: this.currentType = 'new';break;
          case 2: this.currentType = 'sell';break;
        }
      },
      topClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        console.log(position);
        this.isShow = (-position.y) > 1000
      },
      loadMore() {
        this.getHomegoods(this.currentType);
      }
    }
    ,
          //created阶段组件模板还没加载，使用mounted用于操作Better-Scroll
      mounted() {
      //请求数据列表后刷新
      this.$nextTick(function() {

        // console.log(document.querySelector('.listItem'))
        // 父组件一般情况下无法直接拿到孙子组件的DOM元素（可以setTimeout来拿，但就没啥意义了）
      })
			this.itemImgLister = () => {
				this.$refs.scroll.refresh();
			}
			this.$bus.$on('itemImgLoad', this.itemImgLister);
    },
    deactivated() {
			//保存Y值
			// this.saveY = this.$refs.scroll.scroll.y
			
			//取消全局的事件监听
			this.$bus.$off('itemImgLoad', this.itemImgLister)
		}
}
</script>
// 需要写在父组件的样式是因为这个样式不属于公共组件的样式，例如：顶部导航条的背景颜色，以及当前‘吸顶’标签栏
<style scoped>
.home {
  height: 100vh;
  padding-top: 44px;
  /* overflow: hidden; */
}
.home-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 9;
  background-color: var(--color-tint);
}
.control {
  z-index: 9;
  position: sticky;
  position: -webkit-sticky;
  background:#fff;
  top: 44px;
}
.wrapper {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* margin-top: 44px; */
  overflow: hidden;
}
</style>