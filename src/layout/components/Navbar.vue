<template>
  <div class="navbar-container">
    <div v-if="device==='mobile'" class="hamburger-container" @click="toggleSideBar">
      <el-icon class="el-icon-s-unfold" />
    </div>
    <div class="logo-container">
      <router-link key="collapse" class="logo-link" to="/">
        <img :src="logo.image" class="logo-image">
        <!--<h3 v-else class="logo-title">{{ logo.title }}</h3>-->
      </router-link>
    </div>
    <div v-if="device!=='mobile'" class="left-menu-container">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :router="true"
        mode="horizontal"
      >
        <el-submenu index="/productions">
          <template slot="title">产品与服务</template>
          <el-menu-item index="/productions/cloud.html">云平台</el-menu-item>
          <el-menu-item index="/productions/open-source.html">开源</el-menu-item>
          <el-menu-item index="/productions/services.html">服务和支持</el-menu-item>
        </el-submenu>
        <el-menu-item index="/solutions/index.html">解决方案</el-menu-item>
        <el-submenu index="/training">
          <template slot="title">免费课程</template>
          <el-menu-item index="/training/java">Java 教程</el-menu-item>
          <el-menu-item index="/training/micro-services">微服务开发</el-menu-item>
        </el-submenu>
        <el-submenu index="/tools">
          <template slot="title">常用工具</template>
          <el-menu-item index="/tools/code.html">代码片段</el-menu-item>
          <el-menu-item index="/tools/json-formatter.html">Json 格式化</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right-menu-container">
      <el-menu :background-color="variables.menuBg" text-color="#fff" mode="horizontal">
        <el-menu-item>
          <a href="https://console.work100.net/" target="_blank">
            云控制台
            <svg-icon icon-class="link" style="color: #fff;" />
          </a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import logoImage from '@/assets/logo/logo_light.png'

export default {
  components: {},
  data() {
    return {
      logo: {
        title: process.env.VUE_APP_TITLE,
        image: logoImage
      }
    }
  },
  computed: {
    ...mapGetters([
      'guest_routes',
      'sidebar',
      'device'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-container {
    /*position: fixed;*/
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    overflow: hidden;
    background: #304156;
    box-shadow: 0 1px 2px rgba(0, 21, 41, .08);

    .hamburger-container {
      float: left;
      cursor: pointer;
      font-size: 25px;
      vertical-align: middle;
      line-height: 60px;
      padding-top: 1px;
      padding-left: 5px;
      padding-right: 5px;
      color: #bfcbd9;
      /*transform: rotate(180deg);*/
    }

    .logo-container {
      float: left;
      position: relative;
      width: 120px;
      height: 60px;
      line-height: 60px;
      text-align: left;
      overflow: hidden;

      & .logo-link {
        height: 100%;
        width: 100%;

        & .logo-image {
          height: 42px;
          vertical-align: middle;
          margin-right: 12px;
          padding-left: 10px;
        }

        & .logo-title {
          display: inline-block;
          margin: 0;
          color: #bfcbd9;
          font-weight: bold;
          line-height: 60px;
          font-size: 18px;
          font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
          vertical-align: middle;
        }
      }

      &.collapse {
        .navbar-logo {
          margin-right: 0px;
        }
      }
    }

    .left-menu-container {
      float: left;
      height: 60px;
      overflow: hidden;
      position: relative;
    }

    .right-menu-container {
      float: right;
      height: 60px;
      width: 120px;
      overflow: hidden;
      position: relative;
    }
  }
</style>
