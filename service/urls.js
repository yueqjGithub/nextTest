const mockUrl = 'https://www.fastmock.site/mock/c4a9191b46d02bfc455e710d4f53419e/api/gameDateManage'
let baseUrl = 'http://webapi.8xgame.cn'
// let baseUrl = '/'
// const baseUrl = '/gameDateManage'

if( process.env.NODE_ENV === 'production' ) {
  baseURL = ''
}

const urls = {
  baseUrl: baseUrl,
  queryIndex: '/api/home', // 请求首页数据
  queryNewsList: '/api/home/news', // 新闻列表
  newsDetail: '/api/home/news/detail', // 新闻详情
  jobList: '/api/home/job', // 职位列表
  jobDetail: '/api/home/job/detail' // 职位详情
}

export default urls
