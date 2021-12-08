import React from "react";
import {View,StyleSheet, FlatList} from 'react-native'
import { MealItem } from "../components/MealItem";

export function MealList(props) {
  
    const renderMealItem = (item) => {
        return <MealItem item={item.item} onPress={() => {
            props.navigation.navigate({
                routeName: 'MealsDetails',
                params: {
                    mealId: item.item.id,
                    mealTitle: item.item.title
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
