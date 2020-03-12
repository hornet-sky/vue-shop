import data from './data'
import Mock from 'mockjs'

Mock.mock(/\/news_list(?:\?.*)*/, {result: 'ok', data: data.news_list})
Mock.mock(/\/news_comments(?:\?.*)*/, {result: 'ok', data: data.comment_list})
Mock.mock(/\/news_comment_add(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const newsId = params.news_id
  const comment = params.comment
  console.log('params', params)
  // 假设已经存储到数据库中 并生成了ID
  const id = String(Date.now())
  comment.id = id.substring(id.length - 4)
  return {result: 'ok', data: comment} // 返回带ID的评论
})

Mock.mock(/\/news_detail(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const newsId = params.news_id
  console.log('news_id', newsId)
  // 下面的逻辑只是为了造假详情，没有实际意义
  const list = data.news_list
  let news = null;
  let newsDetail = null;
  for(let i = 0, len = list.length; i < len; i++) {
    news = list[i]
    if(news.id == newsId) {
      newsDetail = news
    }
  }
  console.log('newsDetail', newsDetail)
  if(!newsDetail) {
    return {result: 'error', error: 'news_detail_not_found', error_description: `未找到id为${newsId}的新闻详情`}
  }
  newsDetail.detail = `
  来源：新浪科技

  <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583516578605&di=c15c56f2d47fe0a1d3c592e072896ea9&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F00831yn4ly1gckeqco0joj30fa0fat98.jpg'>

新浪科技讯 北京时间3月6日早间消息，据国外媒体报道，《纽约时报》近日对苹果公司联合创始人史蒂夫·乔布斯（Steve Jobs）遗孀劳伦·鲍威尔·乔布斯（Laurene Powell Jobs）进行了专访。

劳伦在采访中表示，乔布斯对她的影响非常大，他们几乎每天都聊上几个小时，聊天内容非常广泛。劳伦说：“我已经融入了他太多的东西。”

劳伦还称，她从乔布斯那里学到的一个深刻教训是：我们不必接受我们出生的世界是固定的、不可渗透的东西，通过意志力、意向和专注的能量和力量，我们实际上可以改变它。

关于乔布斯的一句名言，“我们生来是为了在宇宙中留下印记”，劳伦称世人对这句话的理解是错误的。她说，乔布斯的本意是说：“我们每个人都有能力改变环境。”

最后，谈及个人财富，这位全球第35大富豪、身家约275亿美元的劳伦表示，财富过于集中是不合理、不公平的。在她有生之年，要将这笔财富用于慈善事业，帮助那些需要的人们。

她说：“个人积累的巨额财富相当于数百万其他人的总和，这是不合适的，也不公平。这种财富的积累对一个社会来说是危险的。”

劳伦说：“我从丈夫那里继承了我的财富，他不关心财富的积累。我这样做是为了纪念他的工作，我毕生致力于尽我所能、有效地分配（distribute）这些资产，以可持续的方式提升个人和社区的地位。”

她还补充说：“我对遗产财富打造不感兴趣，我的孩子们也知道这一点。史蒂夫对此不感兴趣。如果我活得够久，这一切都将随我而告终。”

<h4>以下为文章内容摘要：</h4>

在我（本文作者大卫·盖尔斯，David Gelles）还没来得及采访劳伦·鲍威尔·乔布斯（Laurene Powell Jobs）之前，她就想采访我。

这是一个不同寻常的要求，但劳伦提出的这个要求并不特别令人惊讶。在她的丈夫、苹果公司联合创始人史蒂夫·乔布斯（Steve Jobs）去世近十年后，她仍然是一个非常隐秘的人。

乔布斯在世时，劳伦远离公众视线。她经营着一家天然食品公司，致力于教育和移民改革，并照顾他们的家人。虽然劳伦近年来在她的商业和慈善事业上变得越来越雄心勃勃，但她仍保持低调，接受的采访相对较少，也避免成为聚光灯下的焦点。如果她要同意坐下来聊聊，她想知道谁会问这些问题。

<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583516698027&di=8f7f73ac8e706aebc762d8735ab496b8&imgtype=0&src=http%3A%2F%2Fwww.ofweek.com%2FUpload%2FNews%2F2013-9%2Fliulu%2F4%2F4.jpg'>

于是，在去年年底一个寒冷的早晨，我们坐在纽约格林威治酒店灯光昏暗的客厅里的长毛绒沙发上，靠着熊熊燃烧的壁炉取暖。当她喝着青汁时，我们谈论了气候变化，对佛教的共同兴趣等等。那次谈话我没有记录下来，但两个月后，我们坐在同一个沙发上，坐在同一个炉火旁，这一次我打开了录音机。

劳伦在公开场合小心翼翼的原因，很快就变得明朗起来。在一个推文泛滥的时代（指内容简短），她以冗长的段落发表讲话，将个人叙事、政治和她对社会变革的观点编织在一起。她毫不讽刺地引用了但丁（Dante）、拉尔夫·瓦尔多·爱默生（Ralph Waldo Emerson）和罗斯·佩罗（Ross Perot）。她的想法千差万别，而且她并不假装对复杂问题有简单的解决方案。

劳伦还认为，至少在某些方面，她的丈夫被误解了。她认为，对他最受欢迎的名言之一——“我们生来是为了在宇宙中留下印记”——的流行解读是完全错误的。

他们相识于1989年，当时乔布斯在斯坦福商学院发表演讲，劳伦在高盛工作一段时间后正在那里学习。两年后，他们在约塞米蒂国家公园（Yosemite National Park）结婚。仪式结束后，他们在雪地里徒步旅行。乔布斯几年前就从苹果公司辞职了，现在运营着NeXT公司。但在后来的20年里，他重返苹果，推出了iMac、iPod、iPhone和iPad。
  `
  return {result: 'ok', data: newsDetail}
})

