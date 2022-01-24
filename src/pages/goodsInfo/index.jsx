import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import {AtIcon, AtFloatLayout} from 'taro-ui';
import './index.less'
import HwSwiper from '../../components/hwSwiper'
import ShoppingBar from '../../components/shoppingBar'
import BuyGoods from '../../components/buyGoods';

export default function GoodsInfo() {
  const goodsParamsArr = [
    {
      text: '粽子大小',
      value: '大粽'
    },
    {
      text: '商品产地',
      value: '中国大陆'
    },
    {
      text: '包装',
      value: '散装'
    },
    {
      text: '口味',
      value: '咸味'
    }
  ];
  const [goodsParams] = useState(goodsParamsArr);
  const [isOpened, setIsOpened] = useState(false);
  const reSelectGood = () => {
    setIsOpened(true);
  };
  const closeLayout = () => {
    setIsOpened(false);
  };
  return (
    <View className='goodsInfo-container'>
      <View className="top-box">
        <HwSwiper swiperList={[1, 2, 3, 4, 5]} />
        <View className='price-box flex-between'>
          <View className="price">
            ￥19.80-21.80
            <View className='original-price'>
              ￥25.60
            </View>
          </View>
          <View className="buy">
            33人买过
          </View>
        </View>
        <View className='desc flex-between'>
          <View className='title text-overflow'>
            <View className='head text-overflow'>
              岩鱼香贞丰粽子蛋黄粽排骨粽板栗粽散装
              岩鱼香贞丰粽子蛋黄粽排骨粽板栗粽散装
            </View>
            <View className='body text-overflow'>
              贞丰粽子岩鱼香灰粽粑蛋黄粽排骨粽贵州
              贞丰粽子岩鱼香灰粽粑蛋黄粽排骨粽贵州
            </View>
          </View>
          <View className='share'>
            <AtIcon prefixClass='icon' value='share' size='20' color='#000' />
          </View>
        </View>
        <View className='deliver-goods'>
          <View className="title">发货</View>
          <View className='address-info'>
            黔西南布依族苗族自治州 快递包邮
            <View className="tip">
              付款后48小时内发货
            </View>
          </View>
        </View>
        <View className='selected-goods flex-between' onClick={reSelectGood}>
          <View className="title">选择</View>
          <View className='selected-info'>
            已选<View className='selected-item'>200g板栗鲜肉粽*2只</View>
          </View>
          <View className='arrow'>
            <AtIcon value='chevron-right' size='20' color='#7f7f7f' />
          </View>
        </View>
        <View className='goods-info'>
          <View className='title'>
            商品详情
          </View>
          <View className='info-img'>
            详情图片
          </View>
        </View>
        <View className='goods-params'>
          <View className='title'>
            商品参数
          </View>
          <View className='params-info'>
            {
              goodsParams.map(item => {
                return (
                  <View className='item flex-between'>
                    <View className='key'>{item.text}</View>
                    <View className='value'>{item.value}</View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='technical-support'>
          HM243695CZL提供技术支持
        </View>
      </View>
      <View className="shopping-bar-box">
        <ShoppingBar
          isJoinBag={true}
        />
      </View>
      <AtFloatLayout isOpened={isOpened} onClose={closeLayout}>
        <BuyGoods
          closeModel={closeLayout}
          showGoodsType={4}
        />
      </AtFloatLayout>
    </View>
  )
}
