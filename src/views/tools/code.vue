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
        <index_zh_CN class="markdown-body" />
        <java_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import index_zh_CN from '@/assets/md/tools/code/index_zh_CN.md'
import java_zh_CN from '@/assets/md/tools/code/java_zh_CN.md'

export default {
  name: 'ToolsCode',
  components: { Sticky, LeftMenu, index_zh_CN, java_zh_CN },
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
        content: '获取特定的源码片段'
      },
      {
        name: 'keywords',
        content: 'Java、源码、片段、加密、解密、密码、Jackson、工具'
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
        href: process.env.VUE_APP_WWW_URL + '/tools/code'
      }
    ]
  }
}
</script>
