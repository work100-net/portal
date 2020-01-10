<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-menu-item index="/tools/code.html">
        <i class="el-icon-document" />
        <span slot="title">代码片段</span>
      </el-menu-item>
      <el-menu-item index="/tools/json-formatter.html">
        <i class="el-icon-c-scale-to-original" />
        <span slot="title">Json格式化</span>
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

<style lang="scss" scoped>
  .left-menu-container {
  }
</style>
