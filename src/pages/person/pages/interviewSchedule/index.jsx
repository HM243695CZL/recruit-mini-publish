import React, {useState} from 'react';
import { View, Text } from '@tarojs/components'
import InterviewList from '../../components/InterviewList'
import './index.less'
export default function InterviewSchedule() {
  const [list] = useState([
    {
      avatar: 'https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '张三',
      edu: '硕士',
      stationName: 'web前端',
      time: '2022-01-25 14:30',
      status: 0
    },
    {
      avatar: 'https://img0.baidu.com/it/u=1791194990,4113139263&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '法外狂徒',
      edu: '大专',
      stationName: '产品经理',
      time: '2022-02-15 10:30',
      status: 0
    },
    {
      avatar: 'https://img0.baidu.com/it/u=2359361020,2055583759&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '李逍遥',
      edu: '硕士',
      stationName: 'Java开发',
      time: '2022-02-16 14:30',
      status: 1
    },
    {
      avatar: 'https://img1.baidu.com/it/u=2476943548,3374522247&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '紫霞',
      edu: '本科',
      stationName: '产品经理',
      time: '2022-02-20 10:30',
      status: 1
    },
    {
      avatar: 'https://img2.baidu.com/it/u=2078308964,2142755897&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      name: '至尊宝',
      edu: '本科',
      stationName: '销售',
      time: '2022-02-25 10:30',
      status: 0
    }
  ]);
  return (
    <View className='interview-schedule-container'>
      {
        list.map(item => <InterviewList data={item} />)
      }
      <View className='save-time'>
        保留30日以内的记录
      </View>
    </View>
  )
}
