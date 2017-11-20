<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/sns-logo.png" /><span class="titinner ">物联网平台（IOT）</span></div>
            <div class="desc">
              美的云物联网IOT（Internet Of Things）平台主要解决的是海量智能硬件设备接入云端的问题。提供面向全球的设备接入、登陆认证、安全传输、指令下发、状态上报等通信链路管理；依靠美的智慧家居及云计算团队丰富的业务经验和技术积累，美的云IoT服务可支持数亿台设备和数百亿条消息，并且可以对这些消息进行处理并将其安全可靠地路由至目标节点和其他设备。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p1.jpg"></p>
        <p class="tit">海量接入能力</p>
        <p class="desc">提供快速、安全、稳定的接入物联网的一体化解决方案，可容纳数亿级的设备接入</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno" >了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p2.jpg"></p>
        <p class="tit">多种接入方式</p>
        <p class="desc">支持WiFi接入，支持2/3/4G接入，支持蓝牙、ZigBee、Thread、Alljoy网关接入</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p3.jpg"></p>
        <p class="tit">通讯协议开放</p>
        <p class="desc">支持当前主流的协议标准，包括HTTP,MQTT,AMQP等，同时也支持自定义的协议，并且协议全部对外开放</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p4.jpg"></p>
        <p class="tit">多点部署与容灾</p>
        <p class="desc">接入点全球化分布式多点部署，硬件设备/移动终端设备就近接入，地理容灾，海外和中国部署都需要考虑跨机房容灾</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p5.jpg"></p>
        <p class="tit">权限共享及管理</p>
        <p class="desc">为用户提供权限管理能力，通过用户之间好友关系链，为硬件接入开发者，快速获取更多活跃用户潜在消费者</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/sns-p6.jpg"></p>
        <p class="tit">设备自动感知和互联操作</p>
        <p class="desc">美的云IOT平台为设备提供可配置的条件触发，及自定义触发后动作的功能，为设备之间的自动感知和互联操作提供可能</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_01.png"></p>
        <p class="tit">设备互懂服务</p>
        <p class="desc">按自定义方式构建机器学习模型，机器学习为数据挖掘及商业分析提供了简化的体验，提供常用的机器学习算法</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_02.jpg"></p>
        <p class="tit">高能力事件分发</p>
        <p class="desc">事件中心是一个高度可缩放的发布-订阅事件采集器，每秒可获取很多个事件，能够处理和分析互连设备与应用程序生成的海量数据</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_03.jpg"></p>
        <p class="tit">开放平台</p>
        <p class="desc">通过APP端SDK提供第三方APP接入；通过云对接提供第三方云接入；通过WIFI端SDK或标准通信协议提供设备端接入</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_04.png"></p>
        <p class="tit">灰度升级</p>
        <p class="desc">对于WiFi、蓝牙或家电固件，平台支持按品类、按时间段、按版本、白名单等策略，灰度升级；该功能常用于设备端新功能发布的A/B Testing</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_05.png"></p>
        <p class="tit">数据报表</p>
        <p class="desc">提供给设备厂商、开发者实时报表能力，包括用户增长数据、设备增长数据、按品类、按型号、按区域统计；提供用户操作行为分析统计</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_06.png"></p>
        <p class="tit">微信接入</p>
        <p class="desc">支持微信硬件公众号方式接入，用户无需下载APP，简单通过微信配网及扫码即可完成设备的绑定、控制、场景分享、好友互动等功能</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p5.jpg"></p>
        <p class="tit">管家系统</p>
        <p class="desc">通过平台上的设备联动能力，提供有关联属性的设备间整体解决方案，如空气管家、饮食管家、水管家、健康管家、安全管家等</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p6.jpg"></p>
        <p class="tit">控制台</p>
        <p class="desc">可视化的操作界面，让设备厂商、开发者可以轻松管理用户和设备资源，查看设备日志，完成各种业务配置</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.ecs-wrap{
  padding:0 0 25px 18px;
  .row-bg{
      .col1{
        text-align: center;
        padding:0 25px;
        margin: 25px 0;
        position: relative;
        &:after{
          content:"";
          height: 194px;
          border-right: 1px solid #ececec;
          position:absolute;
          right: 0;
          bottom: 0;
        }
        &:nth-child(3n):after {
           border-right: none;
        }
        .img-box{
          height: 110px;vertical-align:middle;
          img{
            vertical-align:middle;
            }
        }
        .tit{
          font-size: 16px; font-weight:400; line-height: 2
         }
        .desc{
          color: #999; text-align: justify; min-height: 100px;
        }
        .more{
           text-align: right;
           a{
             text-decoration: underline;
           }
        }
      }
      .text{
        .tit{
           .titinner{
             font-size: 22px; font-weight: 400;
             position: relative;
             bottom:20px;
           }
           img{
             width:60px;
             height:60px;
           }
        }
        .desc{
           margin-top: 10px; line-height: 1.8;text-align: justify;
        }
        .more{
          margin:15px 0 15px 0;
        }
        .tips{
           color: #999; font-size: 14px;
        }
      }
    }
    .row-bg-light{
      min-height:250px;
      background: url('/static/images/index/sns-bg.jpg') no-repeat right bottom;
      background-size: contain;
    }
    .line{
       position: relative;
       bottom:30px;
       height: 30px;
       line-height: 30px;
       border-bottom: 1px solid #ececec;
       text-align: center;
       span{
        display: inline-block;
        font-size: 18px;
        margin-top: 13px;
        background-color: #fff;
        padding: 0 18px;
      }
    }
}
</style>
