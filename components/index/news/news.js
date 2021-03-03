import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './news.module.scss'
import Link from 'next/link'
import { filterNewsContent } from '../../../utils/utils'
import dayjs from 'dayjs'
const NewsModule = ({ gameList, newsList, ...props }) => {
  const [cur, setCur] = useState(0)
  const [hover, setHover] = useState(0)
  const router = useRouter()
  const newsDetailHandler = (id) => {
    router.push({
      pathname: '/news/[id]',
      query: { id: id }
    })
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (cur < (gameList.length - 1)) {
        let now = cur + 1
        setCur(now)
      } else {
        setCur(0)
      }
    }, 4000)
    return function () {
      clearInterval(interval)
    }
  })
  const toGameCenter = () => {
    router.push({pathname: '/gameCenter'})
  }
  return (
    <div className={[styles.contain, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')} style={{backgroundImage: `url(${gameList[cur].poster})`}}>
      {/* 左侧游戏列表 */}
      <div className={[styles.leftCont, 'flex-col', 'flex-jst-start', 'flex-ali-start'].join(' ')}>
        <div className={styles.pin} style={{top: `calc(${(cur * 20) + 10}%  - .1rem)`}}></div>
        {
          gameList.map((item, idx) => {
            return (
              <div className={[styles.leftItem, 'flex-row', 'flex-jst-btw', 'flex-ali-center', 'cursor-pointer', idx === cur ? styles.curLeft: ''].join(' ')} key={idx}
              onClick={() => toGameCenter()}
              onMouseEnter={() => setCur(idx)}
              >
                <img src={item.logo} alt="" className={styles.logos}/>
                <div className={['flex-col', 'flex-jst-ard', 'flex-ali-start', 'self-stretch', styles.introCont].join(' ')}>
                  <p className={styles.gameName}>{item.name}</p>
                  <p className={styles.gameIntro}>{item.subtitle}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* 右侧新闻 */}
      <div className={[styles.rightCont]}>
        <div className={[styles.newsTitBar, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
          <div className={[styles.newsLeft, 'flex-row', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
            <div className={[styles.leftIcon]}></div>
            <div className={[styles.leftTit]}>新闻</div>
          </div>
          <Link href='/news'>
            <span className={[styles.more, 'cursor-pointer'].join(' ')}>更多</span>
          </Link>
        </div>
        {/* 新闻列表 */}
        <div className={[styles.newsContain]}>
          {
            newsList.map((item, idx) => {
              return (
                <div className={[styles.newsItem, hover === idx ? styles.activeNews : ''].join(' ')} key={item.id} onMouseEnter={() => setHover(idx)} onClick={() => newsDetailHandler(item.id)}>
                  <div className='flex-row flex-jst-btw flex-ali-center'>
                    <p className={styles.newsTit}>{item.title}</p>
                    <span className={styles.newsDate}>{dayjs(item.created_at).format('MM-DD')}</span>
                  </div>
                  <div className={styles.newsIntro}>{filterNewsContent(item.content, 50)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NewsModule