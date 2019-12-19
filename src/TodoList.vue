<template>
  <div id="todolist">
    <input class="item" v-model="inputValue"/>

    <button @click="handelSubmit">提交</button>
     <button @click="Test">父组件调用子组件方法</button>
     <span id="errorMsg">{{errorMsg}}</span>
    <ul>
      <todo-item v-for="(item,index) of list"
                   :content="item"
                   :key="index"
                   :index="index"
                  @delete="handelDeleteItem">
      </todo-item>
    </ul>
    <v-test></v-test>
</div>
</template>

<script>
import TodoItem from './components/TodoItem'
import Test from './components/Test'
export default {
  components: {
    'todo-item': TodoItem,
    'v-test': Test
  },
  data () {
    return {
      inputValue: '',
      list: [],
      errorMsg: ''
    }
  },
  methods: {
    handelSubmit () {
      if (this.inputValue) {
        this.list.push(this.inputValue)
        this.errorMsg = ''
      } else {
        this.errorMsg = '不能输出为空'
      }
      this.inputValue = ''
    },
    handelDeleteItem (index) {
      this.list.splice(index, 1)
    },
    Test () {
      this.$children[0].handelTest()
    },
    parentMethod: function () {
      alert('子组件调用父组件')
    }
  }
}
</script>

<style lang="stylus" scoped>
 #todolist
   #errorMsg
     color:red
   li
       list-style :none
</style>
