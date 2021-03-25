import React, { useRef, useState, useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { httpGet } from '../../service/http'
import urls from '../../service/urls'
import MainLayout from '../../layouts/mainLayout'
import { Carousel } from 'antd';
import styles from '../../styles/newsDetail.module.scss'
import SideSwiper from '../../components/newsList/sideSwiper'
import Link from 'next/link'
export default function Detail({ news, info, newsList, ...props }) {
  const swiperRef = useRef()
  const [cur, setCur] = useState(0) // swiper-index
  const preHandler = function () {
    swiperRef.current.prev()
  }
  const nextHandler = function () {
    swiperRef.current.next()
  }
  const dotHandler = function (current) {
    swiperRef.current.goTo(current)
  }
  const setChangeDot = function (from, to) {
    setCur(to)
  }
  const hotList = useMemo(() => {
    return newsList.slice(0, 5)
  }, [newsList])
  const typeList = [
    { value: 0, label: '综合' },
    { value: 1, label: '新闻' },
    { value: 2, label: '公告' },
    { value: 3, label: '活动' }
  ]
  return (
    <div>
      <Head>
        <title>{news.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className='pages'>
          <div className={styles.swiperOut}>
            {/* 轮播方向箭头 */}
            <div className={[styles.controlContainer, 'flex-col', 'flex-ali-center', 'flex-jst-start'].join(' ')}>
              <div className={[styles.controlBar, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow].join(' ')} onClick={() => preHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon].join(' ')} />
                </div>
                {/* 向右 */}
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow, styles.controlArrowRight].join(' ')} onClick={() => nextHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon, styles.transIcon].join(' ')} />
                </div>
              </div>
              {/* 轮播点 */}
              <div className={['full-width', 'flex-row', 'flex-jst-center', 'flex-ali-center', styles.dotContainer].join(' ')}>
                {
                  info.banners.map((item, idx) => {
                    return (
                      <div className={[styles.cusDot, cur === idx ? styles.curDot : ''].join(' ')} key={item} onClick={() => dotHandler(idx)}></div>
                    )
                  })
                }
              </div>
            </div>
            <Carousel effect="slide" dots={false} autoplay={true} ref={swiperRef} beforeChange={(from, to) => setChangeDot(from, to)}>
              {info.banners.map(item => {
                return (
                  <div className={styles.swiperItem} key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
          {/* 中间部分 */}
          <div className={styles.centerOut}>
            <div className={[styles.contentContainer, 'flex-row', 'flex-jst-btw', 'flex-ali-start'].join(' ')}>
              {/* 新闻详情 */}
              <div className={['flex-1', styles.leftSide].join(' ')}>
                {/* 面包屑导航 */}
                <div className={[styles.bread, 'flex-row', 'flex-jst-start', 'flex-ali-base', 'flex-1'].join(' ')}>
                  <div className='self-stretch title-prefix ma-rt-2'></div>
                  <Link href='/'>
                    <span className='title-font font-18 text-normal ma-rt-1 cursor-pointer font-bold'>首页</span>
                  </Link>
                  <span className='font-18 text-normal ma-rt-1'>{'>>'}</span>
                  <Link href='/news'>
                    <span className='font-18 text-red font-bold cursor-pointer'>新闻中心</span>
                  </Link>
                </div>
                {/* 新闻标题 */}
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', 'title-font', 'font-30', styles.newsTitle].join(' ')}>{news.title}</div>
                {/* 新闻内容 */}
                <div dangerouslySetInnerHTML={{ __html: news.content }} className={styles.detailContainer}></div>
                {/* 上下篇链接 */}
                <div className={styles.eitherLink}>
                  <div className={[styles.linkItem, 'font-14', 'text-blk', 'flex-row', 'flex-jst-start', 'flex-ali-center', 'cursor-pointer'].join(' ')}>
                    <span>上一篇：</span>
                    {
                      news.prevNews ?
                        (
                          <Link href={`/news/${news.prevNews.id}`}>
                            <div className={['flex-row', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                              <span className='ma-rt-02'>[{typeList.find(item => item.value === news.prevNews.type).label}]</span>
                              <p className='ellipis flex-1'>{news.prevNews.title}</p>
                            </div>
                          </Link>
                        ) : '无'
                    }
                  </div>
                  <div className={[styles.linkItem, 'font-14', 'text-blk', 'flex-row', 'flex-jst-start', 'flex-ali-center', 'cursor-pointer'].join(' ')}>
                    <span>下一篇：</span>
                    {
                      news.nextNews ?
                        (
                          <Link href={`/news/${news.nextNews.id}`}>
                            <div className={['flex-row', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                              <span className='ma-rt-02'>[{typeList.find(item => item.value === news.nextNews.type).label}]</span>
                              <p className='ellipis flex-1'>{news.nextNews.title}</p>
                            </div>
                          </Link>
                        ) : '无'
                    }
                  </div>
                </div>
              </div>
              {/* 右侧内容 */}
              <div className={[styles.rightSide]}>
                <div className={[styles.titBar, 'flex-row', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                  <div className='self-stretch title-prefix ma-rt-2'></div>
                  <div className='font-18 text-red font-bold letter-space-05'>近期热点</div>
                </div>
                {/* 右侧轮播 */}
                <SideSwiper gameList={info.games.list}></SideSwiper>
                <div className={[styles.titBar, 'flex-row', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                  <div className='self-stretch title-prefix ma-rt-2'></div>
                  <div className='font-18 text-red font-bold letter-space-05'>热门资讯</div>
                </div>
                {/* 右侧新闻 */}
                {
                  hotList.map(item => {
                    return (
                      <Link href={`/news/${item.id}`} key={item.id}>
                        <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', 'font-14', 'text-blk', styles.newsItem].join(' ')}>
                          <span className='ma-rt-02'>【资讯】</span>
                          <p className='flex-1 ellipis' style={{maxWidth: '80%', overflow: 'hidden'}}>{item.title}</p>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </div>
  )
}

export async function getStaticProps(params) {
  const newsId = params.params.id
  const newsList = await httpGet(urls.queryNewsList)
  const { data } = await httpGet(urls.newsDetail, { id: newsId }) // detail
  const allInfo = await httpGet(urls.queryIndex)
  const target = newsList.data.list.find(item => item.id === data.id)
  const num = newsList.data.list.indexOf(target)
  data.prevNews = num === 0 ? null : newsList.data.list[num - 1]
  data.nextNews = num === newsList.data.list.length - 1 ? null : newsList.data.list[num + 1]
  return {
    props: {
      news: data,
      info: allInfo.data,
      newsList: newsList.data.list
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const newsRes = await httpGet(urls.queryNewsList)
  // 根据博文列表生成所有需要预渲染的路径
  const paths = newsRes.data.list.map((item) => `/news/${item.id}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}