import Image from 'next/image'

export default function Hero({ reference, click }){
    return(
        <div className="bg-gray-50 pb-6 sm:pb-8 lg:pb-12 divide-y">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <section className="flex flex-col justify-between gap-6 py-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                <h1 className="text-black-800 mb-2 text-4xl font-bold sm:text-5xl md:mb-2 md:text-6xl">Gift A School Kit</h1>
                <p className="text-xl text-gray-500 my-4 md:my-4">Gift A School Kit is a blockchain project that provides underpriviledged school kids in Africa access to basic educational materials.</p>
                <div ref={reference} className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a onClick={click}
                className="cursor-pointer inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Gift A School Kit Today</a>

                {/* <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                Check Our Donors
                </a> */}
                </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-2/5 overflow-hidden rounded-lg bg-white shadow-xl lg:h-full xl:w-5/12">
            <Image
                src='/hero.png'
                alt="school kids"
                width={650}
                height={650}
                className="h-full w-full object-cover object-center"
            />
            </div>
            </section>
        </div>
    </div>
    )
}