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
        <documentation_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import documentation_zh_CN from '@/assets/md/training/java/documentation_zh_CN.md'

export default {
  name: 'TrainingJavaDocumentation',
  components: { Sticky, LeftMenu, documentation_zh_CN },
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
        content: 'Java 支持三种注释方式。前两种分别是 // 和 /* /，第三种被称作说明注释，它以 /* 开始，以 */结束。'
      },
      {
        name: 'keywords',
        content: 'Java、注释、说明、文档、javadoc、标签、输出、实例'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-documentation.html'
      }
    ]
  }
}
</script>
