<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :default-openeds="openedsMenu"
      :unique-opened="false"
      :router="true"
    >
      <el-submenu index="/training/java">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          Java 教程
        </template>
        <el-menu-item index="/training/java">
          <el-icon class="el-icon-tickets" />
          导读
        </el-menu-item>
        <el-menu-item index="/training/java-intro.html">
          <el-icon class="el-icon-s-management" />
          语言基础
        </el-menu-item>
        <el-menu-item index="/training/java-inheritance.html">
          <el-icon class="el-icon-s-management" />
          面向对象
        </el-menu-item>
        <el-menu-item index="/training/java-data-structure.html">
          <el-icon class="el-icon-s-management" />
          高级教程
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/training/micro-services">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          微服务开发
        </template>
        <el-menu-item index="/training/micro-services">
          <el-icon class="el-icon-tickets" />
          导读
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
    },
    openedsMenu() {
      return ['/training/java', '/training/micro-services']
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-menu-container {
  }
</style>
