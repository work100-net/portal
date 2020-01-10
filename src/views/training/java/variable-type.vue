<template>
  <div class="app-container">
    <el-container>
      <el-aside v-if="device!=='mobile'" width="220px">
        <Sticky :sticky-top="60">
          <LeftMenu />
        </Sticky>
      </el-aside>
      <el-main>
        <LeftMenu v-if="device==='mobile'" />
        <variable_type_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import variable_type_zh_CN from '@/assets/md/training/java/variable_type_zh_CN.md'

export default {
  name: 'TrainingJavaVariableType',
  components: { Sticky, LeftMenu, variable_type_zh_CN },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    })
  },
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: '变量类型：ava语言支持的变量类型有：类变量、实例变量、局部变量'
      },
      {
        name: 'keywords',
        content: 'Java、变量类型、类变量、实例变量、局部变量、实例、静态变量'
      },
      {
        name: 'robots',
        content: 'all'
      },
      {
        name: 'googlebot',
        content: 'all'
      },
      {
        name: 'baiduspider',
        content: 'all'
      }
    ],
    link: [
      {
        rel: 'assets',
        href: process.env.VUE_APP_WWW_URL + '/training/java-variable-type.html'
      }
    ]
  }
}
</script>
