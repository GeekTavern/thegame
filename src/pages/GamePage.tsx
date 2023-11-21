import { Dispatch, SetStateAction } from "react"
import { StoryPoint } from "../api/models"
import { ChoiceDisplay } from "../components/ChoiceDisplay"
import { ImageDisplay } from "../components/ImageDisplay"
import { TextDisplay } from "../components/TextDisplay"
import "./gamePage.css"

interface GamePageProps {
    storyPoint: StoryPoint
    setStoryPoint: Function
}

export const GamePage = ({storyPoint, setStoryPoint}: GamePageProps ) => {
    return <div className="game-page-container">
        <ImageDisplay storyPoint = {storyPoint}/>
        <TextDisplay storyPoint = {storyPoint}/>
        <ChoiceDisplay storyPoint = {storyPoint} setStoryPoint={setStoryPoint}/>
    </div>
} 