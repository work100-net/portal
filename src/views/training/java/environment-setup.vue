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
        <environment_setup_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import environment_setup_zh_CN from '@/assets/md/training/java/environment_setup_zh_CN.md'

export default {
  name: 'TrainingJavaEnvironmentSetup',
  components: { Sticky, LeftMenu, environment_setup_zh_CN },
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
        content: '开发环境配置：在本章节中我们将为大家介绍如何搭建Java开发环境。'
      },
      {
        name: 'keywords',
        content: 'JDK、IDE、下载地址、Windows、Mac OS、Linux、Java 8、安装、环境变量、配置、JAVA_HOME、CLASSPATH、PATH、验证、IntelliJ IDEA'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-environment-setup.html'
      }
    ]
  }
}
</script>
