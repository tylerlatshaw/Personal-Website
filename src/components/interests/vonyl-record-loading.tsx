export default function VinylRecordLoading() {

    const container = [...Array(10)].map(() => {
        return <>
            <div className="flex items-stretch bg-gray-900 shadow-lg drop-shadow-lg rounded p-3 flex flex-1 flex-col justify-between w-100">
                <div>
                    <div className="group relative animate-pulse">
                        <div className="animate-pulse bg-gray-700 aspect-square w-full rounded"></div>
                    </div>
                    <div className="px-1 pt-2 pb-4 divide-y-2 divide-green-900">
                        <div className="animate-pulse bg-gray-700 w-full h-8 mb-2 rounded flex items-center leading-snug text-white text-lg pl-1 pb-1"></div>

                        <div className="pt-2 space-y-2">
                            <p className="flex items-center text-gray-400">
                                <div className="animate-pulse bg-gray-700 w-32 h-5 rounded"></div>
                            </p>
                            <p className="flex items-center text-gray-400">
                                <div className="animate-pulse bg-gray-700 w-16 h-5 rounded"></div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-1 pt-2 md:flex md:flex-wrap-reverse">
                    <div className="align-bottom inline-block bg-green-900 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2">
                        <div className="animate-pulse w-12 h-4 p-2 bg-emerald-950 rounded"></div>
                    </div>
                    <div className="align-bottom inline-block bg-green-900 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2">
                        <div className="animate-pulse w-20 h-4 p-2 bg-emerald-950 rounded"></div>
                    </div>
                </div>
            </div>
        </>;
    });


    return <>
        {container}
    </>;

}