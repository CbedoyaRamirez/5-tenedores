import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";

const MyAccountScreenStacks = createStackNavigator({
  Account: {
    screen: MyAccountScreen,
    options: () => ({
      title: "Cuenta"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: "Registrar"
    })
  }
});

export default MyAccountScreenStacks;
