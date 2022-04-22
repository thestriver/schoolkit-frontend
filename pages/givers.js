import Image from 'next/image'

const Givers = () => {
    return(
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
                Hearty thanks to these companies and individuals for supporting our cause
            </h1>
            <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
            <div className="flex items-center justify-center gap-x-5">
                {
                   donors.map(({ ...props}) => (
                        <div key={props.link}>
                        <a href={props.link} target="_blank" className="flex flex-col items-center text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" rel="noreferrer">
                        <Image
                            src={props.pic}
                            alt="donor"
                            width={72}
                            height={72}
                            className="h-12 w-72 rounded-md"

                        />
                        </a>
                         <small>{props?.donor}</small>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Givers;