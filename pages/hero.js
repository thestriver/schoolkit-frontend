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

                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block lg:w-1/12 px-4"></div>
                    <div className="w-full lg:w-6/12 px-16">
                        <div className="">
                        <div className="relative inline-block z-10 2xl:pt-12 pt-11 lg:pt-0">
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