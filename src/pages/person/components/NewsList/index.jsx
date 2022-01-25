import React from 'react';
import {Image, View, Text} from '@tarojs/components';
import './index.less';
export default function NewsList(props) {
  const { avatar, name, lastMessage, sendUser, time } = props.data;
  return (
    <View className='news-list flex-between'>
      <Image className='img-avatar' src={avatar} mode='aspectFill' />
      <View className='info'>
        <View className='name'>
          {name}
        </View>
        <View className='detail flex-between'>
          <Text className='last-message text-over'>
            {sendUser}：{lastMessage}
          </Text>
          <Text className='time'>
            {time}
          </Text>
        </View>
      </View>
    </View>
  )
}
