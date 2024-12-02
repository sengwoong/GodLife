import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeHeaderLeft() {

    const navigation = useNavigation(); 

    return (
       <TouchableOpacity 
         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={32} color="red" />
       </TouchableOpacity>
     );
}
    
export default HomeHeaderLeft;
