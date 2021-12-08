import React from "react";
import {
  ScrollView,
  Image,
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import DefaultText from "../components/DefaultText";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";

const ListItem = (props) => {
  return (
    <View style={styles.itens}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export default function MealsDetailsScreen(props) {
  const idMeal = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === idMeal);

  const ingredients = selectedMeal.ingredients;
  const steps = selectedMeal.steps;

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.bgImage} />
      <View style={styles.content}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={styles.lists}>
        <Text style={styles.title}>Ingredients</Text>
        {ingredients.map((ingr) => (
          <ListItem key={ingr}>{ingr}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {steps.map((step, index) => (
          <ListItem key={step}>
            <Text style={styles.indexNumber}>{index + 1}º</Text> {step}
          </ListItem>
        ))}
      </View>
      <View>
        <Button
          title="Go Back To Categories"
          onPress={() => {
            props.navigation.popToTop(); //tela raiz
          }}
        />
      </View>
    </ScrollView>
  );
}

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const idMeal = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === idMeal);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: 200,
  },
  content: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: colors.primaryColor,
  },
  itens: {
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },
  lists: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  indexNumber: {
      color: colors.primaryColor,
      fontFamily: 'open-sans-bold',
      fontSize: 18,
  }
});

//<FlatList data={ingredients} keyExtractor={(ing) => ing} renderItem={renderItens} />
//<FlatList data={steps} keyExtractor={(step) => step} renderItem={renderItens}/> */}
