import React from 'react';
import {Text, View} from '@tarojs/components';
import Taro from '@tarojs/taro'
import './index.less';
export default function StationList(){
  const showInfo = () => {
    Taro.navigateTo({
      url: '/pages/person/pages/publishStation/index?type=edit'
    })
  };
  return (
    <View className='list-item' onClick={showInfo}>
      <View className='title flex-between'>
        <Text className='name'>web前端开发工程师</Text>
        <Text className='salary'>22-25K</Text>
      </View>
      <View className='require'>
        1-3年 <Text className='edu'>本科</Text>
      </View>
      <View className='publish-info flex-between'>
        <View className='place flex-start'>
          <Text className='publish-city'>
            贵阳
            <Text className='place-area'>观山湖区</Text>
          </Text>
        </View>
        <Text className='time'>2022-01-25 10:30</Text>
      </View>
    </View>
  )
}
