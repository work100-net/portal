<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
    >
      <el-menu-item index="/productions/open-source.html#开源理念">
        <i class="el-icon-star-off" />
        <span slot="title"><a href="/productions/open-source.html#开源理念">开源理念</a></span>
      </el-menu-item>
      <el-menu-item index="/productions/open-source.html#如何盈利">
        <i class="el-icon-money" />
        <span slot="title"><a href="/productions/open-source.html#如何盈利">如何盈利</a></span>
      </el-menu-item>
      <el-menu-item index="/productions/open-source.html#开源产品">
        <i class="el-icon-notebook-2" />
        <span slot="title"><a href="/productions/open-source.html#开源产品">开源产品</a></span>
      </el-menu-item>
      <el-menu-item index="/productions/open-source.html#社区">
        <i class="el-icon-chat-line-round" />
        <span slot="title"><a href="/productions/open-source.html#社区">社区</a></span>
      </el-menu-item>
      <el-menu-item index="/productions/open-source.html#捐赠">
        <i class="el-icon-coffee" />
        <span slot="title"><a href="/productions/open-source.html#捐赠">捐赠(Donate)</a></span>
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
