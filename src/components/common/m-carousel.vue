<template>
    <Carousel autoplay>
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
export default {
  name: "component_name",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
    .demo-carousel{
        height: 300px;
        line-height: 300px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color:#506b9e;
    }
</style>