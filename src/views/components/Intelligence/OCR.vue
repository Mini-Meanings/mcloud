<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/ecs-logo.png" /><span class="titinner ">字符识别（OCR）</span></div>
            <div class="desc">
              美的光学字符识别服务（Optical Character Recognition）提供多种场景下精准的图像文字识别技术服务,让您的应用看图识字，提升输入效率，优化用户体验。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p5.jpg"></p>
        <p class="tit">票据识别</p>
        <p class="desc">支持对医疗票据、保险保单、增值税专票普票、银行兑票、购物小票、的士发票等各类票据进行识别</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p6.jpg"></p>
        <p class="tit">通用文字识别</p>
        <p class="desc">多场景、多语种、高精度的整体文字检测和识别服务，提供基础的通用文字识别服务，同时提供含位置信息版、含生僻字版的高级服务</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p4.jpg"></p>
        <p class="tit">卡证识别</p>
        <p class="desc">在各种拍摄环境下，自动识别和结构化提取卡证图像中的文字信息。支持二代居民身份证、银行卡、机动车驾驶证、行驶证的识别</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p5.jpg"></p>
        <p class="tit">网络图片文字识别</p>
        <p class="desc">在通用文字识别的基础上，针对网络图片进行了专项优化，对复杂字体、复杂背景的图片具有更优的识别效果</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p6.jpg"></p>
        <p class="tit">表格文字识别</p>
        <p class="desc">自动识别表格线及表格内容，结构化输出表头、表尾及每个单元格的文字内容，帮助您快速便捷地完成纸质报表单据的电子化</p>
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
      background: url('/static/images/index/ocr-bg.png') no-repeat right bottom;
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
