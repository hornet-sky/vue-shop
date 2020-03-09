<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(url, idx) in swipeImgUrls" :key="idx">
      <img :src="url" :class="{'width-full': widthFull, 'height-full': heightFull}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'Seiper',
  props: {
    swipeImgUrls: Array,
    widthFull: Boolean,
    heightFull: Boolean
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  text-align: center;
}
.width-full {
  width: 100%;
}
.height-full {
  height: 100%;
}
</style>