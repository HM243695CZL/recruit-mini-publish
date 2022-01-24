import {View, Text} from "@tarojs/components";
import GoodsItem from './goodsItem'
import './index.less'
export default function Goods(props) {
  const {list} = props;
  return (
    <View className='goods-container'>
      {
        list.map(item => {
          return (
            <GoodsItem key={item} />
          )
        })
      }
    </View>
  )
}
