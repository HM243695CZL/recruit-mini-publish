import {useState} from 'react';
import {Image, Text, View} from '@tarojs/components';
import {AtIcon, AtInputNumber} from 'taro-ui';
import Taro from '@tarojs/taro';
import foodImg from '../../static/img/zongzi.jpg';

export default function ShopListItem(props) {
  const {showBuyGoods} = props;
  const [goodsCount, setGoodsCount] = useState(1);
  const changeCount = value => {
    setGoodsCount(value);
  };
  const reSelectType = () => {
    showBuyGoods();
  };
  const showGoodsInfo = () => {
    Taro.navigateTo({
      url: '/pages/goodsInfo/index'
    })
  };
  return (
    <View className='shop-check-item flex-between'>
      <View className='img-box'>
        <Image src={foodImg} mode='aspectFill' />
      </View>
      <View className='info'>
        <Text className='head' onClick={showGoodsInfo}>
          岩鱼香鲜肉板栗粽200g*5只
        </Text>
        <View className='re-select flex-between' onClick={reSelectType}>
          <Text className='content'>200g鲜肉板栗粽*5只</Text>
          <AtIcon className='icon-chevron-down' value='chevron-down' size='15' color='#b2b2b2'/>
        </View>
        <View className='count flex-between'>
          <Text className='price'>
            ￥49.80
          </Text>
          <AtInputNumber
            min={1}
            max={10}
            step={1}
            value={goodsCount}
            size='normal'
            onChange={changeCount}
          />
        </View>
      </View>
    </View>
  )
}
