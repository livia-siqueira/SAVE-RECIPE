import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DefaultText from "./DefaultText";
export function MealItem(props) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.item.imageUrl}} style={styles.bgImage}>
            <View style={styles.titleContainer}><Text style={styles.title}>{props.item.title}</Text></View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
              <DefaultText>{props.item.duration}m</DefaultText>
              <DefaultText>{props.item.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{props.item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
   mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'

  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },    
  title: {
      fontFamily: 'open-sans-bold',
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
  }
});
