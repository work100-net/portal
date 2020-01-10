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
        <stream_file_io_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import stream_file_io_zh_CN from '@/assets/md/training/java/stream_file_io_zh_CN.md'

export default {
  name: 'TrainingJavaStreamFileIO',
  components: { Sticky, LeftMenu, stream_file_io_zh_CN },
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
        content: 'Java.io 包几乎包含了所有操作输入、输出需要的类。所有这些流类代表了输入源和输出目标。'
      },
      {
        name: 'keywords',
        content: 'Java、Stream、File、IO、类、流、输入、输出、控制台、读取、实例、读写文件、FileInputStream、FileOutputStream、文件、I/O、目录'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-stream-file-io.html'
      }
    ]
  }
}
</script>
