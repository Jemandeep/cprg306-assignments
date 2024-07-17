"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;