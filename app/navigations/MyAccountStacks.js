import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account/MyAccount";

const MyAccountScreenStacks = createStackNavigator({
  Restaurants: {
    screen: MyAccountScreen,
    options: () => ({
      title: "Cuenta"
    })
  }
});

export default MyAccountScreenStacks;
