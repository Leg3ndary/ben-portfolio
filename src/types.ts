import { StaticImageData } from "next/image";

export type ProjectPreviewProps = {
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
        priority?: boolean;
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
    index: number;
};

export type AwardPreviewProps = {
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
        priority?: boolean;
    };
    competition: string;
    award: string;
    description: JSX.Element;
    date: string;
    icons: {
        link: string;
        image: string;
        alt: string;
        width?: number;
        height?: number;
    }[];
    color: string;
    index: number;
};