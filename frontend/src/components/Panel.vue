<template>
  <div>
    <div class="fly-panel fly-column">
      <div class="layui-container">
        <ul class="layui-clear">
          <router-link tag="li" to="/" class="layui-hide-xs">
            <a href="/">首页</a>
          </router-link>
          <router-link v-for="(item,index) in lists" :key="'panel'+index" tag="li" :to="item.path">
            <a href="jie/index.html">
              {{item.name}}
              <span class="layui-badge-dot" v-if="item.isTrue"></span>
            </a>
          </router-link>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
            <span class="fly-mid"></span>
          </li>

          <!-- 用户登入后显示 -->
          <template v-if="isLogin">
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <a href="user/index.html">我发表的贴</a>
            </li>
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <a href="user/index.html#collection">我收藏的贴</a>
            </li>
          </template>
        </ul>
        <div class="fly-column-right layui-hide-xs">
          <span class="fly-search">
            <i class="layui-icon"></i>
          </span>
          <a href="jie/add.html" class="layui-btn">发表新帖</a>
        </div>
        <div
          class="layui-hide-sm layui-show-xs-block"
          style="margin-top: -10px; padding-bottom: 10px; text-align: center;"
        >
          <a href="jie/add.html" class="layui-btn">发表新帖</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  data () {
    return {
      lists: [
        {
          name: '提问',
          path: '/index/ask',
          isTrue: false

        },
        {
          name: '分享',
          path: '/index/share',
          isTrue: true
        },
        {
          name: '讨论',
          path: '/index/advise',
          isTrue: false
        },
        {
          name: '修改',
          path: '/index/botice',
          isTrue: false
        },
        {
          name: '动态',
          path: '/index/logs',
          isTrue: false
        }
      ],
      isLogin: this.$store.state.isLogin
    }
  }
}
</script>

<style >
</style>
