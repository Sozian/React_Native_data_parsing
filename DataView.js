import { View, Text } from 'react-native'
import React from 'react'

const DataView = ({route}) => {

    const {name, email}=route.params;
  return (
    <View>
      <Text>name:{name}</Text>
      <Text>email:{email}</Text>
    </View>
  )
}

export default DataView