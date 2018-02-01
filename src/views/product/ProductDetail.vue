<template>
  <div class="wrapper" ref="wrapper">
    <div class="left">
      <div v-show="productdetail">
        <div class="tit" v-show="!isCollapse">产品与服务</div>
        <el-menu :default-active="$route.name" router unique-opened :collapse="isCollapse" class="menu">
          <el-submenu index="计算机与网络" >
            <template slot="title"><i class="el-icon-mf mf-duixiangcunchu"></i> <span slot="title">计算与网络</span></template>
              <el-menu-item index="云主机（ECS)" :route="{path:'/mcloud/productdetail/net/ECS'}">云主机（ECS）</el-menu-item>
              <el-menu-item index="虚拟网络（VDC)" :route="{path:'/mcloud/productdetail/net/VDC'}">虚拟网络（VDC)</el-menu-item>
              <el-menu-item index="负载均衡（SLB)" :route="{path:'/mcloud/productdetail/net/SLB'}">负载均衡（SLB）</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="存储与数据库">
            <template slot="title"><i class="el-icon-mf mf-cunchu"></i> <span slot="title">存储与数据库</span></template>
              <el-menu-item index="云硬盘（VHD)" :route="{path:'/mcloud/productdetail/database/VHD'}">云硬盘（VHD)</el-menu-item>
              <el-menu-item index="云数据库（RDS)" :route="{path:'/mcloud/productdetail/database/RDS'}">云数据库（RDS)</el-menu-item>
              <el-menu-item index="云缓存（OCS)" :route="{path:'/mcloud/productdetail/database/OCS'}">云缓存（OCS)</el-menu-item>
              <el-menu-item index="对象存储（OSS)" :route="{path:'/mcloud/productdetail/database/OSS'}">对象存储（OSS)</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="平台服务">
            <template slot="title"><i class="el-icon-mf mf-gailan"></i> <span slot="title">平台服务</span></template>
              <el-menu-item index="物联网平台（IOT）" :route="{path:'/mcloud/productdetail/plat/IOT'}">物联网平台（IOT）</el-menu-item>
              <el-menu-item index="ESB" :route="{path:'/mcloud/productdetail/plat/ESB'}">ESB</el-menu-item>
              <el-menu-item index="工业云平台（Inspace）" :route="{path:'/mcloud/productdetail/plat/Inspace'}">工业云平台（Inspace）</el-menu-item>
              <el-menu-item index="视频点播（MVoD）" :route="{path:'/mcloud/productdetail/plat/MVoD'}">视频点播（MVoD）</el-menu-item>
              <el-menu-item index="美易搜（MS）" :route="{path:'/mcloud/productdetail/plat/MS'}">美易搜（MS）</el-menu-item>
              <el-menu-item index="应用引擎（MAE）" :route="{path:'/mcloud/productdetail/plat/MAE'}">应用引擎（MCAE）</el-menu-item>
              <el-menu-item index="美的云网盘（MCD）" :route="{path:'/mcloud/productdetail/plat/MCD'}">美的云网盘（MCD）</el-menu-item>
              <el-menu-item index="数传通道（MD）" :route="{path:'/mcloud/productdetail/plat/MD'}">数传通道（MD）</el-menu-item>
              <el-menu-item index="推送服务（MPS）" :route="{path:'/mcloud/productdetail/plat/MPS'}">推送服务（MPS）</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="人工智能">
            <template slot="title"><i class="el-icon-mf mf-rengongzhinengiconX"></i> <span slot="title">人工智能</span></template>
              <el-menu-item index="人脸识别（MFR）" :route="{path:'/mcloud/productdetail/Intelligence/MFR'}"> 人脸识别（MFR）</el-menu-item>
              <el-menu-item index="图像识别（MIR）" :route="{path:'/mcloud/productdetail/Intelligence/MIR'}"> 图像识别（MIR）</el-menu-item>
              <el-menu-item index="字符识别（OCR）" :route="{path:'/mcloud/productdetail/Intelligence/OCR'}"> 字符识别（OCR）</el-menu-item>
              <el-menu-item index="机器学习平台（AIP）" :route="{path:'/mcloud/productdetail/Intelligence/AIP'}">机器学习平台（AIP）</el-menu-item>
              <el-menu-item index="智能推荐系统（IRT)" :route="{path:'/mcloud/productdetail/Intelligence/IRT'}">智能推荐系统（IRT）</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="安全与运维">
            <template slot="title"><i class="el-icon-mf mf-artboard19copy"></i> <span slot="title">安全与运维</span></template>
              <el-menu-item index="云监控（CMS）" :route="{path:'/mcloud/productdetail/safe/CMS'}">云监控（CMS）</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>

      <div v-show="!productdetail">
        <div class="tit"  v-show="!isCollapse">关于美的云</div>
        <el-menu :default-active="$route.name" router  :collapse="isCollapse" class="menu">
          <el-menu-item index="关于我们" :route="{path:'/mcloud/productdetail/about'}"><i class="el-icon-mf mf-guanyuwomen2"></i><span slot="title">关于我们</span></el-menu-item>
          <el-menu-item index="发展历程" :route="{path:'/mcloud/productdetail/history'}"><i class="el-icon-mf mf-fazhanlicheng2"></i><span slot="title">发展历程</span></el-menu-item>
          <el-menu-item index="联系我们" :route="{path:'/mcloud/productdetail/contact'}"><i class="el-icon-mf mf-lianxiwomen1"></i><span slot="title">联系我们</span></el-menu-item>
          <el-menu-item index="加入我们" :route="{path:'/mcloud/productdetail/join'}"><i class="el-icon-mf mf-jiaruwomen"></i><span slot="title">加入我们</span></el-menu-item>
        </el-menu>
      </div>
    </div>

    <div :class="['content-box',{'content-box-mini':isCollapse}]">
        <el-breadcrumb separator=">" class="breadcrumb">
          <el-breadcrumb-item v-for="(route,index) in this.$route.matched" :key="index" :to="{ path: route.path }">{{route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { addResizeListener, removeResizeListener } from '@/common/js/resize-event'
  export default {
    name: 'productDetail',
    data() {
      return {
        isCollapse:false,
      }
    },
    computed:{
      productdetail(){
        return ['关于我们','发展历程','联系我们','加入我们'].indexOf(this.$route.name) === -1;
      }
    },
    mounted() {
      this.$nextTick(() => {
        // this.resetItemPosition();
        addResizeListener(this.$el, this.resetItemPosition)
      });
    },
    beforeDestroy() {
      if (this.$el){
        removeResizeListener(this.$el, this.resetItemPosition)
      }
    },
    methods:{
      resetItemPosition(){
        if(window.outerWidth<735){
          this.isCollapse = true;
        }else{
          this.isCollapse = false;
        }
      }
    }
  }
</script>

<style lang="less">
  .wrapper {
    position: relative;
    .left{
      .menu:not(.el-menu--collapse) {
        width: 200px;
      }
      .menu{
        background-color: rgb(238, 243, 246);
        .el-menu-item{
          font-family: PingFangSC-Regular;
          color:rgb(72, 96, 106);
          &.is-active{
            background-color:rgb(238, 243, 246);
            color:#21b8d5;
          }
          &:hover{
            background-color:#cfe0e7;
          }
        }
        .el-submenu {
          .el-submenu__icon-arrow{
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color:rgb(72, 96, 106);
          }
          .el-submenu__title{
            color:rgb(72, 96, 106);
            font-family: PingFangSC-Regular;
            &:hover{
              background-color:#cfe0e7;
            }
          }
          .el-menu-item{
            background-color: #e2ebf2;
            color:rgb(72, 96, 106);
            font-family: PingFangSC-Regular;
            &:hover{
              background-color:#cfe0e7;
            }
            &.is-active{
              color:#21b8d5;
            }
          }
        }
      }
      background-color: rgb(238, 243, 246);
      padding-top: 40px;
      position: absolute;
      top:0;
      left: 0;
      bottom:0;
      .tit{
        width:80px;
        height:20px;
        margin:0 auto 15px auto;
        font-family: PingFangSC-Regular;
        color:rgb(72, 96, 106);
        font-size: 16px;
      }
      .el-icon-mf{
        color:#21b8d5;
        font-size:20px;
        margin-right: 5px;
      }
      .mf-duixiangcunchu{
        font-size:18px;
        margin-right: 2px;
      }
      .mf-lianxiwomen1{
        font-size:28px;
      }
      .mf-fazhanlicheng2{
        font-size:24px;
      }
    }
    .content-box {
      padding-left: 200px;
      min-height:750px;
      .breadcrumb{
        padding: 15px 0 20px 20px;
        .el-breadcrumb__inner,
        .el-breadcrumb__inner a {
          color: #48606a;
          font-weight: 400;
          &:hover{
            color: #21b8d5;
          }
        }
        .el-breadcrumb__item:last-child .el-breadcrumb__inner,
        .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
        .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
        .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
          color: #97b2be;
        }
      }
    }
    .content-box-mini{
       padding-left: 60px;
    }
  }
</style>
