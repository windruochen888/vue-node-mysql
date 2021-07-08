<template>
  <div>
    <!-- <div @click="handelParent">子组件调用父组件方法</div> -->
  </div>
</template>

<script>
export default {
  methods: {
    handelTest () {
      alert('父组件调用子组件')
    },
    handelParent () {
      this.$parent.parentMethod()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
