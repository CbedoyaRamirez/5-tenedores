import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RestaurantsStack from "./RestaurantsStacks";
import { Icon } from "react-native-elements";

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestaurantsStack,
    navigationOptions: () => ({
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({ tintColor }) => {
        <Icon
          type="material-comunity"
          name="compass-outline"
          size={22}
          color={tintColor}
        />;
      }
    })
  }
});

export default createAppContainer(NavigationStacks);
