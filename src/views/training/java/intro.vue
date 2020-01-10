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
        <intro_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import intro_zh_CN from '@/assets/md/training/java/intro_zh_CN.md'

export default {
  name: 'TrainingJavaIntro',
  components: { Sticky, LeftMenu, intro_zh_CN },
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
        content: 'Java简介：Java 是由 Sun Microsystems 公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由 James Gosling 和同事们共同研发，并在1995年正式推出。'
      },
      {
        name: 'keywords',
        content: 'Java、Sun Microsystems、语言、特性、简单、面向对象、分布式、健壮、安全、体系结构、可移植、解释型、高性能、多线程、动态、发展历史、开发工具、Eclipse、MyEclipse、NetBeans、IntelliJ IDEA'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-intro.html'
      }
    ]
  }
}
</script>
