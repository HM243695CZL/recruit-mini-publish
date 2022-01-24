import {View, Text, Image} from "@tarojs/components";
import Taro from '@tarojs/taro'
import goodImg from '../../static/img/avatar.jpg'
export default function GoodsItem(props) {
  const showInfo = () => {
    Taro.navigateTo({
      url: '/pages/goodsInfo/index'
    })
  };
  return (
    <View className='goods-item' onClick={showInfo}>
      <View className='img-box'>
        <Image src={goodImg} mode='aspectFill' />
      </View>
      <View className='info'>
        <View className='desc'>
          岩鱼香贞丰粽子蛋黄粽排骨粽板栗粽散装
        </View>
        <View className='price-info flex-between'>
          <Text className='price'>￥19.80</Text>
          <Text className='buy'>33人买过</Text>
        </View>
      </View>
    </View>
  )
}
