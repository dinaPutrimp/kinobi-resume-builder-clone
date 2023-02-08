/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
function CardSkeleton() {
    return (
        <div className="bg-white w-40 p-2 h-48 shadow">
            <div className="bg-white">
                <div className="flex justify-center bg-gray-200">
                    <div className="h-24 w-16" />
                </div>
                <div className="bg-slate-100 h-20 p-2 rounded flex justify-between">
                    <div>
                        <div className="h-3 w-20 bg-gray-200 mb-5" />
                        <div className="h-2 w-28 bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSkeleton;
