<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div class="btnCommon success" @click="submit()">确定</div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'Alert'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: null
    }
  },
  methods: {
    submit () {
      this.success()
    },
    closeMask () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background: #fff;
  border-radius: 6px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  z-index:3000;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.flex{
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}
.btnCommon{
   width:105px;
   height:32px;
   text-align:center;
   line-height: 32px;
   border-radius: 6px;
  }
 .btnCommon.success{
     background: #009688;
     color: #fff;
    /* //  &:hover{
    //    background:$btn-dark;
    //  } */
   }
   .success:hover{
      background:rgba(0, 0, 0, 10%)
   }
  .mask{
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    left:0;
    top:0;
    overflow: hidden;
    z-index: 2000;
  }
</style>
