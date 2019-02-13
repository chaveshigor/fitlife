import { createStackNavigator, createAppContainer } from "react-navigation";

//CONFIGS
import headerConfigs from '../configs/header';

//PAGES
import Settings from '../Pages/settings';

const SettingsStack = createStackNavigator({
  SettingsStackList: {
    screen: Settings
  },

  //INSERT NEW PAGES HERE

  
},{
    defaultNavigationOptions: headerConfigs
});

export default createAppContainer(SettingsStack);