/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
function ExperienceSkeleton() {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="animate-pulse">
                <div className="p-1 md:p-5 mb-4">
                    <div className="font-semibold mb-6 h-6 w-24 bg-gray-200 text-lg" />
                    <div className="w-60 h-3 bg-gray-200" />
                </div>
                <div className="accordion" id="accordionCard">
                    <div className="accordion-item shadow bg-white mb-4 md:px-4 md:mb-3">
                        <label className="flex items-center justify-between accordion-button py-4 px-5" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls="">
                            <div className="flex items-center">
                                <div className="mr-2 w-2 h-px bg-gray-200" />
                                <div className="h-6 w-4 bg-gray-200" />
                            </div>
                        </label>
                        <div className="accordion-collapse collapse show" data-bs-parent="#accordionCard">
                            <div className="accordion-body py-4 px-5">
                                <div className="mb-4 mt-4 md:mt-4 md:mb-6 grid md:grid-cols-2 md:gap-4">
                                    <div className="mb-4 md:mb-0">
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                    <div>
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                </div>
                                <div className="mb-4 md:mb-6">
                                    <div className="w-24 h-3 bg-gray-200 mb-2" />
                                    <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                </div>
                                <div className="mb-4 md:mb-6">
                                    <div className="w-24 h-3 bg-gray-200 mb-2" />
                                    <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 mb-4 md:mb-6">
                                    <div>
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                    <div>
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                    <div>
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                    <div>
                                        <div className="w-24 h-3 bg-gray-200 mb-2" />
                                        <div className="block w-full p-2 rounded h-10 bg-gray-200" />
                                    </div>
                                </div>
                                <div className="mb-4 md:mb-6 flex flex-wrap content-center items-center">
                                    <div className="h-4 w-4 bg-gray-200 mr-3" />
                                    <div className="h-3 w-20 bg-gray-200" />
                                </div>
                                <div>
                                    <div className="w-24 h-3 bg-gray-200 mb-2" />
                                    <div className="block w-full p-2 rounded h-40 bg-gray-200 mb-2" />
                                    <div className="block mb-2 text-xs italic h-2 w-36 bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-2 border-dashed border-gray-200 bg-white p-2 rounded mb-4 flex items-center hover:bg-blue-100 cursor-pointer">
                <div className="h-3 w-3 bg-gray-200 mr-2" />
                <div className="text-sm text-blue-900 font-semibold h-2 w-20 bg-gray-200" />
            </div>
            <div className="flex flex-row justify-end mb-4">
                <div className="block py-1.5 px-4 h-8 w-28 bg-gray-200 rounded mr-3" />
                <div className="block py-2 px-4 h-8 w-28 bg-gray-200 rounded" />
            </div>
        </div>
    );
}

export default ExperienceSkeleton;