import {useState} from 'react';
import {View} from '@tarojs/components';
import {AtFloatLayout} from 'taro-ui';
import Taro from '@tarojs/taro';
import HwCheckbox from '../../components/hwCheckbox';
import BuyGoods from '../../components/buyGoods';
import ShopListItem from './shopListItem';
import './shop-list.less';
export default function ShopList(props) {
  const {list} = props;
  const [isOpened, setIsOpened] = useState(false);
  const showBuyGoods = () => {
    setIsOpened(true);
    Taro.hideTabBar({
      animation: false
    })
  };
  const closeLayout = () => {
    setIsOpened(false);
    Taro.showTabBar({
      animation: true
    })
  };
  const [selectedList, setSelectedList] = useState([1, 3]);
  const [optionList] = useState([
    {
      value: 1,
      label: '',
      desc: <ShopListItem
        showBuyGoods={showBuyGoods}
      />
    },
    {
      value: 2,
      label: '',
      desc: <ShopListItem
        showBuyGoods={showBuyGoods}
      />
    },
    {
      value: 3,
      label: '',
      desc: <ShopListItem
        showBuyGoods={showBuyGoods}
      />
    }
  ]);
  return (
    <View className='shop-list-container'>
      <View className='list'>
        <View className='list-item'>
          <HwCheckbox
            optionList={optionList}
            selectedList={selectedList}
          />
        </View>
      </View>
      <AtFloatLayout isOpened={isOpened} onClose={closeLayout}>
        <BuyGoods
          closeModel={closeLayout}
          showGoodsType={3}
        />
      </AtFloatLayout>
    </View>
  )
}
