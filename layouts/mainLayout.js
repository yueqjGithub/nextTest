import React, { useEffect, useState } from 'react'
import styles from '../styles/mainLayout.module.scss'
import { useRouter } from 'next/router'
export default function MainLayout(props) {
  const router = useRouter()
  const [showTop, setShowTop] = useState(0)
  const routes = [
    // { meta: '首页', path: '/' },
    { meta: '游戏中心', path: '/gameCenter' },
    { meta: '新闻中心', path: '/news' },
    { meta: '关于我们', path: '/about' },
    { meta: '加入我们', path: '/join' },
    { meta: '客服中心', path: '/serviceCenter' }
  ]
  const scrollHandler = () => {
    const h = document.documentElement.scrollTop
    setShowTop(h)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [router])
  return (
    <div className={styles.pageContainer}>
      {/* head */}
      <div className={['full-width', 'flex-row', 'flex-jst-center', 'flex-ali-center', 'pa-col-md', 'bg-white', styles.headBar].join(' ')}
        style={{ opacity: showTop > 91 ? 0 : 1 - (showTop / 91) }}
      >
        <div className={['flex-row', 'flex-jst-btw', 'flex-ali-center', styles.barContainer].join(' ')}>
          <img src='/images/logo.png' style={{width: '18%'}}></img>
          <div className={['flex-row', 'flex-jst-btw', 'flex-ali-center', 'flex-nowrap', styles.menuList].join(' ')}>
            {router.pathname === '/' ?
            <a href='/' className={[styles.activePath, styles.menuItem].join(' ')}>首页</a> :
            <a href='/' className={[styles.dectivePath, styles.menuItem].join(' ')}>首页</a>
            }
            {routes.map((item) => {
              return (
                router.pathname.startsWith(item.path) ?
                  <a href={item.path} className={[styles.activePath, styles.menuItem].join(' ')} key={item.path}>{item.meta}</a> :
                  <a href={item.path} className={[styles.dectivePath, styles.menuItem].join(' ')} key={item.path}>{item.meta}</a>
              )
            })}
          </div>
        </div>
      </div>
      {/* content */}
      <div className={styles.mainContainer}>
        {props.children}
      </div>
      {/* foot */}
      <div className={[styles.footContainer, 'flex-row', 'flex-jst-center', 'flex-ali-center'].join(' ')}>
        <div className={['flex-row', 'flex-jst-btw', 'flex-ali-center', styles.footCont].join(' ')}>
          <img src='/images/fLogo.png' style={{width: '25%'}}></img>
          <div className='flex-col flex-jst-start flex-ali-end font-16 text-light-grey'>
            <p>阿古朵游戏版权所有 ©XXXX-XXXX中国网络游戏版权保护联盟举报中心</p>
            <p>XXXXXXXX©XXXX-XXXX . ALL RIGHT RESERVED . 京ICP备XXXXXXXXX-X号</p>
            <p>《网络文化经营许可证》 京网文[2015]XXXXXXXX号 京公网安备XXXXXXXXX号</p>
            <p>XXXXXXX科技有限公司</p>
          </div>
        </div>
      </div>
    </div>
  )
}