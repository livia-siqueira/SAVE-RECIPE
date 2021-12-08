import { useReducer } from "react";
import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
        const existingIndex = state.favoritesMeals.findIndex((meal) => {
            meal.id === action.mealId
        })
        if(existingIndex >= 0){
            //const changeFavMeals = state.favoritesMeals.filter((meal) => meal.id !== action.mealId)
            const updateFavMeals =[...state.favoritesMeals];
            updateFavMeals.slice(existingIndex, 1);
            return {...state, favoritesMeals: updateFavMeals}
        } else{
            const meal = state.meals.find(meal => meal.id === action.mealId);
            return {
                ...state, 
                favoritesMeals: state.favoritesMeals.concat(meal)
            }
        }
    default:
      return state;
  }
};

export default mealsReducer;
