import Image from 'next/image'

const Footer = () => {
    return(
        <footer className="text-center xl:px-12 bg-gray-900 text-gray-200 body-font align-center cursor-pointer border-t border-gray-200 border-t-1">
            <div className="lg:container px-5 py-2 lg:mx-auto flex  sm:flex-row flex-col">
            <a href="https://twitter.com/The_striver" className="text-sm text-gray-500  sm:py-2 sm:mt-0 mt-4">Created with <span className="px-0">❤️</span> by Mahmud Adeleye
            </a>
            </div>
        </footer>

    )
}

export default Footer;