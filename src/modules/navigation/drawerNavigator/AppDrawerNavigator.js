import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerContentComponent from '../../../components/navigation/CustomDrawerContentComponent';
import drawerRouteConfig from './drawerRouteConfig';

export default createDrawerNavigator(drawerRouteConfig, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
