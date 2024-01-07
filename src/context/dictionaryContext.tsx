"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const initialState = {
  dictionaryData: undefined,
  setDictionaryData: undefined,
};

const DictionaryContext = createContext(initialState);

export const DictionaryProvider = ({ children }: { children: ReactNode }) => {
  const [dictionaryData, setDictionaryData] = useState<any>([]);

  return (
    <DictionaryContext.Provider value={{ dictionaryData, setDictionaryData }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  return useContext(DictionaryContext);
};
