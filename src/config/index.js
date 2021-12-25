/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  dev:{
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  },
  test:{
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  },
  prod:{
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/3a3dc69a122d6dec10c1ebfd645364b9/vue'
  }
}

export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env],
}