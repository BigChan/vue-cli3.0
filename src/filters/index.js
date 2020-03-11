import Vue from 'vue';
import moment from 'moment';

/**
 * 格式化日期时间
 * @param {Date|String|Object} value 日期时间值
 * @param {String} pattern 日期时间格式
 */
Vue.filter('moment', (value, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(value).format(pattern));
