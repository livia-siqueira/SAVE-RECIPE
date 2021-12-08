import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MealList } from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
export function FavoritesScreen(props) {
  const favMeals = useSelector(state => state.meals.favoritesMeals);
  return <MealList data={favMeals} navigation={props.navigation} />;
}

FavoritesScreen.navigationOptions = (navData) => {
  
  
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
