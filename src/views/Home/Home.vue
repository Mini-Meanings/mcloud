<template>
  <div class="container">
    <!-- 轮播图 -->
      <banner></banner>
    <!-- 产品 -->
      <el-row type="flex" justify="space-around" class="row-bg canvas-bg">
          <el-col :span="6" class="col1 " @click.native="topro('ECS')">
            <p class="img-box"><img src="../../common/images/index/index_p1.png"></p>
              <p>什么是美的云？</p>
              <span class="blue">了解美的云平台的产品服务</span>
          </el-col>
        <el-col :span="6" class="col1 " @click.native="topro('IOT')">
          <p class="img-box"><img src="../../common/images/index/index_p2.png"></p>
            <p>强大的平台服务</p>
           <span class="blue">美的云物联网平(IOT)平台</span>
        </el-col>
        <el-col :span="6" class="col1 " @click.native="topro('docs')">
          <p class="img-box"><img src="../../common/images/index/index_p3.png"></p>
            <p>技术支持</p>
            <span class="blue" target="_blank">有什么不明白 看看吧</span>
        </el-col>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
        <div class="bomb-rocket"></div>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit  deley1">领先的开源云计算&nbsp;&nbsp;构建强大的云服务</span>
            <div class="desc">
              基于业界流行的OpenStack原生开源云计算平台，并整合自主研发的服务组件。美的云提供包括弹性计算、高性能存储、SDN网络等在内的完整云计算基础设施服务（IaaS），让海量的云端资源随手可得，按需自由支配。
            </div>
            <router-link to="/mcloud/productdetail/net/ECS"><el-button  type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img1 img-animate"></el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="8" class="img2 img-animate"></el-col>
        <el-col :span="8" class="text">
           <span class="tit  deley3">出众的平台性能&nbsp;&nbsp;打造软件定义的数据中心</span>
            <div class="desc">
              利用OpenStack Nova模块经过精心打磨，已实现秒级创建云主机；云硬盘最高可提供6000 IOPS / 170 MBps的超高性能，秒级即可完成1T云硬盘实时快照备份；利用灵活易用的SDN网络，可快速搭建美的云内部私有网络；通过简单友好的可视化操作界面，可轻松获得海量计算、存储和网络资源，真正实现安全、稳定、高效的软件定义数据中心。
            </div>
            <router-link to="/mcloud/productdetail/database/VHD"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit  deley1">丰富的智能化经验&nbsp;&nbsp;成就领先的物联网平台</span>
            <div class="desc">
              美的云物联网(IOT)平台是为智能硬件产品接入互联网而推出的一项开放云服务，使互联设备可以轻松安全地与云应用及其他设备交互，实现用户与设备，设备与设备，设备与用户之间的互联、互动、互懂。依靠美的云计算团队丰富的业务经验和技术积累，美的云IOT服务可支持数亿台设备和数百亿条消息，并且可以对这些消息进行处理并将其安全可靠地路由至目标节点和其他设备。
            </div>
            <router-link to="/mcloud/productdetail/plat/IoT"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img3 img-animate"></el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="8" class="img4 img-animate"></el-col>
        <el-col :span="8" class="text">
           <span class="tit  deley5">先进的技术架构&nbsp;&nbsp;提供强大的人工智能服务</span>
            <div class="desc">
              美的云借助领先的开源技术搭建新一代的人工智能服务。利用大数据和深度学习的极致结合打造的美的人脸识别服务(MFR)，可精准实现图像或视频中人脸的检测、分析和比对，包括人脸检测定位、人脸属性识别和人脸比对等独立服务模块，可为开发者和企业提供高性能的在线API服务，应用于人脸AR、人脸识别和认证、大规模人脸检索、照片管理等各种场景。
            </div>
            <router-link to="/mcloud/productdetail/Intelligence/MFR"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit  deley2">专业化&nbsp;&nbsp;统一化的运维服务</span>
            <div class="desc">
              通过量化运维资源利用情况、资源配置速度、对您需求的响应速度、资源与需求的匹配情况等检验和衡量运维的工作效率、工作水平。包括监控报警，通知列表，操作日志，工单支持等服务。
            </div>
            <router-link to="/mcloud/productdetail/safe/CMS"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img5 img-animate"></el-col>
      </el-row>

  </div>
</template>

<script>
import Banner from '../../common/components/banner/Banner';
export default {
  name: 'home',
  components: {
    'banner': Banner
  },
  data() {
    return {
    }
  },
  methods:{
    topro(index){
      if(index === 'ECS'){
        this.$router.push({path:'/mcloud/productdetail/net/ECS'})
      }else if(index === 'IOT'){
        this.$router.push({path:'/mcloud/productdetail/plat/IOT'})
      }else{
        window.open('http://mtp.midea.com/module/management.html#/d/center');
      }
    },
  }
}
</script>

