import React from "react";

const Loading = () => {
    return (
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="animate-spin w-32 h-32 border-8 border-gray-300 border-t-orange-600 rounded-full "></div>
        </div>
        </>
    );
};

export default Loading;