import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item114075Navigator from '../features/Add-Item114075/navigator';
import Maps114071Navigator from '../features/Maps114071/navigator';
import UserProfile114067Navigator from '../features/UserProfile114067/navigator';
import Settings114030Navigator from '../features/Settings114030/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item114075: { screen: Add-Item114075Navigator },
Maps114071: { screen: Maps114071Navigator },
UserProfile114067: { screen: UserProfile114067Navigator },
Settings114030: { screen: Settings114030Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
