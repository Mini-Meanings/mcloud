
//mtp:'http://123.58.34.241:18092'
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  authority: true,//强制鉴权(方便开发阶段测试，不会出现没有路由的情况)
  //需包含的模块，优先级高于moduleFilter.  统一控制台子系统需包含index,login和management三个模块
  moduleContainer:['./src/module/mcloud','./src/module/login','./src/module/management'],
  moduleFilter:[],
  urlNoAuthority:['/websiteinfo/contactus', '/websiteinfo/privatepolicy','/websiteinfo/serviceterm','/websiteinfo/faq'],
  api: {
    login:{
      host: 'http://123.58.34.245:9000'
    },
    socket:{
      // host: 'http://123.58.34.241:18093'
      host: 'http://202.104.112.244:18093'
    },
    ustack:{
      url: 'http://123.58.34.247:8081/auth-iframe'
    },
    manaement: {
      // host: 'http://123.58.34.241:18092'
      host: 'http://202.104.112.244:18092',
    },
    monitor:{
      // host: 'http://123.58.34.241:8000'
      host: 'http://123.58.34.246:9527'
    },
    objectStore: {
      appid:'4a0f0d9f2e414046b686be72b0d8169d',
      uploadHost: 'http://123.58.34.246:9527',
      appmanager: 'http://123.58.34.246:9527',
      mcloud: 'http://123.58.34.246:9527'
    },
    video: {
      uploadHost: 'http://123.58.34.246:9527',
      appmanager: 'http://123.58.34.246:9527',
      authen: 'http://123.58.34.246:9527',
      videoplay: 'http://123.58.34.246:9527'
    },
    search: {
      host:'http://10.16.75.91:12109',
      push:'http://10.16.75.91:10218',
      search:'http://10.16.75.91:10322'
    },
    database:{
      host:'http://123.58.34.247:8085'
    },
    market: {
      host:'http://172.20.32.159',
      mtp:'http://202.104.112.244:18092'
    }
  },
  url:{
    pin_code_url:'http://c4adev.midea.com/servlet/pinServlet.png'
  }
});
