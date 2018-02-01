<template>
  <div class="ecs-wrap">
    <div class="develop">
      <p class="err-title">404</p>
      <p class="err-msg">对不起&nbsp;&nbsp;您的页面飞走啦~</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.ecs-wrap{
  padding-left: 0 !important;
  background: #201d2c;
  .develop{
    height: 600px;
    background: url('/static/images/404error/404.png') no-repeat center center;
    background-size: cover;
    color:white;
    text-align:center;
    .err-title{
        font-size:120px;
        padding-top:40px;
    }
    .err-msg{
        font-size:26px;
        padding-top:40px;
        padding-left:20px;
    }
  }
}
</style>
