import React, { useState } from 'react'
import styles from './news.module.scss'
const NewsModule = ({ packageList, newsList, ...props }) => {
  const [cur, setCur] = useState(0)
  console.log(cur)
  return (
    <div className={[styles.contain, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')} style={{backgroundImage: `url(${packageList[cur].poster})`}}>
      <div className={[styles.leftCont, 'flex-col', 'flex-jst-start', 'flex-ali-start'].join(' ')}>
        <div className={styles.pin} style={{top: `calc(${(cur * 20) + 10}%  - .1rem)`}}></div>
        {
          packageList.map((item, idx) => {
            return (
              <div className={[styles.leftItem, 'flex-row', 'flex-jst-btw', 'flex-ali-center', 'cursor-pointer', idx === cur ? styles.curLeft: ''].join(' ')} key={idx}
              onClick={() => setCur(idx)}
              >
                <img src={item.logo} alt="" className={styles.logos}/>
                <div className={['flex-col', 'flex-jst-ard', 'flex-ali-start', 'self-stretch', styles.introCont].join(' ')}>
                  <p className={styles.gameName}>{item.gameName}</p>
                  <p className={styles.gameIntro}>{item.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsModule