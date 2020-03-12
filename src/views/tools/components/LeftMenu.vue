<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-submenu index="/tools/code">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          代码片段
        </template>
        <el-submenu index="/tools/code-java">
          <template slot="title">
            <el-icon class="el-icon-s-management" />
            Java代码
          </template>
          <el-menu-item index="/tools/code-java/datetime-utils.html">
            <el-icon class="el-icon-s-flag" />
            DateTimeUtils
          </el-menu-item>
          <el-menu-item index="/tools/code-java/cookie-utils.html">
            <el-icon class="el-icon-s-flag" />
            CookieUtils
          </el-menu-item>
          <el-menu-item index="/tools/code-java/encryption-utils.html">
            <el-icon class="el-icon-s-flag" />
            EncryptionUtils
          </el-menu-item>
          <el-menu-item index="/tools/code-java/mapper-utils.html">
            <el-icon class="el-icon-s-flag" />
            MapperUtils
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="tools/tool">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          常用工具
        </template>
        <el-menu-item index="/tools/tool-json-formatter.html">
          <el-icon class="el-icon-s-flag" />
          JsonFormatter
        </el-menu-item>
      </el-submenu>
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
