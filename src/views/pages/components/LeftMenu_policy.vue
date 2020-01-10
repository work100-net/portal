<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-menu-item index="/policy.html#注册">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#注册">1. 注册</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#服务内容">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#服务内容">2. 服务内容</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#使用规则">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#使用规则">3. 使用规则</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#用户保证">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#用户保证">4. 用户保证</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#版权声明">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#版权声明">5. 版权声明</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#承诺及责任">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#承诺及责任">6. 承诺及责任</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#隐私">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#隐私">7. 隐私</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#数据访问">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#数据访问">8. 数据访问</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#责任限制">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#责任限制">9. 责任限制</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#本协议的修改">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#本协议的修改">10. 本协议的修改</a>
      </el-menu-item>
      <el-menu-item index="/policy.html#附则">
        <i class="el-icon-s-flag" />
        <a href="/policy.html#附则">11. 附则</a>
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
