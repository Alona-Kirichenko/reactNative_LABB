import React, { useState } from 'react'
import { TextInput, View, Button, StyleSheet, Text } from 'react-native'

export const WriteReview = () => {
  const [review, setReview] = useState('')
  const [allReviews, setAllReviews] = useState([])

  const writeAreview = (r) => () => {
    if (review.trim()) {
      setAllReviews((prev) => [...prev, r])
      setReview('')
    } else {
      console.log('empty')
    }
  }

  return (
    <View>
      <TextInput
        onChangeText={setReview}
        value={review}
        placeholder="Write your review"
        style={style.input}
      ></TextInput>
      <Button
        style={style.button}
        title="Leave my review"
        onPress={writeAreview(review)}
      ></Button>
      <Text style={style.review}>{allReviews}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    paddingVertical: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40
  },
  review: {
    marginTop: 10
  },
  button: {
    marginBottom: 40
  }
})
