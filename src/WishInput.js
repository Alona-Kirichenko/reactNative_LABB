import React, { useState } from 'react'
import { TextInput, View, Button, StyleSheet } from 'react-native'
import { Counter } from './Counter'
import { GetACocktail } from './GetACocktail'

export const WishInput = () => {
  const [wish, setWish] = useState('')

  return (
    <View>
      <TextInput
        onChangeText={setWish}
        value={wish}
        style={style.input}
        placeholder="Write the cocktail you want to order "
      />

      <GetACocktail drinkName={wish} />
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    margin: 5,
    paddingVertical: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10
  }
})
