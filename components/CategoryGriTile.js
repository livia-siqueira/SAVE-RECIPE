import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import { useSelector } from "react-redux";
export default function CategoryGridTile(props) {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

 
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onPress}>
        <View style={{ ...styles.screen, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 20,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 10,
  },
  screen: {
    flex: 1,
    borderRadius: 20,
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "right",
  },
});
