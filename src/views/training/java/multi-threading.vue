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
        <multi_threading_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import multi_threading_zh_CN from '@/assets/md/training/java/multi_threading_zh_CN.md'

export default {
  name: 'TrainingJavaMultiThreading',
  components: { Sticky, LeftMenu, multi_threading_zh_CN },
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
        content: 'Java 给多线程编程提供了内置的支持。 一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。'
      },
      {
        name: 'keywords',
        content: 'Java、多线程、Threading、生命周期、过程、状态、新建、就绪、运行、阻塞、死亡、优先级、Runnable、run、start、继承、类、对象、方法、实例、Callable、Future、概念、对比、使用'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-multi-threading.html'
      }
    ]
  }
}
</script>
