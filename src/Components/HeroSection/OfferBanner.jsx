
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OfferBanner = () => {
    const banner = [{
        img: "https://plus.unsplash.com/premium_photo-1669842613532-1f0947aa6fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
    },
    {
        img: "https://images.unsplash.com/photo-1725108749980-948960f6f104?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
    {
        img: "https://images.unsplash.com/photo-1723754166338-1ab6e76135a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
    }

    ]
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
            {
                banner.map((images)=>{
                    return (
                        <img src={images.img} alt="" className='w-full h-[40rem] object-cover object-center' />
                    )
                })
            }
        </Carousel>

    )
}

export default OfferBanner