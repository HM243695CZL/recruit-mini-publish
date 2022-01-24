import {useState, useEffect} from 'react'
import { View, Text } from '@tarojs/components'
import { useDidShow, useDidHide } from '@tarojs/taro'
import {AtTabs, AtTabsPane, AtIcon} from 'taro-ui'
import Goods from '../../components/goods'
import Search from '../../components/search'
import './index.less'

export default function Index(props) {
  const [current, setCurrent] = useState(0);
  const [priceCount, setPriceCount] = useState(1); // 1 ：选中其他 2：升序 3：降序
  const tabList = [
    {
      title: '综合',
      key: 'default'
    },
    {
      title: '销量',
      key: 'new'
    },
    {
      title: '上新',
      key: 'count'
    },
    {
      title: (
        <View>
          <Text className='price-text'>
            价格
            <AtIcon className='icon-up' prefixClass='icon' value='caret-up' size='15' color={
              priceCount !== 2 && '#000' || priceCount === 2 && '#f40'
            } />
            <AtIcon className='icon-down' prefixClass='icon' value='caret-down' size='15' color={
              priceCount !== 3 && '#000' || priceCount === 3 && '#f40'
            } />
          </Text>
        </View>
      )
    }
  ];

  useEffect(() => {

  }, []);
  useDidHide(() => {
    console.log('hide index');
  });
  useDidShow(() => {
    console.log('show index');
  });
  const changeCurrent = index => {
    setCurrent(index);
    if(index === 3) {
      if (priceCount === 1 || priceCount === 3) {
        setPriceCount(2);
      } else if(priceCount === 2) {
        setPriceCount(3);
      }
    } else {
      setPriceCount(1);
    }
  };
  return (
    <View className='index-container'>
      <Search />
      <AtTabs
        animated={false}
        current={current}
        tabList={tabList}
        onClick={changeCurrent}
        swipeable={false}
      >
        <AtTabsPane current={current} index={0}>
          <Goods list={[1]} />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <Goods list={[1, 2]} />
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <Goods list={[1, 2, 3]} />
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <Goods list={[1, 2, 3, 4, 5]} />
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
