import React from 'react'
import styles from './join.module.scss'
const Treat = props => {
  const treatList = [
    { icon: 'icon-baoxianxiang', title: '六险一金', sub: 'COMMERCIAL INSURANCE', content: '为了你的前途，我们也会在“钱”上努力争先，让你无后顾之忧' },
    { icon: 'icon-rili', title: '带薪年假', sub: 'COMMERCIAL INSURANCE', content: '光有年假还不够，我们还是带薪的，拿着工资来一场说走就走的旅行吧' },
    { icon: 'icon-huodong', title: '团建活动', sub: 'COMMERCIAL INSURANCE', content: '进了门，我们就是一加 人，一同团建去旅行' },
    { icon: 'icon-yingxiaoguanhuai', title: '节庆关怀', sub: 'COMMERCIAL INSURANCE', content: '过年过节不收礼，收礼 只收公司礼' },
    { icon: 'icon-liwu', title: '加班福利', sub: 'COMMERCIAL INSURANCE', content: '让你的每一分付出都可 以得到收获' },
    { icon: 'icon-_jiatingguanxi', title: '和谐氛围', sub: 'COMMERCIAL INSURANCE', content: '像在家一般温暖' },
    { icon: 'icon-Coffeecupfood', title: '下午茶', sub: 'COMMERCIAL INSURANCE', content: '劳累一整天补充能量' },
    { icon: 'icon-qianbao', title: '绩效奖金', sub: 'COMMERCIAL INSURANCE', content: '优秀的你值得更多报酬' },
    { icon: 'icon-20jiankongguanli', title: '健康体检', sub: 'COMMERCIAL INSURANCE', content: '身体是革命的本钱' },
  ]
  return (
    <div className='flex-row flex-wrap flex-jst-btw flex-ali-center full-width'>
      {
        treatList.map((item, idx) => {
          return (
            <div className={[styles.treatItem, 'flex-col', 'flex-jst-start', 'flex-ali-center', 'cus-fade-in'].join(' ')} key={idx}>
              <i className={['text-danger', 'iconfont', item.icon, styles.iconBar].join(' ')}></i>
              <p className={styles.titleBar}>{item.title}</p>
              <p className={styles.subBar}>{item.sub}</p>
              <p className={styles.contentBar}>{item.content}</p>
              <div className={[styles.hoverContainer]}>
                <div className={[styles.hoverBar, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                  <i className={['text-white', 'iconfont', item.icon, styles.iconBar].join(' ')}></i>
                  <p className={styles.titleBar}>{item.title}</p>
                  <p className={styles.subBar}>{item.sub}</p>
                  <p className={styles.contentBar}>{item.content}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Treat