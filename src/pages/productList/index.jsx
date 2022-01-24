import { View, Text } from '@tarojs/components';
import Goods from '../../components/goods';
import './index.less'

export default function ProductList() {

  return (
    <View className='product-list-container'>
      <Goods list={[1, 2, 3]} />
    </View>
  )
}
