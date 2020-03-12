<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
      mode="vertical"
    >
      <el-menu-item index="/training/index">
        <el-icon class="el-icon-video-play" />
        开课导读
      </el-menu-item>
      <el-submenu index="/training/java">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          Java入门
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
          Java微服务
        </template>
        <el-menu-item index="/training/micro-services">
          <el-icon class="el-icon-tickets" />
          导读
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
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
