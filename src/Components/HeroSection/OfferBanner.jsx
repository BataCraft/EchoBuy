import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useContext } from "react";
import StoreApi from "../APIFETCH/Context";
import { BannerLoading } from "../Loading/LoadinOne";

const OfferBanner = () => {
   const { product, Loading } = useContext(StoreApi);

   if (Loading) {
       return (
           <div className="w-screen h-screen flex items-center justify-center pt-[100px] z-[999]">
               <BannerLoading />
           </div>
       );
   }

   return (
       <div className="lg:mr-20 mt-[100px]" id="offerBanner">
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
                {
                    product.slice(10, 15).map((items, index) => {
                        return (
                            <div key={index}>
                                <img 
                                    src={items.thumbnail} 
                                    alt="" 
                                    className='w-full h-[10rem] md:h-[20rem] lg:h-[30rem] object-contain' 
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
       </div>
   );
}

export default OfferBanner;
