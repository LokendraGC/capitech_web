import { useState } from "react";

export const useApiData = async (typedData: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${typedData}`
    );
    const fetchedData = await response.json();
    return  fetchedData;
  } catch (err) {
    console.log("Error fetching dictionary data", err);
    return null;
  }
};
