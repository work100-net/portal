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
        <email_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import email_zh_CN from '@/assets/md/training/java/email_zh_CN.md'

export default {
  name: 'TrainingJavaEmail',
  components: { Sticky, LeftMenu, email_zh_CN },
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
        content: '使用Java应用程序发送 E-mail 十分简单，但是首先你应该在你的机器上安装 JavaMail API 和Java Activation Framework (JAF) 。'
      },
      {
        name: 'keywords',
        content: 'Java、邮件收发、JavaMail、JAF、jar、mail、email、SMTP、服务器、客户端、实例、网络、链接、HTML、Text、内容、附件、用户认证、密码、SSL、加密'
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
        href: process.env.VUE_APP_WWW_URL + '/training/java-email.html'
      }
    ]
  }
}
</script>
