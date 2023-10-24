import Image from "next/image";

type ProjectHoverableProps = {
    link: string;
    image: string;
    alt: string;
    width?: number;
    height?: number;
};

export default function ProjectHoverable({
    link,
    image,
    alt,
    width = 45,
    height = 45,
}: ProjectHoverableProps) {
    return (
        <a href={link} target="_blank">
            <Image
                className="transition-transform duration-200 ease-in-out animate-fade-in hover:scale-125"
                src={image}
                width={width}
                height={height}
                alt={alt}
            />
        </a>
    );
}
