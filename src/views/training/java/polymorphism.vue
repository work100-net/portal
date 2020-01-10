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
        <polymorphism_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import polymorphism_zh_CN from '@/assets/md/training/java/polymorphism_zh_CN.md'

export default {
  name: 'TrainingJavaPolymorphism',
  components: { Sticky, LeftMenu, polymorphism_zh_CN },
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
        content: '多态是同一个行为具有多个不同表现形式或形态的能力。'
      },
      {
        name: 'keywords',
        content: 'Java、多态、接口、对象、优点、必要条件、虚函数、重写、重载、例子、实现方式、抽象类、抽象方法'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-polymorphism.html'
      }
    ]
  }
}
</script>
