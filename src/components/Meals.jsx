"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [searchData, setSearchData] = useState("");
  const [mealData, setMealData] = useState([]);
  const [errorMessage, setError] = useState("No data found...");
  const handler = (e) => {
    setSearchData(e.target.value);
  };
  //   console.log(searchData)
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`
      );
      const data = await res.json();
      setMealData(data?.meals);
    } catch (error) {
      console.log(error);
      setError("No data found......");
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div className="flex mb-10">
        <input
          onChange={handler}
          className="border-2 border-slate-400 outline-none p-3"
          type="text"
          placeholder="search"
        />
        <button onClick={() => loadData()} className="bg-red-400 px-3">
          Search
        </button>
      </div>
      {/* meals */}
      <div className="grid grid-cols-3 gap-3">
        {mealData?.length > 0 ? (
          mealData?.map((meal) => (
            <div
              className=" p-2 border-2 border-green-400 space-y-3"
              key={meal?.idMeal}
            >
              <Image src={meal?.strMealThumb} width={500} height={500} alt={meal?.strMeal} />
              <h3>Meal Name: {meal?.strMeal}</h3>
              <h3>Category: {meal?.strCategory}</h3>
              <p>
                Instruction:{" "}
                <span className="text-sm">{meal?.strInstructions.slice(0,500)}</span>
              </p>
            </div>
          ))
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
