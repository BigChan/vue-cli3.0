import store from '@/store';

// 拥有角色
export function hasRole(role) {
  const roles = store.roles || [];
  let roleKeys = role || [];
  if (typeof role === 'string') {
    roleKeys = [role];
  }
  return roleKeys.some(item => roles.includes(item));
}

// 拥有权限
export function hasAuth(authority) {
  const authorities = store.state.authorities || [];
  let authorityKeys = authority || [];
  if (typeof authority === 'string') {
    authorityKeys = [authority];
  }
  return authorityKeys.some(item => authorities.includes(item));
}

// 判断是否路由有权限
export function hasRouteAuth(route) {
  if (route.meta && route.meta.authorities) {
    return hasAuth(route.meta.authorities);
  }
  return true;
}

// 过滤路由权限
export function filterAsyncRouter(routes) {
  const accessedRoutes = [];
  routes.forEach((item) => {
    const route = item;
    if (hasRouteAuth(route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children);
      }
      accessedRoutes.push(route);
    }
  });
  return accessedRoutes;
}

// 父路由重定向至第一个子路由
export function redirectToFirstChild(routes) {
  const accessedRoutes = [];
  routes.forEach((item) => {
    const route = item;
    if (route.children && route.children.length) {
      if (route.redirect) {
        route.redirect = route.children[0].path;
      }
      route.children = redirectToFirstChild(route.children);
    }
    accessedRoutes.push(item);
  });
  return accessedRoutes;
}

// 获取权限路由
export function getAuthRoutes(routes) {
  return redirectToFirstChild(filterAsyncRouter(routes));
}
