<template>
  <div class="footer-container">
    <div class="copyright">
      <template v-if="device!=='mobile'">
        <el-link href="/site-map.html">网站地图</el-link>
        |
        <el-link href="/about.html">关于我们</el-link>
      </template>
      &nbsp;&nbsp;&nbsp;&nbsp;Copyright &copy; 2019-2020
      <el-link href="/">光束云</el-link>
      版权所有&nbsp;&nbsp;&nbsp;&nbsp;
      <el-link v-if="device!=='mobile'" href="http://www.miitbeian.gov.cn/" target="_blank">京ICP备14056613号-1</el-link>
    </div>
    <el-backtop />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters([
      'device'
    ])
  }
}
</script>

<style lang="scss" scoped>

  .footer-container {
    color: #bfcbd9;
    height: 60px;
    font-size: 14px;
    text-align: center;
    background: #304156;
    vertical-align: middle;

    & .copyright {
      padding-top: 20px;
      line-height: 20px;
      vertical-align: middle;

      & .el-link {
        color: #bfcbd9;
      }

    }
  }
</style>
