import React, {useState} from 'react';
import { View, Text } from '@tarojs/components'
import NewsList from '../person/components/NewsList';
import './index.less'
export default function Index() {
  const [list] = useState([
    {
      avatar: 'https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '张三',
      lastMessage: '好的，明天见!',
      sendUser: '孔女士',
      time: '10:25'
    },
    {
      avatar: 'https://img0.baidu.com/it/u=1791194990,4113139263&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '法外狂徒',
      lastMessage: '请自行准备简历',
      sendUser: '李先生',
      time: '01-25'
    },
    {
      avatar: 'https://img0.baidu.com/it/u=2359361020,2055583759&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '李逍遥',
      lastMessage: '可以',
      sendUser: '黄经理',
      time: '17:45'
    },
    {
      avatar: 'https://img1.baidu.com/it/u=2476943548,3374522247&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '紫霞',
      lastMessage: '期待你的加入！',
      sendUser: '我',
      time: '昨天'
    },
  ]);
  return (
    <View className='index-container'>
      {
        list.map(item => <NewsList data={item} />)
      }
      <View className='save-time'>
        保留30日以内的记录
      </View>
    </View>
  )
}
