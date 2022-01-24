import {View, Text} from "@tarojs/components";
export default function Child(props) {
  return (
    <View>
      <Text>Child -components</Text>
      <br/>
      <Text>{props.children}</Text>
      <br/>
      <Text>{props.test}</Text>
    </View>
  )
}
