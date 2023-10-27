import "./choiceDisplay.css"

interface ChoiceDisplayProps {
    choices: string[]
}

export const ChoiceDisplay = ({choices}: ChoiceDisplayProps) => {
    return <div className="choice-container">
        {
            choices.map((choice) => {
                return <button>{choice}</button>
            })
        }
    </div>
}