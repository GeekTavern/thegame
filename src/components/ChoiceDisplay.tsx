import { Dispatch, SetStateAction } from "react"
import { getStoryPoint } from "../api/api"
import { StoryPoint } from "../api/models"
import "./choiceDisplay.css"

interface ChoiceDisplayProps {
    storyPoint: StoryPoint
    setStoryPoint: Function
}

export const ChoiceDisplay = ({storyPoint, setStoryPoint}: ChoiceDisplayProps) => {
    const handleClick = async (id: number) => {
        const storyPoint = await getStoryPoint(id)
        setStoryPoint(storyPoint)
    }


    if (!storyPoint) {
        return <div>Error</div>
    }

    return <div className="choice-container">
        {
            storyPoint.choices.map((choice) => {
                return <button key={choice.id} onClick={() => handleClick(choice.destination)}>{choice.choice}</button>
            })
        }
    </div>
}