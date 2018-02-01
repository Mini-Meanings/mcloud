<template>
  <div class="header-wrapper">
    <div class="left">
      <div class="logo" @click="$router.push('/home')">&nbsp;</div>
    </div>
    <div class="right">
      <el-menu  text-color="#cadfff" :default-active="activeIndex" mode="horizontal" router @select="select">
        <el-menu-item index="1" :route="{path:'/home'}">首页</el-menu-item>
        <el-menu-item index="market" :route="{path:''}">云市场</el-menu-item>
        <el-submenu index="2" class="product">
          <template slot="title">产品服务</template>
          <el-menu-item-group>
            <template slot="title">计算与网络</template>
            <el-menu-item index="云主机（ECS)" :route="{path:'/mcloud/productdetail/net/ECS'}">云主机（ECS）</el-menu-item>
            <el-menu-item index="虚拟网络（VDC)" :route="{path:'/mcloud/productdetail/net/VDC'}">虚拟网络（VDC)</el-menu-item>
            <el-menu-item index="负载均衡（SLB)" :route="{path:'/mcloud/productdetail/net/SLB'}">负载均衡（SLB）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="存储与数据库">
            <el-menu-item index="云硬盘（VHD)" :route="{path:'/mcloud/productdetail/database/VHD'}">云硬盘（VHD)</el-menu-item>
            <el-menu-item index="云数据库（RDS)" :route="{path:'/mcloud/productdetail/database/RDS'}">云数据库（RDS)</el-menu-item>
            <el-menu-item index="云缓存（OCS)" :route="{path:'/mcloud/productdetail/database/OCS'}">云缓存（OCS)</el-menu-item>
            <el-menu-item index="对象存储（OSS)" :route="{path:'/mcloud/productdetail/database/OSS'}">对象存储（OSS)</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="平台服务">
            <el-menu-item index="物联网平 (IOT) " :route="{path:'/mcloud/productdetail/plat/IOT'}">物联网平台 (IOT)</el-menu-item>
            <el-menu-item index="ESB" :route="{path:'/mcloud/productdetail/plat/ESB'}">ESB</el-menu-item>
            <el-menu-item index="工业云平台（Inspace）" :route="{path:'/mcloud/productdetail/plat/Inspace'}">工业云平台（Inspace）</el-menu-item>
            <el-menu-item index="视频点播（MVoD）" :route="{path:'/mcloud/productdetail/plat/MVoD'}">视频点播（MVoD）</el-menu-item>
            <el-menu-item index="美易搜（MS）" :route="{path:'/mcloud/productdetail/plat/MS'}">美易搜（MS）</el-menu-item>
            <el-menu-item index="应用引擎（MAE）" :route="{path:'/mcloud/productdetail/plat/MAE'}">应用引擎（MCAE）</el-menu-item>
            <el-menu-item index="美的云网盘（MCD）" :route="{path:'/mcloud/productdetail/plat/MCD'}">美的云网盘（MCD）</el-menu-item>
            <el-menu-item index="数传通道（MD）" :route="{path:'/mcloud/productdetail/plat/MD'}">数传通道（MD）</el-menu-item>
            <el-menu-item index="推送服务（MPS）" :route="{path:'/mcloud/productdetail/plat/MPS'}">推送服务（MPS）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="人工智能">
            <el-menu-item index="人脸识别（MFR）" :route="{path:'/mcloud/productdetail/Intelligence/MFR'}"> 人脸识别（MFR）</el-menu-item>
            <el-menu-item index="图像识别（MIR）" :route="{path:'/mcloud/productdetail/Intelligence/MIR'}"> 图像识别（MIR）</el-menu-item>
            <el-menu-item index="字符识别（OCR）" :route="{path:'/mcloud/productdetail/Intelligence/OCR'}"> 字符识别（OCR）</el-menu-item>
            <el-menu-item index="机器学习平台（AIP）" :route="{path:'/mcloud/productdetail/Intelligence/AIP'}">机器学习平台（AIP）</el-menu-item>
            <el-menu-item index="智能推荐系统（IRT)" :route="{path:'/mcloud/productdetail/Intelligence/IRT'}">智能推荐系统（IRT）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="安全与运维">
             <el-menu-item index="云监控（CMS）" :route="{path:'/mcloud/productdetail/safe/CMS'}">云监控（CMS）</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" class="help">
          <template slot="title">帮助与支持</template>
          <el-menu-item index="help" :route="{path:''}">美的技术文档</el-menu-item>
          <el-menu-item index="bbs" :route="{path:''}">美的技术论坛</el-menu-item>
        </el-submenu>

        <el-submenu index="4" >
          <template slot="title">关于美的云</template>
          <el-menu-item index="4-1" :route="{path:'/mcloud/productdetail/about'}">关于我们</el-menu-item>
          <el-menu-item index="4-2" :route="{path:'/mcloud/productdetail/history'}">发展历程</el-menu-item>
          <el-menu-item index="4-3" :route="{path:'/mcloud/productdetail/contact'}">联系我们</el-menu-item>
          <el-menu-item index="4-4" :route="{path:'/mcloud/productdetail/join'}">加入我们</el-menu-item>
        </el-submenu>
        <el-menu-item index="mtp" :route="{path:''}"><i class="el-icon-mf mf-wangluo" style="font-size:22px;margin-right:5px;color:#21b8d5"></i>控制台</el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
      }
    },
    methods:{
      select(index){
        if(index === 'market'){
          window.open('http://mtp.midea.com/market/#/home');
        }else if(index === 'mtp'){
          window.open('http://mtp.midea.com');
        }else if(index === 'help'){
          window.open('http://mtp.midea.com/module/management.html#/d/center');
        }else if(index === 'bbs'){
          window.open('http://10.16.67.60/');
        }
      }
    }
  }
