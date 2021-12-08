import React from "react";
import {
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Text,
    Button,
} from "react-native";
import CategoryGridTile from "../components/CategoryGriTile";
import colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

export default function CategoriesScreen(props) {
    const renderGridItem = (item) => {
        return (
            <CategoryGridTile
                title={item.item.title}
                color={item.item.color}
                id={item.item.id}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeals",
                        params: {
                            categoryId: item.item.id,
                        },
                    });
                }}
            />
        );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }
                    }
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
