<template>
  <div class="left-menu-container">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :router="true"
    >
      <el-menu-item index="/training/java">
        <el-icon class="el-icon-tickets" />
        <span slot="title">导读</span>
      </el-menu-item>
      <el-submenu index="/training/java-intro.html">
        <template slot="title">
          <el-icon class="el-icon-s-management" />
          语言基础
        </template>
        <el-menu-item index="/training/java-intro.html">
          <el-icon class="el-icon-s-flag" />
          Java 简介
        </el-menu-item>
        <el-menu-item index="/training/java-environment-setup.html">
          <el-icon class="el-icon-s-flag" />
          开发环境配置
        </el-menu-item>
        <el-menu-item index="/training/java-basic-syntax.html">
          <el-icon class="el-icon-s-flag" />
          基础语法
        </el-menu-item>
        <el-menu-item index="/training/java-object-class.html">
          <el-icon class="el-icon-s-flag" />
          对象和类
        </el-menu-item>
        <el-menu-item index="/training/java-basic-datatype.html">
          <el-icon class="el-icon-s-flag" />
          基本数据类型
        </el-menu-item>
        <el-menu-item index="/training/java-variable-type.html">
          <el-icon class="el-icon-s-flag" />
          变量类型
        </el-menu-item>
        <el-menu-item index="/training/java-modifier-type.html">
          <el-icon class="el-icon-s-flag" />
          修饰符
        </el-menu-item>
        <el-menu-item index="/training/java-operator.html">
          <el-icon class="el-icon-s-flag" />
          运算符
        </el-menu-item>
        <el-menu-item index="/training/java-loop.html">
          <el-icon class="el-icon-s-flag" />
          循环结构
        </el-menu-item>
        <el-menu-item index="/training/java-if-else.html">
          <el-icon class="el-icon-s-flag" />
          条件语句
        </el-menu-item>
        <el-menu-item index="/training/java-switch-case.html">
          <el-icon class="el-icon-s-flag" />
          switch_case
        </el-menu-item>
        <el-menu-item index="/training/java-number-math.html">
          <el-icon class="el-icon-s-flag" />
          Number和Math类
        </el-menu-item>
        <el-menu-item index="/training/java-character.html">
          <el-icon class="el-icon-s-flag" />
          Character类
        </el-menu-item>
        <el-menu-item index="/training/java-string.html">
          <el-icon class="el-icon-s-flag" />
          String类
        </el-menu-item>
        <el-menu-item index="/training/java-stringbuffer.html">
          <el-icon class="el-icon-s-flag" />
          StringBuffer
        </el-menu-item>
        <el-menu-item index="/training/java-array.html">
          <el-icon class="el-icon-s-flag" />
          数组
        </el-menu-item>
        <el-menu-item index="/training/java-date-time.html">
          <el-icon class="el-icon-s-flag" />
          日期时间
        </el-menu-item>
        <el-menu-item index="/training/java-regular-expression.html">
          <el-icon class="el-icon-s-flag" />
          正则表达式
        </el-menu-item>
        <el-menu-item index="/training/java-method.html">
          <el-icon class="el-icon-s-flag" />
          方法
        </el-menu-item>
        <el-menu-item index="/training/java-stream-file-io.html">
          <el-icon class="el-icon-s-flag" />
          Stream和File和IO
        </el-menu-item>
        <el-menu-item index="/training/java-scanner.html">
          <el-icon class="el-icon-s-flag" />
          Scanner类
        </el-menu-item>
        <el-menu-item index="/training/java-exception.html">
          <el-icon class="el-icon-s-flag" />
          异常处理
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/training/java-inheritance.html">
        <template slot="title">
          <el-icon class="el-icon-s-management" />
          面向对象
        </template>
        <el-menu-item index="/training/java-inheritance.html">
          <el-icon class="el-icon-s-flag" />
          继承
        </el-menu-item>
        <el-menu-item index="/training/java-override-overload.html">
          <el-icon class="el-icon-s-flag" />
          重写与重载
        </el-menu-item>
        <el-menu-item index="/training/java-polymorphism.html">
          <el-icon class="el-icon-s-flag" />
          多态
        </el-menu-item>
        <el-menu-item index="/training/java-abstract.html">
          <el-icon class="el-icon-s-flag" />
          抽象类
        </el-menu-item>
        <el-menu-item index="/training/java-encapsulation.html">
          <el-icon class="el-icon-s-flag" />
          封装
        </el-menu-item>
        <el-menu-item index="/training/java-interface.html">
          <el-icon class="el-icon-s-flag" />
          接口
        </el-menu-item>
        <el-menu-item index="/training/java-package.html">
          <el-icon class="el-icon-s-flag" />
          包(package)
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/training/java-data-structure.html">
        <template slot="title">
          <el-icon class="el-icon-s-management" />
          高级教程
        </template>
        <el-menu-item index="/training/java-data-structure.html">
          <el-icon class="el-icon-s-flag" />
          数据结构
        </el-menu-item>
        <el-menu-item index="/training/java-collection.html">
          <el-icon class="el-icon-s-flag" />
          集合
        </el-menu-item>
        <el-menu-item index="/training/java-generic.html">
          <el-icon class="el-icon-s-flag" />
          泛型
        </el-menu-item>
        <el-menu-item index="/training/java-serialization.html">
          <el-icon class="el-icon-s-flag" />
          序列化
        </el-menu-item>
        <el-menu-item index="/training/java-networking.html">
          <el-icon class="el-icon-s-flag" />
          网络编程
        </el-menu-item>
        <el-menu-item index="/training/java-email.html">
          <el-icon class="el-icon-s-flag" />
          发送邮件
        </el-menu-item>
        <el-menu-item index="/training/java-multi-threading.html">
          <el-icon class="el-icon-s-flag" />
          多线程
        </el-menu-item>
        <el-menu-item index="/training/java-applet.html">
          <el-icon class="el-icon-s-flag" />
          Applet
        </el-menu-item>
        <el-menu-item index="/training/java-documentation.html">
          <el-icon class="el-icon-s-flag" />
          文档注释
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
