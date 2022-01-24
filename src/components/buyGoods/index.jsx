import {View, Image, Text} from '@tarojs/components';
import {AtIcon, AtInputNumber, AtButton} from 'taro-ui';
import Taro from '@tarojs/taro'
import {useState} from 'react';
import './index.less'
import GoodsImg from '../../static/img/zongzi.jpg'
export default function BuyGoods(props) {
  const {closeModel, showGoodsType} = props;
  /*
    showGoodsType
    1：加入购物袋
    2：立即购买
    3：在tabBar操作，更新购物袋
    4：在商品详情页重新选择(显示"加入购物袋"和"立即购买"两个按钮)
     */
  const [goodsCount, setGoodsCount] = useState(1);
  const clickBlankModel = () => {
    closeModel();
  };
  const changeCount = value => {
    setGoodsCount(value);
  };
  const clickConfirm = () => {
    if (showGoodsType === 1) {
      Taro.showToast({
        icon: 'success',
        title: '已加入购物袋'
      });
      closeModel();
    } else if(showGoodsType === 2) {
      Taro.navigateTo({
        url: '/pages/fillOrder/index'
      });
      closeModel();
    } else if(showGoodsType === 3) {
      console.log('更新购物袋合计');
      closeModel();
    }
  };
  const clickShopBtn = type => {
    if(type === 1) {
      closeModel();
      Taro.showToast({
        icon: 'success',
        title: '已加入购物袋'
      });
    } else if (type === 2) {
      Taro.navigateTo({
        url: '/pages/fillOrder/index'
      });
      closeModel();
    }
  };
  return (
    <View className='buy-goods-container'>
      <View className="bottom-box">
        <AtIcon value='close' size='20' color='#000' onClick={clickBlankModel} />
        <View className='goods-info'>
          <Image src={GoodsImg} mode='aspectFill' />
          <View className='info'>
            <Text className='price'>￥19.80</Text>
            <Text className='stock'>
              库存
              <Text className='detail'>248</Text>
            </Text>
            <Text className='stock'>
              已选择
              <Text className='detail'>200g板栗鲜肉粽*2只</Text>
            </Text>
          </View>
        </View>
        <View className='flavor'>
          <View className='title'>口味</View>
          <View className='flavor-list'>
            <View className='flavor-item active'>
              200g板栗鲜肉粽*2只
            </View>
            <View className='flavor-item'>
              200g板栗鲜肉粽*2只
            </View>
            <View className='flavor-item'>
              200g板栗鲜肉粽*2只
            </View>
          </View>
        </View>
        <View className='count-box flex-between'>
          <View className='title'>数量</View>
          <AtInputNumber
            min={1}
            max={100}
            step={1}
            size='large'
            value={goodsCount}
            onChange={changeCount}
          />
        </View>
        {
          showGoodsType === 4 ?
            <View className='shopping-box flex-between'>
              <View className='add-car' onClick={e => clickShopBtn(1)}>
                加入购物袋
              </View>
              <View className='now-buy' onClick={e => clickShopBtn(2)}>
                立即购买
              </View>
            </View>
            : <AtButton onClick={clickConfirm}>确定</AtButton>
        }
      </View>
    </View>
  )
}
