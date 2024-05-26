'use client'
import { Links } from '@/utils/data';
import ProductSlider from './ProductSlider';
import CustomerChoice from './CustomerChoice';
import SuggestedProduct from './SuggestedProduct';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductAccordion from './ProductFAQ';
import { Car, PerfumeSpray, Piggy } from '@/utils/Helpers';
import { useDarkMode } from '@/utils/DarkModeContext';

const DynamicProduct = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
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
    <div>
<div className="max-w-container mx-auto">
    <div className="flex items-start justify-center gap-[120px] w-full px-[60px] pt-[50px]">
<div className="w-[40%]">
<ProductSlider/>
</div>
<div className="w-[60%]">

<CustomerChoice/>
<div className="">
<div className={`flex lg:justify-between items-center justify-center self-stretch lg:px-10 py-5 rounded-[var(--md,8px)] bg-[#4545471a] mt-[40px]`}>
    <div className={`flex lg:flex-row w-full flex-col items-center justify-between gap-y-[10px] lg:gap-y-0 lg:gap-x-[124.5px]`}>
            <div className="flex  gap-y-[10px] flex-col items-center">
            <Car color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Free shipping <br className='lg:block hidden' /> & returns</span>
            </div>
            <div className="flex gap-y-[10px] flex-col items-center">
            <PerfumeSpray color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Try first, then decide <br className='lg:block hidden' /> learn more</span>
            </div>
            <div className="flex gap-y-[10px] flex-col items-center">
            <Piggy color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Subscribe & save, <br className='lg:block hidden' />
cancel anytime</span>
            </div>
           
    </div>
</div>
    <ProductAccordion/>
</div>
</div>
</div>
<div className="pt-[100px]">
<div className="flex flex-col justify-start items-start gap-2.5 mb-[50px]">
    <div className="text-zinc-800 text-5xl font-bold leading-72px">Love {scent} ? Pair up to build your set.</div>
    <div className="flex items-center gap-1">
        <span className="text-zinc-800 text-base font-normal leading-33px">Customers frequently mix </span>
        <span className="text-zinc-800 text-base font-bold leading-33px">{scent}</span>
        <span className="text-zinc-800 text-base font-normal leading-33px"> with the perfumes below to make unique combinations...</span>
    </div>
</div>

    <SuggestedProduct/>
</div>
</div>

    </div>
  );
};

export async function getStaticPaths() {
  const paths = Links.map(product => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = Links.find(item => item.id === params.id);

  return { props: { product } };
}


export default DynamicProduct;