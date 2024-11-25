import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import BottomTabNavigator from '../tab/FeedTabNavigator';

function RootNavigator() {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <MainDrawerNavigator /> :<AuthStackNavigator />
 }</>;
}

export default RootNavigator;
