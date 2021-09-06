import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Context from '../Context'

export const Counter = ({}) => {
  const context = useContext(Context)

  const [amountOfDrinks, setAmountOfDrinks] = useState()
  const [amountToPay, setAmountToPay] = useState(0)
  const [namesOfCocktails, setNamesOfCocktails] = useState(context)

  useEffect(() => {
    setAmountOfDrinks(context.length)
    setNamesOfCocktails(context + ',')
    setAmountToPay(context.length * 100)
  }, [context])

  return (
    <View style={style.ckeck}>
      <Text style={style.yourIrder}>Your order</Text>
      <View>
        <Text>Amount of your cocktails: {amountOfDrinks}</Text>
        <Text>Total amount to pay: {amountToPay} SEK</Text>
        <Text>Cocktail: {namesOfCocktails}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  ckeck: {
    marginTop: 40,
    backgroundColor: 'pink'
  },
  yourIrder: {
    fontWeight: 'bold'
  }
})
