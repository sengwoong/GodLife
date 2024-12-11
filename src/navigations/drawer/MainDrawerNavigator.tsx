import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from '../../screens/feed/FeedScreen';
import VocaStackNavigator, { VocaStackParamList } from '../stack/VocaStackNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import { drawerNavigations } from '../../constants';
import MainScreen from '../../screens/main/MainScreen';
import CustomDrawerContent from './CustomDrawerContent';
import CalendarStackNavigator from '../stack/CalendarStackNavigator';
import PlayListStackNavigator from '../stack/PlayListStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';
import { FeedDetailScreen } from '../../screens/feed/FeedDetailScreen';
const Drawer = createDrawerNavigator();

export type MainDrawerParamList = {
  [drawerNavigations.PlayList]: undefined;
  [drawerNavigations.CALENDAR]: undefined;
  [drawerNavigations.SETTING]: undefined;
  [drawerNavigations.MAIN]: undefined;
  [drawerNavigations.VOCA]: NavigatorScreenParams<VocaStackParamList>;
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false, 
        drawerType: 'front',
      }}>
      <Drawer.Screen  name={drawerNavigations.MAIN} component={MainStackNavigator} />
      <Drawer.Screen  name={drawerNavigations.CALENDAR} component={CalendarStackNavigator} />
      <Drawer.Screen name={drawerNavigations.VOCA} component={VocaStackNavigator} />
      <Drawer.Screen name={drawerNavigations.PlayList} component={PlayListStackNavigator} />
      <Drawer.Screen options={{headerShown: true}} name={drawerNavigations.SETTING} component={FeedDetailScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
