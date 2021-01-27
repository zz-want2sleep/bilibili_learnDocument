<template>
  <div class="tabControl">
    <!-- 一般只是文字发生改变的话，可以不适用插槽 -->
    <div 
    v-for="(item, idx) in tabTitle" 
    :key="item"
    @click="tabClick(idx)"
    class="tabItem"
    :class="{active: index === idx}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabTitle:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    tabClick(index) {
      this.index = index
      console.log(index)
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tabControl {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
} 
.tabItem {
  text-align: center;
  flex: 1;
}
.tabItem.active span{
  color: var(--color-high-text);
  padding: 3px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>