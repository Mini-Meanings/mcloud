<template>
  <div class="ecs-wrap">
    <el-row >
      <el-col :span="12" class="item">
        <p><strong>集团总部流程IT-共享技术美的云</strong></p>
        <p>地址：广东深圳市南山区怡化金融科技大厦后海大道2388号 22层</p>
        <p>电话：0755-86951791</p>
        <p>邮箱：Cloud@Midea.com</p>
      </el-col>
      <el-col :span="12" class="item">
        <p><strong>美的集团股份有限公司</strong></p>
        <p>地址：广东省佛山市顺德区北滘镇美的大道6号美的总部大楼</p>
        <p>电话：0757-26338888</p>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="12" class="item">
        <p><strong>美的集团审计监察部监督</strong></p>
        <p>地址：广东省佛山市顺德区北滘镇美的大道6号美的总部大楼</p>
        <p>电话：0757-26605599</p>
        <p>邮箱：jc@midea.com.cn</p>
      </el-col>
      <el-col :span="12" class="item">
        <p><strong>美的集团打假热线</strong></p>
        <p>地址：广东省佛山市顺德区北滘镇美的大道6号美的总部大楼</p>
        <p>电话：0757-23270637</p>
        <p>邮箱：dajia@midea.com</p>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="12" class="item">
        <p><strong>客户服务热线</strong></p>
        <p class="lastp">电话：4008899315</p>
      </el-col>
    </el-row>
    <baidu-map class="addr" :center="center" :zoom="zoom" @ready="handler">
      <bm-panorama anchor="BMAP_ANCHOR_TOP_LEFT"></bm-panorama>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      <bm-marker :position="{lng: 113.942678, lat: 22.529777}" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
    </baidu-map>
    <!-- <div class="addr"><img src="../../../common/images/map.jpg"/></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 113.942678
      this.center.lat = 22.529777
      this.zoom = 18
    }
  }
}
</script>

<style lang="less" scoped>
.ecs-wrap{
  padding:25px 6px 0 6px !important;
  .el-row{
    padding:0 0 0 12px;
    margin-bottom: 20px;
    color:#333;
    &:last-child{
      margin-bottom: 0;
    }
    .item {
      font-size: 16px;
      p{
        margin-bottom: 20px;
        strong{
          font-weight: 500;
        }
      }
      .lastp{
        margin-bottom: 0;
      }
    }
  }
  .addr{
    width:100%;
    height:600px;
    img{
      width:100%;
      height:300px;
    }
  }
}
</style>
