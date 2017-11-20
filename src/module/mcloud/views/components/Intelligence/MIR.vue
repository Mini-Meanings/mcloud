<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cdp-logo.png" /><span class="titinner ">图像识别（MIR）</span></div>
            <div class="desc">
              美的图像识别服务（Midea Image Recognition）基于深度学习及大规模图像训练，准确识别图片中的物体类别、位置、置信度等综合信息。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p1.jpg"></p>
        <p class="tit">通用图像分析</p>
        <p class="desc">包括通用物体及场景识别和图像主体检测，两项图像能力，带你识别万物</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p2.jpg"></p>
        <p class="tit">细粒度图像识别</p>
        <p class="desc">支持动物、植物、菜品、logo商标、车型等，多项细粒度图像识别，对比通用图像分析精度更高，返回信息更为丰富</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p3.jpg"></p>
        <p class="tit">定制化图像识别</p>
        <p class="desc">自定义图像识别模型，支持自主上传数据完成训练，快速拥有高精度图像识别AI能力</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p4.jpg"></p>
        <p class="tit">产品定损检测</p>
        <p class="desc">识别产品外观受损部件及损伤类型，应用于产线质检等场景中</p>
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
      background: url('/static/images/index/mdp-bg.jpg') no-repeat right bottom;
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
