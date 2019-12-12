<template>
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a :class="{'layui-this':status===''&&tag===''}" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this':status==='0'}" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this':status==='1'}" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this':status===''&&tag==='精华'}" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{'layui-this':sort==='created'}" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this':sort==='answer'}" @click.prevent="search(4)">按热议</a>
      </span>
    </div>
    <ListItem :lists="lists" @nextPage="nextPage()" :isEnd="isEnd"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { getList } from '@/api/content'

export default {
  name: 'list',
  data () {
    return {
      isEnd: false,
      current: '',
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 21,
      catalog: '',
      lists: []
    }
  },
  components: {
    ListItem
  },
  watch: {
    current (newVal, odlVal) {
      this.page = 0
      this.lists = []
      this.isEnd = false
      this._getList()
      this.init()
    },
    '$route' (newVal, odlVal) {
      let catalog = this.$route.params['catalog']
      if (typeof catalog !== 'undefined' && catalog !== '') {
        this.catalog = catalog
      }
      this.init()
    }
  },
  mounted () {
    let catalog = this.$route.params['catalog']
    if (typeof catalog !== 'undefined' && catalog !== '') {
      this.catalog = catalog
    }
    this._getList()
  },
  methods: {
    init () {
      this.page = 0
      this.lists = []
      this.isEnd = false
      this._getList()
    },
    _getList () {
      if (this.isEnd) return
      let options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        tag: this.tag,
        sort: this.sort
      }
      getList(options).then(res => {
        console.log(res)
        // 加入请求锁
        // this.lists = res.data
        // 对于异常的判断 res.code 非200,我们给用户一个提示
        // 判断lists长度是否为0,如果为0可以直接覆盖
        // 当list的长度不为0,后面请求的数据直接加入到lists
        if (res.code === 200) {
          if (this.lists.length < this.limit) {
            this.isEnd = true
          }
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
      }).catch(err => {
        if (err) {
          this.$alert(err.message)
        }
      })
    },
    nextPage () {
      this.page++
      this._getList()
    },
    search (val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      console.log(val)
      switch (val) {
        case 0 :
          this.status = '0'
          this.tag = ''
          break
        case 1 :
          this.status = '1'
          this.tag = ''
          break
        case 2 :
          this.status = ''
          this.tag = '精华'
          break
        case 3 :
          this.sort = 'created'
          break
        case 4 :
          this.sort = 'answer'
          break
        default :
          this.status = ''
          this.tag = ''
          this.current = ''
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
