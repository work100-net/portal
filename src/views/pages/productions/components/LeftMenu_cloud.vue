<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
    >
      <el-submenu index="/productions/cloud.html#企业上云">
        <template slot="title">
          <el-icon class="el-icon-cloudy" />
          <a href="/productions/cloud.html#企业上云">企业上云</a>
        </template>
        <el-menu-item index="/productions/cloud.html#企业上云是什么">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#企业上云是什么">企业上云是什么</a>
        </el-menu-item>
        <el-menu-item index="/productions/cloud.html#为什么上云">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#为什么上云">为什么上云</a>
        </el-menu-item>
        <el-menu-item index="/productions/cloud.html#选什么上云">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#选什么上云">选什么上云</a>
        </el-menu-item>
        <el-menu-item index="/productions/cloud.html#该怎么上云">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#该怎么上云">该怎么上云</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/productions/cloud.html#光束云">
        <i class="el-icon-sunrise-1" />
        <span slot="title"><a href="/productions/cloud.html#光束云">光束云</a></span>
      </el-menu-item>
      <el-submenu index="/productions/cloud.html#开始使用">
        <template slot="title">
          <el-icon class="el-icon-video-play" />
          <a href="/productions/cloud.html#开始使用">开始使用</a>
        </template>
        <el-menu-item index="/productions/cloud.html#注册">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#注册">注册</a>
        </el-menu-item>
        <el-menu-item index="/productions/cloud.html#开源">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/cloud.html#开源">开源</a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/productions/cloud.html#功能概览">
        <template slot="title">
          <el-icon class="el-icon-guide" />
          <a href="/productions/cloud.html#功能概览">功能概览</a>
        </template>
        <el-menu-item index="/productions/cloud.html#物联网云平台">
          <el-icon class="el-icon-s-help" />
          <a href="/productions/cloud.html#物联网云平台">物联网云平台</a>
        </el-menu-item>
        <el-menu-item index="/productions/cloud.html#智能巡检系统">
          <el-icon class="el-icon-s-help" />
          <a href="/productions/cloud.html#智能巡检系统">智能巡检系统</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/productions/cloud.html#反馈与合作">
        <i class="el-icon-chat-line-round" />
        <span slot="title"><a href="/productions/cloud.html#反馈与合作">反馈与合作</a></span>
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
