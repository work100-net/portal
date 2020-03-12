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
        <follow_me_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import index_zh_CN from '@/assets/md/training/index_zh_CN.md'
import follow_me_zh_CN from '@/assets/md/about/follow_me_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'TrainingJava',
  components: { RightPanel, Sticky, LeftMenu, index_zh_CN, follow_me_zh_CN },
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
        content: '互联网行业是技术迭代速度最快的行业，作为互联网行业从业者，我们必须不断的学习新知识，保持我们的执业能力，这样才能确保在激烈的竞争中胜出。学习，会伴随我们的整个职业生涯！那么，我们就要找到一种高效的学习方法！'
      },
      {
        name: 'keywords',
        content: '免费课程、开课导读、讲师介绍、理念与目标、授课方式、学习方法、课程列表'
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
        href: process.env.VUE_APP_WWW_URL + '/training/index'
      }
    ]
  }
}
</script>