<style lang="less" scoped>
.container {
    .canvas-bg{
      position: relative;
      box-sizing: border-box;
      .bomb-rocket {
        position: absolute;
        bottom: 0;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
      }

      .bomb-rocket:nth-child(4) {
        left: 33vw;
        -webkit-animation-name: bomb-rocket-animate-2;
                animation-name: bomb-rocket-animate-2;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: springgreen;
      }

      .bomb-rocket:nth-child(7) {
        left: 65vw;
        -webkit-animation-name: bomb-rocket-animate-2;
                animation-name: bomb-rocket-animate-2;
        -webkit-animation-delay: 2s;
                animation-delay: 2s;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: springgreen;
      }

      .bomb-rocket:nth-child(9) {
        left: 90vw;
        -webkit-animation-name: bomb-rocket-animate-1;
                animation-name: bomb-rocket-animate-1;
        -webkit-animation-delay: 2s;
                animation-delay: 2s;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: deepskyblue;
      }

      .bomb-rocket:nth-child(10) {
        left: 92vw;
        -webkit-animation-name: bomb-rocket-animate-2;
                animation-name: bomb-rocket-animate-2;
        -webkit-animation-delay: 2s;
                animation-delay: 2s;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: turquoise;
      }

      .bomb-rocket:nth-child(12) {
        left: 20vw;
        -webkit-animation-name: bomb-rocket-animate-1;
                animation-name: bomb-rocket-animate-1;
        -webkit-animation-delay: 2s;
                animation-delay: 2s;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: turquoise;
      }

      .bomb-rocket:nth-child(13) {
        left: 5vw;
        -webkit-animation-name: bomb-rocket-animate-2;
                animation-name: bomb-rocket-animate-2;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color: deepskyblue;
      }

      .bomb-rocket:nth-child(15) {
        left: 59vw;
        -webkit-animation-name: bomb-rocket-animate-1;
                animation-name: bomb-rocket-animate-1;
        -webkit-animation-delay: 2s;
                animation-delay: 2s;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        color:  springgreen;
      }

      @-webkit-keyframes bomb-rocket-animate-1 {
        0% {
          -webkit-transform: rotate(-10deg) translateY(0) scale(0);
                  transform: rotate(-10deg) translateY(0) scale(0);
          opacity: 1;
          box-shadow: none;
        }
        0.1% {
          -webkit-transform: rotate(-10deg) translateY(0) scale(0.1, 0.5);
                  transform: rotate(-10deg) translateY(0) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1, 0.5);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50.1% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor;
          opacity: 1;
        }
        75% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 500px 0px 5px #fff, 500px 0px 10px #fff, 500px 0px 20px currentColor, 500px 0px 30px currentColor, 500px 0px 40px currentColor, 500px 0px 55px currentColor, 500px 0px 75px currentColor, 344.68271px 60.77686px 5px #fff, 344.68271px 60.77686px 10px #fff, 344.68271px 60.77686px 20px currentColor, 344.68271px 60.77686px 30px currentColor, 344.68271px 60.77686px 40px currentColor, 344.68271px 60.77686px 55px currentColor, 344.68271px 60.77686px 75px currentColor, 187.93852px 68.40403px 5px #fff, 187.93852px 68.40403px 10px #fff, 187.93852px 68.40403px 20px currentColor, 187.93852px 68.40403px 30px currentColor, 187.93852px 68.40403px 40px currentColor, 187.93852px 68.40403px 55px currentColor, 187.93852px 68.40403px 75px currentColor, 433.0127px 250px 5px #fff, 433.0127px 250px 10px #fff, 433.0127px 250px 20px currentColor, 433.0127px 250px 30px currentColor, 433.0127px 250px 40px currentColor, 433.0127px 250px 55px currentColor, 433.0127px 250px 75px currentColor, 268.11556px 224.97566px 5px #fff, 268.11556px 224.97566px 10px #fff, 268.11556px 224.97566px 20px currentColor, 268.11556px 224.97566px 30px currentColor, 268.11556px 224.97566px 40px currentColor, 268.11556px 224.97566px 55px currentColor, 268.11556px 224.97566px 75px currentColor, 128.55752px 153.20889px 5px #fff, 128.55752px 153.20889px 10px #fff, 128.55752px 153.20889px 20px currentColor, 128.55752px 153.20889px 30px currentColor, 128.55752px 153.20889px 40px currentColor, 128.55752px 153.20889px 55px currentColor, 128.55752px 153.20889px 75px currentColor, 250px 433.0127px 5px #fff, 250px 433.0127px 10px #fff, 250px 433.0127px 20px currentColor, 250px 433.0127px 30px currentColor, 250px 433.0127px 40px currentColor, 250px 433.0127px 55px currentColor, 250px 433.0127px 75px currentColor, 119.70705px 328.89242px 5px #fff, 119.70705px 328.89242px 10px #fff, 119.70705px 328.89242px 20px currentColor, 119.70705px 328.89242px 30px currentColor, 119.70705px 328.89242px 40px currentColor, 119.70705px 328.89242px 55px currentColor, 119.70705px 328.89242px 75px currentColor, 34.72964px 196.96155px 5px #fff, 34.72964px 196.96155px 10px #fff, 34.72964px 196.96155px 20px currentColor, 34.72964px 196.96155px 30px currentColor, 34.72964px 196.96155px 40px currentColor, 34.72964px 196.96155px 55px currentColor, 34.72964px 196.96155px 75px currentColor, 0px 500px 5px #fff, 0px 500px 10px #fff, 0px 500px 20px currentColor, 0px 500px 30px currentColor, 0px 500px 40px currentColor, 0px 500px 55px currentColor, 0px 500px 75px currentColor, -60.77686px 344.68271px 5px #fff, -60.77686px 344.68271px 10px #fff, -60.77686px 344.68271px 20px currentColor, -60.77686px 344.68271px 30px currentColor, -60.77686px 344.68271px 40px currentColor, -60.77686px 344.68271px 55px currentColor, -60.77686px 344.68271px 75px currentColor, -68.40403px 187.93852px 5px #fff, -68.40403px 187.93852px 10px #fff, -68.40403px 187.93852px 20px currentColor, -68.40403px 187.93852px 30px currentColor, -68.40403px 187.93852px 40px currentColor, -68.40403px 187.93852px 55px currentColor, -68.40403px 187.93852px 75px currentColor, -250px 433.0127px 5px #fff, -250px 433.0127px 10px #fff, -250px 433.0127px 20px currentColor, -250px 433.0127px 30px currentColor, -250px 433.0127px 40px currentColor, -250px 433.0127px 55px currentColor, -250px 433.0127px 75px currentColor, -224.97566px 268.11556px 5px #fff, -224.97566px 268.11556px 10px #fff, -224.97566px 268.11556px 20px currentColor, -224.97566px 268.11556px 30px currentColor, -224.97566px 268.11556px 40px currentColor, -224.97566px 268.11556px 55px currentColor, -224.97566px 268.11556px 75px currentColor, -153.20889px 128.55752px 5px #fff, -153.20889px 128.55752px 10px #fff, -153.20889px 128.55752px 20px currentColor, -153.20889px 128.55752px 30px currentColor, -153.20889px 128.55752px 40px currentColor, -153.20889px 128.55752px 55px currentColor, -153.20889px 128.55752px 75px currentColor, -433.0127px 250px 5px #fff, -433.0127px 250px 10px #fff, -433.0127px 250px 20px currentColor, -433.0127px 250px 30px currentColor, -433.0127px 250px 40px currentColor, -433.0127px 250px 55px currentColor, -433.0127px 250px 75px currentColor, -328.89242px 119.70705px 5px #fff, -328.89242px 119.70705px 10px #fff, -328.89242px 119.70705px 20px currentColor, -328.89242px 119.70705px 30px currentColor, -328.89242px 119.70705px 40px currentColor, -328.89242px 119.70705px 55px currentColor, -328.89242px 119.70705px 75px currentColor, -196.96155px 34.72964px 5px #fff, -196.96155px 34.72964px 10px #fff, -196.96155px 34.72964px 20px currentColor, -196.96155px 34.72964px 30px currentColor, -196.96155px 34.72964px 40px currentColor, -196.96155px 34.72964px 55px currentColor, -196.96155px 34.72964px 75px currentColor, -500px 0px 5px #fff, -500px 0px 10px #fff, -500px 0px 20px currentColor, -500px 0px 30px currentColor, -500px 0px 40px currentColor, -500px 0px 55px currentColor, -500px 0px 75px currentColor, -344.68271px -60.77686px 5px #fff, -344.68271px -60.77686px 10px #fff, -344.68271px -60.77686px 20px currentColor, -344.68271px -60.77686px 30px currentColor, -344.68271px -60.77686px 40px currentColor, -344.68271px -60.77686px 55px currentColor, -344.68271px -60.77686px 75px currentColor, -187.93852px -68.40403px 5px #fff, -187.93852px -68.40403px 10px #fff, -187.93852px -68.40403px 20px currentColor, -187.93852px -68.40403px 30px currentColor, -187.93852px -68.40403px 40px currentColor, -187.93852px -68.40403px 55px currentColor, -187.93852px -68.40403px 75px currentColor, -433.0127px -250px 5px #fff, -433.0127px -250px 10px #fff, -433.0127px -250px 20px currentColor, -433.0127px -250px 30px currentColor, -433.0127px -250px 40px currentColor, -433.0127px -250px 55px currentColor, -433.0127px -250px 75px currentColor, -268.11555px -224.97566px 5px #fff, -268.11555px -224.97566px 10px #fff, -268.11555px -224.97566px 20px currentColor, -268.11555px -224.97566px 30px currentColor, -268.11555px -224.97566px 40px currentColor, -268.11555px -224.97566px 55px currentColor, -268.11555px -224.97566px 75px currentColor, -128.55752px -153.20889px 5px #fff, -128.55752px -153.20889px 10px #fff, -128.55752px -153.20889px 20px currentColor, -128.55752px -153.20889px 30px currentColor, -128.55752px -153.20889px 40px currentColor, -128.55752px -153.20889px 55px currentColor, -128.55752px -153.20889px 75px currentColor, -249.99998px -433.0127px 5px #fff, -249.99998px -433.0127px 10px #fff, -249.99998px -433.0127px 20px currentColor, -249.99998px -433.0127px 30px currentColor, -249.99998px -433.0127px 40px currentColor, -249.99998px -433.0127px 55px currentColor, -249.99998px -433.0127px 75px currentColor, -119.70701px -328.89241px 5px #fff, -119.70701px -328.89241px 10px #fff, -119.70701px -328.89241px 20px currentColor, -119.70701px -328.89241px 30px currentColor, -119.70701px -328.89241px 40px currentColor, -119.70701px -328.89241px 55px currentColor, -119.70701px -328.89241px 75px currentColor, -34.72959px -196.96154px 5px #fff, -34.72959px -196.96154px 10px #fff, -34.72959px -196.96154px 20px currentColor, -34.72959px -196.96154px 30px currentColor, -34.72959px -196.96154px 40px currentColor, -34.72959px -196.96154px 55px currentColor, -34.72959px -196.96154px 75px currentColor, 0.00028px -499.99994px 5px #fff, 0.00028px -499.99994px 10px #fff, 0.00028px -499.99994px 20px currentColor, 0.00028px -499.99994px 30px currentColor, 0.00028px -499.99994px 40px currentColor, 0.00028px -499.99994px 55px currentColor, 0.00028px -499.99994px 75px currentColor, 60.77729px -344.68262px 5px #fff, 60.77729px -344.68262px 10px #fff, 60.77729px -344.68262px 20px currentColor, 60.77729px -344.68262px 30px currentColor, 60.77729px -344.68262px 40px currentColor, 60.77729px -344.68262px 55px currentColor, 60.77729px -344.68262px 75px currentColor, 68.40456px -187.93841px 5px #fff, 68.40456px -187.93841px 10px #fff, 68.40456px -187.93841px 20px currentColor, 68.40456px -187.93841px 30px currentColor, 68.40456px -187.93841px 40px currentColor, 68.40456px -187.93841px 55px currentColor, 68.40456px -187.93841px 75px currentColor, 250.00279px -433.01207px 5px #fff, 250.00279px -433.01207px 10px #fff, 250.00279px -433.01207px 20px currentColor, 250.00279px -433.01207px 30px currentColor, 250.00279px -433.01207px 40px currentColor, 250.00279px -433.01207px 55px currentColor, 250.00279px -433.01207px 75px currentColor, 224.97966px -268.11461px 5px #fff, 224.97966px -268.11461px 10px #fff, 224.97966px -268.11461px 20px currentColor, 224.97966px -268.11461px 30px currentColor, 224.97966px -268.11461px 40px currentColor, 224.97966px -268.11461px 55px currentColor, 224.97966px -268.11461px 75px currentColor, 153.21347px -128.55641px 5px #fff, 153.21347px -128.55641px 10px #fff, 153.21347px -128.55641px 20px currentColor, 153.21347px -128.55641px 30px currentColor, 153.21347px -128.55641px 40px currentColor, 153.21347px -128.55641px 55px currentColor, 153.21347px -128.55641px 75px currentColor, 433.03515px -249.99435px 5px #fff, 433.03515px -249.99435px 10px #fff, 433.03515px -249.99435px 20px currentColor, 433.03515px -249.99435px 30px currentColor, 433.03515px -249.99435px 40px currentColor, 433.03515px -249.99435px 55px currentColor, 433.03515px -249.99435px 75px currentColor, 328.92262px -119.69922px 5px #fff, 328.92262px -119.69922px 10px #fff, 328.92262px -119.69922px 20px currentColor, 328.92262px -119.69922px 30px currentColor, 328.92262px -119.69922px 40px currentColor, 328.92262px -119.69922px 55px currentColor, 328.92262px -119.69922px 75px currentColor, 196.99409px -34.72095px 5px #fff, 196.99409px -34.72095px 10px #fff, 196.99409px -34.72095px 20px currentColor, 196.99409px -34.72095px 30px currentColor, 196.99409px -34.72095px 40px currentColor, 196.99409px -34.72095px 55px currentColor, 196.99409px -34.72095px 75px currentColor;
          opacity: 1;
        }
        100% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 500px 0px 5px #fff, 500px 0px 10px #fff, 500px 0px 20px currentColor, 500px 0px 30px currentColor, 500px 0px 40px currentColor, 500px 0px 55px currentColor, 500px 0px 75px currentColor, 344.68271px 60.77686px 5px #fff, 344.68271px 60.77686px 10px #fff, 344.68271px 60.77686px 20px currentColor, 344.68271px 60.77686px 30px currentColor, 344.68271px 60.77686px 40px currentColor, 344.68271px 60.77686px 55px currentColor, 344.68271px 60.77686px 75px currentColor, 187.93852px 68.40403px 5px #fff, 187.93852px 68.40403px 10px #fff, 187.93852px 68.40403px 20px currentColor, 187.93852px 68.40403px 30px currentColor, 187.93852px 68.40403px 40px currentColor, 187.93852px 68.40403px 55px currentColor, 187.93852px 68.40403px 75px currentColor, 433.0127px 250px 5px #fff, 433.0127px 250px 10px #fff, 433.0127px 250px 20px currentColor, 433.0127px 250px 30px currentColor, 433.0127px 250px 40px currentColor, 433.0127px 250px 55px currentColor, 433.0127px 250px 75px currentColor, 268.11556px 224.97566px 5px #fff, 268.11556px 224.97566px 10px #fff, 268.11556px 224.97566px 20px currentColor, 268.11556px 224.97566px 30px currentColor, 268.11556px 224.97566px 40px currentColor, 268.11556px 224.97566px 55px currentColor, 268.11556px 224.97566px 75px currentColor, 128.55752px 153.20889px 5px #fff, 128.55752px 153.20889px 10px #fff, 128.55752px 153.20889px 20px currentColor, 128.55752px 153.20889px 30px currentColor, 128.55752px 153.20889px 40px currentColor, 128.55752px 153.20889px 55px currentColor, 128.55752px 153.20889px 75px currentColor, 250px 433.0127px 5px #fff, 250px 433.0127px 10px #fff, 250px 433.0127px 20px currentColor, 250px 433.0127px 30px currentColor, 250px 433.0127px 40px currentColor, 250px 433.0127px 55px currentColor, 250px 433.0127px 75px currentColor, 119.70705px 328.89242px 5px #fff, 119.70705px 328.89242px 10px #fff, 119.70705px 328.89242px 20px currentColor, 119.70705px 328.89242px 30px currentColor, 119.70705px 328.89242px 40px currentColor, 119.70705px 328.89242px 55px currentColor, 119.70705px 328.89242px 75px currentColor, 34.72964px 196.96155px 5px #fff, 34.72964px 196.96155px 10px #fff, 34.72964px 196.96155px 20px currentColor, 34.72964px 196.96155px 30px currentColor, 34.72964px 196.96155px 40px currentColor, 34.72964px 196.96155px 55px currentColor, 34.72964px 196.96155px 75px currentColor, 0px 500px 5px #fff, 0px 500px 10px #fff, 0px 500px 20px currentColor, 0px 500px 30px currentColor, 0px 500px 40px currentColor, 0px 500px 55px currentColor, 0px 500px 75px currentColor, -60.77686px 344.68271px 5px #fff, -60.77686px 344.68271px 10px #fff, -60.77686px 344.68271px 20px currentColor, -60.77686px 344.68271px 30px currentColor, -60.77686px 344.68271px 40px currentColor, -60.77686px 344.68271px 55px currentColor, -60.77686px 344.68271px 75px currentColor, -68.40403px 187.93852px 5px #fff, -68.40403px 187.93852px 10px #fff, -68.40403px 187.93852px 20px currentColor, -68.40403px 187.93852px 30px currentColor, -68.40403px 187.93852px 40px currentColor, -68.40403px 187.93852px 55px currentColor, -68.40403px 187.93852px 75px currentColor, -250px 433.0127px 5px #fff, -250px 433.0127px 10px #fff, -250px 433.0127px 20px currentColor, -250px 433.0127px 30px currentColor, -250px 433.0127px 40px currentColor, -250px 433.0127px 55px currentColor, -250px 433.0127px 75px currentColor, -224.97566px 268.11556px 5px #fff, -224.97566px 268.11556px 10px #fff, -224.97566px 268.11556px 20px currentColor, -224.97566px 268.11556px 30px currentColor, -224.97566px 268.11556px 40px currentColor, -224.97566px 268.11556px 55px currentColor, -224.97566px 268.11556px 75px currentColor, -153.20889px 128.55752px 5px #fff, -153.20889px 128.55752px 10px #fff, -153.20889px 128.55752px 20px currentColor, -153.20889px 128.55752px 30px currentColor, -153.20889px 128.55752px 40px currentColor, -153.20889px 128.55752px 55px currentColor, -153.20889px 128.55752px 75px currentColor, -433.0127px 250px 5px #fff, -433.0127px 250px 10px #fff, -433.0127px 250px 20px currentColor, -433.0127px 250px 30px currentColor, -433.0127px 250px 40px currentColor, -433.0127px 250px 55px currentColor, -433.0127px 250px 75px currentColor, -328.89242px 119.70705px 5px #fff, -328.89242px 119.70705px 10px #fff, -328.89242px 119.70705px 20px currentColor, -328.89242px 119.70705px 30px currentColor, -328.89242px 119.70705px 40px currentColor, -328.89242px 119.70705px 55px currentColor, -328.89242px 119.70705px 75px currentColor, -196.96155px 34.72964px 5px #fff, -196.96155px 34.72964px 10px #fff, -196.96155px 34.72964px 20px currentColor, -196.96155px 34.72964px 30px currentColor, -196.96155px 34.72964px 40px currentColor, -196.96155px 34.72964px 55px currentColor, -196.96155px 34.72964px 75px currentColor, -500px 0px 5px #fff, -500px 0px 10px #fff, -500px 0px 20px currentColor, -500px 0px 30px currentColor, -500px 0px 40px currentColor, -500px 0px 55px currentColor, -500px 0px 75px currentColor, -344.68271px -60.77686px 5px #fff, -344.68271px -60.77686px 10px #fff, -344.68271px -60.77686px 20px currentColor, -344.68271px -60.77686px 30px currentColor, -344.68271px -60.77686px 40px currentColor, -344.68271px -60.77686px 55px currentColor, -344.68271px -60.77686px 75px currentColor, -187.93852px -68.40403px 5px #fff, -187.93852px -68.40403px 10px #fff, -187.93852px -68.40403px 20px currentColor, -187.93852px -68.40403px 30px currentColor, -187.93852px -68.40403px 40px currentColor, -187.93852px -68.40403px 55px currentColor, -187.93852px -68.40403px 75px currentColor, -433.0127px -250px 5px #fff, -433.0127px -250px 10px #fff, -433.0127px -250px 20px currentColor, -433.0127px -250px 30px currentColor, -433.0127px -250px 40px currentColor, -433.0127px -250px 55px currentColor, -433.0127px -250px 75px currentColor, -268.11555px -224.97566px 5px #fff, -268.11555px -224.97566px 10px #fff, -268.11555px -224.97566px 20px currentColor, -268.11555px -224.97566px 30px currentColor, -268.11555px -224.97566px 40px currentColor, -268.11555px -224.97566px 55px currentColor, -268.11555px -224.97566px 75px currentColor, -128.55752px -153.20889px 5px #fff, -128.55752px -153.20889px 10px #fff, -128.55752px -153.20889px 20px currentColor, -128.55752px -153.20889px 30px currentColor, -128.55752px -153.20889px 40px currentColor, -128.55752px -153.20889px 55px currentColor, -128.55752px -153.20889px 75px currentColor, -249.99998px -433.0127px 5px #fff, -249.99998px -433.0127px 10px #fff, -249.99998px -433.0127px 20px currentColor, -249.99998px -433.0127px 30px currentColor, -249.99998px -433.0127px 40px currentColor, -249.99998px -433.0127px 55px currentColor, -249.99998px -433.0127px 75px currentColor, -119.70701px -328.89241px 5px #fff, -119.70701px -328.89241px 10px #fff, -119.70701px -328.89241px 20px currentColor, -119.70701px -328.89241px 30px currentColor, -119.70701px -328.89241px 40px currentColor, -119.70701px -328.89241px 55px currentColor, -119.70701px -328.89241px 75px currentColor, -34.72959px -196.96154px 5px #fff, -34.72959px -196.96154px 10px #fff, -34.72959px -196.96154px 20px currentColor, -34.72959px -196.96154px 30px currentColor, -34.72959px -196.96154px 40px currentColor, -34.72959px -196.96154px 55px currentColor, -34.72959px -196.96154px 75px currentColor, 0.00028px -499.99994px 5px #fff, 0.00028px -499.99994px 10px #fff, 0.00028px -499.99994px 20px currentColor, 0.00028px -499.99994px 30px currentColor, 0.00028px -499.99994px 40px currentColor, 0.00028px -499.99994px 55px currentColor, 0.00028px -499.99994px 75px currentColor, 60.77729px -344.68262px 5px #fff, 60.77729px -344.68262px 10px #fff, 60.77729px -344.68262px 20px currentColor, 60.77729px -344.68262px 30px currentColor, 60.77729px -344.68262px 40px currentColor, 60.77729px -344.68262px 55px currentColor, 60.77729px -344.68262px 75px currentColor, 68.40456px -187.93841px 5px #fff, 68.40456px -187.93841px 10px #fff, 68.40456px -187.93841px 20px currentColor, 68.40456px -187.93841px 30px currentColor, 68.40456px -187.93841px 40px currentColor, 68.40456px -187.93841px 55px currentColor, 68.40456px -187.93841px 75px currentColor, 250.00279px -433.01207px 5px #fff, 250.00279px -433.01207px 10px #fff, 250.00279px -433.01207px 20px currentColor, 250.00279px -433.01207px 30px currentColor, 250.00279px -433.01207px 40px currentColor, 250.00279px -433.01207px 55px currentColor, 250.00279px -433.01207px 75px currentColor, 224.97966px -268.11461px 5px #fff, 224.97966px -268.11461px 10px #fff, 224.97966px -268.11461px 20px currentColor, 224.97966px -268.11461px 30px currentColor, 224.97966px -268.11461px 40px currentColor, 224.97966px -268.11461px 55px currentColor, 224.97966px -268.11461px 75px currentColor, 153.21347px -128.55641px 5px #fff, 153.21347px -128.55641px 10px #fff, 153.21347px -128.55641px 20px currentColor, 153.21347px -128.55641px 30px currentColor, 153.21347px -128.55641px 40px currentColor, 153.21347px -128.55641px 55px currentColor, 153.21347px -128.55641px 75px currentColor, 433.03515px -249.99435px 5px #fff, 433.03515px -249.99435px 10px #fff, 433.03515px -249.99435px 20px currentColor, 433.03515px -249.99435px 30px currentColor, 433.03515px -249.99435px 40px currentColor, 433.03515px -249.99435px 55px currentColor, 433.03515px -249.99435px 75px currentColor, 328.92262px -119.69922px 5px #fff, 328.92262px -119.69922px 10px #fff, 328.92262px -119.69922px 20px currentColor, 328.92262px -119.69922px 30px currentColor, 328.92262px -119.69922px 40px currentColor, 328.92262px -119.69922px 55px currentColor, 328.92262px -119.69922px 75px currentColor, 196.99409px -34.72095px 5px #fff, 196.99409px -34.72095px 10px #fff, 196.99409px -34.72095px 20px currentColor, 196.99409px -34.72095px 30px currentColor, 196.99409px -34.72095px 40px currentColor, 196.99409px -34.72095px 55px currentColor, 196.99409px -34.72095px 75px currentColor;
          opacity: 0;
        }
      }

      @keyframes bomb-rocket-animate-1 {
        0% {
          -webkit-transform: rotate(-10deg) translateY(0) scale(0);
                  transform: rotate(-10deg) translateY(0) scale(0);
          opacity: 1;
          box-shadow: none;
        }
        0.1% {
          -webkit-transform: rotate(-10deg) translateY(0) scale(0.1, 0.5);
                  transform: rotate(-10deg) translateY(0) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1, 0.5);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50.1% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor;
          opacity: 1;
        }
        75% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 500px 0px 5px #fff, 500px 0px 10px #fff, 500px 0px 20px currentColor, 500px 0px 30px currentColor, 500px 0px 40px currentColor, 500px 0px 55px currentColor, 500px 0px 75px currentColor, 344.68271px 60.77686px 5px #fff, 344.68271px 60.77686px 10px #fff, 344.68271px 60.77686px 20px currentColor, 344.68271px 60.77686px 30px currentColor, 344.68271px 60.77686px 40px currentColor, 344.68271px 60.77686px 55px currentColor, 344.68271px 60.77686px 75px currentColor, 187.93852px 68.40403px 5px #fff, 187.93852px 68.40403px 10px #fff, 187.93852px 68.40403px 20px currentColor, 187.93852px 68.40403px 30px currentColor, 187.93852px 68.40403px 40px currentColor, 187.93852px 68.40403px 55px currentColor, 187.93852px 68.40403px 75px currentColor, 433.0127px 250px 5px #fff, 433.0127px 250px 10px #fff, 433.0127px 250px 20px currentColor, 433.0127px 250px 30px currentColor, 433.0127px 250px 40px currentColor, 433.0127px 250px 55px currentColor, 433.0127px 250px 75px currentColor, 268.11556px 224.97566px 5px #fff, 268.11556px 224.97566px 10px #fff, 268.11556px 224.97566px 20px currentColor, 268.11556px 224.97566px 30px currentColor, 268.11556px 224.97566px 40px currentColor, 268.11556px 224.97566px 55px currentColor, 268.11556px 224.97566px 75px currentColor, 128.55752px 153.20889px 5px #fff, 128.55752px 153.20889px 10px #fff, 128.55752px 153.20889px 20px currentColor, 128.55752px 153.20889px 30px currentColor, 128.55752px 153.20889px 40px currentColor, 128.55752px 153.20889px 55px currentColor, 128.55752px 153.20889px 75px currentColor, 250px 433.0127px 5px #fff, 250px 433.0127px 10px #fff, 250px 433.0127px 20px currentColor, 250px 433.0127px 30px currentColor, 250px 433.0127px 40px currentColor, 250px 433.0127px 55px currentColor, 250px 433.0127px 75px currentColor, 119.70705px 328.89242px 5px #fff, 119.70705px 328.89242px 10px #fff, 119.70705px 328.89242px 20px currentColor, 119.70705px 328.89242px 30px currentColor, 119.70705px 328.89242px 40px currentColor, 119.70705px 328.89242px 55px currentColor, 119.70705px 328.89242px 75px currentColor, 34.72964px 196.96155px 5px #fff, 34.72964px 196.96155px 10px #fff, 34.72964px 196.96155px 20px currentColor, 34.72964px 196.96155px 30px currentColor, 34.72964px 196.96155px 40px currentColor, 34.72964px 196.96155px 55px currentColor, 34.72964px 196.96155px 75px currentColor, 0px 500px 5px #fff, 0px 500px 10px #fff, 0px 500px 20px currentColor, 0px 500px 30px currentColor, 0px 500px 40px currentColor, 0px 500px 55px currentColor, 0px 500px 75px currentColor, -60.77686px 344.68271px 5px #fff, -60.77686px 344.68271px 10px #fff, -60.77686px 344.68271px 20px currentColor, -60.77686px 344.68271px 30px currentColor, -60.77686px 344.68271px 40px currentColor, -60.77686px 344.68271px 55px currentColor, -60.77686px 344.68271px 75px currentColor, -68.40403px 187.93852px 5px #fff, -68.40403px 187.93852px 10px #fff, -68.40403px 187.93852px 20px currentColor, -68.40403px 187.93852px 30px currentColor, -68.40403px 187.93852px 40px currentColor, -68.40403px 187.93852px 55px currentColor, -68.40403px 187.93852px 75px currentColor, -250px 433.0127px 5px #fff, -250px 433.0127px 10px #fff, -250px 433.0127px 20px currentColor, -250px 433.0127px 30px currentColor, -250px 433.0127px 40px currentColor, -250px 433.0127px 55px currentColor, -250px 433.0127px 75px currentColor, -224.97566px 268.11556px 5px #fff, -224.97566px 268.11556px 10px #fff, -224.97566px 268.11556px 20px currentColor, -224.97566px 268.11556px 30px currentColor, -224.97566px 268.11556px 40px currentColor, -224.97566px 268.11556px 55px currentColor, -224.97566px 268.11556px 75px currentColor, -153.20889px 128.55752px 5px #fff, -153.20889px 128.55752px 10px #fff, -153.20889px 128.55752px 20px currentColor, -153.20889px 128.55752px 30px currentColor, -153.20889px 128.55752px 40px currentColor, -153.20889px 128.55752px 55px currentColor, -153.20889px 128.55752px 75px currentColor, -433.0127px 250px 5px #fff, -433.0127px 250px 10px #fff, -433.0127px 250px 20px currentColor, -433.0127px 250px 30px currentColor, -433.0127px 250px 40px currentColor, -433.0127px 250px 55px currentColor, -433.0127px 250px 75px currentColor, -328.89242px 119.70705px 5px #fff, -328.89242px 119.70705px 10px #fff, -328.89242px 119.70705px 20px currentColor, -328.89242px 119.70705px 30px currentColor, -328.89242px 119.70705px 40px currentColor, -328.89242px 119.70705px 55px currentColor, -328.89242px 119.70705px 75px currentColor, -196.96155px 34.72964px 5px #fff, -196.96155px 34.72964px 10px #fff, -196.96155px 34.72964px 20px currentColor, -196.96155px 34.72964px 30px currentColor, -196.96155px 34.72964px 40px currentColor, -196.96155px 34.72964px 55px currentColor, -196.96155px 34.72964px 75px currentColor, -500px 0px 5px #fff, -500px 0px 10px #fff, -500px 0px 20px currentColor, -500px 0px 30px currentColor, -500px 0px 40px currentColor, -500px 0px 55px currentColor, -500px 0px 75px currentColor, -344.68271px -60.77686px 5px #fff, -344.68271px -60.77686px 10px #fff, -344.68271px -60.77686px 20px currentColor, -344.68271px -60.77686px 30px currentColor, -344.68271px -60.77686px 40px currentColor, -344.68271px -60.77686px 55px currentColor, -344.68271px -60.77686px 75px currentColor, -187.93852px -68.40403px 5px #fff, -187.93852px -68.40403px 10px #fff, -187.93852px -68.40403px 20px currentColor, -187.93852px -68.40403px 30px currentColor, -187.93852px -68.40403px 40px currentColor, -187.93852px -68.40403px 55px currentColor, -187.93852px -68.40403px 75px currentColor, -433.0127px -250px 5px #fff, -433.0127px -250px 10px #fff, -433.0127px -250px 20px currentColor, -433.0127px -250px 30px currentColor, -433.0127px -250px 40px currentColor, -433.0127px -250px 55px currentColor, -433.0127px -250px 75px currentColor, -268.11555px -224.97566px 5px #fff, -268.11555px -224.97566px 10px #fff, -268.11555px -224.97566px 20px currentColor, -268.11555px -224.97566px 30px currentColor, -268.11555px -224.97566px 40px currentColor, -268.11555px -224.97566px 55px currentColor, -268.11555px -224.97566px 75px currentColor, -128.55752px -153.20889px 5px #fff, -128.55752px -153.20889px 10px #fff, -128.55752px -153.20889px 20px currentColor, -128.55752px -153.20889px 30px currentColor, -128.55752px -153.20889px 40px currentColor, -128.55752px -153.20889px 55px currentColor, -128.55752px -153.20889px 75px currentColor, -249.99998px -433.0127px 5px #fff, -249.99998px -433.0127px 10px #fff, -249.99998px -433.0127px 20px currentColor, -249.99998px -433.0127px 30px currentColor, -249.99998px -433.0127px 40px currentColor, -249.99998px -433.0127px 55px currentColor, -249.99998px -433.0127px 75px currentColor, -119.70701px -328.89241px 5px #fff, -119.70701px -328.89241px 10px #fff, -119.70701px -328.89241px 20px currentColor, -119.70701px -328.89241px 30px currentColor, -119.70701px -328.89241px 40px currentColor, -119.70701px -328.89241px 55px currentColor, -119.70701px -328.89241px 75px currentColor, -34.72959px -196.96154px 5px #fff, -34.72959px -196.96154px 10px #fff, -34.72959px -196.96154px 20px currentColor, -34.72959px -196.96154px 30px currentColor, -34.72959px -196.96154px 40px currentColor, -34.72959px -196.96154px 55px currentColor, -34.72959px -196.96154px 75px currentColor, 0.00028px -499.99994px 5px #fff, 0.00028px -499.99994px 10px #fff, 0.00028px -499.99994px 20px currentColor, 0.00028px -499.99994px 30px currentColor, 0.00028px -499.99994px 40px currentColor, 0.00028px -499.99994px 55px currentColor, 0.00028px -499.99994px 75px currentColor, 60.77729px -344.68262px 5px #fff, 60.77729px -344.68262px 10px #fff, 60.77729px -344.68262px 20px currentColor, 60.77729px -344.68262px 30px currentColor, 60.77729px -344.68262px 40px currentColor, 60.77729px -344.68262px 55px currentColor, 60.77729px -344.68262px 75px currentColor, 68.40456px -187.93841px 5px #fff, 68.40456px -187.93841px 10px #fff, 68.40456px -187.93841px 20px currentColor, 68.40456px -187.93841px 30px currentColor, 68.40456px -187.93841px 40px currentColor, 68.40456px -187.93841px 55px currentColor, 68.40456px -187.93841px 75px currentColor, 250.00279px -433.01207px 5px #fff, 250.00279px -433.01207px 10px #fff, 250.00279px -433.01207px 20px currentColor, 250.00279px -433.01207px 30px currentColor, 250.00279px -433.01207px 40px currentColor, 250.00279px -433.01207px 55px currentColor, 250.00279px -433.01207px 75px currentColor, 224.97966px -268.11461px 5px #fff, 224.97966px -268.11461px 10px #fff, 224.97966px -268.11461px 20px currentColor, 224.97966px -268.11461px 30px currentColor, 224.97966px -268.11461px 40px currentColor, 224.97966px -268.11461px 55px currentColor, 224.97966px -268.11461px 75px currentColor, 153.21347px -128.55641px 5px #fff, 153.21347px -128.55641px 10px #fff, 153.21347px -128.55641px 20px currentColor, 153.21347px -128.55641px 30px currentColor, 153.21347px -128.55641px 40px currentColor, 153.21347px -128.55641px 55px currentColor, 153.21347px -128.55641px 75px currentColor, 433.03515px -249.99435px 5px #fff, 433.03515px -249.99435px 10px #fff, 433.03515px -249.99435px 20px currentColor, 433.03515px -249.99435px 30px currentColor, 433.03515px -249.99435px 40px currentColor, 433.03515px -249.99435px 55px currentColor, 433.03515px -249.99435px 75px currentColor, 328.92262px -119.69922px 5px #fff, 328.92262px -119.69922px 10px #fff, 328.92262px -119.69922px 20px currentColor, 328.92262px -119.69922px 30px currentColor, 328.92262px -119.69922px 40px currentColor, 328.92262px -119.69922px 55px currentColor, 328.92262px -119.69922px 75px currentColor, 196.99409px -34.72095px 5px #fff, 196.99409px -34.72095px 10px #fff, 196.99409px -34.72095px 20px currentColor, 196.99409px -34.72095px 30px currentColor, 196.99409px -34.72095px 40px currentColor, 196.99409px -34.72095px 55px currentColor, 196.99409px -34.72095px 75px currentColor;
          opacity: 1;
        }
        100% {
          -webkit-transform: rotate(-10deg) translateY(-350px) scale(0.1);
                  transform: rotate(-10deg) translateY(-350px) scale(0.1);
          background: transparent;
          box-shadow: 500px 0px 5px #fff, 500px 0px 10px #fff, 500px 0px 20px currentColor, 500px 0px 30px currentColor, 500px 0px 40px currentColor, 500px 0px 55px currentColor, 500px 0px 75px currentColor, 344.68271px 60.77686px 5px #fff, 344.68271px 60.77686px 10px #fff, 344.68271px 60.77686px 20px currentColor, 344.68271px 60.77686px 30px currentColor, 344.68271px 60.77686px 40px currentColor, 344.68271px 60.77686px 55px currentColor, 344.68271px 60.77686px 75px currentColor, 187.93852px 68.40403px 5px #fff, 187.93852px 68.40403px 10px #fff, 187.93852px 68.40403px 20px currentColor, 187.93852px 68.40403px 30px currentColor, 187.93852px 68.40403px 40px currentColor, 187.93852px 68.40403px 55px currentColor, 187.93852px 68.40403px 75px currentColor, 433.0127px 250px 5px #fff, 433.0127px 250px 10px #fff, 433.0127px 250px 20px currentColor, 433.0127px 250px 30px currentColor, 433.0127px 250px 40px currentColor, 433.0127px 250px 55px currentColor, 433.0127px 250px 75px currentColor, 268.11556px 224.97566px 5px #fff, 268.11556px 224.97566px 10px #fff, 268.11556px 224.97566px 20px currentColor, 268.11556px 224.97566px 30px currentColor, 268.11556px 224.97566px 40px currentColor, 268.11556px 224.97566px 55px currentColor, 268.11556px 224.97566px 75px currentColor, 128.55752px 153.20889px 5px #fff, 128.55752px 153.20889px 10px #fff, 128.55752px 153.20889px 20px currentColor, 128.55752px 153.20889px 30px currentColor, 128.55752px 153.20889px 40px currentColor, 128.55752px 153.20889px 55px currentColor, 128.55752px 153.20889px 75px currentColor, 250px 433.0127px 5px #fff, 250px 433.0127px 10px #fff, 250px 433.0127px 20px currentColor, 250px 433.0127px 30px currentColor, 250px 433.0127px 40px currentColor, 250px 433.0127px 55px currentColor, 250px 433.0127px 75px currentColor, 119.70705px 328.89242px 5px #fff, 119.70705px 328.89242px 10px #fff, 119.70705px 328.89242px 20px currentColor, 119.70705px 328.89242px 30px currentColor, 119.70705px 328.89242px 40px currentColor, 119.70705px 328.89242px 55px currentColor, 119.70705px 328.89242px 75px currentColor, 34.72964px 196.96155px 5px #fff, 34.72964px 196.96155px 10px #fff, 34.72964px 196.96155px 20px currentColor, 34.72964px 196.96155px 30px currentColor, 34.72964px 196.96155px 40px currentColor, 34.72964px 196.96155px 55px currentColor, 34.72964px 196.96155px 75px currentColor, 0px 500px 5px #fff, 0px 500px 10px #fff, 0px 500px 20px currentColor, 0px 500px 30px currentColor, 0px 500px 40px currentColor, 0px 500px 55px currentColor, 0px 500px 75px currentColor, -60.77686px 344.68271px 5px #fff, -60.77686px 344.68271px 10px #fff, -60.77686px 344.68271px 20px currentColor, -60.77686px 344.68271px 30px currentColor, -60.77686px 344.68271px 40px currentColor, -60.77686px 344.68271px 55px currentColor, -60.77686px 344.68271px 75px currentColor, -68.40403px 187.93852px 5px #fff, -68.40403px 187.93852px 10px #fff, -68.40403px 187.93852px 20px currentColor, -68.40403px 187.93852px 30px currentColor, -68.40403px 187.93852px 40px currentColor, -68.40403px 187.93852px 55px currentColor, -68.40403px 187.93852px 75px currentColor, -250px 433.0127px 5px #fff, -250px 433.0127px 10px #fff, -250px 433.0127px 20px currentColor, -250px 433.0127px 30px currentColor, -250px 433.0127px 40px currentColor, -250px 433.0127px 55px currentColor, -250px 433.0127px 75px currentColor, -224.97566px 268.11556px 5px #fff, -224.97566px 268.11556px 10px #fff, -224.97566px 268.11556px 20px currentColor, -224.97566px 268.11556px 30px currentColor, -224.97566px 268.11556px 40px currentColor, -224.97566px 268.11556px 55px currentColor, -224.97566px 268.11556px 75px currentColor, -153.20889px 128.55752px 5px #fff, -153.20889px 128.55752px 10px #fff, -153.20889px 128.55752px 20px currentColor, -153.20889px 128.55752px 30px currentColor, -153.20889px 128.55752px 40px currentColor, -153.20889px 128.55752px 55px currentColor, -153.20889px 128.55752px 75px currentColor, -433.0127px 250px 5px #fff, -433.0127px 250px 10px #fff, -433.0127px 250px 20px currentColor, -433.0127px 250px 30px currentColor, -433.0127px 250px 40px currentColor, -433.0127px 250px 55px currentColor, -433.0127px 250px 75px currentColor, -328.89242px 119.70705px 5px #fff, -328.89242px 119.70705px 10px #fff, -328.89242px 119.70705px 20px currentColor, -328.89242px 119.70705px 30px currentColor, -328.89242px 119.70705px 40px currentColor, -328.89242px 119.70705px 55px currentColor, -328.89242px 119.70705px 75px currentColor, -196.96155px 34.72964px 5px #fff, -196.96155px 34.72964px 10px #fff, -196.96155px 34.72964px 20px currentColor, -196.96155px 34.72964px 30px currentColor, -196.96155px 34.72964px 40px currentColor, -196.96155px 34.72964px 55px currentColor, -196.96155px 34.72964px 75px currentColor, -500px 0px 5px #fff, -500px 0px 10px #fff, -500px 0px 20px currentColor, -500px 0px 30px currentColor, -500px 0px 40px currentColor, -500px 0px 55px currentColor, -500px 0px 75px currentColor, -344.68271px -60.77686px 5px #fff, -344.68271px -60.77686px 10px #fff, -344.68271px -60.77686px 20px currentColor, -344.68271px -60.77686px 30px currentColor, -344.68271px -60.77686px 40px currentColor, -344.68271px -60.77686px 55px currentColor, -344.68271px -60.77686px 75px currentColor, -187.93852px -68.40403px 5px #fff, -187.93852px -68.40403px 10px #fff, -187.93852px -68.40403px 20px currentColor, -187.93852px -68.40403px 30px currentColor, -187.93852px -68.40403px 40px currentColor, -187.93852px -68.40403px 55px currentColor, -187.93852px -68.40403px 75px currentColor, -433.0127px -250px 5px #fff, -433.0127px -250px 10px #fff, -433.0127px -250px 20px currentColor, -433.0127px -250px 30px currentColor, -433.0127px -250px 40px currentColor, -433.0127px -250px 55px currentColor, -433.0127px -250px 75px currentColor, -268.11555px -224.97566px 5px #fff, -268.11555px -224.97566px 10px #fff, -268.11555px -224.97566px 20px currentColor, -268.11555px -224.97566px 30px currentColor, -268.11555px -224.97566px 40px currentColor, -268.11555px -224.97566px 55px currentColor, -268.11555px -224.97566px 75px currentColor, -128.55752px -153.20889px 5px #fff, -128.55752px -153.20889px 10px #fff, -128.55752px -153.20889px 20px currentColor, -128.55752px -153.20889px 30px currentColor, -128.55752px -153.20889px 40px currentColor, -128.55752px -153.20889px 55px currentColor, -128.55752px -153.20889px 75px currentColor, -249.99998px -433.0127px 5px #fff, -249.99998px -433.0127px 10px #fff, -249.99998px -433.0127px 20px currentColor, -249.99998px -433.0127px 30px currentColor, -249.99998px -433.0127px 40px currentColor, -249.99998px -433.0127px 55px currentColor, -249.99998px -433.0127px 75px currentColor, -119.70701px -328.89241px 5px #fff, -119.70701px -328.89241px 10px #fff, -119.70701px -328.89241px 20px currentColor, -119.70701px -328.89241px 30px currentColor, -119.70701px -328.89241px 40px currentColor, -119.70701px -328.89241px 55px currentColor, -119.70701px -328.89241px 75px currentColor, -34.72959px -196.96154px 5px #fff, -34.72959px -196.96154px 10px #fff, -34.72959px -196.96154px 20px currentColor, -34.72959px -196.96154px 30px currentColor, -34.72959px -196.96154px 40px currentColor, -34.72959px -196.96154px 55px currentColor, -34.72959px -196.96154px 75px currentColor, 0.00028px -499.99994px 5px #fff, 0.00028px -499.99994px 10px #fff, 0.00028px -499.99994px 20px currentColor, 0.00028px -499.99994px 30px currentColor, 0.00028px -499.99994px 40px currentColor, 0.00028px -499.99994px 55px currentColor, 0.00028px -499.99994px 75px currentColor, 60.77729px -344.68262px 5px #fff, 60.77729px -344.68262px 10px #fff, 60.77729px -344.68262px 20px currentColor, 60.77729px -344.68262px 30px currentColor, 60.77729px -344.68262px 40px currentColor, 60.77729px -344.68262px 55px currentColor, 60.77729px -344.68262px 75px currentColor, 68.40456px -187.93841px 5px #fff, 68.40456px -187.93841px 10px #fff, 68.40456px -187.93841px 20px currentColor, 68.40456px -187.93841px 30px currentColor, 68.40456px -187.93841px 40px currentColor, 68.40456px -187.93841px 55px currentColor, 68.40456px -187.93841px 75px currentColor, 250.00279px -433.01207px 5px #fff, 250.00279px -433.01207px 10px #fff, 250.00279px -433.01207px 20px currentColor, 250.00279px -433.01207px 30px currentColor, 250.00279px -433.01207px 40px currentColor, 250.00279px -433.01207px 55px currentColor, 250.00279px -433.01207px 75px currentColor, 224.97966px -268.11461px 5px #fff, 224.97966px -268.11461px 10px #fff, 224.97966px -268.11461px 20px currentColor, 224.97966px -268.11461px 30px currentColor, 224.97966px -268.11461px 40px currentColor, 224.97966px -268.11461px 55px currentColor, 224.97966px -268.11461px 75px currentColor, 153.21347px -128.55641px 5px #fff, 153.21347px -128.55641px 10px #fff, 153.21347px -128.55641px 20px currentColor, 153.21347px -128.55641px 30px currentColor, 153.21347px -128.55641px 40px currentColor, 153.21347px -128.55641px 55px currentColor, 153.21347px -128.55641px 75px currentColor, 433.03515px -249.99435px 5px #fff, 433.03515px -249.99435px 10px #fff, 433.03515px -249.99435px 20px currentColor, 433.03515px -249.99435px 30px currentColor, 433.03515px -249.99435px 40px currentColor, 433.03515px -249.99435px 55px currentColor, 433.03515px -249.99435px 75px currentColor, 328.92262px -119.69922px 5px #fff, 328.92262px -119.69922px 10px #fff, 328.92262px -119.69922px 20px currentColor, 328.92262px -119.69922px 30px currentColor, 328.92262px -119.69922px 40px currentColor, 328.92262px -119.69922px 55px currentColor, 328.92262px -119.69922px 75px currentColor, 196.99409px -34.72095px 5px #fff, 196.99409px -34.72095px 10px #fff, 196.99409px -34.72095px 20px currentColor, 196.99409px -34.72095px 30px currentColor, 196.99409px -34.72095px 40px currentColor, 196.99409px -34.72095px 55px currentColor, 196.99409px -34.72095px 75px currentColor;
          opacity: 0;
        }
      }
      @-webkit-keyframes bomb-rocket-animate-2 {
        0% {
          -webkit-transform: rotate(0deg) translateY(0) scale(0);
                  transform: rotate(0deg) translateY(0) scale(0);
          opacity: 1;
          box-shadow: none;
        }
        0.1% {
          -webkit-transform: rotate(0deg) translateY(0) scale(0.1, 0.5);
                  transform: rotate(0deg) translateY(0) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50% {
          -webkit-transform: rotate(0deg) translateY(-420px) scale(0.1, 0.5);
                  transform: rotate(0deg) translateY(-420px) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50.1% {
          -webkit-transform: rotate(0deg) translateY(-420px) scale(0.1);
                  transform: rotate(0deg) translateY(-420px) scale(0.1);
          background: transparent;
          box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor;
        }
       }
      @keyframes bomb-rocket-animate-2 {
        0% {
          -webkit-transform: rotate(0deg) translateY(0) scale(0);
                  transform: rotate(0deg) translateY(0) scale(0);
          opacity: 1;
          box-shadow: none;
        }
        0.1% {
          -webkit-transform: rotate(0deg) translateY(0) scale(0.1, 0.5);
                  transform: rotate(0deg) translateY(0) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50% {
          -webkit-transform: rotate(0deg) translateY(-420px) scale(0.1, 0.5);
                  transform: rotate(0deg) translateY(-420px) scale(0.1, 0.5);
          background: -webkit-linear-gradient(top, currentColor 0%, yellow 80%);
          background: linear-gradient(180deg, currentColor 0%, yellow 80%);
          box-shadow: none;
          opacity: 1;
        }
        50.1% {
          -webkit-transform: rotate(0deg) translateY(-420px) scale(0.1);
                  transform: rotate(0deg) translateY(-420px) scale(0.1);
          background: transparent;
          box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor, 0 0 75px currentColor, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 55px currentColor;
        }
      }
    }
    .row-bg{
      padding:75px 0;
      min-height:420px;
      background-color: #fff;
      .col1{
        text-align: center;
        cursor: pointer;
        &:hover{
          img{
            -webkit-animation-name: hvr-bob-float, hvr-bob;
            animation-name: hvr-bob-float, hvr-bob;
            -webkit-animation-duration: 3s, 3s;
            animation-duration: 3s, 3s;
            -webkit-animation-delay: 0s, 3s;
            animation-delay: 0s, 3s;
            -webkit-animation-timing-function: ease-out, ease-in-out;
            animation-timing-function: ease-out, ease-in-out;
            -webkit-animation-iteration-count: 1, infinite;
            animation-iteration-count: 1, infinite;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-direction: normal, alternate;
            animation-direction: normal, alternate;
          }
        }
        .img-box{
          height: 155px; line-height:155px; vertical-align: middle; margin-bottom: 15px;
          img{
            vertical-align:middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px transparent;
            }
        }
        .blue{
          margin-top: 15px; display: block;
          color:rgb(30, 166, 192);
        }
      }
      .text{
        &:hover{
          .more{
            -webkit-animation-name: swivelChair;
            animation-name: swivelChair;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
          }
        }
        .tit{
          font-size: 18px;
          display: block;
          text-align: center;
        }
        .desc{
           margin: 20px auto 0 auto; line-height: 1.8;text-align: justify;
           color:rgb(72, 96, 106);
           max-width: 550px;
        }
        .more{
          margin:50px 0 0 0;
          width:150px;
          height: 30px;
          border-radius: 15px;
          padding:4px;
        }
      }
      &:hover{
          .img-animate{
            -webkit-animation-name: hvr-bob-float, hvr-bob;
            animation-name: hvr-bob-float, hvr-bob;
            -webkit-animation-duration: 3s, 3s;
            animation-duration: 3s, 3s;
            -webkit-animation-delay: 0s, 3s;
            animation-delay: 0s, 3s;
            -webkit-animation-timing-function: ease-out, ease-in-out;
            animation-timing-function: ease-out, ease-in-out;
            -webkit-animation-iteration-count: 1, infinite;
            animation-iteration-count: 1, infinite;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-direction: normal, alternate;
            animation-direction: normal, alternate;
          }
      }
      .img-animate{
        vertical-align:middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
      }
      .img1{
          background: url('/static/images/index/index_p4.png') no-repeat center center;
          background-size: contain;
      }
      .img2{
          background: url('/static/images/index/index_p5.png') no-repeat center center;
          background-size: contain;
      }
      .img3{
          background: url('/static/images/index/index_p6.png') no-repeat center center;
          background-size: contain;
      }
      .img4{
          background: url('/static/images/index/index_p7.png') no-repeat center center;
          background-size: contain;
      }
      .img5{
          background: url('/static/images/index/index_p8.png') no-repeat center center;
          background-size: contain;
      }
    }
    .row-bg-light{
      background: #f2f5fa;
    }

}

</style>
