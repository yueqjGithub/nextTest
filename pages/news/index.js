import React, { useRef, useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../layouts/mainLayout'
import { httpGet } from '../../service/http'
import { Carousel, Pagination } from 'antd';
import urls from '../../service/urls'
import styles from '../../styles/news.module.scss'
import dayjs from 'dayjs'
export default function gameCenter({ info, newsList, ...props }) {
  const swiperRef = useRef()
  const [cur, setCur] = useState(0) // swiper-index
  const [curPage, setPage] = useState(1) // page-index
  const [curType, setType] = useState(0) // newsType
  const curList = useMemo(() => {
    let total = []
    if (curType === 0) {
      total = newsList
    } else {
      total = newsList.filter(item => item.type === curType)
    }
    const start = 25 * (curPage - 1)
    const end = 25 * curPage
    return total.slice(start, end)
  }, [curType, curPage])
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
  const typeList = [
    { value: 0, label: '综合' },
    { value: 1, label: '新闻' },
    { value: 2, label: '公告' },
    { value: 3, label: '活动' }
  ]
  return (
    <div>
      <Head>
        <title>阿古朵-新闻中心</title>
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
            <Carousel effect="fade" dots={false} autoplay={true} ref={swiperRef} beforeChange={(from, to) => setChangeDot(from, to)}>
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
            <div className={styles.contentContainer}>
              <div className={['flex-row', 'flex-jst-btw', 'flex-ali-start'].join(' ')}>
                {/* 面包屑导航 */}
                <div className={[styles.bread, 'flex-row', 'flex-jst-start', 'flex-ali-base', 'flex-1'].join(' ')}>
                  <div className='self-stretch title-prefix ma-rt-2'></div>
                  <Link href='/'>
                    <span className='title-font font-18 text-normal ma-rt-1 cursor-pointer font-bold'>首页</span>
                  </Link>
                  <span className='font-18 text-normal ma-rt-1'>{'>>'}</span>
                  <span className='font-18 text-red font-bold'>新闻中心</span>
                </div>
                {/* 标题 */}
                <div className={['flex-col', 'flex-jst-center', 'flex-ali-center', 'flex-2'].join(' ')}>
                  <img src="/images/newsTit.png" alt="" style={{ width: '40%' }} />
                </div>
                <div className='flex-1'></div>
              </div>
              {/* 列表部分 */}
              <div className={['flex-row', 'flex-jst-btw', 'flex-ali-start', styles.listOut].join(' ')}>
                {/* 类型选择 */}
                <div className={[styles.control]}>
                  {
                    typeList.map((item, idx) => {
                      return (
                        <div className={[styles.typeButton, idx === curType ? styles.typeCur : ''].join(' ')} key={idx} onClick={() => setType(idx)}>{item.label}</div>
                      )
                    })
                  }
                </div>
                {/* 新闻列表 */}
                <div className={['flex-2', styles.listContainer, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                  {
                    curList.map(item => {
                      return (
                        <div className={[styles.newsItem, 'flex-row', 'flex-jst-btw', 'flex-ali-center', 'full-width', 'cursor-pointer'].join(' ')} key={item.id}>
                          <Link href={`/news/${item.id}`}>
                            <div className='flex-row flex-jst-start flex-ali-center'>
                              <span className='ma-rt-02 text-danger font-14'>【{typeList.find(ele => ele.value === item.type).label}】</span>
                              <p className={['ellipis', 'font-16', styles.newsTitle].join(' ')}>{item.title}</p>
                            </div>
                          </Link>
                          <p className='text-blk font-16'>{dayjs(item.created_at).format('YYYY-MM-DD')}</p>
                        </div>
                      )
                    })
                  }
                  <div className='full-width flex-row flex-jst-center flex-ali-center cus-pagenation'>
                    <Pagination defaultPageSize={25} total={curList.length} current={curPage} onChange={(page, pageSize) => setPage(page)} showSizeChanger={false}></Pagination>
                  </div>
                </div>
                {/* side */}
                <div className={[styles.rightSide, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                  <div className={styles.sideTit}>官方公众号</div>
                  <img src="/images/qrcode.png" alt="" className={styles.wxCode} />
                  <div className={styles.sideTit}>快速入口</div>
                  {
                    info.games.list.slice(0, 2).map(item => {
                      return (
                        <Link href='/gameCenter' key={item.id}>
                          <div className={[styles.gameItem, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                            <div className='flex-row flex-jst-start flex-ali-center'>
                              <img src={item.logo} alt="" className={styles.pLogo} />
                              <div className='flex-col flex-jst-btw flex-ali-start self-stretch'>
                                <p className={styles.pName}>{item.name}</p>
                                <p className={styles.pIntro}>{item.subtitle}</p>
                                <div className={['flex-row', 'flex-jst-start', 'flex-ali-base', styles.pDate].join(' ')}>
                                  <i className='iconfont icon-time ma-rt-02'></i>
                                  <p>{dayjs(item.created_at).format('MM月DD日')}</p>
                                </div>
                              </div>
                            </div>
                            <i className={['iconfont', 'icon-right', styles.pArrow].join(' ')}></i>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data } = await httpGet(urls.queryIndex)
  const newsRes = await httpGet(urls.queryNewsList)
  return {
    props: {
      info: data,
      newsList: newsRes.data.list
    }, // will be passed to the page component as props
  }
}