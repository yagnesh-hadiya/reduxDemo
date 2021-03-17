import React, { useEffect } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';

const CounterScreen = () => {
  const redux = useSelector(state => state.counterReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    inc();
    dec();
  }, [])

  const inc = () => {
    return (
      dispatch(increment(redux.count + 1))
    )
  }
  const dec = () => {
    return (
      dispatch(decrement(redux.count - 1))
    )
  }

  return (
    <View>
      <Text>Counter</Text>
      <Text>{redux.count}</Text>
      <TouchableNativeFeedback onPress={() => inc()}>
        <Text  >+</Text>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => dec()}>
        <Text >-</Text>
      </TouchableNativeFeedback>

    </View>
  )
}
export default CounterScreen;