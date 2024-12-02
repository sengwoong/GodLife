import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, vocaNavigations} from '../../constants';
import VocaScreen from '../../screens/voca/VocaScreen';
import VocaContentScreen from '../../screens/voca/VocaContentScreen';
import HomeHeaderLeft from './HomeHeaderLeft';
import VocaEditScreen from '../../screens/voca/VocaEditScreen';

export type VocaStackParamList = {
  [vocaNavigations.VOCAMAIN]: {vocaIndex: number};
  [vocaNavigations.VOCACONTENT]: {wordIndex: number};
  [vocaNavigations.VOCACONTENTEDIT]: undefined;
};

const Stack = createStackNavigator<VocaStackParamList>();

function VocaStackNavigator() {
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
        name={vocaNavigations.VOCAMAIN}
        component={VocaScreen}
        options={(navigation) => ({
          headerTitle: '보카',
          headerLeft: () => HomeHeaderLeft(),
        })}
      />
      <Stack.Screen
        name={vocaNavigations.VOCACONTENT}
        component={VocaContentScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
          cardStyle: {
            backgroundColor: colors.GRAY,
          },
        }}
      />
      <Stack.Screen
        name={vocaNavigations.VOCACONTENTEDIT}
        component={VocaEditScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default VocaStackNavigator;
