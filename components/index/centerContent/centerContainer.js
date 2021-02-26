import React from 'react'
import styles from './centerContainer.module.scss'
import Link from 'next/link'
import dayjs from 'dayjs'
export default function CenterContainer({ gameList, packageList, ...props }) {
  return (
    <div className={styles.centerContainer}>
      {/* 第一块 */}
      <div className={[styles.contOne, 'flex-row', 'flex-jst-btw', 'flex-ali-start'].join(' ')}>
        {/* 左侧 */}
        <div className={[styles.oneLeft, 'flex-3'].join(' ')}>
          <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', styles.titBar].join(' ')}>
            <div className={[styles.titIcon]}></div>
            <div className={[styles.titName, 'title-font'].join(' ')}>热门游戏</div>
          </div>
          <div className={['flex-row', 'flex-wrap', 'flex-jst-start', 'flex-ali-start'].join(' ')}>
            {
              gameList.map((item, idx) => {
                return (
                  <div className={[styles.gameItem, 'flex-col', 'flex-jst-btw', 'flex-ali-center'].join(' ')} key={item.id}>
                    <img src={item.poster} alt="" className={['full-width', styles.gamePost].join(' ')} />
                    <p className={['title-font', styles.gameName].join(' ')}>《{item.name}》</p>
                    <div className={styles.gameIntro}>{item.introduction}</div>
                    <div className={styles.split}>
                      <div></div>
                    </div>
                    <div className={styles.gameLink}>
                      <Link href='/gameCenter'>
                        <a href="">查看详情 <i className='iconfont icon-jiantou3'></i></a>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* 内容1右侧 */}
        <div className={[styles.oneRight, 'flex-1'].join(' ')}>
          <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', styles.titBar].join(' ')}>
            <div className={[styles.titIcon]}></div>
            <div className={[styles.titName, 'title-font'].join(' ')}>公测新游</div>
          </div>
          <div className='full-width'>
            {
              packageList.map((item, idx) => {
                return (
                  <Link href='/gameCenter' key={idx}>
                    <div className={[styles.packageItem, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                      <div className='flex-row flex-jst-start flex-ali-center'>
                        <img src={item.logo} alt="" className={styles.pLogo} />
                        <div className='flex-col flex-jst-btw flex-ali-start self-stretch'>
                          <p className={styles.pName}>{item.package_name}</p>
                          <p className={styles.pIntro}>{item.description}</p>
                          <div className={['flex-row', 'flex-jst-start', 'flex-ali-base', styles.pDate].join(' ')}>
                            <i className='iconfont icon-time'></i>
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
      {/* 第二块 */}
      <div className={[styles.contTwo, 'flex-row', 'flex-jst-btw', 'flex-ali-start'].join(' ')}>
        <div className={[styles.twoLeft, 'flex-2'].join(' ')}>
          <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', styles.titBar].join(' ')}>
            <div className={[styles.titIcon]}></div>
            <div className={[styles.titName, 'title-font'].join(' ')}>热门活动</div>
          </div>
        </div>
        <div className={[styles.twoRight, 'flex-1'].join(' ')}>
          <div className={['flex-row', 'flex-jst-start', 'flex-ali-center', styles.titBar].join(' ')}>
            <div className={[styles.titIcon]}></div>
            <div className={[styles.titName, 'title-font'].join(' ')}>新闻公告</div>
          </div>
        </div>
      </div>
    </div>
  )
}