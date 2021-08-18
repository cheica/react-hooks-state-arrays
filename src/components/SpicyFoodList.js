import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  console.log(foods)

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
    console.log(newFood);
  }
function handleLiClick(id){
  // const newFoodArray = foods.filter((food) => food.id !== id);
  // setFoods(newFoodArray);

  const newFoodArray = foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  });
  setFoods(newFoodArray);

}
  const foodList = foods.map((food) => (
    <li 
    key={food.id}
    onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}

    </li>

  ))
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul> {foodList}
        {/* list of spicy foods */}</ul>
    </div>
  );
}

export default SpicyFoodList;
