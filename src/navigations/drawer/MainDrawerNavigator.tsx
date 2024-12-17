import {createDrawerNavigator} from '@react-navigation/drawer';
import VocaStackNavigator, { VocaStackParamList } from '../stack/VocaStackNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import { drawerNavigations } from '../../constants';
import CustomDrawerContent from './CustomDrawerContent';
import CalendarStackNavigator from '../stack/CalendarStackNavigator';
import PlayListStackNavigator from '../stack/PlayListStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';
import SettingScreen from '../../screens/setting/SettingScreen';
import FeedStackNavigator from '../stack/FeedStackNavigator';

const Drawer = createDrawerNavigator();

export type MainDrawerParamList = {
  [drawerNavigations.PlayList]: undefined;
  [drawerNavigations.CALENDAR]: undefined;
  [drawerNavigations.SETTING]: undefined;
  [drawerNavigations.MAIN]: undefined;
  [drawerNavigations.VOCA]: NavigatorScreenParams<VocaStackParamList>;
  [drawerNavigations.FEED]: undefined;
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false, 
        drawerType: 'front',
      }}>
      <Drawer.Screen name={drawerNavigations.MAIN} component={MainStackNavigator} />
      <Drawer.Screen name={drawerNavigations.CALENDAR} component={CalendarStackNavigator} />
      <Drawer.Screen name={drawerNavigations.VOCA} component={VocaStackNavigator} />
      <Drawer.Screen name={drawerNavigations.PlayList} component={PlayListStackNavigator} />
      <Drawer.Screen options={{headerShown: true}} name={drawerNavigations.SETTING} component={SettingScreen} />
      <Drawer.Screen name={drawerNavigations.FEED} component={FeedStackNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
