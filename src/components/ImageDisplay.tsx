import "./imageDisplay.css"

interface ImageDisplayProps {
    image: string
}

export const ImageDisplay = ({image}: ImageDisplayProps) => {
    return <div className="image-container">{image}</div>
}