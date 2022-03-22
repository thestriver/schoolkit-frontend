import Image from 'next/image'

const Newsletter = () => {
    return (
        <aside className="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
      
            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Our Monthly <span className="text-blue-700">Progress</span> Report
            </p>
      
            <p className="hidden lg:mt-4 lg:block">
              Every month we release our transparency report complete with our activities and how your sponsored kits are disbursed.
            </p>
            {/* <!--
        This component uses @tailwindcss/forms
      
        yarn add @tailwindcss/forms
        npm install @tailwindcss/forms
      
        plugins: [require('@tailwindcss/forms')]
      --> */}
      
            <div>
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
            </div>
          </div>
        </div>
      
        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <Image
            src="http://thehelpmatesfoundation.com/wp-content/uploads/2020/02/WhatsApp-Image-2019-12-19-at-6.46.27-PM-1024x768.jpeg"
            alt="Women smiling at college"
            className="absolute inset-0 object-cover w-full h-full"
            width="100%" height="50%" layout="responsive" objectFit="cover"
          />
        </div>
      </aside>
    )
}

export default Newsletter;