import { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Search from '../../components/search'
import avatarImg from '../../static/img/user-avatar.jpg'
import './index.less'
import {AtIcon} from 'taro-ui';

export default function User() {

  const iconList = [
    {
      value: 'order',
      text: '全部订单'
    },
    {
      value: 'pay_collect',
      text: '待付款'
    },
    {
      value: 'daishouhuo',
      text: '待收货'
    },
    {
      value: 'refund',
      text: '退款/售后'
    }
  ];
  const [discountList] = useState([
    {
      text: '我的优惠卷'
    },
    {
      text: '我的地址'
    }
  ])
  const [typeList] = useState(iconList);
  return (
    <View className='user-container'>
      <Search />
      <View className='user-info-box'>
        <View className='user-info'>
          <Image src={avatarImg} mode='aspectFill' />
          <Text className='username'>渐行渐远</Text>
        </View>
      </View>
      <View className='user-type-list'>
        {
          typeList.map(item => {
            return (
              <View className='user-list-item'>
                <AtIcon prefixClass='icon' value={item.value} size='30' color='#191919' />
                <Text className='text'>{item.text}</Text>
              </View>
            )
          })
        }
      </View>
      <View className='user-discount'>
        {
          discountList.map(item => {
            return (
              <View className='discount flex-between'>
                <Text>{item.text}</Text>
                <AtIcon value='chevron-right' size='15' color='#191919' />
              </View>
            )
          })
        }
      </View>
      <View className='user-discount'>
        <View className='discount discount-connect flex-between'>
          <Text>联系商家</Text>
          <AtIcon value='chevron-right' size='15' color='#191919' />
        </View>
      </View>
      <View className='open-shop'>
        <Text>我要开店</Text>
      </View>
    </View>
  )
}
