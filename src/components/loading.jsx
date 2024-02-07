import React from "react";

const Loading = () => {
    return (
        <>
        <div className="h-screen flex gap-2 items-center justify-center">
            <div className="absolute animate-spin w-32 h-32 border-8 border-gray-300 border-r-orange-600 rounded-full "></div>
            <div className="relative animate-spin w-28 h-28 border-8 border-gray-300 border-t-orange-500 rounded-full "></div>
        </div>
        </>
    );
};

export default Loading;