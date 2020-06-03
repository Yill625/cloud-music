import React from 'react'
import Slider from '../../components/slider'
import RecommendList from '../../components/list'

function Recommend() {
  //mock 数据
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      imageUrl:
        'https://weapposs.oss-cn-shenzhen.aliyuncs.com/cover/2020/05/17/9WQ6cHJmbskTWsUbSxIlB9UL2CYGO27wSeCoTOHQ.jpg',
    }
  })

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return {
      id: 1,
      picUrl:
        'https://weapposs.oss-cn-shenzhen.aliyuncs.com/cover/2019/04/09/XiNPJZkHSoWfE0Eao7EXY6hdl7B7NGgHRSyOQASl.png',
      playCount: 17171122,
      name: '朴树、许巍、李健、郑钧、老狼、赵雷',
    }
  })

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
    </div>
  )
}

export default React.memo(Recommend)
