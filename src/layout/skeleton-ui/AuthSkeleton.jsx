/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
function AuthSkeleton() {
    return (
        <div className="w-full">
            <div className="animate-pulse grid gap-5 p-6 md:grid-cols-2">
                <div className="w-full p-10">
                    <div className="h-8 w-full bg-gray-200 mb-6 rounded" />
                    <div className="h-8 w-full bg-gray-200 mb-6 rounded" />
                    <div className="h-8 w-full bg-gray-200 mb-6 rounded" />
                    <div className="h-8 w-full bg-gray-200 rounded" />
                </div>
                <div className="w-full h-full bg-gray-200 rounded" />
            </div>
        </div>
    );
}

export default AuthSkeleton;
