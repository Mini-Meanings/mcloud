<template>
	<div class="banner-wrap">
		<el-carousel height="550px" :interval="5000" :class="{'banner-loading':banner_loading}" @change="banner_change" ref="banner" style="background-color: #0d1e4f;">
	      <el-carousel-item class="banner1">
	      </el-carousel-item>
        <el-carousel-item class="banner2">
	      </el-carousel-item>
        <el-carousel-item class="banner3">
	      </el-carousel-item>
        <el-carousel-item class="banner4">
	      </el-carousel-item>
    	</el-carousel>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        banner_loading:false,
      }
    },
    methods: {
      banner_change(index){
        if(this.$refs.banner.hover){
          this.banner_loading = false;
        }else{
          this.banner_loading = true;
        }
      }
    }
  }
</script>

<style lang="less">
.banner-wrap{
  .el-carousel__arrow {
  background-color: #0d1e4f;
  font-size: 16px;
  }
  .el-carousel__arrow:hover {
  background-color: #0d1e4f;
  }
  .el-carousel__item.is-animating {
  transition: transform 0.6s ease-in-out;
  }
  .el-carousel__indicator{
    .el-carousel__button {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      position: relative;
      &:before{
        content: "";
        position: absolute;
        z-index: 55;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
      }
    }
  }
  .banner-loading{
    .el-carousel__indicator.is-active{
      .el-carousel__button{
          -webkit-animation-name: hvr-loading1;
          animation-name: hvr-loading1;
          -webkit-animation-duration: 5s;
          animation-duration: 5s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          &:before{
          -webkit-animation-name: hvr-loading;
          animation-name: hvr-loading;
          -webkit-animation-duration: 5s;
          animation-duration: 5s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          }
      }
    }
  }
  /* loading */
  @-webkit-keyframes hvr-loading {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes hvr-loading {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @-webkit-keyframes hvr-loading1 {
    0% {
      background: #8391a5;
    }
    99% {
    background: #8391a5;
    }
    100% {
    background: #fff;
    }
  }
  @keyframes hvr-loading1 {
    0% {
      background: #8391a5;
    }
    99% {
    background: #8391a5;
    }
    100% {
    background: #fff;
    }
  }

  .banner1 {
  overflow: hidden;
  font-size: 14px;
  background: url('/static/images/banner/banner1/banner_1.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner2 {
  overflow: hidden;
  font-size: 14px;
  background: url('/static/images/banner/banner2/banner_2.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner3 {
  overflow: hidden;
  font-size: 14px;
  background: url('/static/images/banner/banner3/banner_3.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
  .banner4 {
  overflow: hidden;
  font-size: 14px;
  background: url('/static/images/banner/banner4/banner_4.png') no-repeat;
  background-size: cover;
  background-position:center center;
}
@media screen and (max-width: 860px) {
  .el-carousel__container {
    height: 400px !important;
  }
}
@media screen and (max-width: 610px) {
  .el-carousel__container {
    height: 300px !important;
  }
}
@media screen and (max-width: 480px) {
  .el-carousel__container {
    height: 200px !important;
  }
}
@media screen and (max-width: 315px) {
  .el-carousel__container {
    height: 100px !important;
  }
  .el-carousel__button {
    width: 5px;
    height: 2px;
  }
}
@media screen and (min-width: 1900px) {
  .el-carousel__container {
    height: 700px !important;
  }
}

}
</style>
