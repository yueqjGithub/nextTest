import React from 'react'
import styles from './about.module.scss'
export default function Introduce(props) {
  return (
    <div className={[styles.wordContainer, styles.introduce].join(' ')}>
      <div className='flex-row flex-jst-btw flex-ali-center'>
        <img src="/images/about/intro-1.png" alt="" className={['ma-rt-2', styles.imgHalf].join(' ')} />
        <p className={[styles.normalP]}>
          成都超亿科技有限公司成立于 20 巧年，是一家综合性互联网公司。创立 5 年来，公司发展稳定，也吸引了一批优秀的人才，目前公司 80 ％的技术研发人员，主要是项目...
        </p>
      </div>
      <div className={styles.title}>
        <p className='title-font font-28 text-default'>公司简介</p>
        <span className='text-default font-16'>INTRODUCE</span>
      </div>
      <div className='full-width'>
        <img src="/images/about/intro-2.png" alt="" className={[styles.imgHalf]} align='right' style={{marginLeft: '.15rem'}}/>
        <p className={styles.partP}>
          成都超亿科技有限公司成立于2013年6月，注册资
          本100万，前身为成都睿术有限公司，是一家专业从事软
          件定制设计开发服务的科创新型公司。主营移动终端开发
          和系统集成，同时以O20为特性的新型服务模式，并以"
          市场为导向，客户为中心"的经营理念力求为各企事业提
          供优质、高效、人性化的服务。公司成立至今已为零售、
          百货、金融、餐饮、教育、保险以及房地产等不同行业的
          客户量身打造智能系统、数据处理、项目策划、代运营推广、WIFI定位等智能系统平台。亿科技独立研发的“睿驰"人工智能
          机器人是公司具有代表性的创新项目之一，并得到了政府和行业内人士的大カ支持。“睿驰"是基于人工智动应答引
          擎研发的语义机器人，具有强大的语义解析、上下文推理等能力，并已实现流畅的会话交互。现“睿驰"与电子科技
          大学、武侯区人民法院、华为、神舟数码等在内的多家战略合作伙伴建立了长期稳定的合作关系。“睿驰”不断追
          求完美，深挖用户体验，以智能营销、智能教学、智能客服为核心努力为企业、高校提供一站式互联网解决方案
        </p>
        <p className={styles.partP}>
          超亿科技高度重视技术研发，公司内部创立 Summer实验室，研发完成自主知识产权的原型态开发框架 Smfr
          amework，“传统的 Web Service框架帮助你建造房子，而 Smframeworki框架帮助您建造城市。"该框架在B2C
          /B2B电子商务、移动电子商务、云计算平台等都有成功的开发案例，公司始终奉行“高质服务、创新思维"的理念
          努力为客户和合作伙伴提供优质的产品和服务
        </p>
        <p className={styles.partP}>
          超亿科技高度重视技术研发，公司内部创立 Summer实验室，研发完成自主知识产权的原型态开发框架 Smfr
          amework，“传统的 Web Service框架帮助你建造房子，而 Smframeworki框架帮助您建造城市。"该框架在B2C
          /B2B电子商务、移动电子商务、云计算平台等都有成功的开发案例，公司始终奉行“高质服务、创新思维"的理念
          努力为客户和合作伙伴提供优质的产品和服务
        </p>
        <p className={styles.partP}>
          目前，超亿正在运营中的游戏产品有100余款。自主研发了《梦幻西游》电脑版、《大话西游2经典版》、
          《大话西游2免费版》、《天下3》、《新倩女幽魂》、《逆水寒》、《梦幻西游》手游、《大话西游》手游、《倩
          女幽魂》手游、《阴阳师》、《率土之滨》、《一梦江湖》、《荒野行动   》、《终结战场》、《第五人格》、《明
          日之后》、《神都夜行录》等数十款备受玩家喜爱的热门端游和手游，更独家代理了《魔兽世界》、《炉石传说》
          、《守望先锋》、《我的世界》、《Sky光·遇》等多款风靡全球的游戏。
        </p>
        <p className={styles.partP}>
          凭借一系列精品，超亿游戏近年来在海外市场取得了重大突破。2018年，《荒野行动》已有6个月拿下了中
          国出海手游排行榜的第一名。同时，《终结战场》、《第五人格》、《阴阳师》、《决战!平安京》等产品在海外也
          都取得不错的成绩。
        </p>
      </div>
    </div>
  )
}








