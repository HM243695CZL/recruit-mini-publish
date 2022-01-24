import {Swiper, SwiperItem, View} from '@tarojs/components'
import './index.less'
export default function HwSwiper(props) {
  const {swiperList} = props;
  return (
    <View className='hw-swiper-container'>
      <Swiper
        className='swiper-box'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {
          swiperList.map(item => {
            return (
              <SwiperItem>
                <View>{item}</View>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    </View>
  )
}
