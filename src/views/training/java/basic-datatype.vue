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
        <basic_datatype_zh_CN class="markdown-body" />
        <follow_me_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import basic_datatype_zh_CN from '@/assets/md/training/java/basic_datatype_zh_CN.md'
import follow_me_zh_CN from '@/assets/md/about/follow_me_zh_CN.md'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'TrainingJavaDataType',
  components: { RightPanel, Sticky, LeftMenu, basic_datatype_zh_CN, follow_me_zh_CN },
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
        content: '基本数据类型：通过定义不同类型的变量，可以在内存中储存整数、小数或者字符。Java 的两大数据类型:内置数据类型、引用数据类型'
      },
      {
        name: 'keywords',
        content: 'Java、数据类型、内置数据类型、引用数据类型、byte、short、int、long、float、double、boolean、char、实例、默认值、常量、类型转换、自动、强制、隐含强制'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-basic-datatype.html'
      }
    ]
  }
}
</script>
