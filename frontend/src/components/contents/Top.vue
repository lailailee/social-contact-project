<template>
  <div class="fly-panel" v-show="lists.length>0">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #FF5722;"
      >去签到</a>
    </div>
    <ListItem :lists="lists" :isShow="false"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'top',
  components: {
    ListItem
  },
  data () {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      lists: [
        {
          uid: {
            name: 'lailailee',
            isVip: 1
          },
          title: '文章标题',
          content: '文章内容',
          created: '2019-10-01 01:00:00',
          catalog: 'ask',
          fav: 40,
          isEnd: 0,
          reads: 10,
          answer: 0,
          status: 0,
          isTop: 0,
          tags: [
            {
              name: '精华',
              class: 'layui-bg-red'
            },
            {
              name: '热门',
              class: 'layui-bg-blue'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
