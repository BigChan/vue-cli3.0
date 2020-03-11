## 编写规范
- 整体目录机构
  ```
  .
  └── store
       ├── modules               // vuex模块
       │   ├── app               // 复杂模块
       │   │   ├── state.js
       │   │   ├── getters.js
       │   │   ├── mutations.js
       │   │   ├── actions.js
       │   │   └── index.js
       │   ├── permission.js     // 简单模块
       │   └── user.js           // 简单模块
       ├── getters.js            // 根级别的 getter
       ├── types.js              // mutation类型
       └── index.js              // 组装模块并导出 store 的地方
  ```
- 编写风格
  ```javascript
    // 简单模块
    const state = {}
    const getter = {}
    const mutations = {}
    const actions = {}

    export default {
      state,
      getter,
      mutations,
      actions
    }

    // 复杂模块index.js
    import state from './state'
    import getter from './getter'
    import mutations from './mutations'
    import actions from './actions'

    export default {
      state,
      getter,
      mutations,
      actions
    }

    // types.js
    export const SIDEBAR_TYPE = 'SIDEBAR_TYPE'

    export const CONTENT_WIDTH_TYPE = {
      FLUID: 'FLUID',
      FIXED: 'FIXED'
    }
  ```
- mutations方法名使用常量命名
  ```javascript
    const mutations = {
      SET_TOKEN (state, token) {
        state.token = token
      },
      SET_USER_INFO (state, { name, avatar }) {
        state.name = name
        state.avatar = avatar
      }
    }
  ```
- actions方法名使用小驼峰命名
  ```javascript
    const actions = {
      getUserInfo ({ commit }) {
        const name = '云'
        const avatar = 'http://xxx/xxx.png'
        commit('SET_USER_INFO', { name, avatar })
      }
    }
  ```
