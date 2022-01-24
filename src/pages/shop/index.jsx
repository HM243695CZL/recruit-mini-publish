import { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ShoppingBar from '../../components/shoppingBar';
import ShopList from './shopList';

export default function Shop() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <View className='shop-container'>
      <View className='shop-bag-box'>
        <ShopList list={list} />
      </View>
      <View className='shop-bar'>
        <ShoppingBar
          isJoinBag={false}
        />
      </View>
    </View>
  )
}
