import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
// import { apiData } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { apiData } from '../redux/action';

const ApiScreen = () => {


    const value = useSelector(e => e.apiReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(apiData()),
            setData(movie)
    }, [])

    const movie = value.movieData.movies;
    const [data, setData] = useState([]);
    return (
        <View>
            <Text >{value.movieData.title}</Text>
            {/* <Text >{movie}</Text> */}

            {data.map((item, index) => {
                return (
                    <Text key={index}>{item.id}</Text>
                )
            })}

        </View>
    )
}
export default ApiScreen;