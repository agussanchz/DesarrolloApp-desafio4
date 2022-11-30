import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styleCategories'

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>CATEGORIES</Text>
        <Button
        title='Ir a productos'
        color='lightblue'
        onPress={() => navigation.navigate('Products')}
        />
    </View>
  )
}
