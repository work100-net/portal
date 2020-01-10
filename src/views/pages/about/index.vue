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
        <team_zh_CN class="markdown-body" />
        <contact_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import index_zh_CN from '@/assets/md/about/index_zh_CN.md'
import team_zh_CN from '@/assets/md/about/team_zh_CN.md'
import contact_zh_CN from '@/assets/md/about/contact_zh_CN.md'

export default {
  name: 'AboutTeam',
  components: { Sticky, LeftMenu, index_zh_CN, team_zh_CN, contact_zh_CN },
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
        content: '团队成员来自互联网、IT、广告、物联网、工业自动化等多个领域，曾就职于国内外知名大厂，在各自行业均有超过15年以上的经验沉淀，对行业有深刻的洞察。'
      },
      {
        name: 'keywords',
        content: '团队介绍,经验,理念,大事记'
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
        href: process.env.VUE_APP_WWW_URL + '/policy'
      }
    ]
  }
}
</script>
