import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchScreenStacks = createStackNavigator({
  Restaurants: {
    screen: SearchScreen,
    options: () => ({
      title: "Buscar"
    })
  }
});

export default SearchScreenStacks;
