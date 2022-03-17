export const Footer = () => {
    return(
        <footer class="text-gray-900 bg-gray-200 body-font cursor-pointer">
            <div class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="assets/images/GASK_logo.png" alt="" width="260" />
            </a>
            <p class="text-sm text-gray-500 lg:ml-40 mr-40 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2021 Created with <span className="px-2">❤️</span> by
                <a href="https://steemit.com/@infovore" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@infovore</a>
            </p>
            <nav class="flex flex-wrap text-sm text-gray-500">
                <a class="mr-5 hover:text-gray-900">Terms of use</a>
                <a class=" hover:text-gray-900">Privacy Policy</a>
                {/* <!-- <a class="mr-5 hover:text-gray-900">Third Link</a>
                <a class="hover:text-gray-900">Fourth Link</a> --> */}
            </nav>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                
                <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                </a>
                
            </span>
            </div>
        </footer>

    )
}