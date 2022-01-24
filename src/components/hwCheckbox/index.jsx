import {View} from '@tarojs/components';
import {AtCheckbox} from 'taro-ui';
import './index.less';

export default function HwCheckbox(props) {
  const {optionList, selectedList} = props;
  return (
    <View className='hw-checkbox-container'>
      <AtCheckbox
        options={optionList}
        selectedList={selectedList}
      />
    </View>
  )
}
