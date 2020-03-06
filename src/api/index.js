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
      to: '/'
    },
    {
      imgUrl: grid9Icon3,
      title: '商品购买',
      to: '/'
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

// 其他api...