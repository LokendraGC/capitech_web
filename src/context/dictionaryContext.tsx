'use client'
import { ReactNode, createContext, useContext, useState } from "react";

const initialState = {
  data: [],
};

type DictionaryData = {
  data: any[]; 
};
type setDictionaryData = {
  data: any[]; 
};

type DictionaryContextType = {
  dictionaryData: DictionaryData;
  setDictionaryData: setDictionaryData;
};

const DictionaryContext = createContext(initialState);

export const DictionaryProvider = ({ children }:{children:ReactNode}) => {
  const [dictionaryData, setDictionaryData] = useState([]);

  return (
    <DictionaryContext.Provider value={{ dictionaryData ,setDictionaryData }}>
      {children}
    </DictionaryContext.Provider>
  );
};


export const useDictionary = () => {
  return useContext(DictionaryContext);
};
