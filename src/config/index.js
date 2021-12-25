/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  dev:{
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  },
  test:{
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  },
  prod:{
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  }
}

export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env],
}