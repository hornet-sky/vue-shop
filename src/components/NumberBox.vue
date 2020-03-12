<template>
  <div class="mui-numbox" :style="styles" 
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
    maxValue: Number,
    expansions: Object
  },
  methods: {
    valueChange (event) {
      console.log('valueChange', event)
      this.change(Number.parseInt(event.target.value), this.expansions)
    }
  },
  mounted () {
    this.common.mui('.mui-numbox').numbox();
  },
  updated () {
    console.log('updated', this.minValue, this.maxValue)
    const numbox = this.common.mui('.mui-numbox').numbox();
    numbox.setOption('max', this.maxValue)
    numbox.setOption('min', this.minValue)
  }
}
</script>

<style lang="scss" scoped>

</style>