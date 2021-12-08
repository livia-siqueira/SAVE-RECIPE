import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const ItemFilter = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.nameFilter}>{props.title}</Text>
      <Switch
        value={props.value}
        thumbColor={Platform.OS === "android" ? colors.primaryColor : "white"}
        trackColor={{ true: colors.primaryColor }}
        onValueChange={(valuenew) => props.onValueChange(valuenew)}
      />
    </View>
  );
};

export function FiltersScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    dispatch(setFilters(appliedFilter))
  }, [isGlutenFree, isVegetarian, isLactoseFree, isVegan, dispatch]);

  const {navigation} = props;

  useEffect(() => {
      navigation.setParams({
          save: saveFilters
      });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaible Filters / Restrictions</Text>
      <ItemFilter
        title="Gluten-free"
        value={isGlutenFree}
        onValueChange={setIsGlutenFree}
      />
      <ItemFilter
        title="Lactose-Free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <ItemFilter
        title="Vegetarian"
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
      <ItemFilter title="Vegan" value={isVegan} onValueChange={setIsVegan} />
    </View>
  );
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

FiltersScreen.navigateOptions = {
  headerTitle: "Filter Meals",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  nameFilter: {
    fontSize: 20,
  },
});
