import { createStackNavigator, createAppContainer } from "react-navigation";

//CONFIGS
import headerConfigs from '../configs/header';

//PAGES
import Main from '../Pages/main';
import PersonalProfile from '../Pages/personalProfile';
import Service from '../Pages/service';

const MainStack = createStackNavigator({

  MainStackLocations: {
    screen: Main
  },
  
  MainStackPersonalProfile: {
    screen: PersonalProfile
  },
  
  MainStackService: {
    screen: Service
  },

},{
    defaultNavigationOptions: headerConfigs
});

export default createAppContainer(MainStack);