import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import VocaStackNavigator, { VocaStackParamList } from '../stack/VocaStackNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import { mainNavigations } from '../../constants';
import MainScreen from '../../screens/main/MainScreen';
import CustomDrawerContent from './CustomDrawerContent';
import CalendarStackNavigator from '../stack/CalendarStackNavigator';
import PlayListStackNavigator from '../stack/PlayListStackNavigator';

const Drawer = createDrawerNavigator();

export type MainDrawerParamList = {
  [mainNavigations.PlayList]: undefined;
  [mainNavigations.CALENDAR]: undefined;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.SETTING]: undefined;
  [mainNavigations.MAIN]: undefined;
  [mainNavigations.VOCA]: NavigatorScreenParams<VocaStackParamList>;
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false, 
        drawerType: 'front',
      }}>
      <Drawer.Screen options={{headerShown: true}} name={mainNavigations.MAIN} component={MainScreen} />
      <Drawer.Screen options={{headerShown: true}} name={mainNavigations.FEED} component={FeedHomeScreen} />
      <Drawer.Screen  name={mainNavigations.CALENDAR} component={CalendarStackNavigator} />
      <Drawer.Screen name={mainNavigations.VOCA} component={VocaStackNavigator} />
      <Drawer.Screen name={mainNavigations.PlayList} component={PlayListStackNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
