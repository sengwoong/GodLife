import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { mainNavigations } from '../../constants';

import HomeHeaderLeft from './HomeHeaderLeft';
import MainScreen from '../../screens/main/MainScreen';
import FeedScreen from '../../screens/feed/FeedScreen';

export type mainStackParamList = {
  [mainNavigations.MAIN]: undefined;
  [mainNavigations.FEED]: { feeditemIndex: number };
};

const Stack = createStackNavigator<mainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          shadowColor: 'gray',
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen
        name={mainNavigations.MAIN}
        component={MainScreen}
        options={{
          headerTitle: ' ',
          headerLeft: () => <HomeHeaderLeft />, // 수정된 부분
        }}
      />
      <Stack.Screen
        name={mainNavigations.FEED}
        component={FeedScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
          headerLeft: () => <HomeHeaderLeft />, // 수정된 부분
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainStackNavigator;
