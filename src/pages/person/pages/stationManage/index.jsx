import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import StationList from '../../components/StationList';
import './index.less'
export default function StationManage() {
  const [list] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <View className='station-manage-container'>
      {
        list.map(item => <StationList />)
      }
    </View>
  )
}
