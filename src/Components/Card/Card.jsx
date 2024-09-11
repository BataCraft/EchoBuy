import React, { useContext } from 'react';
import StoreApi from '../APIFETCH/Context';
import CardDetails from './CardDetails';
import { LoadinOne } from '../Loading/LoadinOne';

const Card = () => {
    const { Loading, product, Error } = useContext(StoreApi);

    // Number of skeletons to display while loading
    const skeletonCount = 6;

    if (Loading) {
        return (
            <div className='mt-[100px] w-full'>
                <h1 className='md:ml-10 lg:ml-32 text-[2rem] mb-6'>Popular Accousary</h1>
                <div className='w-full flex flex-wrap gap-4 justify-center items-center'>
                    {Array.from({ length: skeletonCount }).map((_, index) => (
                        <div key={index}>
                            <LoadinOne />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (Error) {
        return <div>Failed to fetch products. Please try again later.</div>;
    }

    return (
        <div className='mt-[100px]  w-full'>
            <h1 className='md:ml-10 lg:ml-32 text-[2rem] mb-6'>Popular Accousary</h1>
            <div className='w-full flex flex-wrap gap-4 justify-center items-center'>
                {product.map((item, index) => (
                    <CardDetails key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Card;
