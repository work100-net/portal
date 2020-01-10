<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :default-openeds="openedsMenu"
      :unique-opened="false"
    >
      <el-submenu index="/about.html#团队介绍">
        <template slot="title">
          <el-icon class="el-icon-s-help" />
          <a href="/about.html#团队介绍">团队介绍</a>
        </template>
        <el-menu-item index="/about.html#我们的经验">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#我们的经验">我们的经验</a>
        </el-menu-item>
        <el-menu-item index="/about.html#我们的理念">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#我们的理念">我们的理念</a>
        </el-menu-item>
        <el-menu-item index="/about.html#大事记">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#大事记">大事记</a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/about.html#联系方式">
        <template slot="title">
          <el-icon class="el-icon-chat-line-round" />
          <a href="/about.html#联系方式">联系方式</a>
        </template>
        <el-menu-item index="/about.html#电子邮箱">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#电子邮箱">电子邮箱</a>
        </el-menu-item>
        <el-menu-item index="/about.html#社交账号">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#社交账号">社交账号</a>
        </el-menu-item>
        <el-menu-item index="/about.html#社交账号">
          <el-icon class="el-icon-s-flag" />
          <a href="/about.html#捐赠方式">捐赠方式</a>
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
      return ['/about.html#团队介绍', '/about.html#联系方式']
    }
  }
}
</script>
