import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/Restaurants";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    options: () => ({
      title: "Restaurants"
    })
  }
});

export default RestaurantsScreenStacks;
