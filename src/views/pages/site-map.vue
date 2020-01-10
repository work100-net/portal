<template>
  <div class="app-container">
    <el-container>
      <el-aside v-if="device!=='mobile'" width="220px">
        <Sticky :sticky-top="60">
          <LeftMenu />
        </Sticky>
      </el-aside>
      <el-main>
        <site_map_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_site_map'
import site_map_zh_CN from '@/assets/md/pages/site_map_zh_CN.md'

export default {
  name: 'SiteMap',
  components: { Sticky, LeftMenu, site_map_zh_CN },
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
        content: '本站网站地图，通过此页可以直达站点各个栏目'
      },
      {
        name: 'keywords',
        content: '首页,产品与服务,云平台,开源,服务与支持,软件开发,培训,咨询,解决方案,物联网,工业自动化,大数据,人工智能,区块链,协同办公,文档,下载,常用工具,关于我们,团队介绍,工作机会,新闻资讯,合作伙伴,用户协议,隐私政策,网站地图'
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
        href: process.env.VUE_APP_WWW_URL + '/site-map'
      }
    ]
  }
}
</script>
