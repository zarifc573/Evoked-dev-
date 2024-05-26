"use client"

import { useDarkMode } from "@/utils/DarkModeContext";
import { ProductStar } from "@/utils/Helpers"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerChoice = () => {
    const { isDarkMode } = useDarkMode();
    const searchParams = useSearchParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        if (searchParams) {
            const itemString = searchParams.get('item');
            if (itemString) {
                const item = JSON.parse(decodeURIComponent(itemString));
                setProductData(item);
            }
        }
    }, [searchParams]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const { link, gender, scent } = productData;
  return (
        <div className="flex flex-col justify-start items-start gap-10 w-full">
    <div className="flex justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start gap-5">
            <div className="flex items-center gap-5">
                <div className="text-xl font-bold uppercase">{scent}</div>
                <select className="px-2.5 py-1 rounded border border-gray-700 outline-none flex items-center gap-2">
                    <option className="text-gray-700 text-base font-normal">100ml</option>
                    <option disabled className="text-gray-400 text-base font-normal">50ml</option>
                </select>
            </div>
            <div className="flex items-center gap-5">
                <div className="text-sm font-normal">Eau de Parfum. Size: 100ml / 1.7oz</div>
                <div className="flex items-center gap-[2px]">
                <ProductStar color={isDarkMode ? 'white' : '#28282A'}/>
                <ProductStar color={isDarkMode ? 'white' : '#28282A'}/>
                <ProductStar color={isDarkMode ? 'white' : '#28282A'}/>
                <ProductStar color={isDarkMode ? 'white' : '#28282A'}/>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-sm font-normal">(107)</div>
                </div>
            </div>
        </div>
        <div>
            <span className="text-lg font-medium line-through">£45 {' '}</span>
            <span className="text-3xl font-bold">40/2 months</span>
        </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-5">
        <div className="text-base font-normal">Smells like: <span className="font-bold">Dior Sauvage</span>, Don't Be Shy (Retail Price: $375)</div>
        <div className="p-2.5 bg-gray-200 rounded justify-start items-center gap-2.5">
            <span className="text-base font-bold">This scent is:</span>
            <span className="text-base font-normal"> Cozy and cocooning, a warm hug</span>
        </div>
    </div>
</div>

  )
}

export default CustomerChoice