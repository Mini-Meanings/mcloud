<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/mop-logo.png" /><span class="titinner ">机器学习平台（AIP）</span></div>
            <div class="desc">
              机器学习平台（Artificial Intelligence Platform）基于美的云云分布式计算引擎的一款机器学习算法平台，以极低的代价帮助您的业务从BI时代跨入AI时代，真正实现人工智能触手可及。
            </div>
           <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p1.jpg"></p>
        <p class="tit">算法丰富</p>
        <p class="desc">提供100余种算法组件，覆盖回归、分类、聚类、文本分析、关系挖掘、深度学习等算法</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p2.jpg"></p>
        <p class="tit">端云一体式深度学习支持</p>
        <p class="desc">支持TensorFlow等行业主流深度学习框架以及底层的CPU/GPU/FGPA异构集群计算；具备新型嵌入式人工智能HPC计算能力，支持嵌入式低功耗模型推理计算</p>
        <!-- <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p> -->
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p3.jpg"></p>
        <p class="tit">一站式服务</p>
        <p class="desc">提供一站式的服务体验，数据的清洗、大规模训练、特征工程、机器学习/深度学习算法、模型性能评估、在线预测都可以在平台上一站式使用</p>
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
             font-size: 22px;
             position: relative;
             bottom:20px;
             font-weight: 400;
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
      background: url('/static/images/index/mop-bg.jpg') no-repeat right bottom;
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
