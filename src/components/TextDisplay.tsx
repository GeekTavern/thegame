import { StoryPoint } from "../api/models"
import "./textDisplay.css"

interface TextDisplayProps {
    storyPoint: StoryPoint
}

export const TextDisplay = ({storyPoint}: TextDisplayProps) => {
    return <div className="text-container">{storyPoint?.story.text}</div>
}