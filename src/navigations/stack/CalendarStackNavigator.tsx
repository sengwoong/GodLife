import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, CalendarNavigations} from '../../constants';

import calendarHomeHeaderLeft from './HomeHeaderLeft';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';
import CalendarEditScreen from '../../screens/calendar/CalendarEditScreen';

export type calendarStackParamList = {
  [CalendarNavigations.CALENDAR]: undefined;
  [CalendarNavigations.CALENDAREDIT]: {calendaritemIndex: number};
};

const Stack = createStackNavigator<calendarStackParamList>();

function CalendarStackNavigator() {
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
      }}>
      <Stack.Screen
        name={CalendarNavigations.CALENDAR}
        component={CalendarHomeScreen}
        options={(navigation) => ({
          headerTitle: '캘린더',
          headerLeft: () => calendarHomeHeaderLeft(),
        })}
      />
      <Stack.Screen
        name={CalendarNavigations.CALENDAREDIT}
        component={CalendarEditScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CalendarStackNavigator;
