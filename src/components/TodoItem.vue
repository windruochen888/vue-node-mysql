<template>
  <li class="item" @click="handelDelete">{{val}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  data () {
    return {
      content1: ''
    }
  },
  methods: {
    handelDelete () {
      this.$emit('delete', this.index)
    }
  },
  computed: {
    val () {
      return this.index + ':' + this.content
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  color:red
}
</style>
