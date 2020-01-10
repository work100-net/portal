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
        <modifier_type_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import modifier_type_zh_CN from '@/assets/md/training/java/modifier_type_zh_CN.md'

export default {
  name: 'TrainingJavaModifierType',
  components: { Sticky, LeftMenu, modifier_type_zh_CN },
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
        content: '修饰符：Java语言提供了很多修饰符，主要分为以下两类：访问修饰符、非访问修饰符'
      },
      {
        name: 'keywords',
        content: 'Java、修饰符、default、private、public、protected、访问控制、继承、static、final、abstract、synchronized、transient、volatile'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-modifier-type.html'
      }
    ]
  }
}
</script>
