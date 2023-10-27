import "./textDisplay.css"

interface TextDisplayProps {
    text: string
}

export const TextDisplay = ({text}: TextDisplayProps) => {
    return <div className="text-container">{text}</div>
}