import React, { PropsWithChildren } from "react";
import Navigation from "@/components/Navigation";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}
