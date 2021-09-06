import React, { useContext, useEffect, useState } from 'react'

import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native'
import Context from '../Context'
// import Context from './Context'

import { Counter } from './Counter'
import { PredictionnOfTheDay } from './PredictionOfTheDay'
import { WriteReview } from './WriteReview'

export const GetACocktail = ({ drinkName }) => {
  const [isLoading, setLoading] = useState(true)

  const [data, setData] = useState([])
  const [drinkArray, setDrinkArray] = useState([])
  const [myDrink, setMyDrink] = useState('')

  console.log('get cocktail', drinkName)

  const addToDrinkArray = (d) => () => {
    setDrinkArray((prev) => [...prev, d])
  }

  console.log('ADD TO DRink array, drinkArray:', drinkArray)
  useEffect(() => {
    setMyDrink(drinkName)
  }, [drinkName])

  const test = () => {
    if (myDrink == 0) {
      getCocktails()
    } else {
      setData((c) => {
        return c.filter((drink) => drink.strDrink == myDrink)
      })
    }

    console.log('drink array', drinkArray)
    console.log('try to look', data)
    console.log('look for myDrink', myDrink)
  }

  const getCocktails = async () => {
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
      )

      const json = await response.json()
      setData(json.drinks)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCocktails()
  }, [])
  // onPress={() => test()}
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <Button
        onPress={() => test()}
        title="Search for cocktail/Back to menu "
      ></Button>
      <Text>Every cocktail cost 100 SEK</Text>
      <Text style={styles.menu}>Cocktails Menu:</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ idDrink }, index) => idDrink}
          renderItem={({ item }) => (
            <Text>
              {item.strDrink}
              <Button
                onPress={addToDrinkArray(item.strDrink)}
                style={styles.button}
                title="+"
              ></Button>{' '}
            </Text>
          )}
        />
      )}

      <Context.Provider value={drinkArray}>
        <Counter></Counter>
      </Context.Provider>

      <PredictionnOfTheDay></PredictionnOfTheDay>
      <WriteReview></WriteReview>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-end',
    color: 'pink'
  },
  menu: {
    marginTop: 20,
    paddingVertical: 20,
    fontWeight: 'bold',
    backgroundColor: 'pink'
  }
})
