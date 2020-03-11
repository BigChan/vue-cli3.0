<template>
  <div class="exception-layout__main">
    <div
      class="exception-layout__main-image"
      :style="{backgroundImage: `url(${sourceData.imageUrl})`}"
    ></div>
    <div>
      <div
        v-if="sourceData.type"
        class="exception-layout__main-num"
      >{{sourceData.type}}</div>
      <div
        v-if="sourceData.title"
        class="exception-layout__main-title"
      >{{sourceData.title}}</div>
      <div
        v-if="sourceData.desc"
        class="exception-layout__main-desc"
      >{{sourceData.desc}}</div>
      <div
        v-if="sourceData.showBackButton || sourceData.showHomeButton"
        class="exception-layout__main-buttons"
      >
        <a-button
          v-if="sourceData.showBackButton"
          class="exception-layout__main-button"
          type="primary"
          size="large"
          @click="$router.back()"
        >返回</a-button>
        <router-link
          class="exception-layout__main-button"
          to="/"
        >
          <a-button
            v-if="sourceData.showHomeButton"
            :type="sourceData.showBackButton ? '' : 'primary'"
            size="large"
          >返回首页</a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception',
  props: {
    sourceData: {
      type: Object,
      default() {
        return undefined;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.exception-layout {
  &__main {
    .flex-center;
    height: 100vh;
    color: @text-color;

    &-image {
      width: 360px;
      height: 360px;
      margin-right: 140px;
      background-size: 100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }

    &-num {
      font-size: 80px;
      line-height: 112px;
      font-weight: 600;
    }

    &-title {
      margin-top: @padding-md;
      .font-size-24;
      font-weight: 600;
    }

    &-desc {
      margin-top: @padding-md;
      .font-size-20;
      font-weight: 400;
    }

    &-buttons {
      margin-top: 24px;
    }

    &-button {
      & + & {
        margin-left: @padding-md;
      }
    }
  }
}
</style>
