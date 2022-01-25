import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import { AtTextarea } from 'taro-ui';
import Taro, { useReady} from '@tarojs/taro';
import './index.less'

export default function StationDesc(){
  const [content, setContent] = useState('主要包括工作内容，工作职责，任职条件，工作所要求的技能，工作对个性的要求也可以写在工作说明书中。');
  const [textareaHeight, setTextareaHeight] = useState(100);
  const changeContent = contentValue => {
    setContent(contentValue);
  };
  useReady(() => {
    const container = Taro.createSelectorQuery().select('#stationDescBox').boundingClientRect();
    const btnRef = Taro.createSelectorQuery().select('#btnRefStation').boundingClientRect();
    container.exec(function (res) {
      btnRef.exec(function (btnRes) {
        const height = res[0].height - btnRes[0].height - 30 * 2 - 20;
        setTextareaHeight(height * 2);
      })
    })
  });
  return (
    <View className='station-desc-container' id='stationDescBox'>
      <View className='station-box'>
        <AtTextarea
          value={content}
          onChange={changeContent}
          maxLength={200}
          placeholder='填写职位描述'
          autoFocus={true}
          focus={true}
          height={textareaHeight}
        />
      </View>
      <View className='btn-box' id='btnRefStation'>
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
