import { useMemo } from "react";
import { beasts, dates } from "../animals/animals.js";

export const useAnimal = (date: Date) => {
  return useMemo(() => {
    let animal1 = {
      animal: "",
      img: "",
      compatibility: "",
      sign: "",
      luckNumbers: "",
      luckColors: "",
      description: "",
    };
    Object.entries(beasts).forEach(([key, value]) => {
      if (date?.getFullYear() % 12 === Number(key)) {
        animal1 = dates[value];
      }
    });
    return animal1;
  }, [date]);
};
