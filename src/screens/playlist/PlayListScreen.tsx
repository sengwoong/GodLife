import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import {  PlayListNavigations } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import { PlayListStackParamList } from '../../navigations/stack/PlayListStackNavigator';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<PlayListStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;


function PlayListScreen() {
  const navigation = useNavigation<Navigation>();

  const navigateToVocaContent = () => {
  navigation.navigate(PlayListNavigations.PLAYLISTCONTENT, {playListIndex: 1});
  }


  return (
    <SafeAreaView>
       <Button title="Go to VocaContent" onPress={navigateToVocaContent} />
        <Text>PlayListscreen</Text>
    </SafeAreaView>
  )
}

export default PlayListScreen
