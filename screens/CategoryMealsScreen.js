import React from "react";
import { MealList } from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import {useSelector } from 'react-redux'
import DefaultText from "../components/DefaultText";
import {View, StyleSheet} from 'react-native'
import colors from "../constants/colors";

export default function CategoriesMealsScreen(props) {
    const catID = props.navigation.getParam("categoryId");

    const avaibleMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = avaibleMeals.filter(
        (meal) => meal.categoryIds.indexOf(catID) >= 0
    );
    if(displayedMeals.length === 0){
        return <View style={styles.view}>
            <DefaultText style={styles.text}>No meals found, check the filters!</DefaultText>
        </View>
    }
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