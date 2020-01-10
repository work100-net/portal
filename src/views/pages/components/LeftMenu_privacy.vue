<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-menu-item index="/privacy.html#范围">
        <i class="el-icon-help" />
        <a href="/privacy.html#范围">范围</a>
      </el-menu-item>
      <el-menu-item index="/privacy.html#隐私政策">
        <i class="el-icon-info" />
        <a href="/privacy.html#隐私政策">隐私政策</a>
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
