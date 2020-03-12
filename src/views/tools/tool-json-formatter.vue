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
            <LeftMenu />
          </div>
        </right-panel>
        <tool_json_formatter_zh_CN class="markdown-body" />

        <el-form label-position="top" style="padding-left: 15px;">
          <el-form-item label="输入数据">
            <el-input
              v-model="strJsonData"
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10}"
              clearable
              @input="handleJsonData"
            />
          </el-form-item>

          <el-form-item label="输出结果">
            <JsonViewer
              :value="jsonData"
              :expand-depth="5"
              copyable
              boxed
              sort
            />
          </el-form-item>

        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JsonViewer from 'vue-json-viewer'
import Sticky from '@/components/Sticky'
import LeftMenu from './components/LeftMenu'
import tool_json_formatter_zh_CN from '@/assets/md/tools/tool_json_formatter_zh_CN.md'
import RightPanel from '@/components/RightPanel'

const defaultJsonData = {
  total: 25,
  limit: 10,
  skip: 0,
  links: {
    previous: undefined,
    next: function() {
    }
  },
  data: [
    {
      id: '100001',
      firstname: 'Xiaojun',
      lastname: 'Liu',
      awards: null,
      known: [
        'mathematics',
        'computing'
      ],
      position: {
        lat: 44.563836,
        lng: 6.495139
      },
      description: '简介内容-xiaojun',
      bornAt: '1815-12-10T00:00:00.000Z',
      diedAt: '1852-11-27T00:00:00.000Z'
    }, {
      id: '100002',
      firstname: 'Grace',
      lastname: 'Hopper',
      awards: [
        'Defense Distinguished Service Medal',
        'Legion of Merit',
        'Meritorious Service Medal',
        'American Campaign Medal',
        'World War II Victory Medal',
        'National Defense Service Medal',
        'Armed Forces Reserve Medal',
        'Naval Reserve Medal',
        'Presidential Medal of Freedom'
      ],
      known: null,
      position: {
        lat: 43.614624,
        lng: 3.879995
      },
      description: '简介内容-Grace',
      bornAt: '1815-12-10T00:00:00.000Z',
      diedAt: '1852-11-27T00:00:00.000Z'
    }
  ]
}

export default {
  name: 'ToolsToolJsonFormatter',
  components: { RightPanel, JsonViewer, Sticky, LeftMenu, tool_json_formatter_zh_CN },
  data() {
    return {
      strJsonData: '',
      jsonData: {}
    }
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
        content: '格式化Json数据'
      },
      {
        name: 'keywords',
        content: 'Json、格式化、Formatter'
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
        href: process.env.VUE_APP_WWW_URL + '/tools/json-formatter'
      }
    ]
  },
  created() {
    this.strJsonData = JSON.stringify(defaultJsonData)
    this.jsonData = defaultJsonData
  },
  methods: {
    handleJsonData() {
      if (this.strJsonData === '') {
        this.jsonData = {}
      } else {
        this.jsonData = JSON.parse(this.strJsonData)
      }
    }
  }
}
</script>
