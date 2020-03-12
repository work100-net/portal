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
            <LeftMenu />
          </div>
        </right-panel>
        <privacy_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_privacy'
import privacy_zh_CN from '@/assets/md/pages/privacy_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'Privacy',
  components: {
    RightPanel,
    Sticky,
    LeftMenu,
    privacy_zh_CN
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
        content: '本隐私政策适用于引用或链接到本政策的任何 APP、网站或在线应用程序(以下统称为我们的“服务”)。无论您使用计算机、手机、平板电脑还是电视访问我们的服务，本隐私政策均适用。'
      },
      {
        name: 'keywords',
        content: '范围,隐私政策,信息收集,信息使用,信息共享,信息披露,信息安全,数据保留,第三方,COOKIE,信标,本地存储,浏览器,服务器,联系我们'
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
        href: process.env.VUE_APP_WWW_URL + '/privacy'
      }
    ]
  }
}
</script>

