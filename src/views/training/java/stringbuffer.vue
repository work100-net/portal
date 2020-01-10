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
        <stringbuffer_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import stringbuffer_zh_CN from '@/assets/md/training/java/stringbuffer_zh_CN.md'

export default {
  name: 'TrainingJavaStringBuffer',
  components: { Sticky, LeftMenu, stringbuffer_zh_CN },
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
        content: '当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。'
      },
      {
        name: 'keywords',
        content: 'Java、StringBuffer类、方法'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-stringbuffer.html'
      }
    ]
  }
}
</script>
