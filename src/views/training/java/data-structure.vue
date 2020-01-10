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
        <data_structure_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import data_structure_zh_CN from '@/assets/md/training/java/data_structure_zh_CN.md'

export default {
  name: 'TrainingJavaDataSturcture',
  components: { Sticky, LeftMenu, data_structure_zh_CN },
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
        content: 'Java工具包提供了强大的数据结构。在Java中的数据结构主要包括以下几种接口和类：枚举、位集合、向量、栈、字典、哈希表、属性'
      },
      {
        name: 'keywords',
        content: 'Java、数据结构、枚举、位集合、向量、栈、字典、哈希表、属性、Enumeration、BitSet、Vector、Stack、Dictionary、Hashtable、Properties'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-data-structure.html'
      }
    ]
  }
}
</script>
