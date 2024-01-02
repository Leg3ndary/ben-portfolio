export type ProjectPreviewProps = {
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    title: string;
    sub: string;
    description: string;
    icons: [
        {
            link: string;
            image: string;
            alt: string;
            width?: number;
            height?: number;
        }
    ];
    color: string;
};
