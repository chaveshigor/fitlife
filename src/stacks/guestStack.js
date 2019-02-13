import { createStackNavigator, createAppContainer } from "react-navigation";

//PAGES
import FirstPage from '../Pages/firstPage';
import Register from '../Pages/register';

const GuestStack = createStackNavigator({
  FirstPage: {
    screen: FirstPage
  },

  Register: {
    screen: Register
  }
  //PROXIMAS PAGINAS AQUI

});

export default createAppContainer(GuestStack);