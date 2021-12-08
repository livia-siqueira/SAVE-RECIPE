import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import colors from "../constants/colors";
import { Platform } from "react-native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { FiltersScreen } from "../screens/FiltersScreen";
const styleHeaderDefault = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans' //so afeta ios
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,
};

const MealsNavigation = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealsDetails: MealsDetailsScreen,
  },
  {
    //mode: 'modal'
    //initialRouteName: change page initial
    defaultNavigationOptions: styleHeaderDefault,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: styleHeaderDefault,
  }
);

const tabConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primaryColor,
      tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "FAVORITES",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Meals'
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
      activeColor: "white",
      shifting: true,
      barStyle: {
        backgroundColor: colors.primaryColor
      }
    })
    : createBottomTabNavigator(tabConfig, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans'
        },
        activeTintColor: colors.accentColor,
      },
    });

const MealsFilterNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
    },
  },
  {
    defaultNavigationOptions: styleHeaderDefault,
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: {
    screen: MealsFilterNavigator,
    navigationOptions: {
      drawerLabel: 'Filters'
    }
  },
}, {
  contentOptions: {
    activeTintColor: colors.accentColor,
    labelStyle:{
      fontFamily: 'open-sans-bold'
    },
  }
});

export default createAppContainer(MainNavigator);
