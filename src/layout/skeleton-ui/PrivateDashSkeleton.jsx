/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */

import CardSkeleton from './cardSkeleton';

/* eslint-disable indent */
function PrivateDashboardSkeleton() {
    return (
        <div className="p-6 max-w-full">
            <div className="animate-pulse">
                <div className="mb-20">
                    <div className="h-6 w-32 bg-gray-200 mb-6"></div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </div>
                </div>
                <div>
                    <div className="h-6 w-32 bg-gray-200 mb-6"></div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivateDashboardSkeleton;
