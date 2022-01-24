import {useState} from 'react';
import {View, Text} from '@tarojs/components';
import {AtIcon, AtFloatLayout} from 'taro-ui';
import Taro from '@tarojs/taro';
import DiscountInfo from '../discountInfo';
import './show-total.less';

export default function ShopTotal(props) {
  const [isOpened, setIsOpened] = useState(false);
  const showDiscountInfo = () => {
    setIsOpened(true);
  };
  const clickNowBuyBtn = () => {
    Taro.navigateTo({
      url: '/pages/fillOrder/index'
    });
  };
  const closeLayout = () => {
    setIsOpened(false);
  };
  return (
    <View className='shop-total-container'>
      <View className="shop-info">
        <View className='shop-price' onClick={showDiscountInfo}>
          <Text className='total'>
            合计
            <Text className='total-price'>￥481.70</Text>
          </Text>
          <View className='discount'>
            <AtIcon value='chevron-up' size='10' color='#7f7f7f'/>
            <Text className='discounted'>共3件，已减￥0</Text>
          </View>
        </View>
        <View className='buy' onClick={clickNowBuyBtn}>
          立即购买
        </View>
      </View>
      <AtFloatLayout isOpened={isOpened} onClose={closeLayout}>
        <DiscountInfo
          closeModel={closeLayout}
        />
      </AtFloatLayout>
    </View>
  )
}
