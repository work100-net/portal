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
        <loop_zh_CN class="markdown-body" />
        <follow_me_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import loop_zh_CN from '@/assets/md/training/java/loop_zh_CN.md'
import follow_me_zh_CN from '@/assets/md/about/follow_me_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'TrainingJavaLoop',
  components: { RightPanel, Sticky, LeftMenu, loop_zh_CN, follow_me_zh_CN },
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
        content: '循环结构：顺序结构的程序语句只能被执行一次。如果您想要同样的操作执行多次,，就需要使用循环结构。'
      },
      {
        name: 'keywords',
        content: 'Java、循环结构、while、do...while、for、实例、关键字、break、continue'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-loop.html'
      }
    ]
  }
}
</script>
