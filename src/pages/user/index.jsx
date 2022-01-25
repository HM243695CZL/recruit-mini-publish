import React, { useState } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import { AtIcon, AtModal, AtModalContent, AtModalAction } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function User() {
  const [isOpened, setIsOpened] = useState(false);
  const [iconList] = useState([
    { icon: 'star', text: '职位管理', value: 'stationManage' },
    { icon: 'calendar', text: '面试日程', value: 'interviewSchedule' },
    { icon: 'stop', text: '发布职位', value: 'publishStation'},
    { icon: 'user', text: '切换为求职者', value: ''},
  ]);
  const clickHeadCard = () => {
    Taro.navigateTo({
      url: '/pages/person/pages/personInfo/index'
    })
  };

  const clickTab = data => {
    if (data.value === '') {
      setIsOpened(true);
    } else {
      Taro.navigateTo({
        url: `/pages/person/pages/${data.value}/index`
      })
    }
  };
  const closeModal = () => {
    setIsOpened(false);
  };
  const clickConfirm = () => {
    setIsOpened(false);
  };
  return (
    <View className='user-container'>
      <View className="head-card flex-between" onClick={e => clickHeadCard()}>
        <View className="left">
          <View className="name">张三</View>
          <View className="online-resume">
            点击去认证
          </View>
        </View>
        <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
      </View>
      <View className='icon-list'>
        {
          iconList.map(item => {
            return (
              <View className='item-box flex-between' onClick={e => clickTab(item)}>
                <View className='left flex-start'>
                  <AtIcon value={item.icon} size='20' color='#787878' />
                  <Text className='txt'>{item.text}</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#787878' />
              </View>
            )
          })
        }
      </View>
      <View className='logout-btn'>
        <View className='logout'>退出登录</View>
      </View>
      <View className='technical-support'>
        HM243695CZL提供技术支持
      </View>
      <AtModal
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        <AtModalContent>
          <View className='modal-box'>
            即将打开“求职者”小程序
          </View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={e => closeModal()}>取消</Button>
          <Button onClick={e => clickConfirm()}>允许</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}