</script>

<style lang="less">
  .header-wrapper {
    position: fixed;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    z-index: 1;
    padding: 12px 64px;
    min-width: 470px;
    .left {
      float: left;
      .logo {
        width: 70px;
        height: 43px;
        line-height: 23px;
        padding-left: 36px;
        letter-spacing: 2px;
        font-size: 16px;
        color: #fff;
        margin-top: -4px;
        background: url("/static/images/index/logo2.png") no-repeat center center;
        background-size: contain;
        cursor: pointer;
      }
    }
    .right {
      float: right;
      margin-top: -12px;
      .el-menu--horizontal {
        background-color: #1d293f;
        transition: background-color 0.5s linear;
        border-bottom:none;
      }
      .el-menu--horizontal .el-menu-item,
      .el-menu--horizontal .el-submenu__title {
        border-bottom: 1px solid transparent;
        color: #cadfff;
      }
      .el-menu--horizontal .el-menu-item:hover,
      .el-menu--horizontal .el-menu-item.is-active,
      .el-menu--horizontal .el-submenu__title.is-active,
      .el-menu--horizontal .el-submenu__title:hover {
        background-color: #1d293f;
        transition: background-color 0.5s linear;
      }
      .el-menu--horizontal>.el-menu-item:hover,
      .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
      .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        border-bottom: 1px solid #21b8d5 !important;
        color:#21b8d5 !important;
      }
      .el-menu--horizontal .el-menu {
        background-color: #1d293f;
      }
      .el-menu--horizontal .el-submenu>.el-menu {
        position: fixed;
        top: 60px;
        border: 1px solid #37445c;
        border-left:none;
        padding:0;
        overflow-y: auto;
      }
      .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
        display:none;
      }
      .el-menu--horizontal .el-submenu .el-menu-item {
        background-color: #1d293f;
        padding-left: 20px;
        color:#828898 !important;
        &:hover{
          background-color: rgb(72, 96, 106) !important;
          color:#21b8d5 !important;
        }
      }
      .el-menu--horizontal .el-menu-item-group{
        float:left;
        .el-menu-item:hover{
          background-color: #1d293f !important;
          color:#21b8d5;
        }
      }
      .el-menu-item-group__title {
        font-size: 15px;
        color: #cadfff !important;
        margin-left: -20px !important;
      }
    }
  }
  @media screen and  (max-width: 820px) {
     .header-wrapper {
       padding: 12px 0;
     }
  }
  @media screen  and (min-width:640px) and (max-width: 820px) {
     .product>.el-menu{
       column-width: 200px;
       -moz-column-width:200px; /* Firefox */
      -webkit-column-width:200px; /* Safari and Chrome */
       .el-menu-item-group{
         break-inside: avoid;
         float:none;
       }
     }
  }
  @media screen and (max-width: 685px) {
     .header-wrapper {
       .left{
         display: none;
       }
     }
  }
  @media screen and (max-width: 640px) {
    .product>.el-menu{
      bottom:0;
      right:-6px;
       .el-menu-item-group{
         width:220px;
       }
     }
  }
  @media screen and (max-width: 580px) {
     .header-wrapper {
       .right{
         .help{
           display: none;
         }
       }
     }
  }
</style>
