import { useState } from 'react'
import { View, Text, Image } from '@tarojs/components';
import {
  AtIcon, AtInputNumber, AtModal, AtModalHeader,
  AtModalContent, AtModalAction, AtTextarea
} from 'taro-ui';
import foodImg from '../../static/img/zongzi.jpg';
import './index.less'

export default function FillOrder() {
  const [count, setCount] = useState(1);
  const [isOpened, setIsOpened] = useState(false);
  const [remark, setRemark] = useState('');
  const [tempRemark, setTempRemark] = useState('');
  const changeCount = val => {
    setCount(val);
  };
  const showModal = () => {
    setIsOpened(true);
    setTempRemark(remark)
  };
  const changeRemark = val => {
    setTempRemark(val);
  };
  const closeModal = () => {
    setIsOpened(false);
  };
  const clickConfirm = () => {
    setRemark(tempRemark);
    closeModal();
  };
  return (
    <View className='fillOrder-container'>
      <View className='location-item flex-between'>
        <View className='map-info'>
          <AtIcon className='map-icon' value='map-pin' size='20' color='#7f7f7f' />
          <Text className='wx-location'>选择微信收货地址</Text>
        </View>
        <AtIcon className='right-icon' value='chevron-right' size='20' color='#7f7f7f' />
      </View>
      <View className='order-list'>
        <View className='order-list-item flex-between'>
          <Image src={foodImg} />
          <View className='order-list-type'>
            <View className='order-item-head'>
              岩鱼香鲜肉板栗粽200g*5只散装
            </View>
            <View className='order-item-body'>
              选择口味:200g鲜肉板栗粽*5只
            </View>
          </View>
          <View className='order-list-count'>
            <View className='order-count-price'>￥49.80</View>
            <View className='order-count-number'>x1</View>
          </View>
        </View>
        <View className='option-item flex-between'>
          <Text className='option-title'>购买数量</Text>
          <AtInputNumber
            min={1}
            max={100}
            step={1}
            value={count}
            onChange={changeCount}
          />
        </View>
        <View className='option-item flex-between'>
          <Text className='option-title'>邮费</Text>
          <Text className='option-info'>包邮</Text>
        </View>
        <View className='option-item flex-between order-discount'>
          <Text className='option-title'>商店优惠</Text>
          <Text className='option-info'>没有可用优惠</Text>
        </View>
        <View className='option-item flex-between'>
          <Text className='option-title'>总金额</Text>
          <Text className='option-info'>￥100.10</Text>
        </View>
      </View>
      <View className='remark flex-between' onClick={showModal}>
        <Text className='remark-key'>备注信息</Text>
        <View className='remark-value text-overflow'>
          {
            remark === '' ?
              <Text className='remark-tip'>
                选填，建议先和商家沟通后再填写
              </Text> :
              <Text className='remark-tip text-overflow'>
                {remark}
              </Text>
          }
          <AtIcon value='chevron-right' size='20' color='#7f7f7f' />
        </View>
      </View>
      <View className='place-order flex-between'>
        <View className='place-price'>
          <Text>
            共1件，合计
            <Text className='price'>
              ￥19.80
            </Text>
          </Text>
        </View>
        <View className='place-order-btn'>
          下单
        </View>
      </View>
      <AtModal
        isOpened={isOpened}
        onClose={closeModal}
      >
        <AtModalHeader>添加备注</AtModalHeader>
        <AtModalContent>
          <AtTextarea
            placeholder='请输入'
            value={tempRemark}
            onChange={changeRemark}
            count={false}
          />
        </AtModalContent>
        <AtModalAction>
          <View className='btn-box flex-between'>
            <Text className='cancel-text' onClick={closeModal}>取消</Text>
            <Text className='confirm-text' onClick={clickConfirm}>确定</Text>
          </View>
        </AtModalAction>
      </AtModal>
    </View>
  )
}
