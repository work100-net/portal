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
        <index_zh_CN class="markdown-body" />
        <iot_zh_CN class="markdown-body" />
        <automated_industry_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import index_zh_CN from '@/assets/md/solutions/index_zh_CN.md'
import iot_zh_CN from '@/assets/md/solutions/iot_zh_CN.md'
import automated_industry_zh_CN from '@/assets/md/solutions/automated_industry_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'SolutionsIndex',
  components: {
    RightPanel,
    Sticky,
    LeftMenu,
    index_zh_CN,
    iot_zh_CN,
    automated_industry_zh_CN
  },
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
        content: '经过多年行业的实践，我们积累了丰富的经验，我们把这些经验抽象成了专业的解决方案。期望我们的解决方案能够为您或您的企业带来帮助，也期待与您或您的企业有更深入的合作。'
      },
      {
        name: 'keywords',
        content: '解决方案、物联网、IoT、服务方式、功能展示、免费试用、私有化部署、工业自动化、组态软件、应用与集成、方案规划、设备采购、项目实施'
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
        href: process.env.VUE_APP_WWW_URL + '/solutions/index'
      }
    ]
  }
}
</script>
