<template>
  <div ref="numbox" class="mui-numbox" :style="styles" 
      :data-numbox-min='minValue === undefined ? 0 : minValue' 
      :data-numbox-max='maxValue === undefined ? 99 : maxValue'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" :value="value" @change="valueChange" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberBox',
  props: {
    styles: String,
    change: Function,
    value: Number,
    minValue: Number,
    maxValue: Number
  },
  methods: {
    valueChange (event) {
      this.change(event.target.value)
    }
  },
  updated () {
    const numbox = this.common.mui('.mui-numbox').numbox();
    numbox.setOption('max', this.maxValue)
    numbox.setOption('min', this.minValue)
  }
}
</script>

<style lang="scss" scoped>

</style>