const SkeletonTemplate = () => {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white animate-pulse">
            <div className="p-1 md:px-5 md:py-2">
                <p className="font-semibold mb-6 text-lg"></p>
                <span className="text-sm text-slate-800"></span>
            </div>
            <div>
                <div className="mb-4 md:mb-6">
                    <label className="block h-4 w-24 bg-gray-100 mb-2 text-xs"></label>
                    <div className="block h-10 bg-gray-100 rounded"></div>
                </div>
                <div className="mb-4 grid gap-4 md:grid-cols-2 md:mb-6">
                    <div>
                        <label htmlFor="phone" className="block text-xs h-4 w-24 bg-gray-100 mb-2"></label>
                        <div className="block h-10 bg-gray-100 rounded"></div>
                    </div>
                    <div>
                        <label htmlFor="emal" className="block text-xs h-4 w-24 bg-gray-100 text-xs mb-2"></label>
                        <div className="block h-10 bg-gray-100 rounded"></div>
                    </div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="linkedin" className="block text-xs h-4 w-24 bg-gray-100 text-xs mb-2"></label>
                    <div className="block h-10 bg-gray-100 rounded"></div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="portofolio" className="block text-xs h-4 w-24 bg-gray-100 text-xs mb-2"></label>
                    <div className="block h-10 bg-gray-100 rounded"></div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="address" className="block text-xs h-4 w-24 bg-gray-100 text-xs mb-2"></label>
                    <div className="block h-10 bg-gray-100 rounded"></div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="summary" className="block text-xs h-4 w-24 bg-gray-100 text-xs mb-2"></label>
                    <div className="block h-10 bg-gray-100 rounded"></div>
                    <small className="text-xs h-4 w-24 bg-gray-100"></small>
                </div>
                <div className="flex flex-col">
                    <div className="block w-20 h-5 bg-gray-100 rounded md:self-end"></div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonTemplate;