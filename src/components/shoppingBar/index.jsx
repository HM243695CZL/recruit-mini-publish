import {useState} from 'react';
import {View, Text} from '@tarojs/components';
import {AtIcon, AtFloatLayout} from 'taro-ui';
import HwCheckbox from '../hwCheckbox';
import ShopTotal from './shopTotal';
import BuyGoods from '../buyGoods';
import './index.less'
export default function ShoppingBar(props) {
  const { isJoinBag } = props;
  const [selectedList] = useState([false]);
  const [isOpened, setIsOpened] = useState(false);
  const [showGoodsType, setShowGoodsType] = useState(null);
  const [optionList] = useState([
    {
      value: true,
      label: <Text className='all-check'>全选</Text>,
      desc: <ShopTotal />
    }
  ]);
  const clickShopBtn = type => {
    // 1：加入购物袋 2：立即购买
    setShowGoodsType(type);
    setIsOpened(true);
  };
  const closeLayout = () => {
    setIsOpened(false);
  };
  return (
    <View className='shopping-bar-container'>
      {
        isJoinBag ?
          <View className='bag-box flex-between'>
            <View className="icon-box">
              <View className='home'>
                <AtIcon prefixClass='icon' value='home' size='20' color='#000' />
                <Text className='txt'>店铺</Text>
              </View>
              <View className='home'>
                <AtIcon prefixClass='icon' value='message' size='20' color='#000' />
                <Text className='txt'>客服</Text>
              </View>
              <View className='home'>
                <AtIcon prefixClass='icon' value='shopping1' size='20' color='#000' />
                <Text className='txt'>购物袋</Text>
                <Text className='badge-number'>
                  0
                </Text>
              </View>
            </View>
            <View className='shopping-box flex-between'>
              <View className='add-car' onClick={e => clickShopBtn(1)}>
                加入购物袋
              </View>
              <View className='now-buy' onClick={e => clickShopBtn(2)}>
                立即购买
              </View>
            </View>
          </View>
          :
          <View className='confirm-box'>
            <HwCheckbox
              optionList={optionList}
              selectedList={selectedList}
            />
          </View>
      }
      <AtFloatLayout isOpened={isOpened} onClose={closeLayout}>
        <BuyGoods
          closeModel={closeLayout}
          showGoodsType={showGoodsType}
        />
      </AtFloatLayout>
    </View>
  )
}
