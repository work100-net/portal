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
        <services_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_service'
import services_zh_CN from '@/assets/md/productions/services_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'ProductionsServices',
  components: {
    RightPanel,
    Sticky,
    LeftMenu,
    services_zh_CN
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
        content: '我们提供的软件开发服务：企业门户/网站、协同办公/业务管理/服务支撑、电商平台/运营管理平台、原生云服务、APP(Android、iOS)、IoT物联网、组态应用开发、工控/自动化系统集成'
      },
      {
        name: 'keywords',
        content: '门户、网站、协同办公、管理平台、电商、云服务、APP、Android、iOS、IoT物联网、组态应用、工控、自动化、系统集成、培训、组态应用、线上课程、私有部署、咨询、服务范围'
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
        href: process.env.VUE_APP_WWW_URL + '/productions/services'
      }
    ]
  }
}
</script>
