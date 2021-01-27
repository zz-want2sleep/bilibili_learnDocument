<template>
  <div class="goodsListItem">
    <img :src="showImg" alt="" @load="itemImgLoad">
    <div class="goods-info">
      <p>{{info.title}}</p>
      <span class="price">{{info.price}}</span>
      <span class="collect">{{info.cfav}}</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'GoodsListItem',
  data() {
    return {}
  },
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.info.image || this.info.show.img
    }
  },
  methods: {
    itemImgLoad() {
            // this.$nextTick(() => {
              console.log('GoodsListItem')
              this.$bus.$emit('itemImgLoad')
              // console.log(this.$root.$el);  
            // })
    }
  }
}
</script>

<style scoped>
  .goodsListItem {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goodsListItem img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>