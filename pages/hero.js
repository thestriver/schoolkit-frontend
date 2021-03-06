import Image from 'next/image'

const Hero = () => {
    return(
        <div>
            {/* ====== Hero Section Start */}
            <div className="relative pt-[60px] lg:pt-[50px] pb-[50px] bg-white">
                <div className="container">
                    <div className="flex flex-wrap 2xl:ml-48 xl:ml-24 lg:ml-16 mx-auto">
                    <div className="w-full lg:w-5/12 px-4">
                        <div className="hero-content">
                        <h1
                            className="
                            lg:pt-8
                            xl:pt-10
                            text-dark
                            font-bold
                            text-4xl
                            sm:text-[42px]
                            lg:text-[40px]
                            xl:text-[65px]
                            leading-none
                            mb-3
                            "
                        >
                            Gift A 
                            School Kit 
                        </h1>
                        <p className="text-base mb-5 text-body-color max-w-[480px] xl:pt-5">
                            Gift A School Kit is a web3 project 
                            working towards ensuring underpriviledged school kids 
                            get access to basic educational materials.  
                        </p>
                        <ul className="flex flex-wrap items-center">
                            <li>
                            <a
                                href=""
                                className="
                                py-3
                                px-6
                                sm:px-10
                                lg:px-8
                                xl:px-10
                                inline-flex
                                items-center
                                justify-center
                                text-center text-white text-base
                                bg-blue-600
                                hover:bg-opacity-90
                                font-normal
                                rounded-lg
                                "
                            >
                                Gift A School Kit Today
                            </a>
                            </li>
                        </ul>
                        <div className="clients pt-12">
                            <h6
                            className="
                                font-normal
                                text-xs
                                flex
                                items-center
                                text-body-color
                                mb-1
                                
                            "
                            >
                            Partner Charities
                            </h6>

                            <div className="flex items-center">
                                <div className="w-full py-1 mr-0">
                                    <Image className="xl:h-20 lg:h-20 -backdrop-hue-rotate-180 " 
                                    width="100%" height="50%" layout="responsive" objectFit="contain"
                                    src="http://thehelpmatesfoundation.com/wp-content/uploads/2016/08/v2vX4NXz-e1583002125503.jpg" alt="ayroui" />
                                </div>
                                <div className="w-full py-1 mr-4">
                                    {/* <!-- Umrah Welfare --> */}
                                    <Image
                                    src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                                    alt="graygrids"
                                    className="xl:h-20 lg:h-20 -backdrop-hue-rotate-180 " 
                                    width="50%" height="50%" layout="responsive" objectFit="contain"

                                    />
                                </div>
                                <div className="w-full py-1 mr-4">
                                    <Image src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="uideck"
                                    className="xl:h-20 lg:h-20 -backdrop-hue-rotate-180 " 
                                    width="50%" height="50%" layout="responsive" objectFit="contain"
                                    
                                    />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block lg:w-1/12 px-4"></div>
                    <div className="w-full lg:w-6/12 px-16">
                        <div className="">
                        <div className="relative inline-block z-10 2xl:pt-12 pt-11 lg:pt-0">
                            <img
                            src="http://thehelpmatesfoundation.com/wp-content/uploads/2020/02/IMG_5229-1024x683.jpg"
                            alt="hero"
                            className="max-w-full lg:ml-auto rounded-tl-3xl rounded-sm object-cover "
                            />
                            {/* <Image
                                src="http://thehelpmatesfoundation.com/wp-content/uploads/2020/02/IMG_5229-1024x683.jpg"
                                alt="Kids smiling"
                                className="absolute inset-0 object-cover w-full h-full"
                                width="100%" height="100%" layout="responsive" objectFit="contain"
                            /> */}
                            <span className="absolute -left-8 -bottom-8 z-[-1]">
                            <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                            </svg>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}
        </div>
    )
}

export default Hero;