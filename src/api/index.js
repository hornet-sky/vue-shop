import ajax from './ajax'
import grid9Icon1 from '../images/grid-9/1.png'
import grid9Icon2 from '../images/grid-9/2.png'
import grid9Icon3 from '../images/grid-9/3.png'
import grid9Icon4 from '../images/grid-9/4.png'
import grid9Icon5 from '../images/grid-9/5.png'
import grid9Icon6 from '../images/grid-9/6.png'
import Vue from 'vue'

Vue.http.options.root = 'http://117.50.59.108/ucsys';
// Vue.http.headers.common['Authorization'] = 'Bearer accesstoken'
const resourceBaseUrl = 'http://117.50.59.108/ucsys/static';
export const reqSwipes = (n = 999) => {
  const url = 'enterprise_admin/api/v1/app_management/banners/list'
  const method = "POST"
  return new Promise((resolve, reject) => {
    ajax(url, { page_number: 0, page_size: n, enterprise_id: '1' }, method)
      .then(data => {
        const urls = data.list.map(item => {
          return resourceBaseUrl + "/" + item.image_url
        })
        resolve(urls)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const reqGrid9MenuItems = () => {
  // 模拟从服务器端获取数据
  const fakeData = [
    {
      imgUrl: grid9Icon1,
      title: '新闻资讯',
      to: '/news'
    },
    {
      imgUrl: grid9Icon2,
      title: '图片分享',
      to: '/photo_sharing'
    },
    {
      imgUrl: grid9Icon3,
      title: '商品购买',
      to: '/goods_list'
    },
    {
      imgUrl: grid9Icon4,
      title: '留言反馈',
      to: '/'
    },
    {
      imgUrl: grid9Icon5,
      title: '视频专区',
      to: '/'
    },
    {
      imgUrl: grid9Icon6,
      title: '联系我们',
      to: '/'
    }
  ]
  return Promise.resolve(fakeData)
}

export const reqNewsList = (pageNum, pageSize) => {
  const url = 'news_list'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { page_number: pageNum, page_size: pageSize }, method)
      .then(data => {
        const start = pageNum * pageSize
        const end = start + pageSize
        const newsList = data.slice(start, end)
        resolve(newsList)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqNewsDetail = (newsId) => {
  const url = 'news_detail'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { news_id: newsId }, method)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqNewsComments = (newsId, pageNum, pageSize) => {
  const url = 'news_comments'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { news_id: newsId, page_number: pageNum, page_size: pageSize }, method)
      .then(data => {
        const start = pageNum * pageSize
        const end = start + pageSize
        const commentList = data.slice(start, end)
        resolve(commentList)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqNewsCommentAdd = (newsId, comment) => {
  const url = 'news_comment_add'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { news_id: newsId, comment: comment }, method)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqPhotoSharingTopTabs = () => {
  const url = 'photo_sharing_top_tabs'
  const method = "POST"
  return new Promise((resolve, reject) => {
    ajax(url, {}, method)
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      console.log('error', error)
      reject(error)
    })
  })
}

export const reqPhotoSharingItems = (tabId) => {
  const url = 'photo_sharing_items'
  const method = "POST"
  return new Promise((resolve, reject) => {
    ajax(url, {tab_id: tabId}, method)
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      console.log('error', error)
      reject(error)
    })
  })
}

export const reqPhotoSharingDetail = (photoItemId) => {
  const url = 'photo_sharing_detail'
  const method = "POST"
  return new Promise((resolve, reject) => {
    ajax(url, {photo_item_id: photoItemId}, method)
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      console.log('error', error)
      reject(error)
    })
  })
}

export const reqPhotoSharingComments = (detailId, pageNum, pageSize) => {
  const url = 'photo_sharing_comments'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { detail_id: detailId, page_number: pageNum, page_size: pageSize }, method)
      .then(data => {
        const start = pageNum * pageSize
        const end = start + pageSize
        const commentList = data.slice(start, end)
        resolve(commentList)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqPhotoSharingCommentAdd = (detailId, comment) => {
  const url = 'photo_sharing_comment_add'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { detail_id: detailId, comment: comment }, method)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqGoodsList = (pageNum, pageSize) => {
  const url = 'goods_list'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { page_number: pageNum, page_size: pageSize }, method)
      .then(data => {
        const start = pageNum * pageSize
        const end = start + pageSize
        const goodsList = data.slice(start, end)
        resolve(goodsList)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqGoodsDetail = (goodsId) => {
  const url = 'goods_detail'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { goods_id: goodsId }, method)
      .then(goodsDetail => {
        resolve(goodsDetail)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 1000)
  })
}

export const reqGoodsComments = (goodsId, pageNum, pageSize) => {
  const url = 'goods_comments'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { goods_id: goodsId, page_number: pageNum, page_size: pageSize }, method)
      .then(data => {
        const start = pageNum * pageSize
        const end = start + pageSize
        const commentList = data.slice(start, end)
        resolve(commentList)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 500)
  })
}

export const reqGoodsCommentAdd = (goodsId, comment) => {
  const url = 'goods_comment_add'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { goods_id: goodsId, comment: comment }, method)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      })
    }, 500)
  })
}

export const reqGoodsIntroduction = (goodsId) => {
  const url = 'goods_introduction'
  const method = "POST"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ajax(url, { goods_id: goodsId }, method)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
    }, 500)
  })
}
// 其他api...