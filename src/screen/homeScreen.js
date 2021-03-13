import React from 'react';
import { Button, Text,  View } from 'react-native';

const HomeScreen = (props) => {

    return (
        <View>
            <Button 
            title='Counter' 
            onPress={()=>props.navigation.navigate('CounterScreen')}
            />
             <Button 
            title='Api' 
            onPress={()=>props.navigation.navigate('ApiScreen')}
            />
        </View>
    )
}
export default HomeScreen;