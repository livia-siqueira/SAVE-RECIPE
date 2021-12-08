import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MealList } from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import DefaultText from "../components/DefaultText";


export function FavoritesScreen(props) {
  const favMeals = useSelector(state => state.meals.favoritesMeals);
  if(favMeals.length === 0 || !favMeals){
    return <View style={styles.view}>
      <DefaultText style={styles.text}>No Favorite meals foudns. Start adding some!</DefaultText>
    </View>
  }
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: colors.primaryColor,
    fontStyle: 'italic'
  }
})