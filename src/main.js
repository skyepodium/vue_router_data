import Vue from 'vue'
import App from './App.vue'

import { router } from '@/router/index.js'

Vue.config.productionTip = false

// Vue 인스턴스 생성
const VueInstance = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// 생성된 VueInstance를 윈도우 객체에 할당
// (실제로 환경에서는 이렇게 하시면 안되요. 데이터 보기위해서 진행했습니다.)
window.VueInstance = VueInstance