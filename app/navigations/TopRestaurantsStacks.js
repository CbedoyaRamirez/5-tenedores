import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurants";

const TopRestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: TopRestaurantsScreen,
    options: () => ({
      title: "Top Restaurantes"
    })
  }
});

export default TopRestaurantsScreenStacks;