Mock.mock(/\/photo_sharing_top_tabs(?:\?.*)*/, {result: 'ok', data: data.photo_sharing_top_tabs})

Mock.mock(/\/photo_sharing_items(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const tabId = params.tab_id
  
  // 下面的逻辑只是为了造假数据，没有实际意义
  const items = data.photo_sharing_items
    .filter(item => tabId === 1000 || item.tab_id === tabId)
  return {result: 'ok', data: items}
})

Mock.mock(/\/photo_sharing_detail(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const photoItemId = params.photo_item_id
  
  // 下面的逻辑只是为了造假数据，没有实际意义
  const detail = data.photo_sharing_details[photoItemId] || {}
  return {result: 'ok', data: detail}
})

Mock.mock(/\/photo_sharing_comments(?:\?.*)*/, {result: 'ok', data: data.comment_list})
Mock.mock(/\/photo_sharing_comment_add(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const detailId = params.detail_id
  const comment = params.comment
  console.log('params', params)
  // 假设已经存储到数据库中 并生成了ID
  const id = String(Date.now())
  comment.id = id.substring(id.length - 4)
  return {result: 'ok', data: comment}
})

Mock.mock(/\/goods_list(?:\?.*)*$/, {result: 'ok', data: data.goods_list})
Mock.mock(/\/goods_list_by_ids(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const goodsIds = params.goods_ids.split(',')
  const goods = []
  for(let id of goodsIds) {
    for(let good of data.goods_list) {
      if(id == good.id) {
        goods.push(good)
      }
    }
  }
  return {result: 'ok', data: goods}
})
Mock.mock(/\/goods_detail(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const goodsId = params.goods_id
  return {result: 'ok', data: data.goods_details[goodsId] || {}}
})

Mock.mock(/\/goods_comments(?:\?.*)*/, {result: 'ok', data: data.comment_list})
Mock.mock(/\/goods_comment_add(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const goodsId = params.goods_id
  const comment = params.comment
  console.log('params', params)
  // 假设已经存储到数据库中 并生成了ID
  const id = String(Date.now())
  comment.id = id.substring(id.length - 4)
  return {result: 'ok', data: comment}
})

Mock.mock(/\/goods_introduction(?:\?.*)*/, options => {
  const params = JSON.parse(options.body)
  const goodsId = params.goods_id
  return {result: 'ok', data: data.goods_introductions[goodsId] || {}}
})