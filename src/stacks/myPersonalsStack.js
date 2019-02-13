import { createStackNavigator, createAppContainer } from "react-navigation";

//CONFIGS
import headerConfigs from '../configs/header';

//PAGES
import MyPersonals from '../Pages/myPersonals';
import PersonalProfile from '../Pages/personalProfile';

const MyPersonalsStack = createStackNavigator({
  MyPersonalsStackList: {
    screen: MyPersonals
  },

  MyPersonalsStackPersonalProfile: {
    screen: PersonalProfile
  },

  
},{
    defaultNavigationOptions: headerConfigs
});

export default createAppContainer(MyPersonalsStack);