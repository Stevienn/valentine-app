"use client";

import { createContext, useContext, useState } from "react";

type AnswerType = {
  favoriteMoment: string;
  message: string;
};

const AnswerContext = createContext<any>(null);

export function AnswerProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<AnswerType>({
    favoriteMoment: "",
    message: "",
  });

  const updateAnswer = (field: keyof AnswerType, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AnswerContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </AnswerContext.Provider>
  );
}

export const useAnswers = () => useContext(AnswerContext);
