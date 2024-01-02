import { StaticImageData } from "next/image";

export type ProjectPreviewProps = {
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
    };
    title: string;
    sub: string;
    description: JSX.Element;
    icons: {
        link: string;
        image: string;
        alt: string;
        width?: number;
        height?: number;
    }[];
    color: string;
};
