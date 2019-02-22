import { createStackNavigator, createAppContainer } from "react-navigation";

//CONFIGS
import headerConfigs from '../configs/header';

//PAGES
import MyPersonalsTab from '../tabs/myPersonalsTab';
import PersonalProfile from '../Pages/personalProfile';

const MyPersonalsStack = createStackNavigator({
  
  MyPersonalsStackList: {
    screen: MyPersonalsTab
  },
  
},{
    defaultNavigationOptions: headerConfigs
});

export default createAppContainer(MyPersonalsStack);