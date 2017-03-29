<template>
<div>
  <m-carousel></m-carousel>
  <section class="main-container">
				<div class="cheuk-sectionTitle">
					<h2>本站功能</h2>
				</div>
				<div class="main-option">
					<img src="../assets/images/main_option1.png"/>
					<div class="option_inner">
							<h2>中葡食品资料库</h2>
							<p>发布中国、葡语国家及地区的食品信息</p>
					</div>
				</div>
				<div class="main-option">
					<img src="../assets/images/main_option2.png"/>
					<div class="option_inner">
							<h2>双语专业服务及人才库</h2>
							<p>面向中国及葡语国家和地区收集各类双语专业人才资料</p>
					</div>
				</div>
				<div class="main-option">
					<img src="../assets/images/main_option3.png"/>
					<div class="option_inner">
							<h2>会展信息</h2>
							<p>会展信息资料库，发布中国、葡语国家与地区主要经贸类展会信息</p>
					</div>
				</div>
				<div class="main-option" >
					<img src="../assets/images/main_option4.png"/>
					<div class="option_inner">
							<h2>经贸信息</h2>
							<p>中国及葡语国家与地区经贸活动概况、投资资讯、投资环境、投资项目</p>
					</div>
				</div>
		</section>
</div>
</template>
<script>
export default {
  name: "app-index",
  data () {
    return {
    };
  },
  components: {
    'm-carousel':require('./common/m-carousel'),
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/colors';
.cheuk-sectionTitle{
  h2{
    color: $fontPrimary;
    position: relative;
    text-align: center;
    font-weight: 400;
    margin:30px 0;
    &:after{
      content: "";
      display: block;
      width: 20px;
      border-top: 1px $bgPrimary solid;
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -10px;
    }
  }
}
.main-option{
	position: relative;
	width: 49%;
	margin-top: 1%;
	margin-right: 1%;
	float: left;
	overflow: hidden;
	background-size: cover;
	background-position: center;
  img{
    display: block;
    // vertical-align: middle;
    width: 100%;
  }
  .option_inner{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    display: block;
    box-sizing: border-box;
    color: $fontWhite;
    padding-top: 28%;
    padding-left: 18px;
    padding-right: 18px;
    text-align: center;
    transition: all 0.3s ease;
    &:before{
      content: "";
      width: 100%;
      height: 0px;
      background-color: $bgPrimary;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s linear;
    }
    &:hover{
      &:before{
        height: 10px;
      }
    }
    h2{
      position: relative;
      font-size: 1.7rem;
      font-weight: 400;
      text-align: center;
      transition: all 0.3s ease;
      text-shadow: 0 1px 1px rgba(0,0,0,0.4);
      &:hover{
        color: $bgPrimary;
        transform: translateY(-0.4rem);
        &:after{
          opacity: 1;
          left: 50%;
        }
      }
      &:after{
        content: "";
        width: 4rem;
        display: block;
        opacity: 0;
        border-top: 3px $bgPrimary solid;
        position: absolute;
        bottom: -2px;
        left:30%;
        margin-left: -2rem;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>