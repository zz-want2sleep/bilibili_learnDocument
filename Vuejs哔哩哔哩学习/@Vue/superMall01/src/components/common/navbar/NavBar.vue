<template>
  <div class="nav-bar">
    <div class="slot-left"><slot name="left"></slot></div>
    <div class="slot-center"><slot name="center"></slot></div>
    <div class="slot-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2);
  }

  .slot-left, .slot-right {
    width: 60px;
  }

  .slot-center {
    flex: 1;
  }
</style>