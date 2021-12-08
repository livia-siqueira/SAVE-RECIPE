import React from "react";
import {View,StyleSheet, FlatList} from 'react-native'
import { MealItem } from "../components/MealItem";
import { useSelector } from "react-redux";
export function MealList(props) {
    const favoritesMeals = useSelector(state=> state.meals.favoritesMeals)
    const renderMealItem = (item) => {
        const isFavorite = favoritesMeals.some((meal) => meal.id === item.item.id)
        return <MealItem item={item.item} onPress={() => {
            props.navigation.navigate({
                routeName: 'MealsDetails',
                params: {
                    mealId: item.item.id,
                    mealTitle: item.item.title,
                    isFav: isFavorite
                }
            })
        }} />
    };
  
    return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "90%", marginTop: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
