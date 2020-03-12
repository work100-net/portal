<template>
  <div class="app-container">
    <el-container>
      <el-aside v-if="device!=='mobile'" width="220px">
        <Sticky :sticky-top="60">
          <LeftMenu />
        </Sticky>
      </el-aside>
      <el-main>
        <right-panel v-if="device==='mobile'">
          <div class="drawer-container">
            <LeftMenu v-if="device==='mobile'" />
          </div>
        </right-panel>
        <variable_type_zh_CN class="markdown-body" />
        <follow_me_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import variable_type_zh_CN from '@/assets/md/training/java/variable_type_zh_CN.md'
import follow_me_zh_CN from '@/assets/md/about/follow_me_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'TrainingJavaVariableType',
  components: { RightPanel, Sticky, LeftMenu, variable_type_zh_CN, follow_me_zh_CN },
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
