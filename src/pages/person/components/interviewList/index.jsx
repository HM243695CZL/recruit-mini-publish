import React from 'react';
import {Image, View, Text} from '@tarojs/components';
import cx from 'classnames';
import './index.less';
export default function InterviewList(props) {
  const { avatar, name, edu, stationName, time, status} = props.data;
  return (
    <View className='interview-list flex-between'>
      <Image className='img-avatar' src={avatar} mode='aspectFill' />
      <View className='info'>
        <View className='name flex-between'>
          {name}
          <View className={cx({
            'status': true,
            'already': status === 0
          })}>{status === 0 ? '已面试' : '未面试'}</View>
        </View>
        <View className='detail flex-between'>
          <Text className='station-txt text-over'>
            {stationName} · {edu}
          </Text>
          <Text className='time'>
            {time}
          </Text>
        </View>
      </View>
    </View>
  )
}
