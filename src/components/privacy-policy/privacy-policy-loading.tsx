export default function PrivacyPolicy() {

    function generateNavigation() {
        return (
            <>
                <div className="desktop-only sticky top-0 space-y-4 w-44">
                    <div className="h-fit bg-white/50 rounded-lg border-2 border-white px-2 py-1">
                        <ul className="text-base py-3 space-y-2">

                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>

                        </ul>
                    </div>

                    <div className="h-fit bg-white/50 rounded-lg border-2 border-white">
                        <div className="w-full py-2 px-3">
                            <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="mobile-only">
                    <div className="h-fit bg-white/50 rounded-lg border-2 border-white">
                        <ul className="text-base">

                            <div className="w-full pl-3 pr-1 text-left border-0">
                                <div className="flex flex-row font-semibold mx-2 my-4">
                                    <div className="animate-pulse bg-gray-300 w-[100%] h-5 rounded"></div>
                                </div>
                            </div>

                        </ul>
                    </div>
                </div>
            </>
        );
    }

    return <>
        <div className="privacy-policy flex flex-col md:flex-row text-black gap-0 md:gap-4 space-y-4 md:space-y-0 w-full">
            <aside className="flex-none w-full md:w-fit">
                {generateNavigation()}
            </aside>

            <div className="privacy-policy-main p-4 text-base bg-white/50 rounded-lg border-2 border-white w-full space-y-2" id="policy">
                <div className="animate-pulse bg-gray-300 w-[98%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[95%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[97%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[93%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[95%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[99%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[25%] h-5 rounded"></div>

                <div className="w-[100%] h-5 rounded mx-auto"></div>
                <div className="animate-pulse bg-gray-300 w-[25%] h-5 rounded mx-auto"></div>
                <div className="w-[100%] h-5 rounded mx-auto"></div>

                <div className="animate-pulse bg-gray-300 w-[98%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[99%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[94%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[99%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[95%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[96%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[54%] h-5 rounded"></div>

                <div className="w-[100%] h-5 rounded mx-auto"></div>
                <div className="animate-pulse bg-gray-300 w-[98%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[95%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[97%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[93%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[95%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[99%] h-5 rounded"></div>
                <div className="animate-pulse bg-gray-300 w-[25%] h-5 rounded"></div>
            </div>
        </div>
    </>;
}