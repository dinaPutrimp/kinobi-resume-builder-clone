/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
function CompleteSkeleton() {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="animate-pulse">
                <div className="h-40 bg-white" />
                <div className="flex flex-row justify-end mb-4">
                    <div className="block w-32 h-8 py-1.5 px-4 bg-gray-200 border-2 rounded uppercase mr-3" />
                    <div className="block w-48 h-8 py-2 px-4 bg-gray-200 text-white rounded" />
                </div>
            </div>
        </div>
    );
}

export default CompleteSkeleton;
