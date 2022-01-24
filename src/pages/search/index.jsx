import {useState} from 'react'
import { View, Text } from '@tarojs/components'
import {AtSearchBar} from 'taro-ui';
import './index.less'

export default function Search(props) {
  const [searchValue, setSearchValue] = useState('');
  const changeInput = data => {
    setSearchValue(data);
  };
  const clickSearch = () => {
    console.log(searchValue);
  };
  return (
    <View className='search-container'>
      <AtSearchBar
        showActionButton
        value={searchValue}
        onChange={changeInput}
        onActionClick={clickSearch}
       />
    </View>
  )
}
