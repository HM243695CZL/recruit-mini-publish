import {View, Text} from '@tarojs/components';
import {AtIcon} from 'taro-ui';
import './index.less';

export default function DiscountInfo(props) {
  const {closeModel} = props;
  const clickBlankModel = () => {
    closeModel();
  };
  return (
    <View className='discount-info-container'>
      <View className='head'>
        <AtIcon className='icon-close' value='close' size='20' color='#000' onClick={clickBlankModel} />
        <Text className='discount-title'>金额优惠明细</Text>
      </View>
      <View className='discount-body'>
        <View className='discount-list'>
          <View className='discount-item flex-between'>
            <Text className='discount-key'>商品总价</Text>
            <Text className='discount-value'>￥481.70</Text>
          </View>
          <View className='discount-item flex-between'>
            <Text className='discount-key'>店铺优惠</Text>
            <Text className='discount-value'>-￥0</Text>
          </View>
          <View className='discount-item flex-between'>
            <Text className='discount-key'>合计</Text>
            <Text className='discount-value'>￥481.70</Text>
          </View>
          <View className='discount-tip'>
            合计金额不含运费
          </View>
        </View>
      </View>
    </View>
  )
}
