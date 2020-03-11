import Vue from 'vue';
import VueArms from 'vue-arms';

const pid = process.env.VUE_APP_API_ARMS_PID;
const logger = new VueArms({
  pid,
  imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
  enableSPA: true,
  sendResource: true,
});

// 应用异常监控
Vue.use(logger);
