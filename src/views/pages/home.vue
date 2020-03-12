<template>
  <div class="app-container">
    <!--
    <div v-if="device!=='mobile'" class="kv">
      <el-carousel :interval="5000">
        <el-carousel-item v-for="item in kvs" :key="item.title">
          <a :href="item.url">
            <el-image :src="item.image" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    -->

    <el-container>
      <el-aside v-if="device!=='mobile'" width="120px" style="background: #fff;" />
      <el-main style="background: #fdfdfd;border-right: 1px solid #e0e0e0;">
        <el-header v-if="device==='mobile'" style="background: #ececec;line-height: 60px;font-weight: bold; font-size: 24px;">免费课程合集</el-header>
        <RightMenu v-if="device==='mobile'" />
        <home_20200227_training_java_zh_CN class="markdown-body" />
        <home_20200208_training_video_source_zh_CN class="markdown-body" />
        <home_20191121_portal_open_zh_CN class="markdown-body" />
        <home_20191120_portal_open_zh_CN class="markdown-body" />
        <home_20191015_prod_cloud_iot_zh_CN class="markdown-body" />
        <contact_zh_CN class="markdown-body" />
      </el-main>
      <el-aside v-if="device!=='mobile'" width="280px">
        <el-header style="background: #ececec;line-height: 60px;font-weight: bold; font-size: 24px;">免费课程合集</el-header>
        <RightMenu />
      </el-aside>
      <el-aside v-if="device!=='mobile'" width="120px" style="background: #fff;" />
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RightMenu from '../training/components/LeftMenu'
import home_20191121_portal_open_zh_CN from '@/assets/md/pages/home_20191121_portal_open_source_zh_CN.md'
import home_20191120_portal_open_zh_CN from '@/assets/md/pages/home_20191120_portal_open_zh_CN.md'
import home_20191015_prod_cloud_iot_zh_CN from '@/assets/md/pages/home_20191015_prod_cloud_iot_zh_CN.md'
import home_20200208_training_video_source_zh_CN from '@/assets/md/pages/home_20200208_training_video_source_zh_CN.md'
import home_20200227_training_java_zh_CN from '@/assets/md/pages/home_20200227_training_java_zh_CN.md'
import contact_zh_CN from '@/assets/md/about/contact_zh_CN.md'

export default {
  name: 'Home',
  components: {
    RightMenu,
    home_20191121_portal_open_zh_CN,
    home_20191120_portal_open_zh_CN,
    home_20191015_prod_cloud_iot_zh_CN,
    home_20200227_training_java_zh_CN,
    home_20200208_training_video_source_zh_CN,
    contact_zh_CN
  },
  data() {
    return {
      kvs: [
        {
          title: 'kv1',
          image: process.env.VUE_APP_CONTENTS_URL + '/images/pages/home/zh_CN/kv1.jpg',
          url: '/training/java'
        },
        {
          title: 'kv2',
          image: process.env.VUE_APP_CONTENTS_URL + '/images/pages/home/zh_CN/kv2.jpg',
          url: '/tools'
        },
        {
          title: 'kv3',
          image: process.env.VUE_APP_CONTENTS_URL + '/images/pages/home/zh_CN/kv3.jpg',
          url: '/productions/cloud.html#物联网云平台'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: '光束云 - 专注于为企业提供应用软件，通过科技赋能来提升企业生产力'
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
        href: process.env.VUE_APP_WWW_URL + '/home'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
  .kv {
    width: 100%;
    text-align: center;
  }
</style>
