import React from 'react'
import styles from './about.module.scss'

const DevContent = (props) => {
  const list = [
    {
      title: '项目管理人才发展加速器',
      bgColor: '#47577b',
      imgSrc: '/images/about/intro-1.png',
      content: 'PMC项目（ProjectManagement Camp）为具备项目管理潜质的青年人才与项目经理量身打造，理论+实践，助力成长为更加优秀的项目管理人才'
    },
    {
      title: '项目管理人才发展加速器',
      bgColor: '#ff5838',
      imgSrc: '/images/about/intro-1.png',
      content: 'PMC项目（ProjectManagement Camp）为具备项目管理潜质的青年人才与项目经理量身打造，理论+实践，助力成长为更加优秀的项目管理人才'
    },
    {
      title: '项目管理人才发展加速器',
      bgColor: '#4e3530',
      imgSrc: '/images/about/intro-1.png',
      content: 'PMC项目（ProjectManagement Camp）为具备项目管理潜质的青年人才与项目经理量身打造，理论+实践，助力成长为更加优秀的项目管理人才'
    }
  ]
  return (
    <div className={[styles.wordContainer, styles.devlopment, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
      {
        list.map((item, idx) => {
          return (
            <div className={[styles.devItem, idx%2===0?'flex-row':'flex-row-reverse', 'flex-jst-btw', 'full-width', 'flex-ali-center'].join(' ')} key={idx}>
              <div className={[styles.itemTit, 'title-font', 'text-white', 'text-center'].join(' ')} style={{backgroundColor: item.bgColor}}>{item.title}</div>
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