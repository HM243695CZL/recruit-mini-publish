import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Taro, { useDidShow } from '@tarojs/taro';
import { AtInput } from 'taro-ui';
import './index.less'
export default function PublishStation() {
  const [companyInfo] = useState('某某某科技有限公司');
  const [stationType, setStationType] = useState('web前端');
  const [stationName, setStationName] = useState('');
  const [skill] = useState(['Vue', 'React']);
  const [salary, setSalary] = useState('22-25K');
  const [salaryVal, setSalaryVal] = useState([21, 3]);
  const [experience, setExperience] = useState('不限');
  const [experienceVal, setExperienceVal] = useState([0]);
  const [edu, setEdu] = useState('本科');
  const [eduVal, setEduVal] = useState([4]);
  const [salaryList, setSalaryList] = useState([
    [], []
  ]);
  const [experienceList] = useState(['不限', '在校生', '应届生', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上']);
  const [eduList] = useState(['初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士']);
  const changeStationType = () => {
    Taro.navigateTo({
      url: '/pages/person/pages/stationType/index'
    })
  };
  const changeStationName = stationNameValue => {
    setStationName(stationNameValue);
  };
  const changeSkill = () => {
    Taro.navigateTo({
      url: '/pages/person/pages/skillList/index'
    })
  };
  const changeSalary = salaryValue => {
    setSalaryVal([salaryValue.detail.value[0], salaryValue.detail.value[1]]);
    setSalary(parseInt(salaryList[0][salaryValue.detail.value[0]]) + '-' + salaryList[1][salaryValue.detail.value[1]]);
  };
  const changeSalaryColumn = columnValue => {
    if (columnValue.detail.column === 0) {
      let selectableArr = [];
      let selectedStartNumber = parseInt(salaryList[0][columnValue.detail.value]);
      if (selectedStartNumber < 30) {
        for (let i = 0; i < 8; i ++) {
          selectedStartNumber ++;
          selectableArr.push(selectedStartNumber + 'K');
        }
      } else if (selectedStartNumber => 30 && selectedStartNumber < 100) {
        for (let i = 0; i < 5; i ++) {
          selectedStartNumber += 5;
          selectableArr.push(selectedStartNumber + 'K');
        }
      } else {
        for (let i = 0; i < 5; i ++) {
          selectedStartNumber += 10;
          selectableArr.push(selectedStartNumber + 'K');
        }
      }
      setSalaryVal([columnValue.detail.value, 0]);
      salaryList[1] = selectableArr;
      setSalaryList([...salaryList]);
    }
  };
  const changeExperience = experienceValue => {
    setExperienceVal([experienceValue.detail.value]);
    setExperience(experienceList[experienceValue.detail.value]);
  };
  const changeEdu = eduValue => {
    setEduVal([eduValue.detail.value]);
    setEdu(eduList[eduValue.detail.value]);
  };
  useDidShow(() => {
    let startSalaryArr = [];
    let endSalaryArr = [];
    for (let i = 1; i < 30; i ++) {
      startSalaryArr.push(i + 'K');
    }
    for (let i = 0; i < 14; i ++) {
      startSalaryArr.push(30 + i * 5 + 'K');
    }
    for (let i = 0; i < 21; i ++) {
      startSalaryArr.push(100 + i * 10 + 'K');
    }
    for (let i = parseInt(salary); i < 28; i ++) {
      endSalaryArr.push(i + 'K');
    }
    setSalaryList([startSalaryArr, endSalaryArr]);
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1]; // 获取当前页面
    if (currPage.data.selectedStation) {
      setStationType(currPage.data.selectedStation);
    }
  });
  return (
    <View className='publish-station-container'>
      <View className='publish-box'>
        <View className='property flex-between'>
          <Text className='txt'>公司信息</Text>
          <View className='right'>
            {companyInfo}
          </View>
        </View>
        <View className='property flex-between' onClick={e => changeStationType(e)}>
          <Text className='txt'>职位类型</Text>
          <View className='right'>
            {
              stationType === '' ? <Text className='null-tip'>请选择</Text> : stationType
            }
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <View className='property flex-between'>
          <Text className='txt'>职位名称</Text>
          <AtInput
            name='stationName'
            type='text'
            placeholder='请输入职位名称'
            value={stationName}
            onChange={changeStationName}
          />
        </View>
        <View className='property flex-between' onClick={e => changeSkill()}>
          <Text className='txt'>技能要求</Text>
          <View className='right'>
            {
              skill.length === 0 ? <Text className='null-tip'>请选择</Text> : skill.join(',')
            }
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <Picker
          mode='multiSelector'
          range={salaryList}
          value={salaryVal}
          onChange={e => changeSalary(e)}
          onColumnChange={e => changeSalaryColumn(e)}
        >
          <View className='property flex-between'>
            <Text className='txt'>薪资范围</Text>
            <View className='right'>
              {salary === '' ? <Text className='null-tip'>请选择</Text> : salary}
              <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
            </View>
          </View>
        </Picker>
        <Picker
          mode='selector'
          range={experienceList}
          value={experienceVal}
          onChange={e => changeExperience(e)}
        >
          <View className='property flex-between'>
            <Text className='txt'>经验要求</Text>
            <View className='right'>
              {experience}
              <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
            </View>
          </View>
        </Picker>
        <Picker
          mode='selector'
          range={eduList}
          value={eduVal}
          onChange={e => changeEdu(e)}
        >
          <View className='property flex-between'>
            <Text className='txt'>学历要求</Text>
            <View className='right'>
              {edu}
              <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
            </View>
          </View>
        </Picker>
        <View className='property flex-between'>
          <Text className='txt'>工作城市</Text>
        </View>
      </View>
      <View className='btn-box'>
        <View className='save-btn'>发布</View>
      </View>
    </View>
  )
}