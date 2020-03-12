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
        <open_source_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_open_source'
import open_source_zh_CN from '@/assets/md/productions/open_source_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'ProductionsOpenSource',
  components: {
    RightPanel,
    Sticky,
    LeftMenu,
    open_source_zh_CN
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
        content: '我是专业码农，服务的对象您也是码农，我们都知道码农最关注的东西 -- 源码！懂得分享的人会更容易获得成功，所以我们开源！'
      },
      {
        name: 'keywords',
        content: '开源理念、码农、如何盈利、开源产品、云平台、门户站点、免费课程、编程语言、社区、捐赠、Donate、奖励'
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
        href: process.env.VUE_APP_WWW_URL + '/productions/open-source'
      }
    ]
  }
}
</script>
