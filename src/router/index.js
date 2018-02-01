import Vue from 'vue'
import Router from 'vue-router'
import Manager from '../views/Manager.vue'
import Home from '../views/Home/Home.vue'

const ProductDetail = () => import('../views/product/ProductDetail.vue')

const ECS = () => import('../views/components/net/ECS')
const VDC = () => import('../views/components/net/VDC')
const SLB = () => import('../views/components/net/SLB')

const VHD = () => import('../views/components/DATEBASE/VHD')
const RDS = () => import('../views/components/DATEBASE/RDS')
const OCS = () => import('../views/components/DATEBASE/OCS')
const OSS = () => import('../views/components/DATEBASE/OSS')

const IOT = () => import('../views/components/plat/IOT')
const Inspace = () => import('../views/components/plat/Inspace')
const ESB = () => import('../views/components/plat/ESB')
const MVoD = () => import('../views/components/plat/MVoD')
const MS = () => import('../views/components/plat/MS')
const MAE = () => import('../views/components/plat/MAE')
const MCD = () => import('../views/components/plat/MCD')
const MD = () => import('../views/components/plat/MD')
const MPS = () => import('../views/components/plat/MPS')

const MFR = () => import('../views/components/Intelligence/MFR')
const MIR = () => import('../views/components/Intelligence/MIR')
const OCR = () => import('../views/components/Intelligence/OCR')
const AIP = () => import('../views/components/Intelligence/AIP')
const IRT = () => import('../views/components/Intelligence/IRT')

const CMS = () => import('../views/components/safe/CMS')

const about = () => import('../views/components/aboutmcloud/about')
const history = () => import('../views/components/aboutmcloud/history')
const contact = () => import('../views/components/aboutmcloud/contact')
const join = () => import('../views/components/aboutmcloud/join')

const PrivatePolicy = () => import('../views/components/superlinks/PrivatePolicy')
const ServiceTerm = () => import('../views/components/superlinks/ServiceTerm')

const error = () => import('../views/components/aboutmcloud/error')

let routes = [
  {
	path:'/',
	redirect:'/home'
  },{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
  },{
    path:'/home',
    component: Manager,
    name: '首页',
    children:[
      {
        path: '/home',
        name: '主页',
        component: Home,
      },
      {
        path: '/404',
        name:'404',
        component: error
      },
      {
            path: '/mcloud/productdetail/net/ECS',
            name: "计算机与网络",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/net/ECS',
                    name:'云主机（ECS)',
                    component: ECS
                  },
                  {
                    path:'/mcloud/productdetail/net/VDC',
                    name:'虚拟网络（VDC)',
                    component: VDC
                  },
                  {
                    path:'/mcloud/productdetail/net/SLB',
                    name:'负载均衡（SLB)',
                    component: SLB
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/database/VHD',
            name: "存储与数据库",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/database/VHD',
                    name:'云硬盘（VHD)',
                    component: VHD
                  },
                  {
                    path:'/mcloud/productdetail/database/RDS',
                    name:'云数据库（RDS)',
                    component: RDS
                  },
                  {
                    path:'/mcloud/productdetail/database/OCS',
                    name:'云缓存（OCS)',
                    component: OCS
                  },
                  {
                    path:'/mcloud/productdetail/database/OSS',
                    name:'对象存储（OSS)',
                    component: OSS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/plat/IOT',
            name: "平台服务",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/plat/IOT',
                    name:'物联网平台（IOT）',
                    component: IOT
                  },
                  {
                    path:'/mcloud/productdetail/plat/Inspace',
                    name:'工业云平台（Inspace）',
                    component: Inspace
                  },
                  {
                    path:'/mcloud/productdetail/plat/ESB',
                    name:'ESB',
                    component: ESB
                  },
                  {
                    path:'/mcloud/productdetail/plat/MVoD',
                    name:'视频点播（MVoD）',
                    component: MVoD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MS',
                    name:'美易搜（MS）',
                    component: MS
                  },
                  {
                    path:'/mcloud/productdetail/plat/MAE',
                    name:'应用引擎（MAE）',
                    component: MAE
                  },
                  {
                    path:'/mcloud/productdetail/plat/MCD',
                    name:'美的云网盘（MCD）',
                    component: MCD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MD',
                    name:'数传通道（MD）',
                    component: MD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MPS',
                    name:'推送服务（MPS）',
                    component: MPS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/Intelligence/MFR',
            name: "人工智能",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/Intelligence/MFR',
                    name:'人脸识别（MFR）',
                    component: MFR
                  },
                  {
                    path:'/mcloud/productdetail/Intelligence/MIR',
                    name:'图像识别（MIR）',
                    component: MIR
                  },
                  {
                    path:'/mcloud/productdetail/Intelligence/OCR',
                    name:'字符识别（OCR）',
                    component: OCR
                  },
                  {
                    path:'/mcloud/productdetail/Intelligence/AIP',
                    name:'机器学习平台（AIP）',
                    component: AIP
                  },
                  {
                    path:'/mcloud/productdetail/Intelligence/IRT',
                    name:'智能推荐系统（IRT)',
                    component: IRT
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/safe/CMS',
            name: "安全与运维",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/safe/CMS',
                    name:'云监控（CMS）',
                    component: CMS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/about',
            name: "关于美的云",
            component: ProductDetail,
            children:[
              {
                path: '/mcloud/productdetail/about',
                name:'关于我们',
                component: about
              },{
                    path: '/mcloud/productdetail/history',
                    name:'发展历程',
                    component: history
              },
              {
                    path: '/mcloud/productdetail/contact',
                    name:'联系我们',
                    component: contact
              },{
                    path: '/mcloud/productdetail/join',
                    name:'加入我们',
                    component: join
              }
            ]
      },{
            path: '/websiteinfo/privatepolicy',
            component: PrivatePolicy
      },{
            path: '/websiteinfo/serviceterm',
            component: ServiceTerm
      }
    ]
  }
]

Vue.use(Router)

export default new Router({
  routes
})
