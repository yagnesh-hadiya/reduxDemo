import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';

const CounterScreen = () => {
  const count = useSelector(state => state.counterReducer);
  // console.log(count)
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Counter</Text>
      <Text>{count}</Text>
      <TouchableNativeFeedback onPress={() => dispatch(increment())}>
        <Text  >+</Text>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => dispatch(decrement())}>
        <Text >-</Text>
      </TouchableNativeFeedback>
      
    </View>
  )
}
export default CounterScreen;