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
        <cloud_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_cloud'
import cloud_zh_CN from '@/assets/md/productions/cloud_zh_CN.md'

export default {
  name: 'ProductionsCloud',
  components: {
    Sticky,
    LeftMenu,
    cloud_zh_CN
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
        content: '光束云「云平台」基于企业上云的现实需求，为企业上云提供一套从构建云服务、到上云的最佳实践方案。企业伙伴可以直接在光束云「云平台」上使用我们为您提供的云服务，也可以把我们的云平台私有化部署，以及定制开发扩展功能。同时我们还为企业伙伴提供进行云服务开发所需的开发环境搭建、团队培训、技术选型、技术架构、运维支持等技术咨询服务，助力企业成功上云。光束云「云平台」的核心功能将陆续开源贡献给社区，以适应企业的不断发展而不断变化的开发需求。'
      },
      {
        name: 'keywords',
        content: '企业上云、光束云、云平台、开始使用、注册向导、功能概览、物联网、控制台、多语言、意见反馈、合作机会'
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
        href: process.env.VUE_APP_WWW_URL + '/productions/cloud'
      }
    ]
  }
}
</script>
