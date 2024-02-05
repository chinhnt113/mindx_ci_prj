/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./food.scss";
import { initialIngredients, recipes, shortenRecipes } from "./const";

const ItemInput = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <div style={{ margin: "10px" }}>
      {/* <img src={`path/to/${item.name}.jpg`} alt={item.name} style={{ width: "50px", height: "50px" }} /> */}
      <h4>{item.name}</h4>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
    </div>
  );
};

const Food = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [count, setCount] = useState(0);
  const handleQuantityChange = (itemId, newQuantity) => {
    setIngredients((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const multiply = (arr, number) => {
    return arr.map((element) => element * number);
  };

  const divide = (arr1, arr2) => {
    if (!isBigger(arr1, arr2)) {
      return 0;
    }
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] !== 0) {
        result = result
          ? Math.min(result, Math.floor(arr1[i] / arr2[i]))
          : Math.floor(arr1[i] / arr2[i]);
      }
    }
    return result;
  };

  const sum = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error(
        "Arrays must have the same number of elements for addition"
      );
    }
    return arr1.map((element, index) => element + arr2[index]);
  };

  const sub = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error(
        "Arrays must have the same number of elements for subtraction"
      );
    }
    return arr1.map((element, index) => element - arr2[index]);
  };

  const sumArray = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const isBigger = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] < arr2[i]) return false; // arr1 < arr2
    }
    return true; // arr1 >= arr2
  };

  const recursiveCalculate = (result, remainingIngre, isShortList) => {
    let isEnd = true;
    let recipeList = [...recipes];
    if (isShortList) recipeList = [...shortenRecipes];
    for (let i = 0; i < recipeList.length; i++) {
      if (isBigger(remainingIngre, recipeList[i].formula)) {
        result[i]++;
        remainingIngre = [...sub(remainingIngre, recipeList[i].formula)];
        isEnd = false;
      }
    }
    if (!isEnd) recursiveCalculate(result, remainingIngre, isShortList);
    if (isEnd && isShortList){
      recursiveCalculate(result, remainingIngre, false);
    } else if (isEnd && !isShortList){
      console.log(
        "remaining ingredients: ",
        sumArray(remainingIngre),
        remainingIngre
      );
    }
  };

  const calculate = () => {
    const totalIngre = ingredients.map((ingredient) => ingredient.quantity);
    const remainingIngre = [...totalIngre];
    const result = recipes.map(() => 0);
    // const maxFoods = recipes.map((recipe) =>
    //   divide(totalIngre, recipe.formula)
    // );
    // const totalMaxFood = Math.floor(sumArray(totalIngre) / 5);
    // console.log(maxFoods);
    recursiveCalculate(result, remainingIngre, true);
    console.log("result total foods: ", sumArray(result), result);
  };

  return (
    <div className="food" style={{ width: "90%" }}>
      <div className="ingredient">
        {ingredients.map((item) => (
          <ItemInput
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="result">
        <button onClick={calculate} className="btn">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Food;
