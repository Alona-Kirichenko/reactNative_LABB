import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export const PredictionnOfTheDay = () => {
  const [predictionArray, setPredictionArray] = useState([
    'Laugh long, loud, and often',
    'Beauty surounds you becouse you create it',
    'The star of riches is shining on you',
    'Pleasures await you by the sea',
    'Doors will be opening for you ',
    'You have a magnetic personality',
    'All your hard work will soon pay off',
    'The secret of getting ahead is getting started'
  ])
  const [randomNumber, setRandomNumber] = useState(0)
  const [questionAnswer, setQuestionAnswer] = useState('')

  const rendomPrediction = () => {
    const randomNumber = Math.floor(Math.random() * predictionArray.length)
    setRandomNumber(randomNumber)
    setQuestionAnswer(predictionArray[randomNumber])
  }

  return (
    <View>
      <Text style={style.prediction}>{questionAnswer}</Text>
      <Button
        title="Click to see you prediction"
        onPress={rendomPrediction}
      ></Button>
    </View>
  )
}
const style = StyleSheet.create({
  prediction: {
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 30
  }
})
