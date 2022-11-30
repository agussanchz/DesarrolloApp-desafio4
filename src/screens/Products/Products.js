import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styleProducts'

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Products</Text>
        <Button 
        title='Detalle del producto'
        color='lightblue'
        onPress={() => navigation.navigate('Product')}
        />
    </View>
  )
}
