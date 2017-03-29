<template>
  <div class="app-header demo-affix">
    <img class="app-logo" src="../../assets/images/title.jpg">
    <Menu class="float-right" mode="horizontal" active-name="1">
        <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            中葡食品资料库
        </Menu-item>
        <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            双语专业服务及人才库
        </Menu-item>
        <Menu-item name="3">
            <Icon type="stats-bars"></Icon>
            会展信息
        </Menu-item>
        <Menu-item name="4">
            <Icon type="chatbubbles"></Icon>
            经贸信息
        </Menu-item>
        <Submenu name="5">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                更多
            </template>
            <Menu-group title="其他">
                <Menu-item name="3-1">关于我们</Menu-item>
                <Menu-item name="3-2">合作单位</Menu-item>
                <Menu-item name="3-3">在线留言</Menu-item>
            </Menu-group>
            <Menu-group title="小工具">
                <Menu-item name="3-4">在线翻译</Menu-item>
                <Menu-item name="3-5">HS码查询</Menu-item>
                <Menu-item name="3-6">法规资讯</Menu-item>
            </Menu-group>
        </Submenu>
    </Menu>
  </div>
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
.app-logo{
    width: 430px;
}
</style>