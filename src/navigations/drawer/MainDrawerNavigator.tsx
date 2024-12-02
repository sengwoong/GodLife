import {createDrawerNavigator} from '@react-navigation/drawer';

import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';
import HomeScreen from '../../screens/main/HomeScreen';
import PlayListScreen from '../../screens/playlist/PlayListScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={HomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
      <Drawer.Screen name="PlayListScreen" component={PlayListScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
