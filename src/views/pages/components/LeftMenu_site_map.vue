<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-menu-item index="/site-map.html#首页">
        <i class="el-icon-s-home" />
        <a href="/site-map.html#首页">首页</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#产品与服务">
        <i class="el-icon-box" />
        <a href="/site-map.html#产品与服务">产品与服务</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#解决方案">
        <i class="el-icon-wallet" />
        <a href="/site-map.html#解决方案">解决方案</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#免费课程">
        <i class="el-icon-menu" />
        <a href="/site-map.html#免费课程">免费课程</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#常用工具">
        <i class="el-icon-bangzhu" />
        <a href="/site-map.html#常用工具">常用工具</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#关于我们">
        <i class="el-icon-chat-line-round" />
        <a href="/site-map.html#关于我们">关于我们</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#网站地图">
        <i class="el-icon-map-location" />
        <a href="/site-map.html#网站地图">网站地图</a>
      </el-menu-item>
      <el-menu-item index="/site-map.html#外链">
        <svg-icon icon-class="link" style="margin-left: 6px; margin-right: 10px;" />
        <a href="/site-map.html#外链">外链</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    activeMenu() {
      const route = this.$route
      const { path } = route
      return path
    }
  }
}
</script>
