import Image from 'next/image'

const Newsletter = () => {
    return (
      <aside className="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
      <div className="w-full p-12 lg:ml-28 text-center lg:w-2/3 sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-xl mx-auto lg:-ml-5">
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl text-left">
                Our Quarterly Progress Report
        </p>

              <p className="lg:my-4 lg:block text-left">
                Every quarter, we release our transparency report complete with our activities and how your sponsored kits are disbursed. We also working hard on partnering with more NGOs
                and introducing more features.
                Stay tuned!
              </p>
              <a href='https://mirror.xyz/0xFfA55b403bF021D92F3C166a1280cDfCcBc8D022/q-TYTaBgIjmhKDif0w-0cbfUXHKo9JyeLju6vaxOiLY'
              className='text-green-500 underline pt-10'
              >2022 Report</a>
              {/* <div>
                <div className="relative mt-2">
                  <label className="sr-only" htmlFor="email"> Email </label>
          
                  <input
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
          
                  <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                
              </div>
              <a
                href=""
                className="inline-block px-5 py-3 mt-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Subscribe
              </a>
              </div> */}
        </div>
      </div>

      <div className="relative w-full h-64 sm:h-96 lg:w-3/5 lg:h-auto">
        <img
          src="https://schoolkit-frontend.vercel.app/_next/image?url=http%3A%2F%2Fthehelpmatesfoundation.com%2Fwp-content%2Fuploads%2F2020%2F02%2FWhatsApp-Image-2019-12-19-at-6.46.27-PM-1024x768.jpeg&w=1920&q=75"
          alt="kids smiling"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </aside>
    )
}

export default Newsletter;