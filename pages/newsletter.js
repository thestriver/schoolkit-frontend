export const Newsletter = () => {
    return (
        <aside class="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
        <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div class="max-w-xl mx-auto lg:ml-0">
      
            <p class="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Our Monthly <span class="text-blue-700">Progress</span> Report
            </p>
      
            <p class="hidden lg:mt-4 lg:block">
              Every month we release our transparency report complete with our activities and how your sponsored kits are disbursed.
            </p>
            {/* <!--
        This component uses @tailwindcss/forms
      
        yarn add @tailwindcss/forms
        npm install @tailwindcss/forms
      
        plugins: [require('@tailwindcss/forms')]
      --> */}
      
            <div>
              <div class="relative mt-2">
              <label class="sr-only" for="email"> Email </label>
      
              <input
                class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                id="email"
                type="email"
                placeholder="Email"
              />
      
              <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              
            </div>
            <a
              href=""
              class="inline-block px-5 py-3 mt-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </a>
            </div>
          </div>
        </div>
      
        <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            src="http://thehelpmatesfoundation.com/wp-content/uploads/2020/02/IMG_5229-1024x683.jpg"
            alt="Women smiling at college"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </aside>
    )
}