import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home.html',
    hidden: true,
    children: [
      {
        path: 'home.html',
        component: () => import('@/views/pages/home'),
        name: 'Home',
        meta: { title: 'home' },
        hidden: true
      },
      // 关于我们
      {
        path: 'about.html',
        component: () => import('@/views/pages/about/index'),
        name: 'AboutIndex',
        meta: { title: 'about' },
        hidden: true
      },
      // 网站地图
      {
        path: 'site-map.html',
        component: () => import('@/views/pages/site-map'),
        name: 'SiteMap',
        meta: { title: 'siteMap' },
        hidden: true
      },
      // 用户协议
      {
        path: 'policy.html',
        component: () => import('@/views/pages/policy'),
        name: 'Policy',
        meta: { title: 'policy' },
        hidden: true
      },
      // 隐私政策
      {
        path: 'privacy.html',
        component: () => import('@/views/pages/privacy'),
        name: 'Privacy',
        meta: { title: 'privacy' },
        hidden: true
      }
    ]
  },

  // 产品与服务
  {
    path: '/productions',
    component: Layout,
    redirect: '/productions/cloud.html',
    meta: { title: 'productions' },
    children: [
      {
        path: 'cloud.html',
        component: () => import('@/views/pages/productions/cloud'),
        name: 'ProductionsCloud',
        meta: { title: 'productionsCloud' }
      },
      {
        path: 'open-source.html',
        component: () => import('@/views/pages/productions/open-source'),
        name: 'ProductionsOpenSource',
        meta: { title: 'productionsOpenSource' }
      },
      {
        path: 'services.html',
        component: () => import('@/views/pages/productions/services'),
        name: 'ProductionsServices',
        meta: { title: 'productionsServices' }
      }
    ]
  },

  // 解决方案
  {
    path: '/solutions',
    component: Layout,
    redirect: '/solutions/index.html',
    meta: { title: 'solutions' },
    children: [
      {
        path: 'index.html',
        component: () => import('@/views/pages/solutions/index'),
        name: 'SolutionsIndex',
        meta: { title: 'solutionsIndex' }
      }
    ]
  },

  // 免费课程
  {
    path: '/training',
    component: Layout,
    redirect: '/training/java',
    meta: { title: 'training' },
    children: [
      // Java
      {
        path: 'java',
        component: () => import('@/views/training/java/index'),
        name: 'TrainingJava',
        meta: { title: 'trainingJava' }
      },
      // Java 语言基础
      {
        path: 'java-intro.html',
        component: () => import('@/views/training/java/intro'),
        name: 'TrainingJavaIntro',
        meta: { title: 'trainingJavaIntro', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-environment-setup.html',
        component: () => import('@/views/training/java/environment-setup'),
        name: 'TrainingJavaEnvironmentSetup',
        meta: { title: 'trainingJavaEnvironmentSetup', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-basic-syntax.html',
        component: () => import('@/views/training/java/basic-syntax'),
        name: 'TrainingJavaBasicSyntax',
        meta: { title: 'trainingJavaBasicSyntax', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-object-class.html',
        component: () => import('@/views/training/java/object-class'),
        name: 'TrainingJavaObjectClass',
        meta: { title: 'trainingJavaObjectClass', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-basic-datatype.html',
        component: () => import('@/views/training/java/basic-datatype'),
        name: 'TrainingJavaBasicDatatype',
        meta: { title: 'trainingJavaBasicDatatype', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-variable-type.html',
        component: () => import('@/views/training/java/variable-type'),
        name: 'TrainingJavaVariableType',
        meta: { title: 'trainingJavaVariableType', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-modifier-type.html',
        component: () => import('@/views/training/java/modifier-type'),
        name: 'TrainingJavaModifierType',
        meta: { title: 'trainingJavaModifierType', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-operator.html',
        component: () => import('@/views/training/java/operator'),
        name: 'TrainingJavaOperator',
        meta: { title: 'trainingJavaOperator', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-loop.html',
        component: () => import('@/views/training/java/loop'),
        name: 'TrainingJavaLoop.html',
        meta: { title: 'trainingJavaLoop', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-if-else.html',
        component: () => import('@/views/training/java/if-else'),
        name: 'TrainingJavaIfElse',
        meta: { title: 'trainingJavaIfElse', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-switch-case.html',
        component: () => import('@/views/training/java/switch-case'),
        name: 'TrainingJavaSwitchCase',
        meta: { title: 'trainingJavaSwitchCase', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-number-math.html',
        component: () => import('@/views/training/java/number-math'),
        name: 'TrainingJavaNumberMath',
        meta: { title: 'trainingJavaNumberMath', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-character.html',
        component: () => import('@/views/training/java/character'),
        name: 'TrainingJavaCharacter',
        meta: { title: 'trainingJavaCharacter', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-string.html',
        component: () => import('@/views/training/java/string'),
        name: 'TrainingJavaString',
        meta: { title: 'trainingJavaString', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-stringbuffer.html',
        component: () => import('@/views/training/java/stringbuffer'),
        name: 'TrainingJavaStringBuffer',
        meta: { title: 'trainingJavaStringBuffer', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-array.html',
        component: () => import('@/views/training/java/array'),
        name: 'TrainingJavaArray',
        meta: { title: 'trainingJavaArray', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-date-time.html',
        component: () => import('@/views/training/java/date-time'),
        name: 'TrainingJavaDateTime',
        meta: { title: 'trainingJavaDateTime', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-regular-expression.html',
        component: () => import('@/views/training/java/regular-expression'),
        name: 'TrainingJavaRegularExpression',
        meta: { title: 'trainingJavaRegularExpression', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-method.html',
        component: () => import('@/views/training/java/method'),
        name: 'TrainingJavaMethod',
        meta: { title: 'trainingJavaMethod', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-stream-file-io.html',
        component: () => import('@/views/training/java/stream-file-io'),
        name: 'TrainingJavaStreamFileIO',
        meta: { title: 'trainingJavaStreamFileIO', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-scanner.html',
        component: () => import('@/views/training/java/scanner'),
        name: 'TrainingJavaScanner',
        meta: { title: 'trainingJavaScanner', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-exception.html',
        component: () => import('@/views/training/java/exception'),
        name: 'TrainingJavaException',
        meta: { title: 'trainingJavaException', activeMenu: '/training/java' },
        hidden: true
      },
      // Java 面向对象
      {
        path: 'java-inheritance.html',
        component: () => import('@/views/training/java/inheritance'),
        name: 'TrainingJavaInheritance',
        meta: { title: 'trainingJavaInheritance', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-override-overload.html',
        component: () => import('@/views/training/java/override-overload'),
        name: 'TrainingJavaOverrideOverload',
        meta: { title: 'trainingJavaOverrideOverload', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-polymorphism.html',
        component: () => import('@/views/training/java/polymorphism'),
        name: 'TrainingJavaPolymorphism',
        meta: { title: 'trainingJavaPolymorphism', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-abstract.html',
        component: () => import('@/views/training/java/abstract'),
        name: 'TrainingJavaAbstract',
        meta: { title: 'trainingJavaAbstract', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-encapsulation.html',
        component: () => import('@/views/training/java/encapsulation'),
        name: 'TrainingJavaEncapsulation',
        meta: { title: 'trainingJavaEncapsulation', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-interface.html',
        component: () => import('@/views/training/java/interface'),
        name: 'TrainingJavaInterface',
        meta: { title: 'trainingJavaInterface', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-package.html',
        component: () => import('@/views/training/java/package'),
        name: 'TrainingJavaPackage',
        meta: { title: 'trainingJavaPackage', activeMenu: '/training/java' },
        hidden: true
      },
      // Java 高级教程
      {
        path: 'java-data-structure.html',
        component: () => import('@/views/training/java/data-structure'),
        name: 'TrainingJavaDataStructure',
        meta: { title: 'trainingJavaDataStructure', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-collection.html',
        component: () => import('@/views/training/java/collection'),
        name: 'TrainingJavaCollection',
        meta: { title: 'trainingJavaCollection', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-generic.html',
        component: () => import('@/views/training/java/generic'),
        name: 'TrainingJavaGeneric',
        meta: { title: 'trainingJavaGeneric', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-serialization.html',
        component: () => import('@/views/training/java/serialization'),
        name: 'TrainingJavaSerialization',
        meta: { title: 'trainingJavaSerialization', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-networking.html',
        component: () => import('@/views/training/java/networking'),
        name: 'TrainingJavaNetworking',
        meta: { title: 'trainingJavaNetworking', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-email.html',
        component: () => import('@/views/training/java/email'),
        name: 'TrainingJavaEmail',
        meta: { title: 'trainingJavaEmail', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-multi-threading.html',
        component: () => import('@/views/training/java/multi-threading'),
        name: 'TrainingJavaMultiThreading',
        meta: { title: 'trainingJavaMultiThreading', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-applet.html',
        component: () => import('@/views/training/java/applet'),
        name: 'TrainingJavaApplet',
        meta: { title: 'trainingJavaApplet', activeMenu: '/training/java' },
        hidden: true
      },
      {
        path: 'java-documentation.html',
        component: () => import('@/views/training/java/documentation'),
        name: 'TrainingJavaDocumentation',
        meta: { title: 'trainingJavaDocumentation', activeMenu: '/training/java' },
        hidden: true
      },
      // 微服务
      {
        path: 'micro-services',
        component: () => import('@/views/training/micro-services/index'),
        name: 'TrainingMicroServices',
        meta: { title: 'trainingMicroServices' }
      }
    ]
  },

  // 常用工具
  {
    path: '/tools',
    component: Layout,
    redirect: '/tools/code.html',
    meta: { title: 'tools' },
    children: [
      // Code
      {
        path: 'code.html',
        component: () => import('@/views/tools/code'),
        name: 'ToolsCode',
        meta: { title: 'toolsCode' }
      },
      // json-formatter
      {
        path: 'json-formatter.html',
        component: () => import('@/views/tools/json-formatter'),
        name: 'ToolsJsonFormatter',
        meta: { title: 'toolsJsonFormatter' }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
