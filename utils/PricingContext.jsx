"use client"
// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const PricingContext = createContext();

export const PricingProvider = ({ children }) => {

  const data2 = [
    { name:'Perfume Set', rate:'£45', rate50:'£23', shipping:'Add 1 more to save £20',shippingProgress:'Add 1 more to get 1 x free perfume + £20 off', includes:'What’s included:', firstPoint:' x 100ml perfume (lasts 2 months)',firstPoint50:' x 50ml perfume (lasts 2 months)', lastPoint:' x 5ml sample (free compliment)',spray:'£0.05 per spray', discount:'£60', discount50:'£30' },
  ];
  const [selectedTrend, setSelectedTrend] = useState(true);
  const data = [
    { name:'1 Perfume', rate:'£40/2 months', rate50:'£20/2 months', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'1 x 100ml perfume (lasts 2 months)', firstPoint50:'1 x 50ml perfume (lasts 2 months)', lastPoint:'1 x 5ml sample (free compliment)',spray:'£0.04 per spray' },
    { name:'2 Perfumes', rate:'£60/4 months',rate50:'£30/4 months',discount50:'£40 ', discount:'£80 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'2 x 100ml perfumes (lasts 4 months)',firstPoint50:'2 x 50ml perfume (lasts 4 months)', lastPoint:'2 x 5ml samples (free compliments)',spray:'£0.03 per spray', trend: selectedTrend, trendName: 'MOST POPULAR' },
    { name:'3 Perfumes', rate:'£75/6 months', rate50:'£37/6 months',discount50:'£60 ',discount:'£120 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'3 x 100ml perfumes (lasts 6 months)', firstPoint50:'1 x 50ml perfume (lasts 6 months)', lastPoint:'3 x 5ml samples (free compliments)',spray:'£0.02 per spray', trend: selectedTrend, trendName: 'BEST VALUE' }
  ];
  const [show1, setShow1] = useState(1);
    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState('2 Perfumes');
    const [selectedPlan2, setSelectedPlan2] = useState('Perfume Set');
    const [count, setCount] = useState(1)
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedOneTimeItems, setSelectedOneTimeItems] = useState([]);
    const [rate, setRate] = useState(data2[0].rate);
    const [rate50, setRate50] = useState(data2[0].rate50);
    const [discount, setDiscount] = useState(data2[0].discount);
    const [discount50, setDiscount50] = useState(data2[0].discount50);
    const [shipping, setShipping] = useState(data2[0].shipping);
    const [selector, setSelector] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(data.map(() => "100ml")); 
    const [selectedOptions2, setSelectedOptions2] = useState(data2.map(() => "100ml"));
    const [isOpen, setIsOpen] = useState(data.map(() => false)); 
    const [itemCount, setItemCount] = useState(0);
    const handleOptionChange = (option, index) => {
      setSelectedOptions(prevOptions => prevOptions.map((value, i) => i === index ? option : value));
      setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value)); 
    };

  return (
    <PricingContext.Provider value={{ show1, setShow1, selectedButton, setSelectedButton, selectedPlan, setSelectedPlan, selectedPlan2, setSelectedPlan2, count, setCount, selectedImages, setSelectedImages, selectedOneTimeItems, setSelectedOneTimeItems, rate, setRate, rate50, setRate50, discount, setDiscount, discount50, setDiscount50, shipping, setShipping, selector, setSelector,selectedOptions, setSelectedOptions, selectedOptions2, setSelectedOptions2, selectedTrend, setSelectedTrend, isOpen, setIsOpen, handleOptionChange, itemCount, setItemCount  }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = () => useContext(PricingContext);
