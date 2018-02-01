<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/ces-logo.png" /><span class="titinner ">人脸识别（MFR）</span></div>
            <div class="desc">
              美的人脸识别（Face Recognition）实现了图像或视频中人脸的检测、分析和比对，包括人脸检测定位、人脸属性识别和人脸比对等独立服务模块，可为开发者和企业提供高性能的在线API服务，应用于人脸AR、人脸识别和认证、大规模人脸检索、照片管理等各种场景。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ces-p2.jpg"></p>
        <p class="tit">人脸检测</p>
        <p class="desc">可支持最多上千个人脸的同时检测，支持平面360度旋转人脸检测，支持左右最大90度侧面人脸检测</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ces-p3.jpg"></p>
        <p class="tit">人脸特征点定位</p>
        <p class="desc">提取图像中的人脸五官关键点，输出关键点位置信息</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ces-p4.jpg"></p>
        <p class="tit">人脸属性识别</p>
        <p class="desc">在人脸检测基础上，识别各个检测人脸的性别（男/女）、年龄、表情（笑/不笑）、眼镜（戴/不戴）四种属性</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p5.jpg"></p>
        <p class="tit">人脸比对</p>
        <p class="desc">基于用户输入的两张图片，我们可检测两张图片中的人脸，并挑选两张图片的最大人脸进行比较，判断是否是同一人</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p6.jpg"></p>
        <p class="tit">人脸跟踪</p>
        <p class="desc">在视频或图像序列中确定某个人脸部的运动轨迹及大小变化，对特定人脸目标进行跟踪</p>
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
      background: url('/static/images/index/mfr-bg.png') no-repeat right bottom;
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
