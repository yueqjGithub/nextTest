import React from 'react'
import styles from './centerContainer.module.scss'
import { filterNewsContent } from '../../../utils/utils'
import Link from 'next/link'
import QRCode from 'qrcode.react'
export default function CenterContainer({ gameList, ...props }) {
  return (
    <div className={styles.centerContainer}>
      <div className={[styles.bread, 'flex-row', 'flex-jst-start', 'flex-ali-base'].join(' ')}>
        <div className='self-stretch title-prefix ma-rt-2'></div>
        <Link href='/'>
          <span className='title-font font-18 text-normal ma-rt-1 cursor-pointer font-bold'>首页</span>
        </Link>
        <span className='font-18 text-normal ma-rt-1'>{'>>'}</span>
        <span className='font-18 text-red'>游戏中心</span>
      </div>
      <div className={['flex-row', 'flex-wrap', 'flex-jst-start', 'flex-ali-start', styles.gameList].join(' ')}>
        {
          gameList.map((item, idx) => {
            return (
              <div className={[styles.gameItem, 'flex-col', 'cursor-pointer', 'flex-jst-btw', 'flex-ali-center', (idx % 3) === 1 ? styles.gameItemCenter : ''].join(' ')} key={item.id}>
                <div className={['full-width', styles.gamePost].join(' ')}>
                  <img src={item.poster} alt="" className={styles.postImg} />
                  <div className={[styles.gameInfo, 'flex-row', 'flex-jst-center', 'flex-ali-center'].join(' ')}>
                    <div className={[styles.codeContainer, 'flex-col', 'flex-jst-center', 'flex-ali-center', 'ma-rt-2'].join(' ')}>
                      <QRCode
                        value={item.domain}
                        level='H'
                        size={100} // 二维码的大小
                        fgColor="#333333" // 二维码的颜色
                        imageSettings={{ // 二维码中间的logo图片
                          src: item.logo,
                          height: 30,
                          width: 30,
                          excavate: false // 中间图片所在的位置是否镂空
                        }}
                      />
                      <p className='text-blk font-14'>扫码下载</p>
                    </div>
                    <div className={['self-stretch', 'flex-col', 'flex-jst-ard', 'flex-ali-start'].join(' ')}>
                      <p className='text-white font-16 font-bold'>扫码下载：{item.name}</p>
                      <p className='text-white font-16 font-bold'>{item.subtitle}</p>
                      <div className={styles.cusButton}>了解更多{' >'}</div>
                    </div>
                  </div>
                </div>
                <p className={['title-font', styles.gameName].join(' ')}>《{item.name}》</p>
                <div className={styles.gameIntro}>{item.introduction}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}