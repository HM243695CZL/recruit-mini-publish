import {View} from "@tarojs/components";
import {AtFab, AtIcon} from 'taro-ui'
import Taro from '@tarojs/taro'
export default function Search(props) {
  const showSearchInfo = () => {
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  };
  return (
    <View className='search-content'>
      <AtFab onClick={showSearchInfo} size='small'>
        <AtIcon prefixClass='icon' value='search' size='20' color='#171717' />
      </AtFab>
    </View>
  )
}
