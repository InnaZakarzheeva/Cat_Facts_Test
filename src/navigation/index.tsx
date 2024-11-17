import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FactsScreen, InformationScreen} from '../screens';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: FactsScreen,
    Details: InformationScreen,
  },
});
export type RootStackParamList = StaticParamList<typeof RootStack>;

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
