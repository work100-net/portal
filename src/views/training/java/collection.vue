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
        <collection_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import collection_zh_CN from '@/assets/md/training/java/collection_zh_CN.md'

export default {
  name: 'TrainingJavaCollection',
  components: { Sticky, LeftMenu, collection_zh_CN },
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
        content: 'Java集合框架，早在 Java 2 中之前，Java 就提供了特设类。比如：Dictionary, Vector, Stack, 和 Properties 这些类用来存储和操作对象组。'
      },
      {
        name: 'keywords',
        content: 'Java、集合、Collection、Dictionary、Vector、Stack、Properties、接口、类、List、Set、SortedSet、Map、Map.Entry、SortedMap、Enumeration、区别、实现、算法、迭代器、遍历实例、解析、比较器、总结'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-collection.html'
      }
    ]
  }
}
</script>
