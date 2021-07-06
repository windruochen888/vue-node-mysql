<template>
  <div id="todolist">
   <div style="text-align: center;margin-bottom:10px;"> 标题:<input  v-model="searchTitle"/>内容:<input  v-model="searchContent"/><button @click="search">查询</button><button @click="add">新增</button></div>
    <table border="1" width="80%" align="center">
      <tr>
        <th width="10%">id</th>
        <th width="20%">标题</th>
        <th width="55%">内容</th>
        <th width="15%">操作</th>
      </tr>
    <todo-item
        v-for="(item,index) of list"
        :title="item.title"
        :content="item.content"
        :key="item.id"
        :index="index"
        :id="item.id"
        @delete="handelDeleteItem"
        @edit="handelEditItem"
      ></todo-item>
    </table>
    <v-test></v-test>
    <div  v-show="show">
      <div class="dialog">
      <table>
      <tr><td>标题：<input v-model="title" style="width:400px;margin-bottom:10px;" /></td></tr>
      <tr><td>内容：<textarea v-model="content" style="width:400px;height:200px;"></textarea></td></tr>
      </table>
      <div style="float: right;margin-top: 125px;"><button @click="handelSubmit">确认</button><button @click="show=false">取消</button></div>
      </div>
      <div class="mask"></div>
    </div>
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
  mounted () {
    this.getList()
  },
  data () {
    return {
      list: [],
      searchTitle: '',
      searchContent: '',
      show: false,
      title: '',
      content: '',
      option: '',
      id: ''
    }
  },
  methods: {
    getList () {
      var self = this
      this.axios({
        method: 'GET',
        url: '/api/list',
        params: {title: self.searchTitle, content: self.searchContent}
      }).then((res) => {
        self.list = res.data.rows || []
      })
    },
    search () {
      this.getList()
    },
    add () {
      this.show = true
      this.id = ''
      this.title = ''
      this.content = ''
      this.option = 'add'
    },
    handelEditItem (id) {
      this.show = true
      this.id = ''
      this.title = ''
      this.content = ''
      this.option = 'edit'
      this.axios({
        method: 'GET',
        url: '/api/detail',
        params: {id: id}
      }).then((res) => {
        this.title = res.data.rows.title
        this.content = res.data.rows.content
        this.id = res.data.rows.id
      })
    },
    handelSubmit () {
      if (!this.title) {
        this.alert({
          message: '标题不能为空',
          confirm: function () {
            this.show = false
          }
        })
      } else {
        if (this.option === 'add') {
          this.axios({
            method: 'POST',
            url: '/api/add',
            data: {title: this.title, content: this.content}
          }).then((res) => {
            this.show = false
            this.getList()
          })
        } else {
          this.axios({
            method: 'POST',
            url: '/api/update',
            data: {id: this.id, title: this.title, content: this.content}
          }).then((res) => {
            this.show = false
            this.getList()
          })
        }
      }
    },
    handelDeleteItem (id) {
      // this.list.splice(index, 1)
      this.axios({
        method: 'POST',
        url: '/api/delete',
        data: {id: id}
      }).then((res) => {
        this.getList()
      })
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
#todolist #errorMsg {
  color: red;
}
table{
  border-collapse:collapse;
}
li {
  list-style: none;
}
.dialog{
  width:500px;
  height:400px;
  // border:solid 1px red;
  z-index:200;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background:#fff;
  padding:10px;
}
.mask{
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    left:0;
    top:0;
    overflow: hidden;
    z-index: 100;
  }
</style>
