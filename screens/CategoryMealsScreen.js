import React from "react";
import { MealList } from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import {useSelector } from 'react-redux'


export default function CategoriesMealsScreen(props) {
    const catID = props.navigation.getParam("categoryId");

    const avaibleMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = avaibleMeals.filter(
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