const Complete = () => {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="h-40 bg-white"></div>
            <div className="flex flex-row justify-end mb-4">
                <button className="block w-auto py-1.5 px-4 bg-white border border-2 border-blue-900 text-blue-800 rounded uppercase font-medium self-end mr-3">Back</button>
                <button className="block w-auto py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium">Complete & Download</button>
            </div>
        </div>
    );
}

export default Complete;