import Image from 'next/image'

const Givers = () => {
    return(
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
                Hearty thanks to these companies and individuals for supporting our cause
            </h1>
            <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
                <div className="flex items-center justify-center">
                <Image
                    src="https://kutty.netlify.app/logos/todoist.svg"
                    alt="Todoist Logo"
                    // width={500}
                    // height={500}
                    className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                />
                {/* <img src="https://kutty.netlify.app/logos/todoist.svg" alt="Todoist Logo" className="block object-contain h-12" /> */}
                </div>
                
                <div className="flex items-center justify-center">
                <Image
                    src="https://kutty.netlify.app/logos/slack-icon.svg"
                    alt="Slack Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                />
                    {/* <img src="https://kutty.netlify.app/logos/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12" /> */}
                </div>
                <div className="flex items-center justify-center">
                    <Image
                       src="https://kutty.netlify.app/logos/algolia.svg" alt="Typeform Logo" className="block object-contain h-12"
                       width="100%" height="100%" layout="responsive" objectFit="contain"
                    />
                    {/* <img src="https://kutty.netlify.app/logos/algolia.svg" alt="Typeform Logo" className="block object-contain h-12" /> */}
                </div>
                <div className="flex items-center justify-center">
                    <Image src="https://kutty.netlify.app/logos/android.svg" alt="Algolia Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                     />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="https://kutty.netlify.app/logos/vimeo.svg" alt="Postcss Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="https://kutty.netlify.app/logos/postcss.svg" alt="TailwindCSS Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                     />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="https://kutty.netlify.app/logos/discord.svg" alt="Discord Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                     />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="https://kutty.netlify.app/logos/zeplin.svg" alt="Vimeo Logo" className="block object-contain h-12"
                    width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
            </div>
        </section>
    )
}

export default Givers;