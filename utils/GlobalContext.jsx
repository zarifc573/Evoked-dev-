"use client"
// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';
import { Links } from './data';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [buttonStates, setButtonStates] = useState(Array(Links.length).fill(false));
    const [selectedItems, setSelectedItems] = useState(Array(Links.length).fill(null));
    const [quantities, setQuantities] = useState(Array(Links.length).fill(0))
    const [clicked, setClicked] = useState(false)
    
  return (
    <GlobalContext.Provider value={{buttonStates, setButtonStates,selectedItems, setSelectedItems,quantities, setQuantities, clicked, setClicked}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
