import React from "react";
import ImageWithZoom from "react-medium-image-zoom";

interface ImageProps {
    alt: string;
    className: string;
    loading: string;
    src: string;
    title: string;
}

export const Image = (props: ImageProps): React.ReactElement => {
    return (
        <ImageWithZoom
            image={props}
            zoomImage={props} />
    );
}
