import Post from '@/model/Post'
import Links from '@/model/Links'

class ContentController {
  async getPostList (ctx) {
    // 测试接口
    // const post = new Post({
    //   title: 'wode1',
    //   content: '22',
    //   catalog: 'advise',
    //   fav: 20,
    //   isEnd: '0',
    //   reads: '0',
    //   answer: '0',
    //   status: '0',
    //   isTop: '1',
    //   sort: '0',
    //   tags: [
    //     {
    //       name: '精华',
    //       class: ''
    //     }
    //   ]
    // })
    // const tmp = await post.save()
    const body = ctx.query
    const sort = body.sort ? body.sort : 'created'
    const page = body.page ? parseInt(body.page) : 0
    const limit = body.limit ? parseInt(body.limit) : 20
    const options = {}
    if (typeof body.catalog !== 'undefined' && body.catalog !== '') {
      options.catalog = body.catalog
    }
    if (typeof body.isTop !== 'undefined') {
      options.isTop = body.isTop
    }
    if (typeof body.status !== 'undefined' && body.status !== '') {
      options.status = body.status
    }

    if (typeof body.tag !== 'undefined' && body.tag !== '') {
      options.tag = { $elemMatch: { name: body.tag } }
    }
    try {
      const result = await Post.getList(options, sort, page, limit)
      ctx.body = {
        code: 200,
        data: result,
        msg: '获取文章列表信息'
      }
    } catch (e) {
      console.log(e)
    }
  }

  // 查询友链
  async getLinks (ctx) {
    const result = await Links.find({ type: 'links' })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 查询温馨提示
  async getTips (ctx) {
    const result = await Links.find({ type: 'tips' })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 查询温馨提示
  async getTopWeek (ctx) {
    const result = await Post.getTopWeek()
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new ContentController()
