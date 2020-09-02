import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import CountScreen from './src/screens/CountScreen'
import ColorScreen from './src/screens/ColorScreen'
import SqureColor from './src/screens/SqureColor'
import SqureReducerScreen from './src/screens/squreReducerScreen'
import CountReducer from './src/screens/CountReducer'
import ShowName from './src/screens/ShowName'
import BoxScreen from './src/screens/BoxScreen'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List :ListScreen,
    Images:ImageScreen,
    Count:CountScreen,
    Color:ColorScreen,
    SqureColor:SqureColor,
    SqureReducerScreen:SqureReducerScreen,
    CountReducer:CountReducer,
    ShowName:ShowName,
   BoxScreen:BoxScreen
  },
  {
    // mige kodom component aval bayad neshoon dade beshan ke inja 'componets '
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
