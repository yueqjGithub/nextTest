const mockUrl = 'https://www.fastmock.site/mock/c4a9191b46d02bfc455e710d4f53419e/api/gameDateManage'
let baseUrl = ''
// let baseUrl = '/'
// const baseUrl = '/gameDateManage'

if( process.env.NODE_ENV === 'production' ) {
  baseURL = ''
} else {
  baseURL = ''
}

const urls = {
  baseUrl: baseUrl
}

export default urls
