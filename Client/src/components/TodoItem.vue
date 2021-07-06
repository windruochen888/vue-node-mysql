<template>
  <tr class="item"><td>{{id}}</td><td>{{title}}</td><td>{{content}}</td><td><button @click="handelEdit">修改</button><button @click="handelDelete">删除</button></td></tr>
</template>
<script>
export default {
  props: ['title', 'index', 'id', 'content'],
  data () {
    return {
    }
  },
  methods: {
    handelDelete () {
      this.$emit('delete', this.id)
    },
    handelEdit () {
      this.$emit('edit', this.id)
    }
  },
  computed: {
    // title () {
    //   return 'index:' + this.index + '---' + 'id:' + this.id + '---' + 'value:' + this.title
    // }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  /* color:red; */
  text-align:center
}
.item div{
  width:350px;
  display:inline-block
}
</style>
