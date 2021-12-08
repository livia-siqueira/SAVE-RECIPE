import React from "react";
import { View, StyleSheet, Platform, Button, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MealItem } from "../components/MealItem";
import { MealList } from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoriesMealsScreen(props) {
    const catID = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catID) >= 0
    );

    return (
        <MealList data={displayedMeals} navigation={props.navigation}/>
    );
}

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
    return {
        headerTitle: selectedCategory.title,
    };
};