import Meals from "@/components/Meals";
import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["latin"] });
const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data?.currentTime;
};

const mealsPage = async () => {
  const currentTime = await getTime();
  return (
    <div className={`${roboto.className} p-10 space-y-5`}>
      <h3 className="text-2xl font-bold">Choose your meals</h3>
      <h3 className="text-2xl font-semibold">Time now: {currentTime}</h3>
      <Meals></Meals>
    </div>
  );
};

export default mealsPage;
