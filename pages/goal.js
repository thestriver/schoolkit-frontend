export const Goal = () => {
    return (
        <section class="text-gray-600 body-font mt-20">
            <div class="container px-5 py-24 mx-auto">
                <div class="relative pt-1 pb-8 mx-32">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            March Goal (100 School Kits): 
                        </span>
                        </div>
                        <div class="text-right">
                        <span class="text-xs font-semibold inline-block text-green-600">
                            5%
                        </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div 
                        style={{ width: '5%' }}
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">

                        </div>
                    </div>
                </div>
            <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium lg:text-6xl text-3xl text-gray-900">0</h2>
                <p class="leading-relaxed">Total School Kits Donated</p>
                </div>
                <div class="p-4 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium lg:text-6xl text-3xl text-gray-900">$0</h2>
                <p class="leading-relaxed"> Total Money Raised</p>
                </div>
                <div class="p-4 lg:w-1/3 w-1/2">
                <h2 class="title-font font-medium lg:text-6xl text-3xl text-gray-900">0</h2>
                <p class="leading-relaxed">Total No of School Kids</p>
                </div>
            </div>
            </div>
        </section>
    )
}