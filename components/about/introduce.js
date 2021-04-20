import React from 'react'
import styles from './about.module.scss'
export default function Introduce(props) {
  return (
    <div className={[styles.wordContainer, styles.introduce].join(' ')}>
      <div className='flex-row flex-jst-btw flex-ali-center'>
        <img src="/images/about/intro-1.png" alt="" className={['ma-rt-2', styles.imgHalf].join(' ')} />
        <p className={[styles.normalP]}>
        成都阿古朵八项科技有限公司简称阿古朵游戏，是一家以游戏研发、发行与联运为主营的游戏公司。
        </p>
      </div>
      <div className={styles.title}>
        <p className='title-font font-28 text-default'>公司简介</p>
        <span className='text-default font-16'>COMPANY INTRODUCE</span>
      </div>
      <div className='full-width'>
        <img src="/images/about/intro-2.png" alt="" className={[styles.imgHalf]} align='right' style={{marginLeft: '.15rem'}}/>
        <p className={styles.partP}>
        成都阿古朵八项科技有限公司简称阿古朵游戏，是一家以游戏研发、发行与联运为主营的游戏公司。
        </p>
        <p className={styles.partP}>
        成都为研发中心，以北京、广州两地为运营中心，向全国扩展游戏业务。阿古朵游戏汇集国内外一线游戏人才，公司人才本科率高达百分之八十以上，为阿古朵的未来发展提供了多元化的人才储备。
        </p>
        <p className={styles.partP}>
        公司与国内各大知名游戏开发商、渠道、保持密切良好的合作关系。公司运营超过百款手机游戏及html5游戏，已成为集代理、运营、服务于一体的移动互联网游戏服务商。公司成立之后，不断推出新产品，品类涵盖传奇、仙侠、三国、魔幻、武侠、二次元、休闲等多个题材，运营的游戏持续排名app store榜单前列。
        </p>
      </div>
    </div>
  )
}








