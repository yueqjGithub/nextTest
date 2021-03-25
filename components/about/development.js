import React from 'react'
import styles from './about.module.scss'

const DevContent = (props) => {
  const list = [
    {
      title: '人才理念',
      bgColor: '#47577b',
      imgSrc: '/images/about/intro-1.png',
      content: '招有理想抱负的人，给最大的空间，让优秀人才实现自身价值'
    },
    {
      title: '人才培养',
      bgColor: '#ff5838',
      imgSrc: '/images/about/intro-2.jpg',
      content: '阿古朵网络科技自成立以来就非常重视人才的培养。为了培养专业的管理人才，公司成立了“人才培养机制”'
    },
    {
      title: '人才发展',
      bgColor: '#4e3530',
      imgSrc: '/images/about/intro-3.jpg',
      content: '每一位负责人都会积极发现和培养有追求有激情的员工，帮助他们在技术上和团队管理上得以提升。'
    }
  ]
  return (
    <div className={[styles.wordContainer, styles.devlopment, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
      {
        list.map((item, idx) => {
          return (
            <div className={[styles.devItem, idx%2===0?'flex-row':'flex-row-reverse', 'flex-jst-btw', 'full-width', 'flex-ali-center'].join(' ')} key={idx}>
              <div className={[styles.itemTit, 'title-font', 'text-white', 'text-center', 'flex-row', 'flex-jst-center', 'flex-ali-center'].join(' ')} style={{backgroundColor: item.bgColor}}>{item.title}</div>
              <div style={{width: '.2rem'}}></div>
              <div className={[styles.itemContent, idx%2===0?'flex-row':'flex-row-reverse', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                <div className={styles.wordContainer}>{item.content}</div>
                <img src={item.imgSrc} alt=""/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DevContent