## 数据结构
```javascript
interface Meta {
  title: string;
  icon: string;
  keepAlive: boolean;
  authorities: string[];
  [key: string]: any;
}

interface RouterItem {
  path: string;
  name: string;
  redirect: string;         // 如设置为true时，则权限路由则指向拥有权限的第一个子路由
  component: Vue.VNode;
  hideChildrenInMenu: boolean;
  hideInMenu: boolean;
  meta: Meta;
  children: RouterItem[];
  [key: string]: any;
}
```
