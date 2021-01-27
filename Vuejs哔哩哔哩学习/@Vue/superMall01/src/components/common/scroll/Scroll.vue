<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'wrapper',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  }
  ,
  mounted() {
    console.log(this.$children[4].$children)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
           }) 
             console.log(this.scroll)
    //  console.log('Scroll')
      this.scroll.on('scroll', position => {
        this.$emit('contentScroll', position)
        // console.log(111111111111)
      });

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
        console.log('下拉加载更多');
        this.pullingUp();
      })
      

    })
  },
  methods: {
    refresh() {
      this.scroll.refresh()
    },
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time=300)
    },
    pullingUp() {
      setTimeout(() => {
          this.scroll.finishPullUp();
        }, 2000);
    }
  }
}
</script>

<style scoped>
</style>