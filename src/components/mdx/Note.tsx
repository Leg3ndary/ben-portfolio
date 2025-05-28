import React from "react";

export default function Note({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-4 p-4 bg-blue-200 border-l-4 border-blue-400 rounded">
            <div className="font-bold mb-2 flex items-center">
                <span className="mr-2">ℹ️</span> Note
            </div>
            <div>{children}</div>
        </div>
    );
}
