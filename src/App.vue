<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    };
  },
  components:{
    'app-header':require("./components/app/app-header"),
    'app-footer':require("./components/app/app-footer"),
  }
}
</script>

<style>
</style>
