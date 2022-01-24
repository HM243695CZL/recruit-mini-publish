import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtInput } from 'taro-ui';
import './index.less'

export default function PersonInfo(){
  const [username, setUsername] = useState('张三');
  const [companyName, setCompanyName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const changeUsername = usernameValue => {
    setUsername(usernameValue);
  };
  const changeCompanyName = companyNameValue => {
    setCompanyName(companyNameValue);
  };
  const changeJob = jobValue => {
    setJob(jobValue);
  };
  const changeEmail = emailValue => {
    setEmail(emailValue);
  };
  return (
    <View className='person-info-container'>
      <View className='info-box'>
        <View className='avatar flex-between'>
          <Text>头像</Text>
          <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
        </View>
        <View className='property flex-between'>
          <Text>姓名</Text>
          <AtInput
            name='username'
            type='text'
            placeholder='姓名'
            value={username}
            onChange={changeUsername}
          />
        </View>
        <View className='property flex-between'>
          <Text>我的公司</Text>
          <AtInput
            name='companyName'
            type='text'
            placeholder='您当前就职的公司'
            value={companyName}
            onChange={changeCompanyName}
          />
        </View>
        <View className='property flex-between'>
          <Text>我的职务</Text>
          <AtInput
            name='job'
            type='text'
            placeholder='您在公司担任的职务'
            value={job}
            onChange={changeJob}
          />
        </View>
        <View className='property flex-between'>
          <Text>我的邮箱(接收简历用)</Text>
          <AtInput
            name='email'
            type='text'
            placeholder='选填，您的企业邮箱'
            value={email}
            onChange={changeEmail}
          />
        </View>
      </View>
      <View className='btn-box'>
        <View className='save-btn'>完成</View>
      </View>
    </View>
  )
}
