import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';

function HomeHeaderLeft() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ padding: 10 }}
        >
            <Image 
                source={require('../../asset/images/Menu.png')}
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    );
}

export default HomeHeaderLeft;
