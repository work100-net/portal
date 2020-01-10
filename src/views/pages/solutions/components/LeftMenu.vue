<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :default-openeds="openedsMenu"
      :unique-opened="false"
    >
      <el-submenu index="/solutions/index.html#物联网">
        <template slot="title">
          <el-icon class="el-icon-s-help" />
          <a href="/solutions/index.html#物联网">物联网</a>
        </template>
        <el-menu-item index="/solutions/index.html#服务方式">
          <el-icon class="el-icon-s-flag" />
          <a href="/solutions/index.html#服务方式">服务方式</a>
        </el-menu-item>
        <el-menu-item index="/solutions/index.html#功能展示">
          <el-icon class="el-icon-s-flag" />
          <a href="/solutions/index.html#功能展示">功能展示</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/solutions/index.html#工业自动化">
        <i class="el-icon-office-building" />
        <span slot="title"><a href="/solutions/index.html#工业自动化">工业自动化</a></span>
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
    },
    openedsMenu() {
      return ['/solutions/index.html#物联网', '/solutions/index.html#工业自动化']
    }
  }
}
</script>
