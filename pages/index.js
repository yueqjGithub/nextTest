import React, { useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Carousel, Popover } from 'antd';
import MainLayout from '../layouts/mainLayout'
import { httpGet } from '../service/http'
import urls from '../service/urls'
import NewsModule from '../components/index/news/news'
import CenterContainer from '../components/index/centerContent/centerContainer'
import Link from 'next/link'
export default function Home({info, newsList, ...props}) {
  const swiperRef = useRef()
  const [cur, setCur] = useState(0)
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
  const mediaList = [
    { icon: 'icon-weixin', src: '/images/qrcode.png' },
    { icon: 'icon-qq-circle', src: '/images/qrcode.png' },
    { icon: 'icon-weibo', src: '/images/qrcode.png' }
  ]
  const linkList = [
    {
      title: '产品中心',
      children: [
        {title: '热门游戏', link: ''},
        {title: '最新上架', link: ''},
        {title: '测试游戏', link: ''}
      ]
    },
    {
      title: '加入阿古朵',
      children: [
        {title: '福利待遇', link: ''},
        {title: '员工风采', link: ''},
        {title: '员工发展', link: ''},
        {title: '招聘岗位', link: ''}
      ]
    },
    {
      title: '关于阿古朵',
      children: [
        {title: '公司简介', link: ''},
        {title: '发展历程', link: ''},
        {title: '公司文化', link: ''}
      ]
    }
  ]
  return (
    <div>
      <Head>
        <title>阿古朵</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className='pages'>
          <div className={styles.swiperOut}>
            {/* 轮播方向箭头 */}
            <div className={[styles.controlContainer, 'flex-col', 'flex-ali-center', 'flex-jst-start'].join(' ')}>
              <div className={[styles.controlBar, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow].join(' ')} onClick={()=>preHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon].join(' ')}/>
                </div>
                {/* 向右 */}
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow, styles.controlArrowRight].join(' ')} onClick={()=>nextHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon, styles.transIcon].join(' ')}/>
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
              {/* 新闻模块 */}
              <NewsModule gameList={info.games.list.filter(item => item.is_hot).slice(0, 5)} newsList={newsList.slice(0, 8)}></NewsModule>
            </div>
            <Carousel effect="slide" dots={false} autoplay={true} ref={swiperRef} beforeChange={(from, to) => setChangeDot(from, to)}>
              {info.banners.map(item => {
                return (
                  <div className={styles.swiperItem} key={item}>
                    <img src={item} alt=""/>
                  </div>
                )
              })}
            </Carousel>
          </div>
          {/* 中间部分 */}
          <div className={styles.centerOut}>
            <CenterContainer gameList={info.games.list} packageList={info.news} newsList={newsList.slice(0, 3)}></CenterContainer>
          </div>
          {/* 链接部分 */}
          <div className={styles.linkArea}>
            <div className={[styles.contArea, 'flex-row', 'flex-jst-btw', 'flex-ali-start'].join(' ')}>
              <div className={['flex-col', 'flex-jst-start', 'flex-ali-start'].join(' ')}>
                <div className={['full-width', 'flex-row', 'flex-jst-start', 'flex-ali-center', styles.concat].join(' ')}>
                  <div className={[styles.iconOut]}>
                    <i className='iconfont icon-youjian'></i>
                  </div>
                  <div className={[styles.linkInfo, 'flex-col', 'flex-jst-center', 'flex-ali-start', 'self-stretch'].join(' ')}>
                    <p>邮箱地址：</p>
                    <span>chaoyi@.cn</span>
                  </div>
                </div>
                <div className={['full-width', 'flex-row', 'flex-jst-start', 'flex-ali-center', styles.concat].join(' ')}>
                  <div className={[styles.iconOut]}>
                    <i className='iconfont icon-telephone'></i>
                  </div>
                  <div className={[styles.linkInfo, 'flex-col', 'flex-jst-center', 'flex-ali-start', 'self-stretch'].join(' ')}>
                    <p>联系电话：</p>
                    <span>028-652384563</span>
                  </div>
                </div>
                {/* 微博微信QQ */}
                <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', styles.mediaList].join(' ')}>
                  {
                    mediaList.map((item, idx) => {
                      return (
                        <Popover content={
                          <img src={item.src} style={{width: '1.5rem', height: '1.5rem'}}></img>
                        } key={idx}>
                          <i className={`iconfont ${item.icon} cursor-pointer`} style={{fontSize: '.4rem', color: '#3c4043', marginLeft: idx === 0 ? '' : '.35rem'}}></i>
                        </Popover>
                      )
                    })
                  }
                </div>
              </div>
              <div className={['flex-3', 'flex-row', 'flex-jst-btw', styles.menuList].join(' ')}>
                {
                  linkList.map(item => {
                    return (
                      <div className={['flex-col', 'flex-jst-start', 'flex-ali-start', styles.menuCol].join(' ')} key={item.title}>
                        <p className={styles.title}>{item.title}</p>
                        {
                          item.children.map(ele => {
                            return (
                              <Link href={ele.link} key={ele.title}>
                                <span className={styles.menuItem}>{ele.title}</span>
                              </Link>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className={['self-stretch', 'flex-col', 'flex-jst-center', 'flex-ali-center'].join(' ')}>
                <img src="/images/qrcode.png" alt="" className='self-stretch'/>
                <p className='title-font font-20'>阿古朵官方公众号</p>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </div>
  )
}

export async function getStaticProps (context) {
  const { data } = await httpGet(urls.queryIndex)
  const newsRes = await httpGet(urls.queryNewsList)
  data.packages.forEach(item => {
    item.gameName = data.games.list.find(ele => ele.id === item.game_id).name
  })
  return {
    props: {
      info: data,
      newsList: newsRes.data.list.splice(0, 10)
    }, // will be passed to the page component as props
  }
}