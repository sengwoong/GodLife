import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { authNavigations, vocaNavigations } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<VocaStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;


function VocaScreen() {
  const navigation = useNavigation<Navigation>();

  const navigateToVocaContent = () => {
  navigation.navigate(vocaNavigations.VOCACONTENT, {wordIndex: 1});
  }


  return (
    <SafeAreaView>
       <Button title="Go to VocaContent" onPress={navigateToVocaContent} />
<Text>VocaScreen</Text>



    </SafeAreaView>
  )
}

export default VocaScreen
