"use client"

import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';

const BodyComponent = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    // Dynamically set the body background color based on isDarkMode state
    document.body.className = isDarkMode ? 'bg-primary' : 'bg-white';
  }, [isDarkMode]);

  return null; // Since this component only handles side effect, it doesn't need to render anything
};

export default BodyComponent;