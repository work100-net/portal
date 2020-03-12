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
        <applet_zh_CN class="markdown-body" />
        <follow_me_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import applet_zh_CN from '@/assets/md/training/java/applet_zh_CN.md'
import follow_me_zh_CN from '@/assets/md/about/follow_me_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'TrainingJavaApplet',
  components: { RightPanel, Sticky, LeftMenu, applet_zh_CN, follow_me_zh_CN },
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
        content: 'Applet 是一种 Java 程序。它一般运行在支持 Java 的 Web 浏览器内。因为它有完整的 Java API支持,所以Applet 是一个全功能的 Java 应用程序。'
      },
      {
        name: 'keywords',
        content: 'Java、Applet、浏览器、web、程序、类、JVM、生命周期、运行环境、安全规则、init、start、stop、destroy、paint、事件处理、显示图片、播放音频、实例'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-applet.html'
      }
    ]
  }
}
</script>
