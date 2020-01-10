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
        <policy_zh_CN class="markdown-body" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu_policy'
import policy_zh_CN from '@/assets/md/pages/policy_zh_CN.md'

export default {
  name: 'Policy',
  components: {
    Sticky,
    LeftMenu,
    policy_zh_CN
  },
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
        content: '本协议是您与光束云或其第三方供应商或许可方提供的服务及任何相关软件或文档（以下统称为“服务”）达成的合意。在注册之前，请您仔细阅读本协议中各条款，包括免除或者限制光束云责任的免责条款、限制用户权利的条款等。如果您同意本协议，您将成为“光束云”的会员，并有权使用“光束云”的相关服务；如果您不同意本协议内容，可选择不接受本协议，或者不注册、访问、使用本服务。'
      },
      {
        name: 'keywords',
        content: '注册,服务内容,使用规则,用户保证,版权声明,承诺及责任,隐私,数据访问,责任限制,协议修改,附则'
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
        href: process.env.VUE_APP_WWW_URL + '/policy'
      }
    ]
  }
}
</script>
