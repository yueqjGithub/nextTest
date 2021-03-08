import React from 'react'
import styles from './about.module.scss'

export default function History(props) {
  const hisList = [
    { year: 2020, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2019, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2018, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2017, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2016, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2015, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2014, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
    { year: 2013, word: '成都市副市长曹俊杰一行莅临超亿科技调研新经济企业情况，并对公司市场化的实践探索给予了高度肯定', img: '/images/about/his-pic.png' },
  ]
  return (
    <div className={[styles.wordContainer, styles.hisContainer, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
      <div className={[styles.listItem, styles.listFirst].join(' ')}>
        <div className={[styles.titCircle]}>
          <div></div>
        </div>
      </div>
      {
        hisList.map((item, idx) => {
          return (
            <div className={[styles.listItem, idx % 2 === 1 ? 'flex-row' : 'flex-row-reverse', 'flex-jst-start', 'flex-ali-start', styles.listItem, idx % 2 === 1 ? styles.rightSide : styles.leftSide].join(' ')} key={idx}
            style={{animationDelay: `${(idx + 1) * 0.5}s`}}
            >
              <div className={[styles.titCircle]}>
                <div></div>
              </div>
              <div className={[styles.listWord, 'flex-1', 'flex-col', 'flex-jst-start', idx % 2 === 1 ? 'flex-ali-start' : 'flex-ali-end'].join(' ')}>
                <h2 className='title-font font-20 text-normal'>{item.year}</h2>
                <p className='font-16 text-normal'>{item.word}</p>
              </div>
              <div className={[styles.itemImg, 'flex-row', 'flex-jst-center', 'flex-ali-center'].join(' ')}>
                <img src={item.img} alt="" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}