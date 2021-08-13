// In App.js in a new project

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen'; // bunu eklemek için de HomeScreen yazarsın gelene tıklarsın v e 7. satır otomatik gelir.
import ArtistsScreen from './screens/ArtistsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import Categories from './screens/CategoriesScreen';
import ArtistStackScreen from './navigation/ArtistStackScreen'



const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="News" component={NewsScreen}></Tab.Screen>
        <Tab.Screen name="Categories" component={Categories}></Tab.Screen>
        <Tab.Screen name="Artists" component={ArtistStackScreen}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;