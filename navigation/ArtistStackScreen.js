import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArtistsScreen from '../screens/ArtistsScreen';
import ArtistDetailScreen from '../screens/ArtistDetailScreen';


const ArtistStack = createNativeStackNavigator();

const ArtistStackScreen = () => {
    return (
       <ArtistStack.Navigator>
           <ArtistStack.Screen name = "Artist" component= {ArtistsScreen} options= {{headerShown : false}}></ArtistStack.Screen>
           <ArtistStack.Screen name = "ArtistDetail" component= {ArtistDetailScreen} options={{headerShown: false}} ></ArtistStack.Screen>
       </ArtistStack.Navigator>
    )
}

export default ArtistStackScreen
