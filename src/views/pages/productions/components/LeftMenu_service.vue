<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
    >
      <el-submenu index="/productions/services.html#软件开发">
        <template slot="title">
          <el-icon class="el-icon-data-line" />
          <a href="/productions/services.html#软件开发">软件开发</a>
        </template>
        <el-menu-item index="/productions/services.html#开发范围">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#开发范围">开发范围</a>
        </el-menu-item>
        <el-menu-item index="/productions/services.html#技术优势">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#技术优势">技术优势</a>
        </el-menu-item>
        <el-menu-item index="/productions/services.html#主要技术栈">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#主要技术栈">主要技术栈</a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/productions/services.html#培训">
        <template slot="title">
          <el-icon class="el-icon-mic" />
          <a href="/productions/services.html#培训">培训</a>
        </template>
        <el-menu-item index="/productions/services.html#云平台私有部署">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#云平台私有部署">云平台私有部署</a>
        </el-menu-item>
        <el-menu-item index="/productions/services.html#组态应用">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#组态应用">组态应用</a>
        </el-menu-item>
        <el-menu-item index="/productions/services.html#线上课程">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#线上课程">线上课程</a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/productions/services.html#咨询">
        <template slot="title">
          <el-icon class="el-icon-chat-line-round" />
          <a href="/productions/services.html#咨询">咨询</a>
        </template>
        <el-menu-item index="/productions/services.html#服务范围">
          <el-icon class="el-icon-s-flag" />
          <a href="/productions/services.html#服务范围">服务范围</a>
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
