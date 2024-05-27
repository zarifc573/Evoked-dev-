"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
      if (savedDarkMode !== null) {
        setIsDarkMode(savedDarkMode);
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, isInitialized]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  if (!isInitialized) {
    return null; // or a loading spinner, etc.
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
