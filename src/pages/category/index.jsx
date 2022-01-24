import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {AtIcon} from 'taro-ui';
import Taro from '@tarojs/taro';
import Search from '../../components/search';
import './index.less'

export default class Category extends Component {
  render () {
    const showProductList = () => {
      Taro.navigateTo({
        url: '/pages/productList/index'
      })
    };
    return (
      <View className='category-container'>
        <Search />
        <View className='category-list'>
          <View className='category-list-item flex-between' onClick={showProductList}>
            <Text>稻米</Text>
            <AtIcon value='chevron-right' size='20' color='#b2b2b2'/>
          </View>
        </View>
      </View>
    )
  }
}
